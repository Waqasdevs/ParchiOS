const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'src', 'app');

// Source image: User-approved Concept 1 (Origami Parchi Monogram)
const srcImage = path.join(publicDir, 'branding', 'whatsapp-profile-option1.jpg');
const officialPng = path.join(publicDir, 'branding', 'parchios-logo-official.png');

const vectorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <rect id="bg" width="1024" height="1024" fill="#0E0E0E"/>
  </defs>
  <use href="#bg"/>
  <g id="parchios-logo">
    <rect x="307" y="255" width="154" height="513" fill="#F5EEDC"/>
    <polygon points="307,255 556,255 556,360 461,360 461,255" fill="#F5EEDC"/>
    <polygon points="556,255 660,360 556,360" fill="#E4DAC7"/>
    <path d="M461,614 L640,614 C700,570 717,525 717,480 C717,420 690,375 660,360 L556,360 L461,455 Z" fill="#F8F8F8"/>
    <polygon points="461,360 660,360 461,560" fill="#0E0E0E"/>
    <circle cx="683" cy="289" r="34" fill="#D2261A"/>
  </g>
</svg>`;

async function updateAllIcons() {
  console.log('Generating website logo, app icons, and favicons from approved Concept 1...');

  // 1. Update public/icon.svg with exact approved vector artwork
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), vectorSvg);
  console.log('✓ Updated public/icon.svg');

  const baseSrc = fs.existsSync(officialPng) ? officialPng : srcImage;

  // 2. Generate public/icon-512.png
  await sharp(baseSrc)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Updated public/icon-512.png');

  // 3. Generate public/icon-192.png
  await sharp(baseSrc)
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Updated public/icon-192.png');

  // 4. Generate public/apple-touch-icon.png (180x180)
  await sharp(baseSrc)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Updated public/apple-touch-icon.png');

  // 5. Generate 32x32 & 48x48 Favicons
  // Generate 32x32 PNG for favicon
  const fav32Buffer = await sharp(baseSrc).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), fav32Buffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), fav32Buffer);
  console.log('✓ Updated public/favicon.ico & src/app/favicon.ico');

  // 6. Generate Next.js App Router icon.png (64x64) and apple-icon.png (180x180)
  await sharp(baseSrc)
    .resize(64, 64)
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  await sharp(baseSrc)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('✓ Created src/app/icon.png & src/app/apple-icon.png');

  console.log('All favicon and logo icons successfully generated!');
}

updateAllIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
