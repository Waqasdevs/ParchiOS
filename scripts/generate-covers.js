const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'branding');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const artifactDir = path.join('C:', 'Users', 'waqas', '.gemini', 'antigravity', 'brain', '9b896fd6-71e4-47e2-a91c-0808b6b95bd7');

// =========================================================================
// COVER OPTION 1: "The Authority Branded Banner" (1024 x 576)
// Deep Ink Black with Warm Ivory Typography, Rush Red Accent, and Value Badges.
// Top half has clear, punchy positioning. Bottom center is cleanly dark for the circular avatar.
// =========================================================================
const svgCover1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 576" width="1024" height="576">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="coverBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181511"/>
      <stop offset="50%" stop-color="#12100D"/>
      <stop offset="100%" stop-color="#0A0907"/>
    </linearGradient>

    <!-- Subtle Radial Glow on Top Left -->
    <radialGradient id="topGlow" cx="20%" cy="15%" r="60%">
      <stop offset="0%" stop-color="#D92B1F" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Grid Pattern Overlay -->
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.02" stroke-width="1"/>
    </pattern>

    <!-- Bottom Center Vignette to seamlessly blend with circular profile picture -->
    <radialGradient id="avatarBackdrop" cx="50%" cy="100%" r="45%">
      <stop offset="0%" stop-color="#0A0907" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0A0907" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Base Fill -->
  <rect width="1024" height="576" fill="url(#coverBg1)"/>
  <rect width="1024" height="576" fill="url(#topGlow)"/>
  <rect width="1024" height="576" fill="url(#gridPattern)"/>

  <!-- Left Accent Vertical Glow Stripe -->
  <rect x="0" y="0" width="4" height="576" fill="#D92B1F"/>

  <!-- Top Metadata Eyebrow -->
  <g transform="translate(64, 60)">
    <circle cx="6" cy="6" r="4" fill="#D92B1F"/>
    <text x="20" y="10" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#C5BCAD" text-transform="uppercase">
      BUILT FOR PAKISTANI FAST-FOOD &amp; CAFES 🇵🇰
    </text>
  </g>

  <!-- Main Headline (Upper Half, 100% Unobstructed by Avatar) -->
  <g transform="translate(64, 130)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="#F6F0E4" letter-spacing="-1">
      5-Second Digital Parchi System.
    </text>
    <text y="48" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#A89E8E" letter-spacing="-0.3">
      Kagaz aur register ko chhorein. Apne restaurant ko autopilot pe shift karein.
    </text>
  </g>

  <!-- Feature Pills / Highlights (Flanking Left and Right of Avatar Safe-Zone) -->
  <!-- Left Side Badges -->
  <g transform="translate(64, 250)">
    <!-- Pill 1: 5-Sec POS -->
    <rect width="190" height="38" rx="8" fill="#FFFFFF" fill-opacity="0.05" stroke="#FFFFFF" stroke-opacity="0.1"/>
    <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#F6F0E4">
      ⚡ 5-Sec Counter POS
    </text>

    <!-- Pill 2: Instant KOT -->
    <g transform="translate(0, 50)">
      <rect width="190" height="38" rx="8" fill="#FFFFFF" fill-opacity="0.05" stroke="#FFFFFF" stroke-opacity="0.1"/>
      <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#F6F0E4">
        🧾 Instant Kitchen KOT
      </text>
    </g>

    <!-- Pill 3: 100% Offline -->
    <g transform="translate(0, 100)">
      <rect width="190" height="38" rx="8" fill="#FFFFFF" fill-opacity="0.05" stroke="#FFFFFF" stroke-opacity="0.1"/>
      <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#F6F0E4">
        🔌 100% Offline Ready
      </text>
    </g>
  </g>

  <!-- Right Side Badges -->
  <g transform="translate(770, 250)">
    <!-- Pill 4: Live Phone Sales -->
    <rect width="190" height="38" rx="8" fill="#FFFFFF" fill-opacity="0.05" stroke="#FFFFFF" stroke-opacity="0.1"/>
    <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#F6F0E4">
      📱 Owner Phone Sales
    </text>

    <!-- Pill 5: Zero Commission -->
    <g transform="translate(0, 50)">
      <rect width="190" height="38" rx="8" fill="#FFFFFF" fill-opacity="0.05" stroke="#FFFFFF" stroke-opacity="0.1"/>
      <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#52D172">
        ✓ Zero % Commission
      </text>
    </g>

    <!-- Pill 6: 45,000 PKR One-Time -->
    <g transform="translate(0, 100)">
      <rect width="190" height="38" rx="8" fill="#D92B1F" fill-opacity="0.15" stroke="#D92B1F" stroke-opacity="0.4"/>
      <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FF6B60">
        ₨ 45,000 One-Time
      </text>
    </g>
  </g>

  <!-- Avatar Safe Area Backdrop Vignette (Ensures clean circle framing at bottom center) -->
  <rect x="250" y="300" width="524" height="276" fill="url(#avatarBackdrop)"/>

  <!-- Trust Tagline above the Avatar -->
  <g transform="translate(512, 370)">
    <text text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#756C5F" text-transform="uppercase">
      TRUSTED BY FAST-FOOD OPERATORS IN PAKISTAN
    </text>
  </g>
</svg>`;

// =========================================================================
// COVER OPTION 2: "Minimalist Modern Typography Edition" (Clean Luxury Dark)
// Ultra-sleek, typographic emphasis with large brand statement.
// =========================================================================
const svgCover2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 576" width="1024" height="576">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16130F"/>
      <stop offset="100%" stop-color="#0C0A08"/>
    </linearGradient>
    <radialGradient id="centerGlow" cx="50%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#26211A"/>
      <stop offset="100%" stop-color="#0C0A08"/>
    </radialGradient>
  </defs>

  <rect width="1024" height="576" fill="url(#bgGrad2)"/>
  <rect width="1024" height="576" fill="url(#centerGlow)"/>

  <!-- Subtle Top Line Accent -->
  <line x1="64" y1="56" x2="960" y2="56" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="1"/>

  <g transform="translate(512, 130)">
    <!-- Small Brand Callout -->
    <text text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="3" fill="#D92B1F" text-transform="uppercase">
      PARCHIOS • RESTAURANT OS
    </text>

    <!-- Huge Elegant Display Title -->
    <text y="70" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" fill="#F6F0E4" letter-spacing="-1.5">
      Counter POS. Kitchen KOT.
    </text>
    
    <!-- Secondary Subtitle -->
    <text y="125" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#A89E8E" letter-spacing="-0.2">
      Zero Monthly Fees • 100% Accurate Closing Cash • 24h Setup
    </text>
  </g>

  <!-- Left & Right Metric Anchors -->
  <g transform="translate(90, 310)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="800" fill="#F6F0E4">5 Sec</text>
    <text y="24" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#756C5F" text-transform="uppercase">Counter Order Speed</text>
  </g>

  <g transform="translate(790, 310)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="800" fill="#52D172">0% Comm.</text>
    <text y="24" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#756C5F" text-transform="uppercase">Own Your Sales 100%</text>
  </g>
</svg>`;

async function renderCovers() {
  // Option 1
  await sharp(Buffer.from(svgCover1))
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'whatsapp-cover-option1.jpg'));
  await sharp(Buffer.from(svgCover1))
    .jpeg({ quality: 95 })
    .toFile(path.join(artifactDir, 'whatsapp_cover_branded_banner.jpg'));

  // Option 2
  await sharp(Buffer.from(svgCover2))
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'whatsapp-cover-option2.jpg'));
  await sharp(Buffer.from(svgCover2))
    .jpeg({ quality: 95 })
    .toFile(path.join(artifactDir, 'whatsapp_cover_minimalist.jpg'));

  console.log('Successfully generated WhatsApp Business cover images!');
}

renderCovers().catch(err => {
  console.error('Error rendering covers:', err);
  process.exit(1);
});
