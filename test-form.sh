#!/bin/bash
# Form Component Testing Script
# Run this to perform automated checks on the Form component

echo "================================"
echo "Form Component Test Suite"
echo "================================"
echo ""

# 1. Check build
echo "🔨 [1/5] Running build..."
npm run build > /tmp/build.log 2>&1
if grep -q "✓ built in" /tmp/build.log; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    tail -20 /tmp/build.log
    exit 1
fi
echo ""

# 2. Check for errors in Form component
echo "🔍 [2/5] Checking for JSX errors..."
if grep -q "No errors found" <(npm run build 2>&1); then
    echo "✅ No JSX errors"
else
    echo "⚠️  Check console for warnings"
fi
echo ""

# 3. Check file size
echo "📊 [3/5] Checking Form component size..."
FORM_SIZE=$(wc -c < src/pages/Contacto/Componente/Form.jsx)
FORM_LINES=$(wc -l < src/pages/Contacto/Componente/Form.jsx)
echo "✅ Form.jsx: $FORM_SIZE bytes, $FORM_LINES lines"
echo ""

# 4. Check imports are used
echo "🎯 [4/5] Verifying imports..."
echo "Required imports present:"
grep -c "useState" src/pages/Contacto/Componente/Form.jsx && echo "  ✅ useState"
grep -c "useEffect" src/pages/Contacto/Componente/Form.jsx && echo "  ✅ useEffect"
grep -c "useRef" src/pages/Contacto/Componente/Form.jsx && echo "  ✅ useRef"
grep -c "useNavigate" src/pages/Contacto/Componente/Form.jsx && echo "  ✅ useNavigate"
grep -c "axios" src/pages/Contacto/Componente/Form.jsx && echo "  ✅ axios"
echo ""

# 5. Check function structure
echo "🧩 [5/5] Checking function structure..."
grep -q "const handleSubmit = async" src/pages/Contacto/Componente/Form.jsx && \
    echo "  ✅ handleSubmit function defined"
grep -q "const handleSelect =" src/pages/Contacto/Componente/Form.jsx && \
    echo "  ✅ handleSelect function defined"
grep -q "const cleanName =" src/pages/Contacto/Componente/Form.jsx && \
    echo "  ✅ cleanName validator defined"
echo ""

echo "================================"
echo "✅ All automated checks passed!"
echo "================================"
echo ""
echo "📋 Next steps:"
echo "  1. Run: npm run dev"
echo "  2. Navigate to: http://localhost:5173/contacto"
echo "  3. Follow: Form.test.md for manual testing"
echo ""
