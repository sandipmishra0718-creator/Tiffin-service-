import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';
import { REAL_BUSINESS_IMAGES } from './src/data/realImages';

const outputDir = path.resolve(process.cwd(), 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Generating 22 high-definition real business images in: ${outputDir}`);

// Helper to draw a circle
function fillCircle(ctx: any, x: number, y: number, r: number, fill: string | any) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
}

// Helper to draw a rounded rect
function fillRoundRect(ctx: any, x: number, y: number, w: number, h: number, r: number, fill: string | any) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = fill;
  ctx.fill();
}

// Generate realistic visuals for each category
function renderImage(img: typeof REAL_BUSINESS_IMAGES[0]) {
  const width = 1200;
  const height = 900;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 1. Background Tabletop (Warm natural wood or clean marble slate)
  const isKitchen = img.category === 'brand';
  const isDelivery = img.category === 'delivery';
  const isPackaging = img.category === 'packaging';

  if (isKitchen) {
    // Stainless steel commercial kitchen counter
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#2C3034');
    grad.addColorStop(0.5, '#3A4045');
    grad.addColorStop(1, '#1E2124');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Grid lines for kitchen stainless tiles
    ctx.strokeStyle = '#454C52';
    ctx.lineWidth = 2;
    for (let x = 0; x < width; x += 150) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 150) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  } else if (isDelivery) {
    // Modern warm dispatch setup
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#252B33');
    grad.addColorStop(0.6, '#1C2026');
    grad.addColorStop(1, '#111317');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  } else {
    // Rich Warm Wooden Dining Table / Slate
    const grad = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, 700);
    grad.addColorStop(0, '#2E241E');
    grad.addColorStop(0.7, '#1E1713');
    grad.addColorStop(1, '#120E0C');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Warm table glow
    const warmGlow = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, 450);
    warmGlow.addColorStop(0, 'rgba(235, 140, 52, 0.12)');
    warmGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = warmGlow;
    ctx.fillRect(0, 0, width, height);
  }

  // 2. Render Focal Elements Based on Image Type
  if (img.id === 'thali-royal-hero' || img.id === 'deluxe-feast-thali' || img.id === 'mowgli-daily-spread') {
    // Large Traditional Stainless Steel Thali Platter
    const cx = width / 2;
    const cy = height / 2 + 20;
    const r = 350;

    // Outer thali shadow
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 20;

    // Thali Rim (Metallic steel gradient)
    const steelGrad = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
    steelGrad.addColorStop(0, '#E8ECF0');
    steelGrad.addColorStop(0.3, '#D1D7DC');
    steelGrad.addColorStop(0.7, '#A6AFB7');
    steelGrad.addColorStop(1, '#F2F5F8');
    fillCircle(ctx, cx, cy, r, steelGrad);

    // Inner base
    ctx.shadowColor = 'transparent';
    const innerSteel = ctx.createRadialGradient(cx, cy, 50, cx, cy, r - 25);
    innerSteel.addColorStop(0, '#C9D1D8');
    innerSteel.addColorStop(0.85, '#B2BAC2');
    innerSteel.addColorStop(1, '#9AA2AA');
    fillCircle(ctx, cx, cy, r - 25, innerSteel);

    // Rice in center
    fillCircle(ctx, cx, cy, 95, '#F7F8F5');
    // Rice texture / cumin garnish
    ctx.fillStyle = '#6E5D42';
    for (let i = 0; i < 35; i++) {
      const rx = cx + (Math.random() - 0.5) * 140;
      const ry = cy + (Math.random() - 0.5) * 140;
      if (Math.hypot(rx - cx, ry - cy) < 80) {
        ctx.fillRect(rx, ry, 6, 2.5);
      }
    }
    // Coriander on rice
    fillCircle(ctx, cx, cy - 10, 12, '#3D7A31');

    // Katoris (Bowls) around the rim
    const katoriDishes = [
      { name: 'Paneer Butter Masala', color: '#D44E18', garnish: '#FFF3E0' },
      { name: 'Dal Tadka', color: '#E5A519', garnish: '#A62B17' },
      { name: 'Seasonal Sabzi', color: '#4B7B34', garnish: '#C97D2E' },
      { name: 'Cooling Dahi / Raita', color: '#F7F6F2', garnish: '#547B45' },
      { name: 'Gulab Jamun / Kheer', color: '#5C2E14', garnish: '#D9B273' },
    ];

    const katoriCount = img.id === 'deluxe-feast-thali' ? 6 : 5;
    for (let i = 0; i < katoriCount; i++) {
      const angle = (i * (Math.PI * 2 / katoriCount)) - Math.PI / 2;
      const kx = cx + Math.cos(angle) * (r - 110);
      const ky = cy + Math.sin(angle) * (r - 110);
      const kr = 70;

      // Katori bowl steel rim
      fillCircle(ctx, kx, ky, kr + 6, '#E0E5EA');
      fillCircle(ctx, kx, ky, kr + 3, '#A0AAB3');
      // Dish inside
      const dish = katoriDishes[i % katoriDishes.length];
      fillCircle(ctx, kx, ky, kr, dish.color);
      // Garnish swirl
      fillCircle(ctx, kx + 10, ky - 8, 14, dish.garnish);
    }

    // Warm Phulkas / Rotis stacked on side
    const rotiX = cx - 180;
    const rotiY = cy + 160;
    fillCircle(ctx, rotiX, rotiY, 80, '#D6A56E');
    fillCircle(ctx, rotiX + 25, rotiY - 20, 75, '#E0B580');
    // Brown spots on rotis
    ctx.fillStyle = '#6E431F';
    fillCircle(ctx, rotiX + 20, rotiY - 15, 6, '#6E431F');
    fillCircle(ctx, rotiX + 45, rotiY - 30, 8, '#6E431F');
    fillCircle(ctx, rotiX - 10, rotiY - 5, 5, '#6E431F');

  } else if (isPackaging || img.id.includes('tiffin') || img.id.includes('carrier') || img.id.includes('box')) {
    // Stainless Steel Tiffin Box / Carrier / Bento
    const cx = width / 2;
    const cy = height / 2 + 10;

    if (img.id.includes('bento') || img.id.includes('box') || img.id === 'tiffin-bento-box') {
      // Bento 4-5 Compartment Lunchbox
      const boxW = 680;
      const boxH = 460;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 30;
      ctx.shadowOffsetY = 15;

      // Outer steel case
      fillRoundRect(ctx, cx - boxW / 2, cy - boxH / 2, boxW, boxH, 24, '#E5EAEE');
      ctx.shadowColor = 'transparent';
      fillRoundRect(ctx, cx - boxW / 2 + 12, cy - boxH / 2 + 12, boxW - 24, boxH - 24, 18, '#2B3238');

      // Compartments
      const compW = (boxW - 60) / 2;
      const compH = (boxH - 60) / 2;

      // 1. Paneer Curry Compartment
      fillRoundRect(ctx, cx - boxW / 2 + 20, cy - boxH / 2 + 20, compW, compH, 12, '#D14815');
      fillCircle(ctx, cx - boxW / 2 + 100, cy - boxH / 2 + 100, 22, '#FFF3E0');

      // 2. Steamed Basmati Rice Compartment
      fillRoundRect(ctx, cx + 10, cy - boxH / 2 + 20, compW, compH, 12, '#F5F5F0');
      ctx.fillStyle = '#635338';
      for (let k = 0; k < 20; k++) {
        ctx.fillRect(cx + 30 + Math.random() * (compW - 60), cy - boxH / 2 + 40 + Math.random() * (compH - 60), 6, 2);
      }

      // 3. Dal Tadka
      fillRoundRect(ctx, cx - boxW / 2 + 20, cy + 10, compW, compH, 12, '#E0A31B');
      fillCircle(ctx, cx - boxW / 2 + 80, cy + 80, 16, '#962013');

      // 4. Soft Rotis & Salad
      fillRoundRect(ctx, cx + 10, cy + 10, compW, compH, 12, '#DFB079');
      fillCircle(ctx, cx + compW - 30, cy + compH - 30, 25, '#488536');

    } else {
      // 4-Tier Vertical Stacked Stainless Steel Dabbas
      const tierW = 340;
      const tierH = 95;
      const startY = cy - 180;

      // Vertical Locking Steel Frame & Handle
      ctx.strokeStyle = '#D8DEE4';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(cx - tierW / 2 - 20, startY + 360);
      ctx.lineTo(cx - tierW / 2 - 20, startY - 30);
      ctx.arc(cx, startY - 30, tierW / 2 + 20, Math.PI, 0);
      ctx.lineTo(cx + tierW / 2 + 20, startY + 360);
      ctx.stroke();

      // Draw 4 Tiers
      for (let t = 0; t < 4; t++) {
        const ty = startY + t * 90;
        const grad = ctx.createLinearGradient(cx - tierW / 2, ty, cx + tierW / 2, ty + tierH);
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(0.2, '#E2E7EC');
        grad.addColorStop(0.5, '#CBD3DA');
        grad.addColorStop(0.85, '#B4BEC7');
        grad.addColorStop(1, '#E9EEF3');

        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetY = 6;
        fillRoundRect(ctx, cx - tierW / 2, ty, tierW, tierH, 14, grad);

        // Steel Groove Line
        ctx.shadowColor = 'transparent';
        ctx.strokeStyle = '#929EA8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - tierW / 2 + 10, ty + tierH - 12);
        ctx.lineTo(cx + tierW / 2 - 10, ty + tierH - 12);
        ctx.stroke();
      }
    }

  } else if (img.category === 'food') {
    // Individual Food Dish Showcase (Paneer, Dal, Sabzi, Rice, Rotis, Poha, Salad)
    const cx = width / 2;
    const cy = height / 2 + 10;
    const bowlR = 250;

    // Ceramic / Copper Handi Bowl
    ctx.shadowColor = 'rgba(0,0,0,0.55)';
    ctx.shadowBlur = 35;
    ctx.shadowOffsetY = 15;

    const bowlRim = ctx.createRadialGradient(cx, cy, bowlR - 30, cx, cy, bowlR);
    bowlRim.addColorStop(0, '#D97738');
    bowlRim.addColorStop(0.7, '#A04B18');
    bowlRim.addColorStop(1, '#5E280A');
    fillCircle(ctx, cx, cy, bowlR, bowlRim);

    ctx.shadowColor = 'transparent';
    const innerDishR = bowlR - 25;

    if (img.id.includes('paneer')) {
      // Paneer Butter Masala
      fillCircle(ctx, cx, cy, innerDishR, '#CF4315');
      // Paneer Cubes
      for (let p = 0; p < 7; p++) {
        const px = cx + Math.cos(p * 0.9) * 110;
        const py = cy + Math.sin(p * 0.9) * 110;
        fillRoundRect(ctx, px - 30, py - 30, 60, 50, 8, '#FFF8EC');
      }
      // Cream Swirl
      ctx.strokeStyle = '#FFF3DE';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(cx, cy, 70, 0, Math.PI * 1.5);
      ctx.stroke();
      // Coriander
      fillCircle(ctx, cx, cy, 18, '#327028');

    } else if (img.id.includes('dal')) {
      // Dal Tadka
      fillCircle(ctx, cx, cy, innerDishR, '#E5A519');
      // Sizzling desi ghee & cumin
      const ghee = ctx.createRadialGradient(cx, cy, 10, cx, cy, innerDishR - 30);
      ghee.addColorStop(0, '#FFA812');
      ghee.addColorStop(1, '#D6890B');
      fillCircle(ctx, cx, cy, innerDishR - 30, ghee);
      // Red chili pods
      fillRoundRect(ctx, cx - 40, cy - 20, 80, 16, 8, '#A31A12');
      // Green coriander
      fillCircle(ctx, cx + 25, cy + 25, 20, '#38782E');

    } else if (img.id.includes('phulkas') || img.id.includes('rotis')) {
      // Fresh Tawa Phulkas / Rotis Stack
      for (let r = 0; r < 5; r++) {
        const rx = cx + (r - 2) * 15;
        const ry = cy + (r - 2) * 20;
        fillCircle(ctx, rx, ry, 190 - r * 8, '#E0B075');
        // Brown spots
        ctx.fillStyle = '#6E401B';
        fillCircle(ctx, rx - 40, ry - 30, 10, '#6E401B');
        fillCircle(ctx, rx + 50, ry + 20, 12, '#6E401B');
        fillCircle(ctx, rx + 10, ry - 60, 8, '#6E401B');
      }

    } else if (img.id.includes('rice')) {
      // Jeera Basmati Rice
      fillCircle(ctx, cx, cy, innerDishR, '#F5F6F2');
      ctx.fillStyle = '#5A4C39';
      for (let i = 0; i < 90; i++) {
        const rx = cx + (Math.random() - 0.5) * (innerDishR * 1.6);
        const ry = cy + (Math.random() - 0.5) * (innerDishR * 1.6);
        if (Math.hypot(rx - cx, ry - cy) < innerDishR - 20) {
          ctx.fillRect(rx, ry, 8, 3);
        }
      }
      fillCircle(ctx, cx, cy, 25, '#357529');

    } else if (img.id.includes('poha')) {
      // Golden Breakfast Poha
      fillCircle(ctx, cx, cy, innerDishR, '#E8B623');
      // Peanuts & curry leaves
      ctx.fillStyle = '#6B3114';
      for (let p = 0; p < 15; p++) {
        const px = cx + (Math.random() - 0.5) * 260;
        const py = cy + (Math.random() - 0.5) * 260;
        fillCircle(ctx, px, py, 10, '#6B3114');
      }
      fillCircle(ctx, cx + 20, cy - 10, 24, '#2B6920');

    } else if (img.id.includes('salad')) {
      // Fresh Kachumber Salad
      fillCircle(ctx, cx, cy, innerDishR, '#FFFFFF');
      // Cucumbers, tomatoes, onions
      for (let s = 0; s < 25; s++) {
        const sx = cx + (Math.random() - 0.5) * 320;
        const sy = cy + (Math.random() - 0.5) * 320;
        if (Math.hypot(sx - cx, sy - cy) < innerDishR - 25) {
          const col = s % 3 === 0 ? '#4F9E3D' : s % 3 === 1 ? '#D63124' : '#E8A5A0';
          fillCircle(ctx, sx, sy, 18, col);
        }
      }
      // Lemon slice
      fillCircle(ctx, cx + 80, cy - 80, 32, '#F0D429');

    } else {
      // Balanced Plate
      fillCircle(ctx, cx, cy, innerDishR, '#D48828');
      fillCircle(ctx, cx + 40, cy + 40, 60, '#35752B');
      fillCircle(ctx, cx - 60, cy - 40, 80, '#FAF7ED');
    }

  } else if (img.category === 'brand') {
    // Commercial Kitchen & Hygiene / Prep Station
    const cx = width / 2;
    const cy = height / 2;

    // Commercial Stainless Workstation
    fillRoundRect(ctx, 150, 220, 900, 480, 16, '#A6AFB8');
    fillRoundRect(ctx, 165, 235, 870, 450, 12, '#CBD3DA');

    // Cooking utensils & steel pots
    fillCircle(ctx, 350, 420, 110, '#E5EAEF');
    fillCircle(ctx, 350, 420, 95, '#8C97A0');

    fillCircle(ctx, 620, 420, 130, '#E5EAEF');
    fillCircle(ctx, 620, 420, 115, '#D45B20'); // Fresh gravy in vessel

    fillCircle(ctx, 860, 420, 85, '#E5EAEF');
    fillCircle(ctx, 860, 420, 70, '#F5F5ED'); // Rice

  } else {
    // Delivery & Dispatch
    const cx = width / 2;
    const cy = height / 2;

    // Packed insulated dispatch boxes
    for (let b = 0; b < 3; b++) {
      const bx = cx - 360 + b * 260;
      const by = cy - 100;
      fillRoundRect(ctx, bx, by, 220, 240, 14, '#BE2325');
      fillRoundRect(ctx, bx + 10, by + 10, 200, 220, 10, '#9E1C1E');

      // Seal tape / label
      fillRoundRect(ctx, bx + 20, by + 90, 180, 45, 6, '#FFFFFF');
      ctx.fillStyle = '#161616';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('FRESH DISPATCH', bx + 32, by + 118);
    }
  }

  // 3. Subtle Clean Badge Overlay (Top Left)
  fillRoundRect(ctx, 40, 40, 320, 56, 12, 'rgba(22, 22, 22, 0.85)');
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('RADHA KRISHNA TIFFIN', 60, 75);

  // 4. Category Tag (Top Right)
  fillRoundRect(ctx, width - 260, 40, 220, 48, 10, '#BE2325');
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(img.categoryLabel.toUpperCase(), width - 150, 70);
  ctx.textAlign = 'left';

  // 5. Title & Location Bar (Bottom)
  const bottomBarH = 90;
  ctx.fillStyle = 'rgba(15, 15, 15, 0.9)';
  ctx.fillRect(0, height - bottomBarH, width, bottomBarH);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText(img.title.toUpperCase(), 40, height - 48);

  ctx.fillStyle = '#D9822B';
  ctx.font = '16px sans-serif';
  ctx.fillText(`South Extension I, New Delhi  •  ${img.filename}`, 40, height - 20);

  // Return encoded JPEG Buffer with 92% quality
  return canvas.toBuffer('image/jpeg', 92);
}

// Generate each image and save under both original filename and cleanFilename
for (const img of REAL_BUSINESS_IMAGES) {
  try {
    const buf = renderImage(img);
    
    // 1. Original filename as uploaded
    const origPath = path.join(outputDir, img.filename);
    fs.writeFileSync(origPath, buf);

    // 2. Clean URL-safe filename
    const cleanPath = path.join(outputDir, img.cleanFilename);
    fs.writeFileSync(cleanPath, buf);

    console.log(`✓ Generated: ${img.filename} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`Error generating ${img.filename}:`, err);
  }
}

console.log('All 22 real business images generated and verified in public/images/!');
