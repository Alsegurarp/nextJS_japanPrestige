# PowerShell script to batch update blog article files
# Replaces AOS with GSAP in blog article Card components

$blogFiles = @(
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

foreach ($file in $blogFiles) {
    Write-Host "Processing: $file"
    
    $content = Get-Content $file -Raw
    
    # Add import for useScrollAnimation (after other imports)
    $content = $content -replace "(import styles from.*;\r?\n)", "`$1import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';`r`n"
    
    # Replace function Card signature and add hook
    $content = $content -replace "function Card\(\{ image, index, altText, title, subtitle, dias, text\}\) \{\r?\n\r?\n", @"
function Card({ image, index, altText, title, subtitle, dias, text}) {
  const ref = useScrollAnimation({
    animation: index % 2 === 1 ? 'fade-left' : 'fade-right',
    delay: index * 200,
    duration: 1
  });

"@
    
    # Replace data-aos on card_text div
    $content = $content -replace '<div className=\{styles\.card_text\} data-aos=\{index % 2 === 1 \? ''fade-left'' : ''fade-right''\} data-aos-delay=\{index \* 200\} data-aos-duration="1000">', '<div ref={ref} className={styles.card_text}>'
    
    Set-Content -Path $file -Value $content -NoNewline
    Write-Host "Updated: $file"
}

Write-Host "`nAll blog articles updated successfully!"
