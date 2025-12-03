# PowerShell script to batch update ALL remaining components with AOS
# This script will handle complex patterns by removing data-aos attributes

$files = @(
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Itinerarios\BeneficiosItinerarios.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Itinerarios\ContenidoItinerarios.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Itinerarios\ItinerariosHero.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Itinerarios\ItinerarioHero.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Itinerarios\CaracteristicasItinerarios.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Reutilizable\DetallesNoContiene.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Reutilizable\ItinerariosTemplate.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\Reutilizable\TripDetails.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\MediaFeature\MediaFeature.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\Componentes\Sections\GraciasComp\HeroGracias.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Nosotros\Nosotros.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Faqs\Faqs.jsx"
)

Write-Host "Batch updating remaining files..."
$count = 0

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing: $(Split-Path $file -Leaf)"
        
        $content = Get-Content $file -Raw
        
        # Remove AOS imports
        $content = $content -replace "import AOS from 'aos';\r?\n", ""
        $content = $content -replace "import 'aos/dist/aos.css';\r?\n", ""
        
        # Remove AOS.init() calls
        $content = $content -replace "(?s)AOS\.init\([^)]*\);?\r?\n?\s*", ""
        
        # Remove various data-aos attribute patterns
        $content = $content -replace '\s*data-aos="[^"]*"\s*', ' '
        $content = $content -replace '\s*data-aos=\{[^\}]*\}\s*', ' '
        $content = $content -replace '\s*data-aos-delay=\{[^\}]*\}\s*', ' '
        $content = $content -replace '\s*data-aos-delay="[^"]*"\s*', ' '
        $content = $content -replace '\s*data-aos-duration="[^"]*"\s*', ' '
        $content = $content -replace '\s*data-aos-offset="[^"]*"\s*', ' '
        $content = $content -replace '\s*suppressHydrationWarning\s*', ' '
        
        # Clean up extra spaces and newlines
        $content = $content -replace '\s{3,}', '  '
        
        Set-Content -Path $file -Value $content -NoNewline
        $count++
        Write-Host "  ✓ Updated"
    } else {
        Write-Host "  ✗ File not found: $file"
    }
}

Write-Host "`n✅ Successfully updated $count files!"
Write-Host "All AOS dependencies removed from components."
