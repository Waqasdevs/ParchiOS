const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'branding');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// =========================================================================
// CONCEPT A: "The Origami Parchi P" (Deep Ink Black Canvas)
// Clean 45-degree folded thermal paper slip forming a modern geometric 'P'
// with a vivid Rush Red (#D92B1F) status pulse dot.
// =========================================================================
const svgConceptA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <radialGradient id="bgA" cx="50%" cy="46%" r="68%">
      <stop offset="0%" stop-color="#1E1A15"/>
      <stop offset="100%" stop-color="#100E0B"/>
    </radialGradient>
    <linearGradient id="slipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#ECE3D4"/>
    </linearGradient>
    <linearGradient id="foldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2D7C5"/>
      <stop offset="100%" stop-color="#C7BBA5"/>
    </linearGradient>
    <radialGradient id="rushGlow" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF4D40"/>
      <stop offset="100%" stop-color="#D92B1F"/>
    </radialGradient>
    <filter id="subtleDrop" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Deep Ink Black Background (circular safe margin preserved) -->
  <rect width="1024" height="1024" fill="url(#bgA)"/>

  <!-- Subtle Circular Guide Ring (Ultra-Faint 0.04 Opacity) -->
  <circle cx="512" cy="512" r="416" fill="none" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="2"/>

  <!-- Geometric Parchi Logo Mark (Centered inside circle) -->
  <g id="parchi-mark" filter="url(#subtleDrop)">
    <!-- Vertical Pillar (Counter Register Stem) -->
    <rect x="304" y="236" width="112" height="552" rx="28" fill="url(#slipGrad)"/>

    <!-- Parchi Loop (Curved Paper Slip Upper Body) -->
    <path d="M416 236 H612 C704 236 756 288 756 380 C756 472 704 524 612 524 H416 V236 Z" 
          fill="url(#slipGrad)"/>

    <!-- Negative Space Cutout -->
    <path d="M416 336 H596 C636 336 656 354 656 380 C656 406 636 424 596 424 H416 V336 Z" 
          fill="url(#bgA)"/>

    <!-- Precise 45-degree Origami Fold Facet on Top Right Corner -->
    <path d="M612 236 L756 380 H668 C638 380 612 354 612 324 V236 Z" 
          fill="url(#foldGrad)"/>

    <!-- Thermal Perforation Dots on Lower Stem -->
    <circle cx="360" cy="656" r="8" fill="#1E1A15" opacity="0.35"/>
    <circle cx="360" cy="688" r="8" fill="#1E1A15" opacity="0.35"/>
    <circle cx="360" cy="720" r="8" fill="#1E1A15" opacity="0.35"/>

    <!-- Rush Red Pulse Dot (The 5-Second Real-Time Indicator) -->
    <circle cx="672" cy="700" r="52" fill="url(#rushGlow)"/>
    <circle cx="656" cy="684" r="16" fill="#FFA59E" opacity="0.6"/>
  </g>
</svg>`;

// =========================================================================
// CONCEPT B: "The Minimalist Swiss Parchi" (Pure Bauhaus Precision)
// Pure high-contrast Swiss modernist geometric construction.
// =========================================================================
const svgConceptB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <radialGradient id="bgB" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1A1713"/>
      <stop offset="100%" stop-color="#0E0C0A"/>
    </radialGradient>
  </defs>

  <rect width="1024" height="1024" fill="url(#bgB)"/>

  <g transform="translate(512, 512)">
    <!-- Vertical Paper Pillar -->
    <rect x="-192" y="-272" width="112" height="544" rx="24" fill="#F6F0E4"/>
    
    <!-- Upper Monogram Loop -->
    <path d="M-80 -272 H104 C192 -272 240 -224 240 -136 C240 -48 192 0 104 0 H-80 Z" fill="#F6F0E4"/>
    
    <!-- Cutout -->
    <path d="M-80 -184 H92 C132 -184 150 -166 150 -136 C150 -106 132 -88 92 -88 H-80 Z" fill="#12100D"/>
    
    <!-- Clean Horizontal Ticket Notch Cut -->
    <line x1="-80" y1="0" x2="160" y2="0" stroke="#12100D" stroke-width="14" stroke-linecap="round"/>

    <!-- Vivid Rush Red Pill / Pulse -->
    <circle cx="164" cy="188" r="48" fill="#D92B1F"/>
  </g>
</svg>`;

// =========================================================================
// CONCEPT C: "Warm Ivory Edition" (Boutique Cafe & Editorial Style)
// Clean Warm Ivory background with solid Ink Black geometry and Rush Red dot.
// =========================================================================
const svgConceptC = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <linearGradient id="ivoryBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF7EE"/>
      <stop offset="100%" stop-color="#EFE7D7"/>
    </linearGradient>
  </defs>

  <rect width="1024" height="1024" fill="url(#ivoryBg)"/>

  <g id="parchi-mark-c">
    <!-- Solid Ink Black Base Monogram -->
    <rect x="304" y="236" width="112" height="552" rx="28" fill="#15130F"/>
    <path d="M416 236 H612 C704 236 756 288 756 380 C756 472 704 524 612 524 H416 V236 Z" fill="#15130F"/>
    <path d="M416 336 H596 C636 336 656 354 656 380 C656 406 636 424 596 424 H416 V336 Z" fill="url(#ivoryBg)"/>
    
    <!-- Rush Red Geometric Accent -->
    <circle cx="672" cy="700" r="52" fill="#D92B1F"/>
  </g>
</svg>`;

// Write SVGs
fs.writeFileSync(path.join(outDir, 'parchios-icon-concept-a.svg'), svgConceptA);
fs.writeFileSync(path.join(outDir, 'parchios-icon-concept-b.svg'), svgConceptB);
fs.writeFileSync(path.join(outDir, 'parchios-icon-concept-c.svg'), svgConceptC);

// Also copy to artifacts directory for direct user viewing
const artifactDir = path.join('C:', 'Users', 'waqas', '.gemini', 'antigravity', 'brain', '9b896fd6-71e4-47e2-a91c-0808b6b95bd7');

async function render() {
  // Concept A (Recommended Dark)
  await sharp(Buffer.from(svgConceptA)).png().toFile(path.join(outDir, 'parchios-icon-concept-a-1024.png'));
  await sharp(Buffer.from(svgConceptA)).resize(512, 512).png().toFile(path.join(outDir, 'parchios-icon-concept-a-512.png'));
  await sharp(Buffer.from(svgConceptA)).resize(512, 512).png().toFile(path.join(artifactDir, 'parchios_logo_concept_a_dark.png'));

  // Concept B (Swiss Modern Minimalist)
  await sharp(Buffer.from(svgConceptB)).png().toFile(path.join(outDir, 'parchios-icon-concept-b-1024.png'));
  await sharp(Buffer.from(svgConceptB)).resize(512, 512).png().toFile(path.join(outDir, 'parchios-icon-concept-b-512.png'));
  await sharp(Buffer.from(svgConceptB)).resize(512, 512).png().toFile(path.join(artifactDir, 'parchios_logo_concept_b_minimalist.png'));

  // Concept C (Warm Ivory Edition)
  await sharp(Buffer.from(svgConceptC)).png().toFile(path.join(outDir, 'parchios-icon-concept-c-1024.png'));
  await sharp(Buffer.from(svgConceptC)).resize(512, 512).png().toFile(path.join(outDir, 'parchios-icon-concept-c-512.png'));
  await sharp(Buffer.from(svgConceptC)).resize(512, 512).png().toFile(path.join(artifactDir, 'parchios_logo_concept_c_ivory.png'));

  console.log('Successfully generated SVGs and 1024x1024 / 512x512 PNGs in public/branding/ and artifacts dir!');
}

render().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
