# PowerShell script to add 'use client' directive to all blog articles

$blogArticles = @(
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\SaludarBlog\SaludarBlog.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\VisadoJapon\VisadoJapon.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\ViajarSeguro\ViajarSeguro.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\ViajeSinJapones\ViajeSinJapones.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\InternetJapon\InternetJapon.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\OnsenTatuajes\OnsenTatuajes.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\FormaPago\FormaPago.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\EpocaViajarJapon\EpocaViajarJapon.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\ComoComportarse\ComoComportarse.jsx",
    "c:\Users\apps1\Desktop\Prestige-Japan-master\src\pages\Blog\Articulos\ComprarJapon\ComprarJapon.jsx"
)

Write-Host "Adding 'use client' directive to blog articles..."
$count = 0

foreach ($file in $blogArticles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Check if 'use client' is already present
        if ($content -notmatch "^'use client';") {
            # Add 'use client' at the beginning
            $content = "'use client';`r`n`r`n" + $content
            Set-Content -Path $file -Value $content -NoNewline
            $count++
            Write-Host "  ✓ Updated: $(Split-Path $file -Leaf)"
        }
        else {
            Write-Host "  - Already has 'use client': $(Split-Path $file -Leaf)"
        }
    }
}

Write-Host "`n✅ Successfully updated $count files!"
