# PowerShell script to batch update remaining section/itinerary components
# Replaces AOS with GSAP

$components = @(
    @{
        file = "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Itinerarios\BeneficiosItinerarios.jsx"
        pattern = 'data-aos="fade-right"'
        replacement = ''
        addImport = $true
        addHook = 'fade-right'
    },
    @{
        file = "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Itinerarios\ContenidoItinerarios.jsx"
        pattern = 'data-aos={index % 2 === 1 \? ''fade-left'' : ''fade-right''} data-aos-delay={index \* 10} data-aos-duration="100"'
        replacement = 'ref={animRef}'
        addImport = $true
        addHook = 'conditional'
    },
    @{
        file = "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Reutilizable\DetallesNoContiene.jsx"
        pattern = 'data-aos="fade-up" data-aos-delay={index \* 10} data-aos-duration="100"'
        replacement = 'ref={animRef}'
        addImport = $true
        addHook = 'fade-up-indexed'
    }
)

Write-Host "Batch updating remaining itinerary/section components..."
Write-Host "Note: Complex patterns require manual editing - marking for review"
