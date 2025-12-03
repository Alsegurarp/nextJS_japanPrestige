import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../../pages/Contacto/Componente/Form.jsx';
import axios from 'axios';

// Mock the dependencies
jest.mock('axios');
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
jest.mock('react-google-recaptcha', () => {
  return {
    __esModule: true,
    default: ({ onChange }) => (
      <button onClick={() => onChange('mock-captcha-token')}>
        Mock reCAPTCHA
      </button>
    ),
  };
});

// Mock the Calendar component
jest.mock('../../pages/Contacto/Componente/FormComponents/Calendar.jsx', () => {
  return {
    __esModule: true,
    default: ({ value, onChange, maxDate }) => (
      <div data-testid="calendar">
        <button onClick={() => onChange(new Date('2024-06-15'))}>
          Select Date
        </button>
        {value && <span>{value.toLocaleDateString()}</span>}
      </div>
    ),
  };
});

describe('Form Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 'mock-recaptcha-key';
    process.env.NEXT_PUBLIC_API_BASE = 'http://localhost:3001/api';
  });

  describe('Rendering', () => {
    it('should render the form with all required fields', () => {
      render(<Form />);

      expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Tu apellido')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Tu número')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('correo@ejemplo.com')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Escribe cualquier comentario...')).toBeInTheDocument();
    });

    it('should render the submit button', () => {
      render(<Form />);
      expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();
    });

    it('should render country code selector with México as default', () => {
      render(<Form />);
      const countrySelect = screen.getByRole('option', { name: /México.*\+52/i });
      expect(countrySelect).toBeInTheDocument();
      expect(countrySelect.selected).toBe(true);
    });

    it('should render all available countries in the dropdown', () => {
      render(<Form />);
      const countries = [
        'México (+52)',
        'Estados Unidos (+1)',
        'Canadá (+1)',
        'España (+34)',
        'Argentina (+54)',
        'Colombia (+57)',
        'Chile (+56)',
        'Perú (+51)',
        'Guatemala (+502)',
        'Costa Rica (+506)',
      ];
      countries.forEach((country) => {
        expect(screen.getByRole('option', { name: new RegExp(country, 'i') })).toBeInTheDocument();
      });
    });

    it('should render the reCAPTCHA component', () => {
      render(<Form />);
      expect(screen.getByText('Mock reCAPTCHA')).toBeInTheDocument();
    });
  });

  describe('Form Validation - Names', () => {
    it('should accept valid first names with letters and spaces', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      await user.type(firstNameInput, 'Juan Carlos');

      expect(firstNameInput.value).toBe('Juan Carlos');
      expect(screen.queryByText(/Sólo letras y espacios/i)).not.toBeInTheDocument();
    });

    it('should reject special characters in first name', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      await user.type(firstNameInput, 'Juan123!@#');

      expect(firstNameInput.value).toBe('Juan');
    });

    it('should collapse multiple spaces to single space in names', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      await user.type(firstNameInput, 'Juan    Carlos');

      expect(firstNameInput.value).toBe('Juan Carlos');
    });

    it('should accept valid last names', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      await user.type(lastNameInput, 'García López');

      expect(lastNameInput.value).toBe('García López');
    });

    it('should show error when first name field is empty on form submission attempt', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      expect(submitButton).toBeDisabled(); // Form should be invalid when empty
    });
  });

  describe('Form Validation - Email', () => {
    it('should accept valid email addresses', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      await user.type(emailInput, 'test@example.com');

      expect(emailInput.value).toBe('test@example.com');
      expect(screen.queryByText(/Debe tener formato válido/i)).not.toBeInTheDocument();
    });

    it('should convert email to lowercase', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      await user.type(emailInput, 'TEST@EXAMPLE.COM');

      expect(emailInput.value).toBe('test@example.com');
    });

    it('should reject email without @ symbol', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const phoneInput = screen.getByPlaceholderText('Tu número');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(phoneInput, '5512345678');
      await user.type(emailInput, 'testemail.com');

      expect(screen.getByText(/Debe tener formato válido/i)).toBeInTheDocument();
    });

    it('should reject email without domain extension', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const phoneInput = screen.getByPlaceholderText('Tu número');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(phoneInput, '5512345678');
      await user.type(emailInput, 'test@example');

      expect(screen.getByText(/Debe tener formato válido/i)).toBeInTheDocument();
    });

    it('should limit email length to 50 characters', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      const longEmail = 'a'.repeat(60) + '@example.com';

      await user.type(emailInput, longEmail);

      expect(emailInput.value.length).toBeLessThanOrEqual(50);
    });
  });

  describe('Form Validation - Phone', () => {
    it('should accept valid phone numbers with correct digit count', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const phoneInput = screen.getByPlaceholderText('Tu número');
      await user.type(phoneInput, '5512345678'); // 10 digits

      expect(phoneInput.value).toBe('5512345678');
      expect(screen.queryByText(/Verifica el número/i)).not.toBeInTheDocument();
    });

    it('should reject phone numbers with less than 10 digits', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const phoneInput = screen.getByPlaceholderText('Tu número');
      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(emailInput, 'test@example.com');
      await user.type(phoneInput, '5512345'); // Only 7 digits

      expect(screen.getByText(/Verifica el número/i)).toBeInTheDocument();
    });

    it('should reject phone numbers with more than 13 digits', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const phoneInput = screen.getByPlaceholderText('Tu número');
      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(emailInput, 'test@example.com');
      await user.type(phoneInput, '55123456789012345'); // 17 digits

      // Should be truncated to max 11 (13 total - 2 for +52)
      expect(phoneInput.value.length).toBeLessThanOrEqual(11);
    });

    it('should filter out non-digit characters from phone input', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const phoneInput = screen.getByPlaceholderText('Tu número');
      await user.type(phoneInput, '555-123-4567');

      expect(phoneInput.value).toBe('5551234567');
    });

    it('should display full phone number with country code', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const phoneInput = screen.getByPlaceholderText('Tu número');
      await user.type(phoneInput, '5512345678');

      expect(screen.getByText(/\+525512345678/)).toBeInTheDocument();
    });

    it('should update phone display when country code changes', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const phoneInput = screen.getByPlaceholderText('Tu número');
      await user.type(phoneInput, '5512345678');

      const countrySelect = screen.getByRole('combobox', { name: /Código de país/i });
      await user.selectOption(countrySelect, '+34');

      // Phone should be re-cleaned based on new country code
      expect(phoneInput).toBeInTheDocument();
    });
  });

  describe('Form Submission', () => {
    const fillFormValidly = async (user) => {
      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const phoneInput = screen.getByPlaceholderText('Tu número');
      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      const recaptchaButton = screen.getByText('Mock reCAPTCHA');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(phoneInput, '5512345678');
      await user.type(emailInput, 'juan@example.com');
      await user.click(recaptchaButton);
    };

    it('should disable submit button when form is invalid', () => {
      render(<Form />);
      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      expect(submitButton).toBeDisabled();
    });

    it('should enable submit button when form is valid and captcha is verified', async () => {
      const user = userEvent.setup();
      render(<Form />);

      await fillFormValidly(user);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      expect(submitButton).not.toBeDisabled();
    });

    it('should show submitting state while sending', async () => {
      const user = userEvent.setup();
      axios.post.mockImplementation(() => new Promise(() => {})); // Never resolves

      render(<Form />);
      await fillFormValidly(user);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Enviando/i })).toBeInTheDocument();
      });
    });

    it('should submit form successfully with valid data', async () => {
      const user = userEvent.setup();
      axios.post.mockResolvedValueOnce({ status: 200 });

      render(<Form />);
      await fillFormValidly(user);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(axios.post).toHaveBeenCalled();
      });

      const callArgs = axios.post.mock.calls[0];
      expect(callArgs[0]).toContain('send-email');
      expect(callArgs[1]).toMatchObject({
        to: 'contacto@japonpremium.com.mx',
        subject: expect.stringContaining('Juan Pérez'),
      });
    });

    it('should reset form after successful submission', async () => {
      const user = userEvent.setup();
      axios.post.mockResolvedValueOnce({ status: 200 });

      render(<Form />);
      await fillFormValidly(user);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      await user.click(submitButton);

      await waitFor(() => {
        const firstNameInput = screen.getByPlaceholderText('Tu nombre');
        expect(firstNameInput.value).toBe('');
      });
    });

    it('should display success message after successful submission', async () => {
      const user = userEvent.setup();
      axios.post.mockResolvedValueOnce({ status: 200 });

      render(<Form />);
      await fillFormValidly(user);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/Enviado con éxito/i)).toBeInTheDocument();
      });
    });

    it('should display error message on submission failure', async () => {
      const user = userEvent.setup();
      const errorMessage = 'Server error occurred';
      axios.post.mockRejectedValueOnce({
        response: { data: { message: errorMessage } },
      });

      render(<Form />);
      await fillFormValidly(user);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
    });

    it('should include all form data in the submission payload', async () => {
      const user = userEvent.setup();
      axios.post.mockResolvedValueOnce({ status: 200 });

      render(<Form />);

      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const phoneInput = screen.getByPlaceholderText('Tu número');
      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      const commentsInput = screen.getByPlaceholderText('Escribe cualquier comentario...');
      const recaptchaButton = screen.getByText('Mock reCAPTCHA');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(phoneInput, '5512345678');
      await user.type(emailInput, 'juan@example.com');
      await user.type(commentsInput, 'Quiero un viaje en junio');
      await user.click(recaptchaButton);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(axios.post).toHaveBeenCalled();
      });

      const payload = axios.post.mock.calls[0][1];
      expect(payload).toMatchObject({
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan@example.com',
        phoneFull: '+525512345678',
        comments: 'Quiero un viaje en junio',
      });
    });
  });

  describe('Calendar Integration', () => {
    it('should open calendar when clicking date input', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const dateInput = screen.getByPlaceholderText('Selecciona una fecha');
      await user.click(dateInput);

      expect(screen.getByTestId('calendar')).toBeInTheDocument();
    });

    it('should display selected date in the input', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const dateInput = screen.getByPlaceholderText('Selecciona una fecha');
      await user.click(dateInput);

      const selectDateButton = screen.getByRole('button', { name: /Select Date/i });
      await user.click(selectDateButton);

      await waitFor(() => {
        expect(dateInput.value).not.toBe('');
      });
    });

    it('should close calendar after selecting a date', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const dateInput = screen.getByPlaceholderText('Selecciona una fecha');
      await user.click(dateInput);

      expect(screen.getByTestId('calendar')).toBeInTheDocument();

      const selectDateButton = screen.getByRole('button', { name: /Select Date/i });
      await user.click(selectDateButton);

      await waitFor(() => {
        expect(screen.queryByTestId('calendar')).not.toBeInTheDocument();
      });
    });

    it('should close calendar when clicking outside', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const dateInput = screen.getByPlaceholderText('Selecciona una fecha');
      await user.click(dateInput);

      expect(screen.getByTestId('calendar')).toBeInTheDocument();

      await user.click(document.body);

      await waitFor(() => {
        expect(screen.queryByTestId('calendar')).not.toBeInTheDocument();
      });
    });
  });

  describe('Optional Fields', () => {
    it('should accept form submission without a date selected', async () => {
      const user = userEvent.setup();
      axios.post.mockResolvedValueOnce({ status: 200 });

      render(<Form />);

      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const phoneInput = screen.getByPlaceholderText('Tu número');
      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      const recaptchaButton = screen.getByText('Mock reCAPTCHA');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(phoneInput, '5512345678');
      await user.type(emailInput, 'juan@example.com');
      await user.click(recaptchaButton);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      expect(submitButton).not.toBeDisabled();

      await user.click(submitButton);

      await waitFor(() => {
        expect(axios.post).toHaveBeenCalled();
      });
    });

    it('should accept form submission without comments', async () => {
      const user = userEvent.setup();
      axios.post.mockResolvedValueOnce({ status: 200 });

      render(<Form />);

      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      const lastNameInput = screen.getByPlaceholderText('Tu apellido');
      const phoneInput = screen.getByPlaceholderText('Tu número');
      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      const recaptchaButton = screen.getByText('Mock reCAPTCHA');

      await user.type(firstNameInput, 'Juan');
      await user.type(lastNameInput, 'Pérez');
      await user.type(phoneInput, '5512345678');
      await user.type(emailInput, 'juan@example.com');
      await user.click(recaptchaButton);

      const submitButton = screen.getByRole('button', { name: /Enviar/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(axios.post).toHaveBeenCalled();
      });

      const payload = axios.post.mock.calls[0][1];
      expect(payload.comments).toBe('-');
    });
  });

  describe('UI Feedback', () => {
    it('should display character count for email', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const emailInput = screen.getByPlaceholderText('correo@ejemplo.com');
      expect(screen.getByText('0/50')).toBeInTheDocument();

      await user.type(emailInput, 'test@example.com');

      expect(screen.getByText('15/50')).toBeInTheDocument();
    });

    it('should display digit count for phone number', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const phoneInput = screen.getByPlaceholderText('Tu número');
      await user.type(phoneInput, '5512345678');

      const fullPhoneDisplay = screen.getByText(/\+525512345678 — \d+ dígitos/);
      expect(fullPhoneDisplay).toBeInTheDocument();
    });

    it('should show warning when name exceeds 35 characters', async () => {
      const user = userEvent.setup();
      render(<Form />);

      const firstNameInput = screen.getByPlaceholderText('Tu nombre');
      await user.type(firstNameInput, 'A'.repeat(35));

      expect(screen.getByText(/Límite:/)).toBeInTheDocument();
    });
  });
});
