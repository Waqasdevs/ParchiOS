const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'src', 'app');

// Source image: User-approved Concept 1 (Origami Parchi Monogram)
const srcImage = path.join(publicDir, 'branding', 'whatsapp-profile-option1.jpg');
const srcSvg = path.join(publicDir, 'branding', 'parchios-icon-concept-a.svg');

async function updateAllIcons() {
  console.log('Generating website logo, app icons, and favicons from Concept 1...');

  // 1. Update public/icon.svg
  if (fs.existsSync(srcSvg)) {
    fs.copyFileSync(srcSvg, path.join(publicDir, 'icon.svg'));
    console.log('✓ Updated public/icon.svg');
  }

  // 2. Generate public/icon-512.png
  await sharp(srcImage)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Updated public/icon-512.png');

  // 3. Generate public/icon-192.png
  await sharp(srcImage)
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Updated public/icon-192.png');

  // 4. Generate public/apple-touch-icon.png (180x180)
  await sharp(srcImage)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Updated public/apple-touch-icon.png');

  // 5. Generate 32x32 & 48x48 Favicons
  // Generate 32x32 PNG for favicon
  const fav32Buffer = await sharp(srcImage).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), fav32Buffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), fav32Buffer);
  console.log('✓ Updated public/favicon.ico & src/app/favicon.ico');

  // 6. Generate Next.js App Router icon.png (64x64) and apple-icon.png (180x180)
  await sharp(srcImage)
    .resize(64, 64)
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  await sharp(srcImage)
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
