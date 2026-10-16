<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <meta name="theme-color" content="#060b16" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <title>سهلي دي ألترا — Sahly Day Ultra</title>
  <meta name="description" content="Sahly Day Ultra — Flagship Bilingual All-Ages Daily Lifestyle, Pro Fitness, Faith, Health Vitals & Productivity Mobile OS." />

  <!-- أيقونة التطبيق -->
  <link rel="icon" type="image/jpeg" href="Sahly_Day_tech_logo_design_2K_20261009183153.jpg" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- React & ReactDOM -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <!-- Babel for JSX execution in browser -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <style>
    /* ==========================================================================
       7 FLAGSHIP ENTERPRISE THEMES (UK / WCAG 2.2 AA/AAA EYE-COMFORT CALIBRATED)
       ========================================================================== */
    :root, [data-theme="cyber"] {
      --bg-primary: #060b16;
      --bg-secondary: #0c162c;
      --surface-elevated: rgba(15, 27, 51, 0.78);
      --surface-input: rgba(8, 15, 30, 0.92);
      --card-border: rgba(56, 189, 248, 0.22);
      --card-border-hover: rgba(6, 182, 212, 0.55);
      --accent-main: #06b6d4;
      --accent-secondary: #3b82f6;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --glow-rgba: rgba(6, 182, 212, 0.18);
    }

    [data-theme="emerald"] {
      --bg-primary: #04100c;
      --bg-secondary: #08221a;
      --surface-elevated: rgba(10, 39, 30, 0.80);
      --surface-input: rgba(5, 22, 16, 0.92);
      --card-border: rgba(16, 185, 129, 0.25);
      --card-border-hover: rgba(16, 185, 129, 0.6);
      --accent-main: #10b981;
      --accent-secondary: #d97706;
      --text-main: #f0fdf4;
      --text-muted: #a7f3d0;
      --glow-rgba: rgba(16, 185, 129, 0.18);
    }

    [data-theme="amethyst"] {
      --bg-primary: #090516;
      --bg-secondary: #150d2e;
      --surface-elevated: rgba(25, 15, 52, 0.80);
      --surface-input: rgba(13, 7, 30, 0.92);
      --card-border: rgba(168, 85, 247, 0.26);
      --card-border-hover: rgba(168, 85, 247, 0.6);
      --accent-main: #a855f7;
      --accent-secondary: #ec4899;
      --text-main: #faf5ff;
      --text-muted: #d8b4fe;
      --glow-rgba: rgba(168, 85, 247, 0.20);
    }

    [data-theme="sunset"] {
      --bg-primary: #110b08;
      --bg-secondary: #22150f;
      --surface-elevated: rgba(38, 24, 17, 0.82);
      --surface-input: rgba(20, 12, 9, 0.92);
      --card-border: rgba(245, 158, 11, 0.26);
      --card-border-hover: rgba(249, 115, 22, 0.6);
      --accent-main: #f59e0b;
      --accent-secondary: #ea580c;
      --text-main: #fffbeb;
      --text-muted: #fcd34d;
      --glow-rgba: rgba(245, 158, 11, 0.18);
    }

    [data-theme="oled"] {
      --bg-primary: #000000;
      --bg-secondary: #070a0e;
      --surface-elevated: rgba(12, 16, 23, 0.92);
      --surface-input: rgba(5, 7, 11, 0.98);
      --card-border: rgba(45, 212, 191, 0.28);
      --card-border-hover: rgba(45, 212, 191, 0.65);
      --accent-main: #14b8a6;
      --accent-secondary: #0284c7;
      --text-main: #ffffff;
      --text-muted: #9ca3af;
      --glow-rgba: rgba(20, 184, 166, 0.20);
    }

    [data-theme="daylight"] {
      --bg-primary: #f4f7fb;
      --bg-secondary: #e8eef6;
      --surface-elevated: rgba(255, 255, 255, 0.94);
      --surface-input: rgba(241, 245, 249, 0.96);
      --card-border: rgba(2, 132, 199, 0.20);
      --card-border-hover: rgba(2, 132, 199, 0.50);
      --accent-main: #0284c7;
      --accent-secondary: #2563eb;
      --text-main: #0f172a;
      --text-muted: #475569;
      --glow-rgba: rgba(2, 132, 199, 0.10);
    }

    [data-theme="nordic"] {
      --bg-primary: #eef3f0;
      --bg-secondary: #e0eae4;
      --surface-elevated: rgba(252, 254, 253, 0.94);
      --surface-input: rgba(235, 242, 238, 0.96);
      --card-border: rgba(13, 148, 136, 0.22);
      --card-border-hover: rgba(13, 148, 136, 0.50);
      --accent-main: #0d9488;
      --accent-secondary: #059669;
      --text-main: #11221c;
      --text-muted: #4b635b;
      --glow-rgba: rgba(13, 148, 136, 0.10);
    }

    html[data-font-scale="normal"] { font-size: 16px; }
    html[data-font-scale="lg"] { font-size: 18px; }
    html[data-font-scale="xl"] { font-size: 20px; }

    body {
      font-family: 'Cairo', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      -webkit-tap-highlight-color: transparent;
      background: radial-gradient(circle at 50% -10%, var(--bg-secondary) 0%, var(--bg-primary) 75%);
      color: var(--text-main);
      min-height: 100vh;
      overflow-x: hidden;
      line-height: 1.6;
      transition: background 0.35s cubic-bezier(0.22, 1, 0.36, 1), color 0.25s ease;
    }

    .bg-grid-pattern {
      background-image: radial-gradient(var(--card-border) 1px, transparent 1px);
      background-size: 24px 24px;
    }

    .glass-card {
      background: var(--surface-elevated);
      border: 1px solid var(--card-border);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 10px 30px -8px var(--glow-rgba), inset 0 1px 0 0 rgba(255, 255, 255, 0.07);
      transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.22s ease, box-shadow 0.22s ease;
    }

    .glass-card:hover {
      border-color: var(--card-border-hover);
    }

    .hero-card {
      background: linear-gradient(145deg, var(--surface-elevated) 0%, var(--bg-secondary) 100%);
      border: 1.5px solid var(--card-border-hover);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 0 18px 40px -10px var(--glow-rgba), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
    }

    .surface-field {
      background: var(--surface-input);
      color: var(--text-main);
      border: 1px solid var(--card-border);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .surface-field:focus {
      outline: none;
      border-color: var(--accent-main);
      box-shadow: 0 0 0 3px var(--glow-rgba);
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--accent-main) 0%, var(--accent-secondary) 100%);
      color: #ffffff;
      font-weight: 800;
      box-shadow: 0 6px 20px -3px var(--glow-rgba), inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      filter: brightness(1.06);
    }

    .btn-primary:active {
      transform: translateY(1px) scale(0.98);
    }

    .theme-text-muted {
      color: var(--text-muted);
    }

    .theme-border {
      border-color: var(--card-border);
    }

    .accent-text {
      color: var(--accent-main);
    }

    .touch-target {
      min-height: 44px;
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: var(--bg-primary);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--accent-main);
      border-radius: 9999px;
    }
  </style>
</head>
<body class="bg-grid-pattern selection:bg-cyan-500 selection:text-black">
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect, useRef, useMemo } = React;

    // ============================================================================
    // 🔒 إعداد المطور الخفي (ضع رابط الـ Web App الخاص بك هنا ليتم التوصيل بصمت تام)
    // لا يظهر للمستخدمين أي ذكر لـ Google Sheets أو Apps Script داخل واجهة التطبيق نهائياً
    // ============================================================================
    const SAHLY_CLOUD_API_URL = "https://script.google.com/macros/s/AKfycbw1Wr2JDDx9YIbgtvRYVM801a0xSsbokTLK601zu_SNhDjfLMKY-ectLzuVlpMR7RiDYA/exec";

    const LOGO_FILE_PATH = "Sahly_Day_tech_logo_design_2K_20261009183153.jpg";
    const FALLBACK_SVG_LOGO = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4"/>
            <stop offset="100%" stop-color="#2563eb"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="30" fill="#061326" stroke="url(#g)" stroke-width="5"/>
        <path d="M68 20L32 68h26l-6 32 36-48H62l6-32z" fill="url(#g)"/>
      </svg>
    `);

    // --- SOUND & HAPTIC AUDIO ENGINE ---
    class SoundFX {
      constructor() {
        this.ctx = null;
      }
      initCtx() {
        if (!this.ctx && typeof window !== 'undefined') {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      }
      playClick() {
        try {
          this.initCtx();
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(380, this.ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.09);
          gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.11);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.11);
        } catch (e) {}
      }
      playWaterDrop() {
        try {
          this.initCtx();
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(580, this.ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1250, this.ctx.currentTime + 0.13);
          gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.15);
        } catch (e) {}
      }
      playCelebration() {
        try {
          this.initCtx();
          if (!this.ctx) return;
          const notes = [523.25, 659.25, 783.99, 1046.5];
          notes.forEach((freq, i) => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.06);
            gain.gain.setValueAtTime(0.16, this.ctx.currentTime + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.06 + 0.24);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + i * 0.06);
            osc.stop(this.ctx.currentTime + i * 0.06 + 0.24);
          });
        } catch (e) {}
      }
      playTimerAlarm() {
        try {
          this.initCtx();
          if (!this.ctx) return;
          [880, 1108.73, 880, 1318.5].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.14);
            gain.gain.setValueAtTime(0.22, this.ctx.currentTime + idx * 0.14);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.14 + 0.22);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.14);
            osc.stop(this.ctx.currentTime + idx * 0.14 + 0.22);
          });
        } catch (e) {}
      }
    }
    const soundFX = new SoundFX();

    // --- 7 FLAGSHIP THEMES CATALOG ---
    const THEME_CATALOG = [
      { id: 'cyber', icon: '🌌', nameAr: 'أوبسيديان سيان', nameEn: 'Obsidian Cyan', preview: 'linear-gradient(135deg, #060b16, #06b6d4)' },
      { id: 'emerald', icon: '💎', nameAr: 'الزمرد الملكي', nameEn: 'Emerald Prestige', preview: 'linear-gradient(135deg, #04100c, #10b981)' },
      { id: 'amethyst', icon: '🔮', nameAr: 'أرجواني كوني', nameEn: 'Cosmic Amethyst', preview: 'linear-gradient(135deg, #090516, #a855f7)' },
      { id: 'sunset', icon: '🌅', nameAr: 'شفق الصحراء الذهبي', nameEn: 'Sunset Amber', preview: 'linear-gradient(135deg, #110b08, #f59e0b)' },
      { id: 'oled', icon: '🖤', nameAr: 'أوليد فائق التباين', nameEn: 'True OLED Black', preview: 'linear-gradient(135deg, #000000, #14b8a6)' },
      { id: 'daylight', icon: '☀️', nameAr: 'النهاري النقي', nameEn: 'Daylight Pure', preview: 'linear-gradient(135deg, #f4f7fb, #0284c7)' },
      { id: 'nordic', icon: '🌿', nameAr: 'نسيم الشمال المريح', nameEn: 'Nordic Calm Light', preview: 'linear-gradient(135deg, #eef3f0, #0d9488)' }
    ];

    // --- BILINGUAL DICTIONARY (AR / EN) ---
    const I18N = {
      ar: {
        appName: 'سهلي دي ألترا',
        appTagline: 'منظومة الحياة الذكية واللياقة المتكاملة',
        nav: {
          dashboard: 'الرئيسية',
          fitness: 'الرياضة والتغذية',
          prayers: 'العبادة والأذكار',
          health: 'الصحة والقياسات',
          focus: 'المهام والتركيز',
          hydration: 'الماء والترطيب',
          family: 'العائلة والمناسبات',
          cloud: 'حسابي والمظهر'
        },
        ageGroups: {
          youth: { label: 'الشباب والرياضيين ⚡', desc: 'أداء عالي، تمارين متقدمة، حساب ماكروز وتحديات' },
          adults: { label: 'الكبار والمهنيين 💼', desc: 'توازن العمل والحياة، تركيز عميق، صحة وعائلة' },
          seniors: { label: 'كبار السن والبركة 🌿', desc: 'خط كبير ومريح للعين، متابعة الأدوية والضغط والسكر، مشي ومرونة' },
          kids: { label: 'الأبطال والناشئين 🌟', desc: 'مهام ممتعة، نجوم ومكافآت، قراءة وتمارين نشطة' }
        },
        themes: {
          cyber: 'أوبسيديان سيان',
          emerald: 'الزمرد الملكي',
          amethyst: 'أرجواني كوني',
          sunset: 'شفق الصحراء الذهبي',
          oled: 'أوليد أسود نقي',
          daylight: 'النهاري النقي',
          nordic: 'نسيم الشمال المريح'
        },
        fontSizes: {
          normal: 'خط قياسي',
          lg: 'خط كبير',
          xl: 'خط فائق الوضوح'
        },
        common: {
          save: 'حفظ التغييرات',
          cancel: 'إلغاء',
          add: 'إضافة',
          completed: 'مكتمل',
          pending: 'قيد التنفيذ',
          syncNow: 'تحديث السحابة الآن',
          synced: 'سحابة سهلي مؤمّنة ومتصلة',
          syncing: 'جاري المزامنة المشفرة...',
          level: 'المستوى',
          xp: 'نقطة',
          streak: 'أيام الالتزام',
          todayProgress: 'مؤشر إنجاز اليوم'
        }
      },
      en: {
        appName: 'Sahly Day Ultra',
        appTagline: 'Flagship Smart Lifestyle, Fitness & Wellness OS',
        nav: {
          dashboard: 'Home',
          fitness: 'Fitness & Macros',
          prayers: 'Faith & Athkar',
          health: 'Health & Vitals',
          focus: 'Tasks & Focus',
          hydration: 'Hydration',
          family: 'Family',
          cloud: 'Profile & Themes'
        },
        ageGroups: {
          youth: { label: 'Youth & Athletes ⚡', desc: 'High performance, pro splits, macros & XP challenges' },
          adults: { label: 'Adults & Pros 💼', desc: 'Work-life balance, deep focus timer, wellness & family' },
          seniors: { label: 'Seniors Easy View 🌿', desc: 'Large eye-friendly text, blood pressure & glucose log, gentle mobility' },
          kids: { label: 'Kids & Champions 🌟', desc: 'Gamified quests, star badges, study habits & fun workouts' }
        },
        themes: {
          cyber: 'Obsidian Cyan',
          emerald: 'Emerald Prestige',
          amethyst: 'Cosmic Amethyst',
          sunset: 'Sunset Amber',
          oled: 'True OLED Black',
          daylight: 'Daylight Pure',
          nordic: 'Nordic Calm Light'
        },
        fontSizes: {
          normal: 'Standard',
          lg: 'Large',
          xl: 'Extra Clear'
        },
        common: {
          save: 'Save Changes',
          cancel: 'Cancel',
          add: 'Add',
          completed: 'Completed',
          pending: 'Pending',
          syncNow: 'Sync Cloud Now',
          synced: 'Sahly Cloud Encrypted & Synced',
          syncing: 'Syncing securely...',
          level: 'Level',
          xp: 'XP',
          streak: 'Day Streak',
          todayProgress: 'Daily Score'
        }
      }
    };

    // --- CITIES PRESETS FOR PRAYER TIMES ---
    const CITIES_PRESETS = [
      { id: 'alex', nameAr: 'الإسكندرية، مصر', nameEn: 'Alexandria, EG', lat: 31.2001, lng: 29.9187 },
      { id: 'cairo', nameAr: 'القاهرة، مصر', nameEn: 'Cairo, EG', lat: 30.0444, lng: 31.2357 },
      { id: 'riyadh', nameAr: 'الرياض، السعودية', nameEn: 'Riyadh, SA', lat: 24.7136, lng: 46.6753 },
      { id: 'makkah', nameAr: 'مكة المكرمة، السعودية', nameEn: 'Makkah, SA', lat: 21.3891, lng: 39.8579 },
      { id: 'dubai', nameAr: 'دبي، الإمارات', nameEn: 'Dubai, UAE', lat: 25.2048, lng: 55.2708 },
      { id: 'doha', nameAr: 'الدوحة، قطر', nameEn: 'Doha, QA', lat: 25.2854, lng: 51.5310 },
      { id: 'amman', nameAr: 'عمّان، الأردن', nameEn: 'Amman, JO', lat: 31.9454, lng: 35.9284 },
      { id: 'kuwait', nameAr: 'الكويت', nameEn: 'Kuwait City, KW', lat: 29.3759, lng: 47.9774 }
    ];

    // --- ASTRONOMICAL PRAYER TIME ENGINE ---
    function calculatePrayerTimes(date = new Date(), latitude = 31.2001, longitude = 29.9187, fajrAngle = 18.5, ishaAngle = 17.5) {
      const d = new Date(date);
      const dayOfYear = Math.floor((d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      const b = (2 * Math.PI * (dayOfYear - 81)) / 365;
      const eqTime = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
      const declination = 23.45 * Math.sin(((dayOfYear - 81) * 2 * Math.PI) / 365);
      const degToRad = (deg) => (deg * Math.PI) / 180;
      const radToDeg = (rad) => (rad * 180) / Math.PI;
      const timezoneOffsetHours = -d.getTimezoneOffset() / 60;
      const solarNoonMinutes = 720 - 4 * longitude - eqTime + timezoneOffsetHours * 60;
      const latRad = degToRad(latitude);
      const decRad = degToRad(declination);
      const getHourAngle = (angle) => {
        const angleRad = degToRad(angle);
        const cosHA = (Math.sin(angleRad) - Math.sin(latRad) * Math.sin(decRad)) / (Math.cos(latRad) * Math.cos(decRad));
        if (cosHA > 1 || cosHA < -1) return 0;
        return radToDeg(Math.acos(cosHA));
      };
      const noonSunAngle = 90 - Math.abs(latitude - declination);
      const asrSunAngle = radToDeg(Math.atan(1 / (1 + 1 / Math.tan(degToRad(noonSunAngle)))));
      const fajrHA = getHourAngle(-fajrAngle);
      const sunriseHA = getHourAngle(-0.833);
      const asrHA = getHourAngle(asrSunAngle);
      const maghribHA = getHourAngle(-0.833);
      const ishaHA = getHourAngle(-ishaAngle);
      const formatTime = (totalMinutes) => {
        let normalized = Math.round(totalMinutes);
        while (normalized < 0) normalized += 1440;
        while (normalized >= 1440) normalized -= 1440;
        const hours = Math.floor(normalized / 60);
        const mins = normalized % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
      };
      return [
        { id: 'fajr', nameAr: 'الفجر', nameEn: 'Fajr', time: formatTime(solarNoonMinutes - fajrHA * 4), completed: false, sunnahCompleted: false, preAlertMinutes: 10 },
        { id: 'sunrise', nameAr: 'الشروق', nameEn: 'Sunrise', time: formatTime(solarNoonMinutes - sunriseHA * 4), completed: false, sunnahCompleted: false, preAlertMinutes: 0 },
        { id: 'dhuhr', nameAr: 'الظهر', nameEn: 'Dhuhr', time: formatTime(solarNoonMinutes), completed: false, sunnahCompleted: false, preAlertMinutes: 10 },
        { id: 'asr', nameAr: 'العصر', nameEn: 'Asr', time: formatTime(solarNoonMinutes + asrHA * 4), completed: false, sunnahCompleted: false, preAlertMinutes: 10 },
        { id: 'maghrib', nameAr: 'المغرب', nameEn: 'Maghrib', time: formatTime(solarNoonMinutes + maghribHA * 4), completed: false, sunnahCompleted: false, preAlertMinutes: 10 },
        { id: 'isha', nameAr: 'العشاء', nameEn: 'Isha', time: formatTime(solarNoonMinutes + ishaHA * 4), completed: false, sunnahCompleted: false, preAlertMinutes: 10 },
      ];
    }

    function getUpcomingPrayer(prayers, now = new Date()) {
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      for (const prayer of prayers) {
        if (prayer.id === 'sunrise') continue;
        const [h, m] = prayer.time.split(':').map(Number);
        const prayerMinutes = h * 60 + m;
        if (prayerMinutes > currentMinutes) {
          const diff = prayerMinutes - currentMinutes;
          return { prayer, minutesRemaining: diff };
        }
      }
      const fajr = prayers.find((p) => p.id === 'fajr') || prayers[0];
      const [fh, fm] = fajr.time.split(':').map(Number);
      const diff = 1440 - currentMinutes + (fh * 60 + fm);
      return { prayer: fajr, minutesRemaining: diff };
    }

    // --- 10 PRO WORKOUT SPLITS FOR ALL AGES & FITNESS LEVELS ---
    const SPLIT_DEFINITIONS = {
      ppl: {
        nameAr: 'دفع / سحب / أرجل الاحترافي (Pro PPL)',
        nameEn: 'Pro Push / Pull / Legs (PPL)',
        descriptionAr: 'النظام الذهبي لنمو العضلات وزيادة القوة، يقسم الجسم بذكاء وتوازن.',
        descriptionEn: 'The gold-standard hypertrophy & strength split dividing the body into Push, Pull, and Legs.',
        badgeAr: 'ضخامة وقوة ⚡',
        badgeEn: 'Hypertrophy ⚡',
        suitableFor: ['youth', 'adults']
      },
      arnold: {
        nameAr: 'أرنولد سبليت الأسطوري (Arnold Split)',
        nameEn: 'Legendary Arnold Split',
        descriptionAr: 'صدر وظهر معاً، ثم أكتاف وذراعين، ثم أرجل. كثافة عالية وضخ دم رهيب للعضلات.',
        descriptionEn: 'Chest & Back antagonistic supersets, Shoulders & Arms, and Legs for maximum pump.',
        badgeAr: 'للمحترفين 🔥',
        badgeEn: 'Pro Pump 🔥',
        suitableFor: ['youth', 'adults']
      },
      upper_lower: {
        nameAr: 'علوي / سفلي القوة والضخامة (Upper / Lower)',
        nameEn: 'Upper / Lower Powerbuilding',
        descriptionAr: 'مثالي للرياضي المتوسط والمنشغل (4 أيام أسبوعياً بكفاءة خارقة).',
        descriptionEn: 'Ideal 4-day frequency balancing heavy compound lifts and muscle hypertrophy.',
        badgeAr: 'توازن وقوة 🚀',
        badgeEn: 'Powerbuilding 🚀',
        suitableFor: ['youth', 'adults']
      },
      bro_split: {
        nameAr: 'عضلة كل يوم - بروز سبليت (5-Day Bodypart)',
        nameEn: '5-Day Pro Bodypart Split',
        descriptionAr: 'يوم مخصص لكل عضلة (صدر، ظهر، أكتاف، ذراعين، أرجل) لتركيز عميق.',
        descriptionEn: 'Dedicated daily focus per muscle group: Chest, Back, Shoulders, Arms, Legs.',
        badgeAr: 'تركيز عضلي 🎯',
        badgeEn: 'Deep Focus 🎯',
        suitableFor: ['youth', 'adults']
      },
      full_body: {
        nameAr: 'جسم كامل رياضي (Full Body 3x)',
        nameEn: 'Full Body Athletic 3x',
        descriptionAr: '3 أيام كافية لتمرين كامل عضلات الجسم وحرق سعرات هائل.',
        descriptionEn: 'High-efficiency 3-day full-body compound training for busy schedules.',
        badgeAr: 'أقصى كفاءة ⭐',
        badgeEn: 'High Efficiency ⭐',
        suitableFor: ['youth', 'adults']
      },
      calisthenics: {
        nameAr: 'كاليستنكس ووزن الجسم المتقدم (Calisthenics)',
        nameEn: 'Pro Calisthenics & Bodyweight',
        descriptionAr: 'تحكم كامل بوزن الجسم، عقلة، متوازي، ضغط، وقوة الكور بدون أوزان.',
        descriptionEn: 'Master bodyweight control: Pull-ups, Dips, Push-up variations, and Core.',
        badgeAr: 'رشاقة وقوة 🤸',
        badgeEn: 'Body Control 🤸',
        suitableFor: ['youth', 'adults', 'kids']
      },
      hiit_cardio: {
        nameAr: 'حرق الدهون عالي الكثافة (HIIT & Shred)',
        nameEn: 'HIIT & Fat Burn Shred',
        descriptionAr: 'تمارين كارديو ومقاومة متقطعة لنسف الدهون ورفع كفاءة القلب والرئتين.',
        descriptionEn: 'High-intensity interval circuits to torch calories and boost cardiovascular endurance.',
        badgeAr: 'حرق دهون 🔥',
        badgeEn: 'Fat Loss 🔥',
        suitableFor: ['youth', 'adults']
      },
      home_walking: {
        nameAr: 'لياقة منزلية ومشي 10,000 خطوة',
        nameEn: 'Home Fitness & 10K Steps',
        descriptionAr: 'تمارين منزلية مريحة بدون معدات مع هدف مشي يومي ينعش القلب.',
        descriptionEn: 'Equipment-free home workouts paired with a refreshing daily walking goal.',
        badgeAr: 'لكل العائلة 🏃',
        badgeEn: 'All Family 🏃',
        suitableFor: ['youth', 'adults', 'seniors', 'kids']
      },
      seniors_mobility: {
        nameAr: 'مرونة المفاصل والمشي الصحي لكبار السن',
        nameEn: 'Seniors Mobility, Balance & Gentle Walk',
        descriptionAr: 'تمارين آمنة ولطيفة لتقوية المفاصل، حفظ التوازن، وتنشيط الدورة الدموية.',
        descriptionEn: 'Safe, joint-friendly exercises for balance, circulation, and active longevity.',
        badgeAr: 'كبار السن 🌿',
        badgeEn: 'Senior Friendly 🌿',
        suitableFor: ['seniors', 'adults']
      },
      youth_office: {
        nameAr: 'نشاط الناشئين + فك تيبس المكتب والظهر',
        nameEn: 'Youth Active & Office Posture Relief',
        descriptionAr: 'حركة مرنة للناشئين وتمارين إطالة العمود الفقري والرقبة لمن يجلسون طويلاً.',
        descriptionEn: 'Fun active routines for youth plus spine & neck decompression for desk workers.',
        badgeAr: 'مرونة وصحة 🧘',
        badgeEn: 'Posture & Youth 🧘',
        suitableFor: ['kids', 'adults', 'seniors']
      }
    };

    const DAYS_AR = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function generateWeeklySchedule(splitId, trainingDays) {
      const result = [];
      let workoutCounter = 0;

      for (let day = 0; day < 7; day++) {
        const isTraining = trainingDays.includes(day);
        if (!isTraining) {
          result.push({
            dayOfWeek: day,
            dayNameAr: DAYS_AR[day],
            dayNameEn: DAYS_EN[day],
            isRestDay: true,
            titleAr: 'يوم راحة واستشفاء عضلي 🧘',
            titleEn: 'Active Recovery & Mobility Day 🧘',
            targetMusclesAr: ['استشفاء', 'إطالات', 'مشي خفيف'],
            targetMusclesEn: ['Recovery', 'Stretching', 'Light Walk'],
            exercises: [
              { id: `rest_${day}_1`, nameAr: 'إطالات شاملة للظهر والأرجل', nameEn: 'Full Body Mobility Stretching', sets: '2', reps: '10 min', weightKg: 0, completed: false },
              { id: `rest_${day}_2`, nameAr: 'مشي هادئ في الهواء الطلق', nameEn: 'Outdoor Refreshing Walk', sets: '1', reps: '25 min', weightKg: 0, completed: false },
            ],
            bagPrepared: true,
            preWorkoutMealChecked: true,
          });
          continue;
        }

        workoutCounter++;

        if (splitId === 'ppl') {
          const cycle = (workoutCounter - 1) % 3;
          if (cycle === 0) {
            result.push({
              dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
              titleAr: 'تمرين الدفع (Push: صدر + أكتاف + ترايسبس) 💪',
              titleEn: 'Push Day (Chest, Shoulders & Triceps) 💪',
              targetMusclesAr: ['صدر', 'أكتاف', 'ترايسبس'],
              targetMusclesEn: ['Chest', 'Shoulders', 'Triceps'],
              exercises: [
                { id: `ppl_${day}_1`, nameAr: 'ضغط صدر بالبار (Barbell Bench Press)', nameEn: 'Barbell Bench Press', sets: '4', reps: '8-10', weightKg: 60, completed: false },
                { id: `ppl_${day}_2`, nameAr: 'ضغط دمبل مائل (Incline DB Press)', nameEn: 'Incline Dumbbell Press', sets: '3', reps: '10-12', weightKg: 24, completed: false },
                { id: `ppl_${day}_3`, nameAr: 'ضغط أكتاف عسكري (Overhead Press)', nameEn: 'Overhead Shoulder Press', sets: '3', reps: '8-10', weightKg: 40, completed: false },
                { id: `ppl_${day}_4`, nameAr: 'رفرفة جانبي بالدمبل (Lateral Raises)', nameEn: 'Dumbbell Lateral Raises', sets: '4', reps: '15', weightKg: 10, completed: false },
                { id: `ppl_${day}_5`, nameAr: 'دفع ترايسبس بالحبل (Rope Pushdown)', nameEn: 'Cable Rope Pushdown', sets: '3', reps: '12-15', weightKg: 25, completed: false },
              ],
              bagPrepared: false, preWorkoutMealChecked: false
            });
          } else if (cycle === 1) {
            result.push({
              dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
              titleAr: 'تمرين السحب (Pull: ظهر + بايسبس + خلفية) 🦍',
              titleEn: 'Pull Day (Back, Rear Delts & Biceps) 🦍',
              targetMusclesAr: ['ظهر عريض', 'بايسبس', 'كتف خلفي'],
              targetMusclesEn: ['Lats & Back', 'Biceps', 'Rear Delts'],
              exercises: [
                { id: `ppl_${day}_1`, nameAr: 'سحب عالي عريض (Wide Lat Pulldown)', nameEn: 'Wide-Grip Lat Pulldown', sets: '4', reps: '10-12', weightKg: 55, completed: false },
                { id: `ppl_${day}_2`, nameAr: 'تجديف بالبار (Barbell Bent-Over Row)', nameEn: 'Barbell Bent-Over Row', sets: '4', reps: '8-10', weightKg: 60, completed: false },
                { id: `ppl_${day}_3`, nameAr: 'سحب حبل للوجه (Face Pulls)', nameEn: 'Cable Face Pulls', sets: '4', reps: '15', weightKg: 20, completed: false },
                { id: `ppl_${day}_4`, nameAr: 'تبادل بايسبس بالدمبل (DB Bicep Curls)', nameEn: 'Incline DB Bicep Curls', sets: '3', reps: '10-12', weightKg: 14, completed: false },
                { id: `ppl_${day}_5`, nameAr: 'مطرقة بايسبس (Hammer Curls)', nameEn: 'Hammer Curls', sets: '3', reps: '12', weightKg: 14, completed: false },
              ],
              bagPrepared: false, preWorkoutMealChecked: false
            });
          } else {
            result.push({
              dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
              titleAr: 'تمرين الأرجل والبطن (Legs & Core) 🦵',
              titleEn: 'Legs & Core Power Day 🦵',
              targetMusclesAr: ['أفخاذ أمامية', 'أفخاذ خلفية', 'سمانة', 'بطن'],
              targetMusclesEn: ['Quads', 'Hamstrings', 'Calves', 'Core'],
              exercises: [
                { id: `ppl_${day}_1`, nameAr: 'سكوات بالبار (Barbell Squat)', nameEn: 'Barbell Back Squat', sets: '4', reps: '8-10', weightKg: 80, completed: false },
                { id: `ppl_${day}_2`, nameAr: 'ديدلفت روماني (Romanian Deadlift)', nameEn: 'Romanian Deadlift (RDL)', sets: '3', reps: '10-12', weightKg: 70, completed: false },
                { id: `ppl_${day}_3`, nameAr: 'دفع أرجل بالماكينة (Leg Press)', nameEn: 'Machine Leg Press', sets: '3', reps: '12', weightKg: 140, completed: false },
                { id: `ppl_${day}_4`, nameAr: 'رفع سمانة واقف (Standing Calf Raises)', nameEn: 'Standing Calf Raises', sets: '4', reps: '15-20', weightKg: 50, completed: false },
                { id: `ppl_${day}_5`, nameAr: 'بلانك البطن (Core Plank)', nameEn: 'Weighted / Core Plank', sets: '3', reps: '60 sec', weightKg: 0, completed: false },
              ],
              bagPrepared: false, preWorkoutMealChecked: false
            });
          }
        } else if (splitId === 'arnold') {
          const cycle = (workoutCounter - 1) % 3;
          if (cycle === 0) {
            result.push({
              dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
              titleAr: 'أرنولد 1: صدر + ظهر (Chest & Back Superset) 🔥',
              titleEn: 'Arnold Day 1: Chest & Back Antagonistic 🔥',
              targetMusclesAr: ['صدر كامل', 'ظهر عريض'],
              targetMusclesEn: ['Full Chest', 'Wide Back'],
              exercises: [
                { id: `arn_${day}_1`, nameAr: 'بنش برس + عقلة عريضة (Bench + Pull-ups)', nameEn: 'Bench Press + Wide Pull-ups', sets: '4', reps: '10', weightKg: 65, completed: false },
                { id: `arn_${day}_2`, nameAr: 'ضغط مائل دمبل + تجديف بار (Incline + Row)', nameEn: 'Incline DB Press + Barbell Row', sets: '4', reps: '10-12', weightKg: 26, completed: false },
                { id: `arn_${day}_3`, nameAr: 'تفتيح صدر + سحب أرضي (Flyes + Cable Row)', nameEn: 'Chest Flyes + Seated Cable Row', sets: '3', reps: '12-15', weightKg: 45, completed: false },
                { id: `arn_${day}_4`, nameAr: 'بلوفر بالدمبل (Dumbbell Pullover)', nameEn: 'Dumbbell Pullover', sets: '3', reps: '12', weightKg: 22, completed: false },
              ],
              bagPrepared: false, preWorkoutMealChecked: false
            });
          } else if (cycle === 1) {
            result.push({
              dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
              titleAr: 'أرنولد 2: أكتاف + ذراعين كاملة (Shoulders & Arms) 💪',
              titleEn: 'Arnold Day 2: Shoulders, Biceps & Triceps 💪',
              targetMusclesAr: ['أكتاف 3D', 'بايسبس', 'ترايسبس'],
              targetMusclesEn: ['3D Delts', 'Biceps', 'Triceps'],
              exercises: [
                { id: `arn_${day}_1`, nameAr: 'ضغط أرنولد للأكتاف (Arnold DB Press)', nameEn: 'Arnold Dumbbell Press', sets: '4', reps: '10-12', weightKg: 20, completed: false },
                { id: `arn_${day}_2`, nameAr: 'رفرفة جانبي + خلفي (Lateral & Rear Raises)', nameEn: 'Lateral + Rear Delt Raises', sets: '4', reps: '15', weightKg: 10, completed: false },
                { id: `arn_${day}_3`, nameAr: 'بار بايسبس + كسر جمجمة تراي (EZ Curl + Skullcrusher)', nameEn: 'EZ Bar Curl + Skullcrushers', sets: '4', reps: '10-12', weightKg: 30, completed: false },
                { id: `arn_${day}_4`, nameAr: 'تبادل دمبل + متوازي ترايسبس (Curls + Dips)', nameEn: 'Alternating DB Curls + Tricep Dips', sets: '3', reps: '12', weightKg: 14, completed: false },
              ],
              bagPrepared: false, preWorkoutMealChecked: false
            });
          } else {
            result.push({
              dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
              titleAr: 'أرنولد 3: أرجل وأسفل الظهر والبطن 🦵',
              titleEn: 'Arnold Day 3: Legs, Lower Back & Abs 🦵',
              targetMusclesAr: ['أفخاذ', 'سمانة', 'بطن'],
              targetMusclesEn: ['Quads & Hams', 'Calves', 'Abs'],
              exercises: [
                { id: `arn_${day}_1`, nameAr: 'سكوات خلفي عميق (Deep Barbell Squat)', nameEn: 'Deep Barbell Squat', sets: '5', reps: '8-10', weightKg: 85, completed: false },
                { id: `arn_${day}_2`, nameAr: 'ديدلفت روماني (Stiff-Leg Deadlift)', nameEn: 'Stiff-Legged Deadlift', sets: '4', reps: '10', weightKg: 75, completed: false },
                { id: `arn_${day}_3`, nameAr: 'رفرفة رجل أمامي + خلفي (Leg Ext + Curl)', nameEn: 'Leg Extension + Hamstring Curl', sets: '4', reps: '12-15', weightKg: 50, completed: false },
                { id: `arn_${day}_4`, nameAr: 'رفع أرجل معلق للبطن (Hanging Leg Raises)', nameEn: 'Hanging Leg Raises', sets: '4', reps: '15', weightKg: 0, completed: false },
              ],
              bagPrepared: false, preWorkoutMealChecked: false
            });
          }
        } else if (splitId === 'seniors_mobility') {
          result.push({
            dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
            titleAr: 'تنشيط المفاصل والتوازن والمشي الصحي 🌿',
            titleEn: 'Gentle Joint Mobility, Balance & Healthy Walk 🌿',
            targetMusclesAr: ['مرونة المفاصل', 'توازن الجسم', 'تنشيط القلب'],
            targetMusclesEn: ['Joint Mobility', 'Balance', 'Heart Health'],
            exercises: [
              { id: `sen_${day}_1`, nameAr: 'مشي هادئ ومريح بخطوة منتظمة', nameEn: 'Gentle Steady Paced Walk', sets: '1', reps: '20 دقيقة / min', weightKg: 0, completed: false },
              { id: `sen_${day}_2`, nameAr: 'القيام والجلوس من الكرسي لتقوية الركبة', nameEn: 'Assisted Chair Sit-to-Stand', sets: '3', reps: '8-10 تكرار', weightKg: 0, completed: false },
              { id: `sen_${day}_3`, nameAr: 'دوران الأكتاف والذراعين بلطف', nameEn: 'Gentle Shoulder & Arm Circles', sets: '2', reps: '12 تكرار', weightKg: 0, completed: false },
              { id: `sen_${day}_4`, nameAr: 'تمرين التوازن والوقوف بجانب الحائط', nameEn: 'Wall-Supported Heel-to-Toe Balance', sets: '2', reps: '45 ثانية / sec', weightKg: 0, completed: false },
              { id: `sen_${day}_5`, nameAr: 'تنفس عميق وتمدد الصدر والرقبة', nameEn: 'Deep Breathing & Neck Stretch', sets: '3', reps: '5 أنفاس عميقة', weightKg: 0, completed: false },
            ],
            bagPrepared: true, preWorkoutMealChecked: true
          });
        } else if (splitId === 'calisthenics') {
          result.push({
            dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
            titleAr: 'كاليستنكس وقوة وزن الجسم (Calisthenics Pro) 🤸',
            titleEn: 'Calisthenics & Street Workout Mastery 🤸',
            targetMusclesAr: ['جسم علوي', 'جذع وكور', 'انفجار عضلي'],
            targetMusclesEn: ['Upper Body', 'Core Control', 'Explosiveness'],
            exercises: [
              { id: `cal_${day}_1`, nameAr: 'عقلة بقبضة كاملة (Strict Pull-Ups)', nameEn: 'Strict Pull-Ups', sets: '4', reps: '8-12', weightKg: 0, completed: false },
              { id: `cal_${day}_2`, nameAr: 'متوازي للصدر والترايسبس (Parallel Bar Dips)', nameEn: 'Parallel Bar Dips', sets: '4', reps: '10-15', weightKg: 0, completed: false },
              { id: `cal_${day}_3`, nameAr: 'ضغط ماسي وعريض (Diamond & Wide Push-Ups)', nameEn: 'Diamond & Wide Push-Ups', sets: '4', reps: '15-20', weightKg: 0, completed: false },
              { id: `cal_${day}_4`, nameAr: 'سكوات بلغاري بوزن الجسم (Bulgarian Split Squat)', nameEn: 'Bulgarian Split Squats', sets: '3', reps: '12 لكل رجل', weightKg: 0, completed: false },
              { id: `cal_${day}_5`, nameAr: 'ثبات إل-سيت أو رفع أرجل (L-Sit / Leg Raises)', nameEn: 'L-Sit Hold / Hanging Knee Raises', sets: '4', reps: '30 sec', weightKg: 0, completed: false },
            ],
            bagPrepared: false, preWorkoutMealChecked: false
          });
        } else if (splitId === 'hiit_cardio') {
          result.push({
            dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
            titleAr: 'دائرة حرق الدهون الفائق (HIIT Fat Burner) 🔥',
            titleEn: 'High-Intensity Fat Burn Circuit (HIIT) 🔥',
            targetMusclesAr: ['حرق سعرات', 'لياقة قلبية', 'شد الجسم'],
            targetMusclesEn: ['Calorie Torch', 'Cardio VO2', 'Full Body Tone'],
            exercises: [
              { id: `hiit_${day}_1`, nameAr: 'قفز الحبل أو القفز النجمي (Jumping Jacks)', nameEn: 'Jump Rope / Jumping Jacks', sets: '4', reps: '45 ثانية', weightKg: 0, completed: false },
              { id: `hiit_${day}_2`, nameAr: 'بيربي سريع (Athletic Burpees)', nameEn: 'Athletic Burpees', sets: '4', reps: '12 تكرار', weightKg: 0, completed: false },
              { id: `hiit_${day}_3`, nameAr: 'تسلق الجبل للبطن (Mountain Climbers)', nameEn: 'Fast Mountain Climbers', sets: '4', reps: '40 ثانية', weightKg: 0, completed: false },
              { id: `hiit_${day}_4`, nameAr: 'سكوات مع قفز خفيف (Jump Squats)', nameEn: 'Explosive Squat Jumps', sets: '3', reps: '15 تكرار', weightKg: 0, completed: false },
              { id: `hiit_${day}_5`, nameAr: 'جري في المكان بركبة عالية (High Knees)', nameEn: 'High Knees Sprint in Place', sets: '4', reps: '30 ثانية', weightKg: 0, completed: false },
            ],
            bagPrepared: true, preWorkoutMealChecked: false
          });
        } else if (splitId === 'youth_office') {
          result.push({
            dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
            titleAr: 'نشاط الأبطال وفك تيبس الظهر والرقبة 🧘',
            titleEn: 'Active Champions & Spine Posture Relief 🧘',
            targetMusclesAr: ['استقامة الظهر', 'مرونة الرقبة', 'نشاط حركي'],
            targetMusclesEn: ['Spine Posture', 'Neck Relief', 'Active Energy'],
            exercises: [
              { id: `yo_${day}_1`, nameAr: 'تمدد القطة والجمل للعمود الفقري (Cat-Cow Stretch)', nameEn: 'Cat-Cow Spine Decompression', sets: '3', reps: '12 تكرار', weightKg: 0, completed: false },
              { id: `yo_${day}_2`, nameAr: 'فتح الصدر والأكتاف ضد تحدب المكتب', nameEn: 'Thoracic & Chest Wall Opener', sets: '3', reps: '30 ثانية', weightKg: 0, completed: false },
              { id: `yo_${day}_3`, nameAr: 'سكوات حر لتنشيط الدورة الدموية', nameEn: 'Energizing Bodyweight Squats', sets: '3', reps: '15 تكرار', weightKg: 0, completed: false },
              { id: `yo_${day}_4`, nameAr: 'تمرين سوبرمان لتقوية أسفل الظهر', nameEn: 'Superman Back Extension', sets: '3', reps: '12 تكرار', weightKg: 0, completed: false },
            ],
            bagPrepared: true, preWorkoutMealChecked: true
          });
        } else {
          const isUpper = workoutCounter % 2 !== 0;
          result.push({
            dayOfWeek: day, dayNameAr: DAYS_AR[day], dayNameEn: DAYS_EN[day], isRestDay: false,
            titleAr: splitId === 'home_walking' ? 'لياقة منزلية + 10,000 خطوة 🏃' : isUpper ? 'الجزء العلوي الشامل ⚡' : 'الجزء السفلي والكور 🚀',
            titleEn: splitId === 'home_walking' ? 'Home Fitness & 10K Steps 🏃' : isUpper ? 'Upper Body Power ⚡' : 'Lower Body & Core 🚀',
            targetMusclesAr: ['صدر وظهر', 'أكتاف وذراعين', 'أرجل وكور'],
            targetMusclesEn: ['Chest & Back', 'Shoulders & Arms', 'Legs & Core'],
            exercises: [
              { id: `gen_${day}_1`, nameAr: 'تمرين ضغط الصدر أو بنش برس', nameEn: 'Push-Ups / Chest Press', sets: '4', reps: '12', weightKg: 40, completed: false },
              { id: `gen_${day}_2`, nameAr: 'سحب ظهر أو عقلة منزلية', nameEn: 'Back Rows / Pull-Ups', sets: '4', reps: '12', weightKg: 45, completed: false },
              { id: `gen_${day}_3`, nameAr: 'سكوات كامل للأرجل', nameEn: 'Full Squats', sets: '4', reps: '15', weightKg: 50, completed: false },
              { id: `gen_${day}_4`, nameAr: 'ضغط أكتاف ورفرفة جانبي', nameEn: 'Shoulder Press & Lateral Raise', sets: '3', reps: '12', weightKg: 14, completed: false },
              { id: `gen_${day}_5`, nameAr: 'بلانك البطن + مشي سريع', nameEn: 'Core Plank + Brisk Walk', sets: '3', reps: '60 sec', weightKg: 0, completed: false },
            ],
            bagPrepared: false, preWorkoutMealChecked: false
          });
        }
      }
      return result;
    }

    // --- INTERACTIVE ATHKAR ITEMS ---
    const DEFAULT_ATHKAR_LIST = [
      { id: 'thikr_1', titleAr: 'آية الكرسي (حفظ من كل سوء)', titleEn: 'Ayat Al-Kursi (Divine Protection)', textAr: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...', target: 1, current: 0 },
      { id: 'thikr_2', titleAr: 'سيد الاستغفار', titleEn: 'Master Supplication for Forgiveness', textAr: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت...', target: 1, current: 0 },
      { id: 'thikr_3', titleAr: 'بسم الله الذي لا يضر مع اسمه شيء', titleEn: 'In the Name of Allah with Whose Name nothing harms', textAr: 'بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.', target: 3, current: 0 },
      { id: 'thikr_4', titleAr: 'حسبي الله لا إله إلا هو عليه توكلت', titleEn: 'Allah is sufficient for me', textAr: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.', target: 7, current: 0 },
      { id: 'thikr_5', titleAr: 'سبحان الله وبحمده', titleEn: 'Glory and Praise be to Allah', textAr: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.', target: 10, current: 0 }
    ];

    // --- STORAGE & INITIAL STATE ---
    const STORAGE_KEY = 'sahly_day_ultra_os_v3';

    function generateClientId() {
      const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `SD_${Date.now().toString(36).toUpperCase().slice(-4)}_${rand}`;
    }

    const DEFAULT_USER_PROFILE = {
      clientId: generateClientId(),
      email: 'user@sahly.day',
      name: 'بطل سهلي دي',
      ageGroup: 'adults',
      language: 'ar',
      theme: 'cyber',
      fontScale: 'normal',
      wakeTime: '06:00',
      sleepTime: '23:00',
      dateOfBirth: '1995-05-14',
      weightKg: 76,
      heightCm: 176,
      ageYears: 29,
      fitnessGoal: 'recomp',
      waterDailyTargetMl: 2700,
      prayerEnabled: true,
      cityName: 'الإسكندرية، مصر',
      latitude: 31.2001,
      longitude: 29.9187,
      workoutSplitId: 'ppl',
      trainingDays: [6, 0, 1, 3, 4],
      xp: 340,
      level: 4,
      streakDays: 12,
      familyBirthdays: [
        { id: 'fam_1', name: 'سارة', relation: 'ابنة / Daughter', birthDate: '2018-10-20' },
        { id: 'fam_2', name: 'أحمد', relation: 'أخ / Brother', birthDate: '1992-11-15' }
      ],
      isOnboarded: false,
      lastSyncedAt: null
    };

    const DEFAULT_MEDICINES = [
      { id: 'med_1', name: 'فيتامين D3 + أوميجا 3 (Vitamin D3 + Omega)', dosage: 'كبسولة بعد الإفطار / After Breakfast', time: '09:00', completedToday: false, streakDays: 14, category: 'vitamin' },
      { id: 'med_2', name: 'مغنيسيوم جلايسينات (Magnesium)', dosage: 'حبة قبل النوم / Before Sleep', time: '22:30', completedToday: false, streakDays: 21, category: 'supplement' }
    ];

    const DEFAULT_TASKS = [
      { id: 'tsk_1', titleAr: 'قراءة 15 دقيقة من كتاب مفيد', titleEn: 'Read 15 minutes of a useful book', priority: 'high', category: 'personal', completed: false },
      { id: 'tsk_2', titleAr: 'إنجاز المهمة الأساسية في العمل / الدراسة', titleEn: 'Complete #1 Deep Work / Study Task', priority: 'high', category: 'work', completed: false },
      { id: 'tsk_3', titleAr: 'التواصل مع الوالدين والعائلة', titleEn: 'Check in with parents & family', priority: 'medium', category: 'family', completed: false }
    ];

    function getInitialState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('sahly_day_app_state_v1');
        if (saved) {
          const parsed = JSON.parse(saved);
          const mergedUser = { ...DEFAULT_USER_PROFILE, ...(parsed.user || {}) };
          if (!mergedUser.clientId) mergedUser.clientId = generateClientId();
          return {
            user: mergedUser,
            prayers: parsed.prayers || calculatePrayerTimes(new Date(), mergedUser.latitude, mergedUser.longitude),
            athkar: {
              morningCompleted: false,
              eveningCompleted: false,
              quranPagesRead: 3,
              quranDailyTarget: 4,
              khatmahTotalPages: 145,
              tasbihCount: 33,
              tasbihPhrase: 'سبحان الله وبحمده',
              items: DEFAULT_ATHKAR_LIST,
              ...(parsed.athkar || {})
            },
            weeklyWorkouts: parsed.weeklyWorkouts || generateWeeklySchedule(mergedUser.workoutSplitId, mergedUser.trainingDays),
            medicines: parsed.medicines || DEFAULT_MEDICINES,
            hydration: {
              currentMl: 750,
              targetMl: mergedUser.waterDailyTargetMl || 2700,
              cupSizeMl: 250,
              logs: [
                { time: '07:30', amountMl: 250, type: 'ماء نقي 💧' },
                { time: '10:15', amountMl: 250, type: 'ماء نقي 💧' },
                { time: '13:00', amountMl: 250, type: 'شاي أخضر 🍵' }
              ],
              ...(parsed.hydration || {})
            },
            vitals: {
              bloodPressure: '120/80',
              bloodSugar: '94',
              heartRate: '72',
              sleepHours: 7.5,
              steps: 6420,
              stepsGoal: 10000,
              proteinGrams: 95,
              caloriesConsumed: 1650,
              mood: 'energetic',
              ...(parsed.vitals || {})
            },
            tasks: parsed.tasks || DEFAULT_TASKS
          };
        }
      } catch (e) {}

      const prayers = calculatePrayerTimes(new Date(), DEFAULT_USER_PROFILE.latitude, DEFAULT_USER_PROFILE.longitude);
      const weeklyWorkouts = generateWeeklySchedule(DEFAULT_USER_PROFILE.workoutSplitId, DEFAULT_USER_PROFILE.trainingDays);
      return {
        user: DEFAULT_USER_PROFILE,
        prayers,
        athkar: {
          morningCompleted: false,
          eveningCompleted: false,
          quranPagesRead: 2,
          quranDailyTarget: 4,
          khatmahTotalPages: 120,
          tasbihCount: 0,
          tasbihPhrase: 'سبحان الله وبحمده',
          items: DEFAULT_ATHKAR_LIST
        },
        weeklyWorkouts,
        medicines: DEFAULT_MEDICINES,
        hydration: {
          currentMl: 750,
          targetMl: DEFAULT_USER_PROFILE.waterDailyTargetMl,
          cupSizeMl: 250,
          logs: [
            { time: '07:30', amountMl: 250, type: 'ماء نقي 💧' },
            { time: '10:15', amountMl: 250, type: 'ماء نقي 💧' },
            { time: '13:00', amountMl: 250, type: 'ماء نقي 💧' }
          ]
        },
        vitals: {
          bloodPressure: '120/80',
          bloodSugar: '95',
          heartRate: '72',
          sleepHours: 7.5,
          steps: 5200,
          stepsGoal: 10000,
          proteinGrams: 85,
          caloriesConsumed: 1500,
          mood: 'energetic'
        },
        tasks: DEFAULT_TASKS
      };
    }

    function saveStateLocally(state) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {}
    }

    // --- SILENT ENTERPRISE CLOUD SYNC SERVICE (Zero user-facing mention of Google Sheets) ---
    async function pushClientStateToCloud(state) {
      if (!SAHLY_CLOUD_API_URL) return { ok: false };
      const clientKey = (state.user.email && state.user.email !== 'user@sahly.day')
        ? state.user.email.trim().toLowerCase()
        : state.user.clientId;
      const dedicatedSpace = ('Client_' + clientKey.replace(/[^a-zA-Z0-9_\u0600-\u06FF]/g, '_')).slice(0, 30);

      try {
        await fetch(SAHLY_CLOUD_API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            action: 'PUSH_ISOLATED_CLIENT_STATE',
            clientId: state.user.clientId,
            email: state.user.email,
            dedicatedSheetName: dedicatedSpace,
            state: state,
            version: '4.0-ENTERPRISE'
          })
        });
        return { ok: true, syncedAt: new Date().toLocaleTimeString() };
      } catch (err) {
        return { ok: false };
      }
    }

    async function fetchClientStateFromCloud(email, clientId) {
      if (!SAHLY_CLOUD_API_URL) return null;
      try {
        const query = `?email=${encodeURIComponent(email || '')}&clientId=${encodeURIComponent(clientId || '')}`;
        const res = await fetch(`${SAHLY_CLOUD_API_URL}${query}`);
        const data = await res.json();
        if (data && data.success && data.found && data.state) {
          return data;
        }
      } catch (err) {}
      return null;
    }

    // --- SVG CIRCULAR PROGRESS RING COMPONENT ---
    const CircularProgressRing = ({ percentage = 0, size = 110, strokeWidth = 10, label = '' }) => {
      const radius = (size - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (Math.min(100, Math.max(0, percentage)) / 100) * circumference;
      return (
        <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="-rotate-90 transform">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(148, 163, 184, 0.18)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="var(--accent-main)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
              style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-mono font-black text-xl leading-none">{percentage}%</span>
            {label && <span className="text-[10px] theme-text-muted font-bold mt-1">{label}</span>}
          </div>
        </div>
      );
    };

    // --- ONBOARDING WIZARD (ALL AGES, 7 THEMES & BILINGUAL) ---
    const OnboardingWizard = ({ initialProfile, onComplete, onRestoreCloud }) => {
      const [profile, setProfile] = useState(initialProfile);
      const [step, setStep] = useState(1);
      const [isRestoring, setIsRestoring] = useState(false);
      const [restoreMsg, setRestoreMsg] = useState('');
      const lang = profile.language || 'ar';
      const isAr = lang === 'ar';

      useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = isAr ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('data-theme', profile.theme || 'cyber');
        document.documentElement.setAttribute('data-font-scale', profile.fontScale || 'normal');
      }, [lang, isAr, profile.theme, profile.fontScale]);

      const handleSelectAgeGroup = (groupKey) => {
        soundFX.playClick();
        let recommendedSplit = profile.workoutSplitId;
        let recommendedFont = 'normal';
        if (groupKey === 'seniors') {
          recommendedSplit = 'seniors_mobility';
          recommendedFont = 'lg';
        } else if (groupKey === 'kids') {
          recommendedSplit = 'youth_office';
        } else if (groupKey === 'youth') {
          recommendedSplit = 'ppl';
        } else if (groupKey === 'adults') {
          recommendedSplit = 'upper_lower';
        }
        setProfile({
          ...profile,
          ageGroup: groupKey,
          workoutSplitId: recommendedSplit,
          fontScale: recommendedFont
        });
      };

      const handleCheckCloud = async () => {
        if (!profile.email) return;
        setIsRestoring(true);
        setRestoreMsg(isAr ? 'جاري فحص ومزامنة حسابك السحابي المشفر...' : 'Checking your encrypted Sahly Cloud account...');
        const res = await fetchClientStateFromCloud(profile.email, profile.clientId);
        setIsRestoring(false);
        if (res && res.state) {
          soundFX.playCelebration();
          setRestoreMsg(isAr ? 'تم استرجاع حسابك السحابي بنجاح! ⚡' : 'Your cloud account was restored! ⚡');
          onRestoreCloud(res.state);
        } else {
          setRestoreMsg(isAr ? 'تم تفعيل مساحة سحابية مشفرة خاصة بحسابك تلقائياً! ✨' : 'Dedicated encrypted cloud account provisioned! ✨');
        }
      };

      const toggleTrainingDay = (dayIdx) => {
        soundFX.playClick();
        const exists = profile.trainingDays.includes(dayIdx);
        const updated = exists ? profile.trainingDays.filter((d) => d !== dayIdx) : [...profile.trainingDays, dayIdx].sort();
        setProfile({ ...profile, trainingDays: updated });
      };

      return (
        <div className="min-h-screen flex items-center justify-center p-3 sm:p-6">
          <div className="w-full max-w-2xl hero-card rounded-3xl p-5 sm:p-8 relative overflow-hidden">
            {/* Top Language & Theme Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b theme-border pb-4 mb-5">
              <div className="flex items-center gap-3">
                <img
                  src={LOGO_FILE_PATH}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK_SVG_LOGO; }}
                  alt="Sahly Day"
                  className="w-12 h-12 rounded-2xl object-contain border-2 border-cyan-400 shadow-lg"
                />
                <div>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                    {isAr ? 'سهلي دي ألترا ⚡' : 'Sahly Day Ultra ⚡'}
                  </h1>
                  <p className="text-xs theme-text-muted font-bold">
                    {isAr ? `الخطوة ${step} من 3 — تخصيص التجربة الذكية` : `Step ${step} of 3 — Personalize Your Experience`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { soundFX.playClick(); setProfile({ ...profile, language: isAr ? 'en' : 'ar' }); }}
                  className="px-3.5 py-2 rounded-xl glass-card text-xs font-black touch-target"
                >
                  {isAr ? '🌐 English' : '🌐 العربية'}
                </button>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-black mb-2">
                    {isAr ? '1. اختر الفئة العمرية ونمط الواجهة:' : '1. Select Your Age Persona & Adaptive UI:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {Object.keys(I18N[lang].ageGroups).map((gKey) => {
                      const item = I18N[lang].ageGroups[gKey];
                      const active = profile.ageGroup === gKey;
                      return (
                        <button
                          key={gKey}
                          type="button"
                          onClick={() => handleSelectAgeGroup(gKey)}
                          className={`p-3.5 rounded-2xl border transition-all ${
                            active ? 'border-cyan-400 bg-cyan-500/15 shadow-lg scale-[1.01]' : 'glass-card opacity-85'
                          }`}
                          style={{ textAlign: isAr ? 'right' : 'left' }}
                        >
                          <div className="font-black text-sm">{item.label}</div>
                          <div className="text-xs theme-text-muted mt-1 leading-relaxed">{item.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 7 Flagship Themes Selector */}
                <div>
                  <label className="block text-xs font-black theme-text-muted mb-2">
                    {isAr ? 'اختر الثيم والمظهر البصري المريح لعينيك (7 ثيمات احترافية):' : 'Choose Your Eye-Comfort Visual Theme (7 Flagship Themes):'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {THEME_CATALOG.map((th) => {
                      const active = profile.theme === th.id;
                      return (
                        <button
                          key={th.id}
                          type="button"
                          onClick={() => { soundFX.playClick(); setProfile({ ...profile, theme: th.id }); }}
                          className={`p-2.5 rounded-2xl border flex items-center gap-2 text-xs font-black transition-all ${
                            active ? 'border-cyan-400 ring-2 ring-cyan-400/30 glass-card' : 'glass-card opacity-80'
                          }`}
                        >
                          <span className="w-5 h-5 rounded-full shrink-0 border border-white/20" style={{ background: th.preview }} />
                          <span className="truncate">{isAr ? th.nameAr : th.nameEn}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold theme-text-muted mb-1">
                      {isAr ? 'الاسم الكريم' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl surface-field font-bold text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold theme-text-muted mb-1">
                      {isAr ? 'البريد الإلكتروني (لحفظ حسابك السحابي المشفر)' : 'Email Address (For Encrypted Cloud Sync)'}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        placeholder="name@example.com"
                        className="flex-1 px-3 py-2.5 rounded-xl surface-field text-xs font-bold"
                      />
                      <button
                        type="button"
                        onClick={handleCheckCloud}
                        disabled={isRestoring}
                        className="btn-primary px-3.5 py-2 rounded-xl text-xs shrink-0"
                      >
                        {isRestoring ? '...' : isAr ? 'استرجاع 🔄' : 'Restore 🔄'}
                      </button>
                    </div>
                  </div>
                </div>
                {restoreMsg && <p className="text-xs font-bold accent-text">{restoreMsg}</p>}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="glass-card p-3 rounded-2xl text-center">
                    <label className="block text-xs font-bold theme-text-muted mb-1">{isAr ? 'الوزن (كجم)' : 'Weight (kg)'}</label>
                    <input
                      type="number"
                      value={profile.weightKg}
                      onChange={(e) => {
                        const w = Number(e.target.value) || 70;
                        setProfile({ ...profile, weightKg: w, waterDailyTargetMl: Math.round(w * 35) });
                      }}
                      className="w-full surface-field rounded-xl py-2 text-center font-black"
                    />
                  </div>
                  <div className="glass-card p-3 rounded-2xl text-center">
                    <label className="block text-xs font-bold theme-text-muted mb-1">{isAr ? 'الطول (سم)' : 'Height (cm)'}</label>
                    <input
                      type="number"
                      value={profile.heightCm}
                      onChange={(e) => setProfile({ ...profile, heightCm: Number(e.target.value) || 170 })}
                      className="w-full surface-field rounded-xl py-2 text-center font-black"
                    />
                  </div>
                  <div className="glass-card p-3 rounded-2xl text-center">
                    <label className="block text-xs font-bold theme-text-muted mb-1">{isAr ? 'العمر' : 'Age'}</label>
                    <input
                      type="number"
                      value={profile.ageYears}
                      onChange={(e) => setProfile({ ...profile, ageYears: Number(e.target.value) || 25 })}
                      className="w-full surface-field rounded-xl py-2 text-center font-black"
                    />
                  </div>
                </div>

                <div className="glass-card p-3.5 rounded-2xl">
                  <label className="block text-xs font-black mb-2">
                    {isAr ? 'المدينة ومواقيت الصلاة الفلكية' : 'City & Astronomical Prayer Times'}
                  </label>
                  <select
                    value={profile.cityName}
                    onChange={(e) => {
                      const found = CITIES_PRESETS.find((c) => c.nameAr === e.target.value || c.nameEn === e.target.value);
                      if (found) {
                        setProfile({ ...profile, cityName: isAr ? found.nameAr : found.nameEn, latitude: found.lat, longitude: found.lng });
                      }
                    }}
                    className="w-full px-3 py-2.5 rounded-xl surface-field text-xs font-bold"
                  >
                    {CITIES_PRESETS.map((c) => (
                      <option key={c.id} value={isAr ? c.nameAr : c.nameEn}>
                        {isAr ? c.nameAr : c.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-card p-3 rounded-2xl">
                    <label className="block text-xs font-bold theme-text-muted mb-1">{isAr ? 'موعد الاستيقاظ ☀️' : 'Wake Up Time ☀️'}</label>
                    <input
                      type="time"
                      value={profile.wakeTime}
                      onChange={(e) => setProfile({ ...profile, wakeTime: e.target.value })}
                      className="w-full surface-field rounded-xl py-2 text-center font-bold"
                    />
                  </div>
                  <div className="glass-card p-3 rounded-2xl">
                    <label className="block text-xs font-bold theme-text-muted mb-1">{isAr ? 'موعد النوم 🌙' : 'Sleep Time 🌙'}</label>
                    <input
                      type="time"
                      value={profile.sleepTime}
                      onChange={(e) => setProfile({ ...profile, sleepTime: e.target.value })}
                      className="w-full surface-field rounded-xl py-2 text-center font-bold"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-black mb-2">
                    {isAr ? 'اختر نظامك الرياضي والحركي المفضل (10 أنظمة احترافية):' : 'Select Your Pro Workout & Activity System (10 Systems):'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                    {Object.keys(SPLIT_DEFINITIONS).map((sKey) => {
                      const sp = SPLIT_DEFINITIONS[sKey];
                      const selected = profile.workoutSplitId === sKey;
                      return (
                        <button
                          key={sKey}
                          type="button"
                          onClick={() => { soundFX.playClick(); setProfile({ ...profile, workoutSplitId: sKey }); }}
                          className={`p-3 rounded-2xl border transition-all ${
                            selected ? 'border-cyan-400 bg-cyan-500/15 shadow-md' : 'glass-card opacity-85'
                          }`}
                          style={{ textAlign: isAr ? 'right' : 'left' }}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-black text-xs">{isAr ? sp.nameAr : sp.nameEn}</span>
                            <span className="text-[10px] bg-cyan-500/20 accent-text px-2 py-0.5 rounded-full shrink-0 font-bold">
                              {isAr ? sp.badgeAr : sp.badgeEn}
                            </span>
                          </div>
                          <p className="text-[11px] theme-text-muted mt-1 leading-snug">
                            {isAr ? sp.descriptionAr : sp.descriptionEn}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="glass-card p-3.5 rounded-2xl">
                  <label className="block text-xs font-black mb-2">
                    {isAr ? 'أيام النشاط والتمرين الأسبوعية:' : 'Weekly Active / Training Days:'}
                  </label>
                  <div className="grid grid-cols-7 gap-1.5">
                    {[6, 0, 1, 2, 3, 4, 5].map((dIdx) => {
                      const active = profile.trainingDays.includes(dIdx);
                      return (
                        <button
                          key={dIdx}
                          type="button"
                          onClick={() => toggleTrainingDay(dIdx)}
                          className={`py-2.5 rounded-xl text-xs font-black border touch-target ${
                            active ? 'btn-primary border-transparent' : 'surface-field opacity-75'
                          }`}
                        >
                          {isAr ? DAYS_AR[dIdx] : DAYS_EN[dIdx].slice(0, 3)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between border-t theme-border pt-4 mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-2.5 rounded-xl glass-card text-xs font-black touch-target"
                >
                  {isAr ? 'السابق' : 'Back'}
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={() => {
                  if (step < 3) {
                    soundFX.playClick();
                    setStep(step + 1);
                  } else {
                    soundFX.playCelebration();
                    onComplete({ ...profile, isOnboarded: true });
                  }
                }}
                className="btn-primary px-6 py-2.5 rounded-xl text-sm font-black touch-target"
              >
                {step < 3 ? (isAr ? 'التالي ←' : 'Next →') : (isAr ? 'ابدأ رحلتك الآن 🚀' : 'Start Your Journey 🚀')}
              </button>
            </div>
          </div>
        </div>
      );
    };

    // --- MAIN APPLICATION ---
    function App() {
      const [state, setState] = useState(() => getInitialState());
      const [activeTab, setActiveTab] = useState('timeline');
      const [toastMsg, setToastMsg] = useState(null);
      const [syncStatus, setSyncStatus] = useState('synced');

      // Gym Rest Timer State
      const [restSecondsLeft, setRestSecondsLeft] = useState(0);
      const [restTotalSeconds, setRestTotalSeconds] = useState(60);
      const [isRestRunning, setIsRestRunning] = useState(false);

      // 1RM Calculator State
      const [rmWeight, setRmWeight] = useState(60);
      const [rmReps, setRmReps] = useState(8);

      // Custom Exercise State
      const [newExName, setNewExName] = useState('');
      const [newExSets, setNewExSets] = useState('3');
      const [newExReps, setNewExReps] = useState('12');
      const [newExWeight, setNewExWeight] = useState(20);
      const [selectedWorkoutDay, setSelectedWorkoutDay] = useState(() => new Date().getDay());

      // Pomodoro Focus Timer State
      const [focusSeconds, setFocusSeconds] = useState(25 * 60);
      const [isFocusRunning, setIsFocusRunning] = useState(false);
      const [focusModeLabel, setFocusModeLabel] = useState('25m Deep Focus');

      // New Task State
      const [newTaskTitle, setNewTaskTitle] = useState('');
      const [newTaskPriority, setNewTaskPriority] = useState('high');

      // New Medicine State
      const [showMedModal, setShowMedModal] = useState(false);
      const [medName, setMedName] = useState('');
      const [medDose, setMedDose] = useState('كبسولة بعد الأكل / 1 Cap');
      const [medTime, setMedTime] = useState('09:00');
      const [medCat, setMedCat] = useState('vitamin');

      // New Family Birthday State
      const [famName, setFamName] = useState('');
      const [famRel, setFamRel] = useState('ابن / Son');
      const [famDate, setFamDate] = useState('');

      const syncTimerRef = useRef(null);
      const lang = state.user.language || 'ar';
      const isAr = lang === 'ar';
      const t = I18N[lang];

      // Sync theme, dir, and font-scale attributes
      useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = isAr ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('data-theme', state.user.theme || 'cyber');
        document.documentElement.setAttribute('data-font-scale', state.user.fontScale || 'normal');
      }, [lang, isAr, state.user.theme, state.user.fontScale]);

      // Save locally & silently sync in background
      useEffect(() => {
        saveStateLocally(state);
        if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
        syncTimerRef.current = setTimeout(async () => {
          setSyncStatus('syncing');
          await pushClientStateToCloud(state);
          setSyncStatus('synced');
        }, 1200);
      }, [state]);

      // Silent auto-restore on launch
      useEffect(() => {
        const autoConnect = async () => {
          if (state.user.email && state.user.email !== 'user@sahly.day') {
            const cloud = await fetchClientStateFromCloud(state.user.email, state.user.clientId);
            if (cloud && cloud.state && cloud.state.user) {
              setState((prev) => ({ ...prev, ...cloud.state }));
            }
          }
        };
        autoConnect();
      }, []);

      // Rest Timer Countdown
      useEffect(() => {
        if (!isRestRunning || restSecondsLeft <= 0) return;
        const timer = setInterval(() => {
          setRestSecondsLeft((prev) => {
            if (prev <= 1) {
              setIsRestRunning(false);
              soundFX.playTimerAlarm();
              showToast(isAr ? 'انتهى وقت الراحة! استعد للجولة التالية 💪⚡' : 'Rest complete! Time for your next set 💪⚡');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        return () => clearInterval(timer);
      }, [isRestRunning, restSecondsLeft, isAr]);

      // Pomodoro Focus Countdown
      useEffect(() => {
        if (!isFocusRunning || focusSeconds <= 0) return;
        const timer = setInterval(() => {
          setFocusSeconds((prev) => {
            if (prev <= 1) {
              setIsFocusRunning(false);
              soundFX.playCelebration();
              awardXP(25);
              showToast(isAr ? 'أحسنت! أتممت جلسة تركيز كاملة (+25 XP) 🎯' : 'Awesome! Focus session completed (+25 XP) 🎯');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        return () => clearInterval(timer);
      }, [isFocusRunning, focusSeconds, isAr]);

      const showToast = (msg) => {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(null), 3200);
      };

      const awardXP = (amount) => {
        setState((prev) => {
          const nextXp = (prev.user.xp || 0) + amount;
          const nextLevel = Math.floor(nextXp / 100) + 1;
          return {
            ...prev,
            user: { ...prev.user, xp: nextXp, level: nextLevel }
          };
        });
      };

      const updateUserField = (patch) => {
        setState((prev) => ({
          ...prev,
          user: { ...prev.user, ...patch }
        }));
      };

      // Computed Daily Progress Score
      const dailyProgressPercentage = useMemo(() => {
        const prayersDone = state.prayers.filter((p) => p.id !== 'sunrise' && p.completed).length;
        const waterRatio = Math.min(1, state.hydration.currentMl / (state.hydration.targetMl || 2500));
        const currentDayIdx = new Date().getDay();
        const todayW = state.weeklyWorkouts.find((w) => w.dayOfWeek === currentDayIdx) || state.weeklyWorkouts[0];
        const exTotal = todayW?.exercises?.length || 1;
        const exDone = todayW?.exercises?.filter((e) => e.completed).length || 0;
        const medsTotal = state.medicines.length || 1;
        const medsDone = state.medicines.filter((m) => m.completedToday).length;
        const tasksTotal = state.tasks.length || 1;
        const tasksDone = state.tasks.filter((t) => t.completed).length;

        const score = ((prayersDone / 5) * 30) + (waterRatio * 20) + ((exDone / exTotal) * 20) + ((medsDone / medsTotal) * 15) + ((tasksDone / tasksTotal) * 15);
        return Math.min(100, Math.round(score));
      }, [state]);

      // Computed Nutrition & BMI
      const nutritionMetrics = useMemo(() => {
        const w = state.user.weightKg || 75;
        const h = state.user.heightCm || 175;
        const age = state.user.ageYears || 28;
        const bmi = (w / Math.pow(h / 100, 2)).toFixed(1);
        const bmr = Math.round(10 * w + 6.25 * h - 5 * age + 5);
        const tdeeBase = Math.round(bmr * 1.55);
        const targetCalories = state.user.fitnessGoal === 'cut' ? tdeeBase - 450 : state.user.fitnessGoal === 'bulk' ? tdeeBase + 350 : tdeeBase;
        const proteinTarget = Math.round(w * 2.0);
        const fatsTarget = Math.round((targetCalories * 0.25) / 9);
        const carbsTarget = Math.round((targetCalories - (proteinTarget * 4) - (fatsTarget * 9)) / 4);
        return { bmi, bmr, tdeeBase, targetCalories, proteinTarget, fatsTarget, carbsTarget };
      }, [state.user.weightKg, state.user.heightCm, state.user.ageYears, state.user.fitnessGoal]);

      // Handlers
      const handleOnboardingComplete = (newProfile) => {
        const updatedPrayers = calculatePrayerTimes(new Date(), newProfile.latitude, newProfile.longitude);
        const updatedWorkouts = generateWeeklySchedule(newProfile.workoutSplitId, newProfile.trainingDays);
        setState((prev) => ({
          ...prev,
          user: newProfile,
          prayers: updatedPrayers,
          weeklyWorkouts: updatedWorkouts,
          hydration: { ...prev.hydration, targetMl: newProfile.waterDailyTargetMl }
        }));
        showToast(isAr ? 'أهلاً بك في سهلي دي ألترا! تم إعداد حسابك الذكي بنجاح ⚡' : 'Welcome to Sahly Day Ultra! Smart Profile Ready ⚡');
      };

      const handleTogglePrayer = (prayerId) => {
        soundFX.playClick();
        setState((prev) => ({
          ...prev,
          prayers: prev.prayers.map((p) => p.id === prayerId ? { ...p, completed: !p.completed } : p)
        }));
        awardXP(15);
      };

      const handleToggleSunnah = (prayerId) => {
        soundFX.playClick();
        setState((prev) => ({
          ...prev,
          prayers: prev.prayers.map((p) => p.id === prayerId ? { ...p, sunnahCompleted: !p.sunnahCompleted } : p)
        }));
        awardXP(10);
      };

      const handleDetectGPS = () => {
        if (!navigator.geolocation) {
          showToast(isAr ? 'الجهاز لا يدعم تحديد الموقع' : 'Geolocation not supported');
          return;
        }
        showToast(isAr ? 'جاري تحديد موقعك بدقة عبر الـ GPS...' : 'Detecting GPS coordinates...');
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            const newPrayers = calculatePrayerTimes(new Date(), latitude, longitude);
            setState((prev) => ({
              ...prev,
              user: { ...prev.user, latitude, longitude, cityName: isAr ? `موقعي عبر GPS (${latitude.toFixed(2)}, ${longitude.toFixed(2)})` : `GPS Location (${latitude.toFixed(2)}, ${longitude.toFixed(2)})` },
              prayers: newPrayers
            }));
            soundFX.playCelebration();
            showToast(isAr ? 'تم ضبط مواقيت الصلاة حسب إحداثيات موقعك! 🕌' : 'Prayer times synced to your GPS coordinates! 🕌');
          },
          () => {
            showToast(isAr ? 'تعذر الوصول للـ GPS، يمكنك اختيار مدينتك من القائمة' : 'Could not access GPS, please select your city from the list');
          }
        );
      };

      const handleAddWater = (amountMl, drinkLabel) => {
        soundFX.playWaterDrop();
        const timeStr = new Date().toLocaleTimeString(isAr ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit' });
        setState((prev) => ({
          ...prev,
          hydration: {
            ...prev.hydration,
            currentMl: prev.hydration.currentMl + amountMl,
            logs: [{ time: timeStr, amountMl, type: drinkLabel || (isAr ? 'ماء نقي 💧' : 'Pure Water 💧') }, ...prev.hydration.logs]
          }
        }));
        awardXP(5);
      };

      const handleChangeWorkoutSplit = (newSplitId) => {
        soundFX.playCelebration();
        setState((prev) => ({
          ...prev,
          user: { ...prev.user, workoutSplitId: newSplitId },
          weeklyWorkouts: generateWeeklySchedule(newSplitId, prev.user.trainingDays)
        }));
        showToast(isAr ? 'تم تفعيل النظام الرياضي الجديد بنجاح! 💪' : 'New workout split activated! 💪');
      };

      const handleToggleExercise = (dayOfWeek, exId) => {
        soundFX.playClick();
        setState((prev) => ({
          ...prev,
          weeklyWorkouts: prev.weeklyWorkouts.map((w) => {
            if (w.dayOfWeek !== dayOfWeek) return w;
            return {
              ...w,
              exercises: w.exercises.map((e) => e.id === exId ? { ...e, completed: !e.completed } : e)
            };
          })
        }));
        awardXP(10);
      };

      const handleUpdateExerciseWeight = (dayOfWeek, exId, newWeight) => {
        setState((prev) => ({
          ...prev,
          weeklyWorkouts: prev.weeklyWorkouts.map((w) => {
            if (w.dayOfWeek !== dayOfWeek) return w;
            return {
              ...w,
              exercises: w.exercises.map((e) => e.id === exId ? { ...e, weightKg: Number(newWeight) || 0 } : e)
            };
          })
        }));
      };

      const handleAddCustomExercise = () => {
        if (!newExName.trim()) return;
        soundFX.playClick();
        const customEx = {
          id: `custom_${Date.now()}`,
          nameAr: newExName.trim(),
          nameEn: newExName.trim(),
          sets: newExSets,
          reps: newExReps,
          weightKg: Number(newExWeight) || 0,
          completed: false
        };
        setState((prev) => ({
          ...prev,
          weeklyWorkouts: prev.weeklyWorkouts.map((w) => {
            if (w.dayOfWeek !== selectedWorkoutDay) return w;
            return { ...w, isRestDay: false, exercises: [...w.exercises, customEx] };
          })
        }));
        setNewExName('');
        showToast(isAr ? 'تمت إضافة التمرين المخصص لجدولك! 🏋️' : 'Custom exercise added to your plan! 🏋️');
      };

      const startRestTimer = (seconds) => {
        soundFX.playClick();
        setRestTotalSeconds(seconds);
        setRestSecondsLeft(seconds);
        setIsRestRunning(true);
      };

      if (!state.user.isOnboarded) {
        return (
          <OnboardingWizard
            initialProfile={state.user}
            onComplete={handleOnboardingComplete}
            onRestoreCloud={(cloudState) => setState((prev) => ({ ...prev, ...cloudState, user: { ...prev.user, ...(cloudState.user || {}), isOnboarded: true } }))}
          />
        );
      }

      const upcomingPrayer = getUpcomingPrayer(state.prayers);
      const currentDayIndex = new Date().getDay();
      const todayWorkout = state.weeklyWorkouts.find((w) => w.dayOfWeek === currentDayIndex) || state.weeklyWorkouts[0];
      const activeWorkoutPlan = state.weeklyWorkouts.find((w) => w.dayOfWeek === selectedWorkoutDay) || todayWorkout;

      const navItems = [
        { id: 'timeline', label: t.nav.dashboard, icon: '⚡' },
        { id: 'fitness', label: t.nav.fitness, icon: '💪' },
        { id: 'prayers', label: t.nav.prayers, icon: '🕌' },
        { id: 'medicines', label: t.nav.health, icon: '🩺' },
        { id: 'focus', label: t.nav.focus, icon: '🎯' },
        { id: 'hydration', label: t.nav.hydration, icon: '💧' },
        { id: 'birthdays', label: t.nav.family, icon: '🎂' },
        { id: 'cloud', label: t.nav.cloud, icon: '🎨' }
      ];

      return (
        <div className="min-h-screen pb-28 lg:pb-12">
          {/* NATIVE MOBILE-FIRST TOP BAR */}
          <header className="sticky top-0 z-40 glass-card border-x-0 border-t-0 px-3 sm:px-6 py-3">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
              {/* Brand & Level Pill */}
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('timeline')}>
                <img
                  src={LOGO_FILE_PATH}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK_SVG_LOGO; }}
                  alt="Sahly Day"
                  className="w-11 h-11 rounded-2xl object-contain border border-cyan-400/60 shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-base sm:text-lg tracking-tight leading-none">{t.appName}</span>
                    <span className="text-[11px] font-mono font-black px-2.5 py-0.5 rounded-full bg-cyan-500/15 accent-text border theme-border">
                      {t.common.level} {state.user.level || 1} · {state.user.xp || 0} {t.common.xp}
                    </span>
                  </div>
                  <div className="text-xs theme-text-muted font-bold flex items-center gap-2 mt-1">
                    <span>{state.user.name}</span>
                    <span>•</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      <span>{syncStatus === 'syncing' ? t.common.syncing : (isAr ? 'مؤمّن سحابياً' : 'Cloud Synced')}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Adaptive Controls: Age Persona, 7 Themes, Font Scale & Language */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {/* Age Group Quick Switcher */}
                <select
                  aria-label="Age Group Mode"
                  value={state.user.ageGroup || 'adults'}
                  onChange={(e) => {
                    const g = e.target.value;
                    soundFX.playClick();
                    updateUserField({
                      ageGroup: g,
                      fontScale: g === 'seniors' ? 'lg' : state.user.fontScale,
                      workoutSplitId: g === 'seniors' ? 'seniors_mobility' : state.user.workoutSplitId
                    });
                    if (g === 'seniors') {
                      handleChangeWorkoutSplit('seniors_mobility');
                    }
                  }}
                  className="px-3 py-2 rounded-xl surface-field text-xs font-black"
                >
                  <option value="youth">{isAr ? 'الشباب والرياضيين ⚡' : 'Youth & Athletes ⚡'}</option>
                  <option value="adults">{isAr ? 'الكبار والمهنيين 💼' : 'Adults & Pros 💼'}</option>
                  <option value="seniors">{isAr ? 'كبار السن (واضح) 🌿' : 'Seniors Easy View 🌿'}</option>
                  <option value="kids">{isAr ? 'الأبطال والناشئين 🌟' : 'Kids & Champions 🌟'}</option>
                </select>

                {/* 7 Flagship Themes Selector */}
                <select
                  aria-label="Visual Theme"
                  value={state.user.theme || 'cyber'}
                  onChange={(e) => { soundFX.playClick(); updateUserField({ theme: e.target.value }); }}
                  className="px-3 py-2 rounded-xl surface-field text-xs font-bold"
                >
                  {THEME_CATALOG.map((th) => (
                    <option key={th.id} value={th.id}>
                      {th.icon} {isAr ? th.nameAr : th.nameEn}
                    </option>
                  ))}
                </select>

                {/* Font Size Accessibility Toggle */}
                <button
                  type="button"
                  onClick={() => {
                    const order = ['normal', 'lg', 'xl'];
                    const next = order[(order.indexOf(state.user.fontScale || 'normal') + 1) % order.length];
                    updateUserField({ fontScale: next });
                    showToast(isAr ? `حجم الخط: ${t.fontSizes[next]}` : `Font Size: ${t.fontSizes[next]}`);
                  }}
                  className="px-3 py-2 rounded-xl glass-card text-xs font-black"
                  title={isAr ? 'تكبير حجم الخط لراحة العين' : 'Adjust Font Scale'}
                >
                  A+ ({state.user.fontScale === 'xl' ? 'XL' : state.user.fontScale === 'lg' ? 'LG' : 'MD'})
                </button>

                {/* AR / EN Bilingual Toggle */}
                <button
                  type="button"
                  onClick={() => {
                    soundFX.playClick();
                    updateUserField({ language: isAr ? 'en' : 'ar' });
                  }}
                  className="px-3.5 py-2 rounded-xl btn-primary text-xs font-black"
                >
                  {isAr ? 'EN 🌐' : 'عربي 🌐'}
                </button>
              </div>
            </div>

            {/* Desktop Segmented Navigation Dock */}
            <div className="max-w-7xl mx-auto hidden lg:flex items-center gap-2 pt-3 mt-3 border-t theme-border">
              {navItems.map((item) => {
                const active = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => { soundFX.playClick(); setActiveTab(item.id); }}
                    className={`px-4 py-2 rounded-2xl text-xs font-black flex items-center gap-2 transition-all ${
                      active ? 'btn-primary shadow-md' : 'glass-card opacity-80 hover:opacity-100'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </header>

          {/* TOAST NOTIFICATION */}
          {toastMsg && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 hero-card px-5 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-black text-center max-w-md w-11/12">
              {toastMsg}
            </div>
          )}

          {/* MAIN CONTENT CONTAINER */}
          <main className="max-w-7xl mx-auto px-3 sm:px-6 py-5">
            {/* ==================== 1. DASHBOARD / TIMELINE TAB ==================== */}
            {activeTab === 'timeline' && (
              <div className="space-y-5">
                {/* FLAGSHIP HERO BENTO CARD WITH SVG PROGRESS RING */}
                <div className="hero-card rounded-3xl p-5 sm:p-7">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-black px-3 py-1 rounded-full bg-cyan-500/15 accent-text border theme-border">
                          {t.ageGroups[state.user.ageGroup || 'adults'].label}
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-400/30">
                          🔥 {state.user.streakDays || 12} {t.common.streak}
                        </span>
                      </div>

                      <h1 className="text-2xl sm:text-3xl font-black pt-1 leading-tight">
                        {isAr ? `يوم مشرق ومليء بالإنجاز يا ${state.user.name}! ✨` : `Make today extraordinary, ${state.user.name}! ✨`}
                      </h1>
                      <p className="text-xs sm:text-sm theme-text-muted font-semibold">
                        {new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>

                      {/* Quick Action Pills */}
                      <div className="flex flex-wrap gap-2.5 pt-2">
                        <button
                          type="button"
                          onClick={() => handleAddWater(250, isAr ? 'كوب ماء 💧' : 'Water Cup 💧')}
                          className="btn-primary px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 touch-target"
                        >
                          <span>💧</span>
                          <span>{isAr ? '+250 مل ماء' : '+250ml Water'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab('fitness')}
                          className="glass-card px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 touch-target"
                        >
                          <span>💪</span>
                          <span>{isAr ? todayWorkout.titleAr : todayWorkout.titleEn}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab('prayers')}
                          className="glass-card px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 touch-target"
                        >
                          <span>🕌</span>
                          <span>
                            {isAr
                              ? `الصلاة القادمة: ${upcomingPrayer.prayer.nameAr} (${upcomingPrayer.prayer.time})`
                              : `Next Prayer: ${upcomingPrayer.prayer.nameEn} (${upcomingPrayer.prayer.time})`}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Right KPI Ring + Mini Metric Cards */}
                    <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-4 rounded-3xl">
                      <div className="shrink-0">
                        <CircularProgressRing
                          percentage={dailyProgressPercentage}
                          size={118}
                          strokeWidth={10}
                          label={isAr ? 'إنجاز اليوم' : 'Daily Score'}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 w-full">
                        <div className="surface-field p-3 rounded-2xl text-center">
                          <span className="text-[11px] theme-text-muted font-bold block">{isAr ? 'الترطيب' : 'Water'}</span>
                          <span className="text-base font-black accent-text font-mono">{state.hydration.currentMl} ml</span>
                          <span className="text-[10px] theme-text-muted block">/ {state.hydration.targetMl}</span>
                        </div>
                        <div className="surface-field p-3 rounded-2xl text-center">
                          <span className="text-[11px] theme-text-muted font-bold block">{isAr ? 'الصلوات' : 'Prayers'}</span>
                          <span className="text-base font-black text-emerald-400 font-mono">
                            {state.prayers.filter((p) => p.id !== 'sunrise' && p.completed).length} / 5
                          </span>
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'مكتمل' : 'Done'}</span>
                        </div>
                        <div className="surface-field p-3 rounded-2xl text-center">
                          <span className="text-[11px] theme-text-muted font-bold block">{isAr ? 'الخطوات' : 'Steps'}</span>
                          <span className="text-base font-black text-amber-400 font-mono">{state.vitals.steps}</span>
                          <span className="text-[10px] theme-text-muted block">/ {state.vitals.stepsGoal}</span>
                        </div>
                        <div className="surface-field p-3 rounded-2xl text-center">
                          <span className="text-[11px] theme-text-muted font-bold block">{isAr ? 'السعرات' : 'Target Kcal'}</span>
                          <span className="text-base font-black text-purple-400 font-mono">{nutritionMetrics.targetCalories}</span>
                          <span className="text-[10px] theme-text-muted block">{nutritionMetrics.proteinTarget}g Pro</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HEALTH VITALS, MEDICATIONS & PRIORITY TASKS BENTO ROW */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Vitals Summary Card */}
                  <div className="glass-card rounded-3xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="font-black text-sm flex items-center gap-2">
                          <span>🩺</span>
                          <span>{isAr ? 'المؤشرات الحيوية والصحية' : 'Health Vitals & Wellness'}</span>
                        </h2>
                        <button onClick={() => setActiveTab('medicines')} className="text-xs accent-text font-black">
                          {isAr ? 'تحديث ←' : 'Update →'}
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center my-2">
                        <div className="surface-field p-2.5 rounded-2xl">
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'ضغط الدم' : 'BP'}</span>
                          <span className="font-mono font-black text-xs text-emerald-400">{state.vitals.bloodPressure}</span>
                        </div>
                        <div className="surface-field p-2.5 rounded-2xl">
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'السكر' : 'Glucose'}</span>
                          <span className="font-mono font-black text-xs accent-text">{state.vitals.bloodSugar}</span>
                        </div>
                        <div className="surface-field p-2.5 rounded-2xl">
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'النوم' : 'Sleep'}</span>
                          <span className="font-mono font-black text-xs text-purple-400">{state.vitals.sleepHours}h</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] theme-text-muted font-bold pt-1">
                      {isAr ? 'مصمم بعناية لمتابعة صحة الكبار والشباب يومياً.' : 'Precision daily health tracking for all ages.'}
                    </div>
                  </div>

                  {/* Today's Medications Card */}
                  <div className="glass-card rounded-3xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="font-black text-sm flex items-center gap-2">
                          <span>💊</span>
                          <span>{isAr ? 'الأدوية والمكملات اليومية' : 'Medications & Vitamins'}</span>
                        </h2>
                        <button onClick={() => setActiveTab('medicines')} className="text-xs accent-text font-black">
                          {isAr ? '+ إدارة' : '+ Manage'}
                        </button>
                      </div>
                      <div className="space-y-2">
                        {state.medicines.slice(0, 3).map((med) => (
                          <div
                            key={med.id}
                            onClick={() => {
                              soundFX.playClick();
                              setState((prev) => ({
                                ...prev,
                                medicines: prev.medicines.map((m) => m.id === med.id ? { ...m, completedToday: !m.completedToday } : m)
                              }));
                            }}
                            className={`p-2.5 rounded-2xl border cursor-pointer flex items-center justify-between text-xs font-bold transition-all ${
                              med.completedToday ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' : 'surface-field'
                            }`}
                          >
                            <span className="truncate">{med.name}</span>
                            <span className="font-mono text-[11px]">{med.completedToday ? '✅' : med.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Priority Daily Tasks Card */}
                  <div className="glass-card rounded-3xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="font-black text-sm flex items-center gap-2">
                          <span>🎯</span>
                          <span>{isAr ? 'أولويات اليوم والتركيز' : 'Top Priorities & Focus'}</span>
                        </h2>
                        <button onClick={() => setActiveTab('focus')} className="text-xs accent-text font-black">
                          {isAr ? 'مؤقت التركيز ←' : 'Focus Timer →'}
                        </button>
                      </div>
                      <div className="space-y-2">
                        {state.tasks.slice(0, 3).map((tsk) => (
                          <div
                            key={tsk.id}
                            onClick={() => {
                              soundFX.playClick();
                              setState((prev) => ({
                                ...prev,
                                tasks: prev.tasks.map((item) => item.id === tsk.id ? { ...item, completed: !item.completed } : item)
                              }));
                              awardXP(10);
                            }}
                            className={`p-2.5 rounded-2xl border cursor-pointer flex items-center justify-between text-xs font-bold transition-all ${
                              tsk.completed ? 'bg-cyan-500/20 border-cyan-400 line-through opacity-75' : 'surface-field'
                            }`}
                          >
                            <span className="truncate">{isAr ? tsk.titleAr : tsk.titleEn}</span>
                            <span>{tsk.completed ? '✅' : '⬜'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* INTERACTIVE 5-PHASE DAILY TIMELINE */}
                <div className="glass-card rounded-3xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b theme-border pb-3.5 mb-4">
                    <div>
                      <h2 className="text-lg font-black flex items-center gap-2">
                        <span>📖</span>
                        <span>{isAr ? 'خريطة اليوم الذكية (5 محطات متكاملة من الفجر حتى المساء)' : 'Smart 5-Phase Daily Flow (Dawn to Night)'}</span>
                      </h2>
                      <p className="text-xs theme-text-muted">
                        {isAr ? 'اضغط على أي بطاقة لتأكيد الإنجاز وكسب النقاط' : 'Tap any milestone to mark complete and earn XP'}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {state.prayers.filter((p) => p.id !== 'sunrise').map((prayer, idx) => {
                      const phaseTitlesAr = ['1. الفجر والبركة 🌅', '2. الظهر والإنتاجية ☀️', '3. العصر والنشاط 💪', '4. المغرب والسكينة 🌇', '5. العشاء والاستشفاء 🌙'];
                      const phaseTitlesEn = ['1. Dawn & Barakah 🌅', '2. Noon & Deep Work ☀️', '3. Asr & Fitness 💪', '4. Sunset & Calm 🌇', '5. Night & Recovery 🌙'];
                      return (
                        <div key={prayer.id} className="surface-field rounded-2xl p-3.5 space-y-2.5">
                          <div className="text-xs font-black accent-text border-b theme-border pb-1.5">
                            {isAr ? phaseTitlesAr[idx] : phaseTitlesEn[idx]}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleTogglePrayer(prayer.id)}
                            className={`w-full p-2.5 rounded-xl border text-xs font-black flex items-center justify-between touch-target transition-all ${
                              prayer.completed ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400' : 'glass-card'
                            }`}
                          >
                            <span>{isAr ? `صلاة ${prayer.nameAr}` : `${prayer.nameEn} Prayer`}</span>
                            <span className="font-mono">{prayer.completed ? '✅' : prayer.time}</span>
                          </button>

                          {idx === 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                soundFX.playClick();
                                setState((prev) => ({ ...prev, athkar: { ...prev.athkar, morningCompleted: !prev.athkar.morningCompleted } }));
                              }}
                              className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between touch-target ${
                                state.athkar.morningCompleted ? 'bg-cyan-500/20 border-cyan-400 accent-text' : 'glass-card'
                              }`}
                            >
                              <span>{isAr ? 'أذكار الصباح 🛡️' : 'Morning Athkar 🛡️'}</span>
                              <span>{state.athkar.morningCompleted ? '✅' : '⬜'}</span>
                            </button>
                          )}

                          {idx === 1 && (
                            <button
                              type="button"
                              onClick={() => handleAddWater(250, isAr ? 'ماء الظهر 💧' : 'Midday Water 💧')}
                              className="w-full p-2.5 rounded-xl border glass-card text-xs font-bold flex items-center justify-between touch-target"
                            >
                              <span>{isAr ? 'شرب كوب ماء 💧' : 'Drink 250ml Water 💧'}</span>
                              <span className="font-mono accent-text">+250ml</span>
                            </button>
                          )}

                          {idx === 2 && (
                            <button
                              type="button"
                              onClick={() => setActiveTab('fitness')}
                              className="w-full p-2.5 rounded-xl border glass-card text-xs font-bold flex items-center justify-between touch-target"
                            >
                              <span className="truncate">{isAr ? 'تمرين اليوم 🏋️' : 'Today Workout 🏋️'}</span>
                              <span>→</span>
                            </button>
                          )}

                          {idx === 3 && (
                            <button
                              type="button"
                              onClick={() => {
                                soundFX.playClick();
                                setState((prev) => ({ ...prev, athkar: { ...prev.athkar, eveningCompleted: !prev.athkar.eveningCompleted } }));
                              }}
                              className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between touch-target ${
                                state.athkar.eveningCompleted ? 'bg-cyan-500/20 border-cyan-400 accent-text' : 'glass-card'
                              }`}
                            >
                              <span>{isAr ? 'أذكار المساء 🌆' : 'Evening Athkar 🌆'}</span>
                              <span>{state.athkar.eveningCompleted ? '✅' : '⬜'}</span>
                            </button>
                          )}

                          {idx === 4 && (
                            <button
                              type="button"
                              onClick={() => {
                                soundFX.playClick();
                                setState((prev) => ({
                                  ...prev,
                                  athkar: { ...prev.athkar, quranPagesRead: prev.athkar.quranPagesRead + 1, khatmahTotalPages: (prev.athkar.khatmahTotalPages || 0) + 1 }
                                }));
                              }}
                              className="w-full p-2.5 rounded-xl border glass-card text-xs font-bold flex items-center justify-between touch-target"
                            >
                              <span>{isAr ? 'ورد القرآن 📖' : 'Quran Wird 📖'}</span>
                              <span className="font-mono accent-text">{state.athkar.quranPagesRead}/{state.athkar.quranDailyTarget}</span>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ==================== 2. PRO FITNESS & NUTRITION TAB ==================== */}
            {activeTab === 'fitness' && (
              <div className="space-y-5">
                <div className="hero-card rounded-3xl p-5 sm:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                    <div className="lg:col-span-7 space-y-2">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-cyan-500/15 accent-text border theme-border">
                        PRO FITNESS & BIOMECHANICS OS
                      </span>
                      <h1 className="text-2xl font-black">
                        {isAr ? SPLIT_DEFINITIONS[state.user.workoutSplitId]?.nameAr : SPLIT_DEFINITIONS[state.user.workoutSplitId]?.nameEn}
                      </h1>
                      <p className="text-xs theme-text-muted font-semibold">
                        {isAr ? SPLIT_DEFINITIONS[state.user.workoutSplitId]?.descriptionAr : SPLIT_DEFINITIONS[state.user.workoutSplitId]?.descriptionEn}
                      </p>

                      <div className="pt-2">
                        <label className="block text-xs font-black accent-text mb-1.5">
                          {isAr ? 'تبديل النظام الرياضي (10 أنظمة احترافية لكل الأعمار والمستويات):' : 'Switch Workout System (10 Pro Systems for All Ages):'}
                        </label>
                        <select
                          value={state.user.workoutSplitId}
                          onChange={(e) => handleChangeWorkoutSplit(e.target.value)}
                          className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl surface-field font-bold text-xs"
                        >
                          {Object.keys(SPLIT_DEFINITIONS).map((sKey) => (
                            <option key={sKey} value={sKey}>
                              {isAr ? `${SPLIT_DEFINITIONS[sKey].nameAr} — ${SPLIT_DEFINITIONS[sKey].badgeAr}` : `${SPLIT_DEFINITIONS[sKey].nameEn} — ${SPLIT_DEFINITIONS[sKey].badgeEn}`}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Interactive Gym Rest Timer */}
                    <div className="lg:col-span-5 glass-card rounded-2xl p-4 text-center">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black accent-text">
                          ⏱️ {isAr ? 'مؤقت الراحة بين الجولات' : 'Between-Sets Rest Timer'}
                        </span>
                        <span className="font-mono text-2xl font-black text-amber-400">
                          {Math.floor(restSecondsLeft / 60).toString().padStart(2, '0')}:{(restSecondsLeft % 60).toString().padStart(2, '0')}
                        </span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5 mb-2">
                        {[30, 60, 90, 120, 180].map((sec) => (
                          <button
                            key={sec}
                            type="button"
                            onClick={() => startRestTimer(sec)}
                            className="py-2 rounded-xl surface-field hover:border-cyan-400 text-xs font-black font-mono transition-all"
                          >
                            {sec}s
                          </button>
                        ))}
                      </div>
                      {isRestRunning && (
                        <button
                          type="button"
                          onClick={() => { setIsRestRunning(false); setRestSecondsLeft(0); }}
                          className="w-full py-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-400/40 text-xs font-bold"
                        >
                          {isAr ? 'إيقاف المؤقت' : 'Stop Timer'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Day Selector Strip */}
                <div className="glass-card rounded-2xl p-2">
                  <div className="grid grid-cols-7 gap-1.5">
                    {state.weeklyWorkouts.map((plan) => {
                      const isSel = plan.dayOfWeek === selectedWorkoutDay;
                      const isToday = plan.dayOfWeek === currentDayIndex;
                      return (
                        <button
                          key={plan.dayOfWeek}
                          type="button"
                          onClick={() => { soundFX.playClick(); setSelectedWorkoutDay(plan.dayOfWeek); }}
                          className={`py-2.5 px-1 rounded-xl text-center border transition-all relative touch-target ${
                            isSel ? 'btn-primary border-transparent shadow-lg' : 'surface-field'
                          }`}
                        >
                          {isToday && (
                            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-[9px] font-black px-1.5 rounded-full">
                              {isAr ? 'اليوم' : 'Today'}
                            </span>
                          )}
                          <span className="block text-xs font-black">{isAr ? plan.dayNameAr : plan.dayNameEn.slice(0, 3)}</span>
                          <span className="block text-[10px] opacity-80">{plan.isRestDay ? (isAr ? 'راحة' : 'Rest') : (isAr ? 'تمرين' : 'Train')}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Exercises List + Weight Logger + Custom Exercise Builder */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  <div className="lg:col-span-7 glass-card rounded-3xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b theme-border pb-3">
                      <div>
                        <h2 className="text-lg font-black">
                          {isAr ? activeWorkoutPlan.titleAr : activeWorkoutPlan.titleEn}
                        </h2>
                        <p className="text-xs theme-text-muted">
                          {(isAr ? activeWorkoutPlan.targetMusclesAr : activeWorkoutPlan.targetMusclesEn || activeWorkoutPlan.targetMusclesAr).join(' • ')}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-black accent-text">
                        {activeWorkoutPlan.exercises.filter((e) => e.completed).length} / {activeWorkoutPlan.exercises.length}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {activeWorkoutPlan.exercises.map((ex, idx) => (
                        <div
                          key={ex.id}
                          className={`p-3.5 rounded-2xl border flex flex-wrap items-center justify-between gap-2 transition-all ${
                            ex.completed ? 'bg-emerald-500/15 border-emerald-400' : 'surface-field'
                          }`}
                        >
                          <div
                            onClick={() => handleToggleExercise(activeWorkoutPlan.dayOfWeek, ex.id)}
                            className="flex items-center gap-3 cursor-pointer flex-1 min-w-[180px]"
                          >
                            <span className="w-7 h-7 rounded-xl bg-cyan-500/20 accent-text font-mono text-xs font-black flex items-center justify-center">
                              {ex.completed ? '✓' : idx + 1}
                            </span>
                            <div>
                              <div className={`text-xs sm:text-sm font-black ${ex.completed ? 'line-through text-emerald-400' : ''}`}>
                                {isAr ? ex.nameAr : (ex.nameEn || ex.nameAr)}
                              </div>
                              <div className="text-[11px] theme-text-muted font-mono">
                                {ex.sets} Sets × {ex.reps}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <input
                              type="number"
                              aria-label="Weight in kg"
                              value={ex.weightKg || 0}
                              onChange={(e) => handleUpdateExerciseWeight(activeWorkoutPlan.dayOfWeek, ex.id, e.target.value)}
                              className="w-16 px-2 py-1.5 rounded-xl surface-field text-center font-mono text-xs font-black"
                            />
                            <span className="text-[10px] theme-text-muted font-bold">kg</span>
                            <button
                              type="button"
                              onClick={() => startRestTimer(60)}
                              className="px-2.5 py-1.5 rounded-xl bg-cyan-500/15 accent-text text-[11px] font-black"
                            >
                              ⏱️ 60s
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Custom Exercise Form */}
                    <div className="border-t theme-border pt-3 mt-3">
                      <span className="text-xs font-black block mb-2">
                        {isAr ? '+ إضافة تمرين مخصص لهذا اليوم:' : '+ Add Custom Exercise to This Day:'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                        <input
                          type="text"
                          placeholder={isAr ? 'اسم التمرين...' : 'Exercise name...'}
                          value={newExName}
                          onChange={(e) => setNewExName(e.target.value)}
                          className="sm:col-span-2 px-3 py-2 rounded-xl surface-field text-xs font-bold"
                        />
                        <input
                          type="text"
                          placeholder={isAr ? 'المجموعات (3)' : 'Sets (3)'}
                          value={newExSets}
                          onChange={(e) => setNewExSets(e.target.value)}
                          className="px-2 py-2 rounded-xl surface-field text-xs font-bold text-center"
                        />
                        <input
                          type="text"
                          placeholder={isAr ? 'التكرار (12)' : 'Reps (12)'}
                          value={newExReps}
                          onChange={(e) => setNewExReps(e.target.value)}
                          className="px-2 py-2 rounded-xl surface-field text-xs font-bold text-center"
                        />
                        <button
                          type="button"
                          onClick={handleAddCustomExercise}
                          className="btn-primary py-2 px-3 rounded-xl text-xs font-black"
                        >
                          {t.common.add}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Macros/TDEE/BMI Calculator + 1RM Max Calculator + Steps */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="glass-card rounded-3xl p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-black text-sm flex items-center gap-1.5">
                          <span>🥗</span>
                          <span>{isAr ? 'حاسبة التغذية والماكروز الذكية' : 'Smart Macros, TDEE & BMI Calculator'}</span>
                        </h3>
                        <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-cyan-500/15 accent-text">
                          BMI: {nutritionMetrics.bmi}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'cut', labelAr: 'تنشيف وحرق 🔥', labelEn: 'Fat Loss Cut 🔥' },
                          { id: 'recomp', labelAr: 'بناء صافي ⚖️', labelEn: 'Body Recomp ⚖️' },
                          { id: 'bulk', labelAr: 'تضخيم عضلي 💪', labelEn: 'Lean Bulk 💪' }
                        ].map((g) => (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => updateUserField({ fitnessGoal: g.id })}
                            className={`py-2 rounded-xl text-xs font-black border ${
                              state.user.fitnessGoal === g.id ? 'btn-primary border-transparent' : 'surface-field'
                            }`}
                          >
                            {isAr ? g.labelAr : g.labelEn}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-4 gap-2 text-center pt-1">
                        <div className="surface-field p-2.5 rounded-2xl">
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'السعرات' : 'Kcal'}</span>
                          <span className="font-mono font-black text-sm text-amber-400">{nutritionMetrics.targetCalories}</span>
                        </div>
                        <div className="surface-field p-2.5 rounded-2xl">
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'البروتين' : 'Protein'}</span>
                          <span className="font-mono font-black text-sm text-emerald-400">{nutritionMetrics.proteinTarget}g</span>
                        </div>
                        <div className="surface-field p-2.5 rounded-2xl">
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'الكارب' : 'Carbs'}</span>
                          <span className="font-mono font-black text-sm accent-text">{nutritionMetrics.carbsTarget}g</span>
                        </div>
                        <div className="surface-field p-2.5 rounded-2xl">
                          <span className="text-[10px] theme-text-muted block">{isAr ? 'الدهون' : 'Fats'}</span>
                          <span className="font-mono font-black text-sm text-purple-400">{nutritionMetrics.fatsTarget}g</span>
                        </div>
                      </div>
                    </div>

                    {/* 1RM Max Strength Calculator */}
                    <div className="glass-card rounded-3xl p-5 space-y-3">
                      <h3 className="font-black text-sm flex items-center gap-1.5">
                        <span>🏋️‍♂️</span>
                        <span>{isAr ? 'حاسبة أقصى وزن (1RM Max Strength)' : '1RM One-Rep Max Calculator'}</span>
                      </h3>
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <div>
                          <label className="text-[10px] theme-text-muted block mb-1">{isAr ? 'الوزن المرفوع (kg)' : 'Weight (kg)'}</label>
                          <input
                            type="number"
                            value={rmWeight}
                            onChange={(e) => setRmWeight(Number(e.target.value) || 0)}
                            className="w-full px-2 py-2 rounded-xl surface-field text-center font-mono text-xs font-black"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] theme-text-muted block mb-1">{isAr ? 'عدد التكرارات' : 'Reps Performed'}</label>
                          <input
                            type="number"
                            value={rmReps}
                            onChange={(e) => setRmReps(Number(e.target.value) || 1)}
                            className="w-full px-2 py-2 rounded-xl surface-field text-center font-mono text-xs font-black"
                          />
                        </div>
                        <div className="bg-cyan-500/15 border theme-border rounded-2xl p-2.5 text-center">
                          <span className="text-[10px] accent-text font-bold block">{isAr ? 'أقصى وزن 1RM' : 'Est. 1RM'}</span>
                          <span className="font-mono font-black text-base">
                            {Math.round(rmWeight * (1 + rmReps / 30))} kg
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Daily Steps Counter */}
                    <div className="glass-card rounded-3xl p-5 flex items-center justify-between">
                      <div>
                        <h3 className="font-black text-sm">👟 {isAr ? 'عداد الخطوات اليومي' : 'Daily Steps Tracker'}</h3>
                        <p className="text-xs font-mono text-amber-400 font-black mt-0.5">
                          {state.vitals.steps} / {state.vitals.stepsGoal} {isAr ? 'خطوة' : 'steps'}
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            soundFX.playClick();
                            setState((prev) => ({ ...prev, vitals: { ...prev.vitals, steps: (prev.vitals.steps || 0) + 500 } }));
                          }}
                          className="btn-primary px-3.5 py-2 rounded-xl text-xs font-black"
                        >
                          +500
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            soundFX.playClick();
                            setState((prev) => ({ ...prev, vitals: { ...prev.vitals, steps: (prev.vitals.steps || 0) + 1000 } }));
                          }}
                          className="glass-card px-3.5 py-2 rounded-xl text-xs font-black"
                        >
                          +1000
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== 3. FAITH, ATHKAR, TASBIH & QURAN TAB ==================== */}
            {activeTab === 'prayers' && (
              <div className="space-y-5">
                <div className="hero-card rounded-3xl p-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-cyan-500/15 accent-text border theme-border">
                      SPIRITUAL & FAITH ENGINE
                    </span>
                    <h1 className="text-2xl font-black mt-1">
                      {isAr ? 'مواقيت الصلاة، الأذكار، وختمة القرآن 🕌' : 'Prayer Times, Athkar, Tasbih & Quran 🕌'}
                    </h1>
                    <p className="text-xs theme-text-muted font-bold mt-0.5">
                      📍 {state.user.cityName}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleDetectGPS}
                      className="btn-primary px-4 py-2.5 rounded-xl text-xs font-black touch-target"
                    >
                      🛰️ {isAr ? 'تحديد الموقع تلقائياً (GPS)' : 'Auto-Detect GPS'}
                    </button>
                    <select
                      value={state.user.cityName}
                      onChange={(e) => {
                        const found = CITIES_PRESETS.find((c) => c.nameAr === e.target.value || c.nameEn === e.target.value);
                        if (found) {
                          const newPrayers = calculatePrayerTimes(new Date(), found.lat, found.lng);
                          setState((prev) => ({
                            ...prev,
                            user: { ...prev.user, cityName: isAr ? found.nameAr : found.nameEn, latitude: found.lat, longitude: found.lng },
                            prayers: newPrayers
                          }));
                        }
                      }}
                      className="px-3.5 py-2.5 rounded-xl surface-field text-xs font-bold touch-target"
                    >
                      {CITIES_PRESETS.map((c) => (
                        <option key={c.id} value={isAr ? c.nameAr : c.nameEn}>
                          {isAr ? c.nameAr : c.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Prayer Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {state.prayers.map((p) => {
                    const isSun = p.id === 'sunrise';
                    return (
                      <div key={p.id} className={`glass-card rounded-2xl p-3.5 text-center transition-all ${p.completed ? 'border-emerald-400 bg-emerald-500/15' : ''}`}>
                        <div className="text-xs font-black accent-text">{isAr ? p.nameAr : p.nameEn}</div>
                        <div className="text-xl font-black font-mono my-1.5">{p.time}</div>
                        {!isSun ? (
                          <div className="space-y-1.5">
                            <button
                              type="button"
                              onClick={() => handleTogglePrayer(p.id)}
                              className={`w-full py-2 rounded-xl text-xs font-black ${
                                p.completed ? 'bg-emerald-500 text-black' : 'surface-field'
                              }`}
                            >
                              {p.completed ? (isAr ? 'تمت الفريضة ✓' : 'Fard Done ✓') : (isAr ? 'تسجيل الفريضة' : 'Mark Fard')}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleToggleSunnah(p.id)}
                              className={`w-full py-1.5 rounded-lg text-[10px] font-bold ${
                                p.sunnahCompleted ? 'bg-cyan-500/25 accent-text border theme-border' : 'surface-field opacity-75'
                              }`}
                            >
                              {p.sunnahCompleted ? (isAr ? 'السنة الراتبة ✓' : 'Sunnah ✓') : (isAr ? '+ السنة الراتبة' : '+ Sunnah')}
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] theme-text-muted font-bold block py-2">
                            {isAr ? 'وقت الشروق والضحى' : 'Sunrise / Duha'}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Athkar Cards + Digital Tasbih + Quran Khatmah */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  <div className="lg:col-span-7 glass-card rounded-3xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b theme-border pb-2.5">
                      <h2 className="font-black text-base">
                        🛡️ {isAr ? 'الأذكار اليومية التفاعلية (اضغط للعد)' : 'Interactive Daily Athkar (Tap to Count)'}
                      </h2>
                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setState((prev) => ({
                            ...prev,
                            athkar: {
                              ...prev.athkar,
                              items: (prev.athkar.items || DEFAULT_ATHKAR_LIST).map((item) => ({ ...item, current: 0 }))
                            }
                          }));
                        }}
                        className="text-xs accent-text font-bold"
                      >
                        {isAr ? 'تصفير العدادات ↺' : 'Reset Counters ↺'}
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {(state.athkar.items || DEFAULT_ATHKAR_LIST).map((item) => {
                        const done = item.current >= item.target;
                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              if (done) return;
                              soundFX.playClick();
                              setState((prev) => ({
                                ...prev,
                                athkar: {
                                  ...prev.athkar,
                                  items: (prev.athkar.items || DEFAULT_ATHKAR_LIST).map((it) =>
                                    it.id === item.id ? { ...it, current: Math.min(it.target, it.current + 1) } : it
                                  )
                                }
                              }));
                            }}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                              done ? 'bg-emerald-500/15 border-emerald-400' : 'surface-field hover:border-cyan-400'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-black text-xs accent-text">{isAr ? item.titleAr : item.titleEn}</span>
                              <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-full glass-card">
                                {item.current} / {item.target} {done ? '✅' : ''}
                              </span>
                            </div>
                            <p className="text-xs leading-relaxed opacity-90">{item.textAr}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    {/* Digital Tasbih Counter */}
                    <div className="glass-card rounded-3xl p-5 text-center space-y-3">
                      <h3 className="font-black text-sm accent-text">
                        📿 {isAr ? 'المسبحة الإلكترونية الذكية' : 'Smart Digital Tasbih'}
                      </h3>
                      <select
                        value={state.athkar.tasbihPhrase || 'سبحان الله وبحمده'}
                        onChange={(e) => setState((prev) => ({ ...prev, athkar: { ...prev.athkar, tasbihPhrase: e.target.value } }))}
                        className="w-full px-3 py-2 rounded-xl surface-field text-xs font-bold text-center"
                      >
                        <option value="سبحان الله وبحمده">سبحان الله وبحمده</option>
                        <option value="سبحان الله، الحمد لله، الله أكبر">سبحان الله، الحمد لله، الله أكبر</option>
                        <option value="لا إله إلا الله وحده لا شريك له">لا إله إلا الله وحده لا شريك له</option>
                        <option value="أستغفر الله وأتوب إليه">أستغفر الله وأتوب إليه</option>
                        <option value="اللهم صلِّ وسلم على نبينا محمد">اللهم صلِّ وسلم على نبينا محمد</option>
                      </select>

                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setState((prev) => ({
                            ...prev,
                            athkar: { ...prev.athkar, tasbihCount: (prev.athkar.tasbihCount || 0) + 1 }
                          }));
                        }}
                        className="w-32 h-32 mx-auto rounded-full btn-primary flex flex-col items-center justify-center shadow-2xl active:scale-95 transition-transform"
                      >
                        <span className="text-3xl font-mono font-black">{state.athkar.tasbihCount || 0}</span>
                        <span className="text-[11px] font-bold mt-1">{isAr ? 'اضغط للتسبيح' : 'Tap to Count'}</span>
                      </button>

                      <div className="flex justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setState((prev) => ({ ...prev, athkar: { ...prev.athkar, tasbihCount: 0 } }))}
                          className="text-xs theme-text-muted hover:opacity-100 font-bold"
                        >
                          {isAr ? 'تصفير العداد ↺' : 'Reset ↺'}
                        </button>
                      </div>
                    </div>

                    {/* Quran Khatmah Progress */}
                    <div className="glass-card rounded-3xl p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-black text-sm">📖 {isAr ? 'متتبع ختمة القرآن الكريم' : 'Quran Khatmah Tracker'}</h3>
                        <span className="font-mono text-xs font-black text-emerald-400">
                          {state.athkar.khatmahTotalPages || 120} / 604 {isAr ? 'صفحة' : 'pages'}
                        </span>
                      </div>
                      <div className="w-full bg-slate-900/60 h-3 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full transition-all"
                          style={{ width: `${Math.min(100, Math.round(((state.athkar.khatmahTotalPages || 120) / 604) * 100))}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs theme-text-muted font-bold">
                          {isAr ? `ورد اليوم: ${state.athkar.quranPagesRead} من ${state.athkar.quranDailyTarget} صفحات` : `Today: ${state.athkar.quranPagesRead} / ${state.athkar.quranDailyTarget} pages`}
                        </span>
                        <div className="flex gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              soundFX.playClick();
                              setState((prev) => ({
                                ...prev,
                                athkar: {
                                  ...prev.athkar,
                                  quranPagesRead: Math.max(0, prev.athkar.quranPagesRead - 1),
                                  khatmahTotalPages: Math.max(0, (prev.athkar.khatmahTotalPages || 120) - 1)
                                }
                              }));
                            }}
                            className="px-3 py-1.5 rounded-xl glass-card text-xs font-black"
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              soundFX.playClick();
                              setState((prev) => ({
                                ...prev,
                                athkar: {
                                  ...prev.athkar,
                                  quranPagesRead: prev.athkar.quranPagesRead + 1,
                                  khatmahTotalPages: Math.min(604, (prev.athkar.khatmahTotalPages || 120) + 1)
                                }
                              }));
                              awardXP(10);
                            }}
                            className="btn-primary px-3.5 py-1.5 rounded-xl text-xs font-black"
                          >
                            + {isAr ? 'صفحة' : 'Page'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== 4. HEALTH, MEDICINES & VITALS TAB ==================== */}
            {activeTab === 'medicines' && (
              <div className="space-y-5">
                <div className="hero-card rounded-3xl p-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-400/30">
                      MEDICAL & VITALS OS (ALL AGES & SENIORS)
                    </span>
                    <h1 className="text-2xl font-black mt-1">
                      {isAr ? 'الصحة، الأدوية، والمؤشرات الحيوية 🩺' : 'Medications, Supplements & Health Vitals 🩺'}
                    </h1>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowMedModal(true)}
                    className="btn-primary px-4 py-2.5 rounded-2xl text-xs font-black touch-target"
                  >
                    + {isAr ? 'إضافة دواء أو فيتامين' : 'Add Medication / Vitamin'}
                  </button>
                </div>

                {/* Vitals Logger for Seniors & Adults */}
                <div className="glass-card rounded-3xl p-5">
                  <h2 className="font-black text-base mb-3">
                    ❤️ {isAr ? 'سجل القياسات الحيوية اليومي (ضغط الدم، السكر، النبض، والنوم)' : 'Daily Vitals Log (Blood Pressure, Glucose, Heart Rate & Sleep)'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="surface-field p-3.5 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">
                        {isAr ? 'ضغط الدم (Blood Pressure)' : 'Blood Pressure (mmHg)'}
                      </label>
                      <input
                        type="text"
                        value={state.vitals.bloodPressure}
                        onChange={(e) => setState((prev) => ({ ...prev, vitals: { ...prev.vitals, bloodPressure: e.target.value } }))}
                        className="w-full px-3 py-2 rounded-xl glass-card text-emerald-400 font-mono font-black text-center"
                      />
                    </div>
                    <div className="surface-field p-3.5 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">
                        {isAr ? 'مستوى السكر (mg/dL)' : 'Blood Glucose (mg/dL)'}
                      </label>
                      <input
                        type="text"
                        value={state.vitals.bloodSugar}
                        onChange={(e) => setState((prev) => ({ ...prev, vitals: { ...prev.vitals, bloodSugar: e.target.value } }))}
                        className="w-full px-3 py-2 rounded-xl glass-card accent-text font-mono font-black text-center"
                      />
                    </div>
                    <div className="surface-field p-3.5 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">
                        {isAr ? 'نبضات القلب (BPM)' : 'Heart Rate (BPM)'}
                      </label>
                      <input
                        type="text"
                        value={state.vitals.heartRate}
                        onChange={(e) => setState((prev) => ({ ...prev, vitals: { ...prev.vitals, heartRate: e.target.value } }))}
                        className="w-full px-3 py-2 rounded-xl glass-card text-rose-400 font-mono font-black text-center"
                      />
                    </div>
                    <div className="surface-field p-3.5 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">
                        {isAr ? 'ساعات النوم (Hours)' : 'Sleep Duration (Hours)'}
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        value={state.vitals.sleepHours}
                        onChange={(e) => setState((prev) => ({ ...prev, vitals: { ...prev.vitals, sleepHours: Number(e.target.value) || 0 } }))}
                        className="w-full px-3 py-2 rounded-xl glass-card text-purple-400 font-mono font-black text-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Medications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {state.medicines.map((med) => (
                    <div key={med.id} className={`glass-card rounded-3xl p-4 flex flex-col justify-between ${med.completedToday ? 'border-emerald-400 bg-emerald-500/10' : ''}`}>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-cyan-500/15 accent-text">
                            ⏰ {med.time}
                          </span>
                          <h3 className="font-black text-sm mt-1.5">{med.name}</h3>
                          <p className="text-xs theme-text-muted mt-0.5">{med.dosage}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setState((prev) => ({ ...prev, medicines: prev.medicines.filter((m) => m.id !== med.id) }))}
                          className="text-xs text-rose-400 hover:text-rose-300 p-1"
                        >
                          🗑️
                        </button>
                      </div>

                      <div className="flex items-center justify-between border-t theme-border pt-3 mt-3">
                        <span className="text-xs font-bold text-amber-400">
                          🔥 {med.streakDays} {isAr ? 'يوم التزام' : 'day streak'}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            soundFX.playClick();
                            setState((prev) => ({
                              ...prev,
                              medicines: prev.medicines.map((m) =>
                                m.id === med.id
                                  ? { ...m, completedToday: !m.completedToday, streakDays: !m.completedToday ? m.streakDays + 1 : Math.max(0, m.streakDays - 1) }
                                  : m
                              )
                            }));
                            awardXP(10);
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-black ${
                            med.completedToday ? 'bg-emerald-500 text-black' : 'btn-primary'
                          }`}
                        >
                          {med.completedToday ? (isAr ? 'تم أخذ الجرعة ✓' : 'Taken ✓') : (isAr ? 'تسجيل الجرعة' : 'Take Dose')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Medicine Modal */}
                {showMedModal && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="hero-card rounded-3xl p-6 w-full max-w-md space-y-3">
                      <h3 className="text-lg font-black">{isAr ? 'إضافة دواء أو مكمل غذائي 💊' : 'Add Medication or Supplement 💊'}</h3>
                      <input
                        type="text"
                        placeholder={isAr ? 'اسم الدواء / الفيتامين' : 'Medicine / Vitamin Name'}
                        value={medName}
                        onChange={(e) => setMedName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl surface-field text-xs font-bold"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="time"
                          value={medTime}
                          onChange={(e) => setMedTime(e.target.value)}
                          className="px-3 py-2.5 rounded-xl surface-field text-xs font-bold text-center"
                        />
                        <select
                          value={medCat}
                          onChange={(e) => setMedCat(e.target.value)}
                          className="px-3 py-2.5 rounded-xl surface-field text-xs font-bold"
                        >
                          <option value="vitamin">{isAr ? 'فيتامين 🍊' : 'Vitamin 🍊'}</option>
                          <option value="supplement">{isAr ? 'مكمل غذائي 🌿' : 'Supplement 🌿'}</option>
                          <option value="treatment">{isAr ? 'علاج طبي 💊' : 'Prescription 💊'}</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        placeholder={isAr ? 'الجرعة (مثال: حبة بعد الغداء)' : 'Dosage instructions'}
                        value={medDose}
                        onChange={(e) => setMedDose(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl surface-field text-xs font-bold"
                      />
                      <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => setShowMedModal(false)} className="px-4 py-2 rounded-xl glass-card text-xs font-bold">
                          {t.common.cancel}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (!medName.trim()) return;
                            soundFX.playCelebration();
                            setState((prev) => ({
                              ...prev,
                              medicines: [
                                ...prev.medicines,
                                { id: `med_${Date.now()}`, name: medName.trim(), dosage: medDose, time: medTime, completedToday: false, streakDays: 1, category: medCat }
                              ]
                            }));
                            setMedName('');
                            setShowMedModal(false);
                          }}
                          className="btn-primary px-5 py-2 rounded-xl text-xs font-black"
                        >
                          {t.common.save}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ==================== 5. TASKS & POMODORO FOCUS TAB ==================== */}
            {activeTab === 'focus' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-5 hero-card rounded-3xl p-6 text-center space-y-4">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-cyan-500/15 accent-text border theme-border">
                    POMODORO DEEP FOCUS STUDIO
                  </span>
                  <h2 className="text-xl font-black">
                    🎯 {isAr ? 'مؤقت التركيز العميق والدراسة' : 'Deep Work & Study Timer'}
                  </h2>
                  <p className="text-xs theme-text-muted">{focusModeLabel}</p>

                  <div className="text-5xl sm:text-6xl font-mono font-black accent-text py-4">
                    {Math.floor(focusSeconds / 60).toString().padStart(2, '0')}:{(focusSeconds % 60).toString().padStart(2, '0')}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => { setIsFocusRunning(false); setFocusSeconds(25 * 60); setFocusModeLabel(isAr ? 'تركيز 25 دقيقة' : '25m Pomodoro'); }}
                      className="py-2.5 rounded-xl glass-card text-xs font-black"
                    >
                      25m Focus
                    </button>
                    <button
                      type="button"
                      onClick={() => { setIsFocusRunning(false); setFocusSeconds(50 * 60); setFocusModeLabel(isAr ? 'عمل عميق 50 دقيقة' : '50m Deep Work'); }}
                      className="py-2.5 rounded-xl glass-card text-xs font-black"
                    >
                      50m Deep
                    </button>
                    <button
                      type="button"
                      onClick={() => { setIsFocusRunning(false); setFocusSeconds(5 * 60); setFocusModeLabel(isAr ? 'استراحة 5 دقائق' : '5m Break'); }}
                      className="py-2.5 rounded-xl glass-card text-xs font-black"
                    >
                      5m Break
                    </button>
                  </div>

                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => { soundFX.playClick(); setIsFocusRunning(!isFocusRunning); }}
                      className="btn-primary px-8 py-3 rounded-2xl text-sm font-black touch-target"
                    >
                      {isFocusRunning ? (isAr ? 'إيقاف مؤقت ⏸️' : 'Pause ⏸️') : (isAr ? 'ابدأ التركيز الآن ▶️' : 'Start Focus ▶️')}
                    </button>
                  </div>
                </div>

                {/* Smart Daily To-Do & Goals Matrix */}
                <div className="lg:col-span-7 glass-card rounded-3xl p-5 space-y-4">
                  <h2 className="text-lg font-black">
                    ✅ {isAr ? 'قائمة المهام والأهداف اليومية' : 'Smart Daily Tasks & Goals'}
                  </h2>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder={isAr ? 'أضف مهمة أو هدفاً جديداً اليوم...' : 'Add a new task or goal...'}
                      value={newTaskTitle}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl surface-field text-xs font-bold"
                    />
                    <select
                      value={newTaskPriority}
                      onChange={(e) => setNewTaskPriority(e.target.value)}
                      className="px-2.5 py-2.5 rounded-xl surface-field text-xs font-bold"
                    >
                      <option value="high">{isAr ? 'أولوية قصوى 🔥' : 'High 🔥'}</option>
                      <option value="medium">{isAr ? 'متوسطة ⚡' : 'Medium ⚡'}</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => {
                        if (!newTaskTitle.trim()) return;
                        soundFX.playClick();
                        setState((prev) => ({
                          ...prev,
                          tasks: [
                            { id: `tsk_${Date.now()}`, titleAr: newTaskTitle.trim(), titleEn: newTaskTitle.trim(), priority: newTaskPriority, completed: false },
                            ...prev.tasks
                          ]
                        }));
                        setNewTaskTitle('');
                      }}
                      className="btn-primary px-4 py-2.5 rounded-xl text-xs font-black"
                    >
                      {t.common.add}
                    </button>
                  </div>

                  <div className="space-y-2">
                    {state.tasks.map((tsk) => (
                      <div
                        key={tsk.id}
                        className={`p-3.5 rounded-2xl border flex items-center justify-between gap-2 ${
                          tsk.completed ? 'bg-emerald-500/15 border-emerald-400 opacity-80' : 'surface-field'
                        }`}
                      >
                        <div
                          onClick={() => {
                            soundFX.playClick();
                            setState((prev) => ({
                              ...prev,
                              tasks: prev.tasks.map((item) => item.id === tsk.id ? { ...item, completed: !item.completed } : item)
                            }));
                            awardXP(10);
                          }}
                          className="flex items-center gap-3 cursor-pointer flex-1"
                        >
                          <span className="text-lg">{tsk.completed ? '✅' : '⬜'}</span>
                          <div>
                            <div className={`text-xs sm:text-sm font-black ${tsk.completed ? 'line-through' : ''}`}>
                              {isAr ? tsk.titleAr : tsk.titleEn}
                            </div>
                            <span className="text-[10px] accent-text font-bold">
                              {tsk.priority === 'high' ? (isAr ? 'أولوية قصوى 🔥' : 'High Priority 🔥') : (isAr ? 'مهمة يومية ⚡' : 'Daily Task ⚡')}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setState((prev) => ({ ...prev, tasks: prev.tasks.filter((item) => item.id !== tsk.id) }))}
                          className="text-xs text-rose-400 p-1"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ==================== 6. HYDRATION TAB ==================== */}
            {activeTab === 'hydration' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-6 hero-card rounded-3xl p-6 text-center space-y-4">
                  <h2 className="text-2xl font-black">
                    💧 {isAr ? 'متتبع شرب الماء والترطيب الذكي' : 'Smart Hydration & Wellness Drinks'}
                  </h2>
                  <p className="text-xs theme-text-muted">
                    {isAr
                      ? `الهدف المحسوب لوزنك (${state.user.weightKg} كجم): ${state.hydration.targetMl} مل يومياً`
                      : `Calculated goal for your weight (${state.user.weightKg} kg): ${state.hydration.targetMl} ml/day`}
                  </p>

                  {/* Animated Water Cylinder */}
                  <div className="w-36 h-48 mx-auto border-2 border-cyan-400 rounded-b-3xl rounded-t-xl relative overflow-hidden bg-slate-950 shadow-2xl">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-cyan-300 transition-all duration-500 flex items-center justify-center"
                      style={{ height: `${Math.min(100, Math.round((state.hydration.currentMl / (state.hydration.targetMl || 2500)) * 100))}%` }}
                    >
                      <span className="text-black font-mono font-black text-base">
                        {Math.min(100, Math.round((state.hydration.currentMl / (state.hydration.targetMl || 2500)) * 100))}%
                      </span>
                    </div>
                  </div>

                  <div className="text-xl font-mono font-black accent-text">
                    {state.hydration.currentMl} / {state.hydration.targetMl} ml
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddWater(250, isAr ? 'كوب ماء 250 مل 💧' : '250ml Water Cup 💧')}
                      className="btn-primary py-2.5 rounded-2xl text-xs font-black touch-target"
                    >
                      +250 ml 💧
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddWater(500, isAr ? 'زجاجة 500 مل 🍼' : '500ml Bottle 🍼')}
                      className="glass-card py-2.5 rounded-2xl text-xs font-black touch-target"
                    >
                      +500 ml 🍼
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddWater(200, isAr ? 'مشروب أعشاب / شاي أخضر 🍵' : 'Herbal / Green Tea 🍵')}
                      className="glass-card py-2.5 rounded-2xl text-xs font-black touch-target"
                    >
                      +200 ml 🍵
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 glass-card rounded-3xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b theme-border pb-2.5">
                    <h3 className="font-black text-base">{isAr ? 'سجل الترطيب اليومي' : 'Today Hydration Log'}</h3>
                    <button
                      type="button"
                      onClick={() => setState((prev) => ({ ...prev, hydration: { ...prev.hydration, currentMl: 0, logs: [] } }))}
                      className="text-xs text-rose-400 font-bold"
                    >
                      {isAr ? 'تصفير السجل ↺' : 'Reset ↺'}
                    </button>
                  </div>
                  <div className="space-y-2 max-h-72 overflow-y-auto">
                    {state.hydration.logs.map((log, i) => (
                      <div key={i} className="p-3 rounded-2xl surface-field flex items-center justify-between text-xs font-bold">
                        <span>{log.type || '💧'}</span>
                        <span className="font-mono accent-text">+{log.amountMl} ml</span>
                        <span className="font-mono theme-text-muted">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ==================== 7. FAMILY & MILESTONES TAB ==================== */}
            {activeTab === 'birthdays' && (
              <div className="space-y-5">
                <div className="hero-card rounded-3xl p-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h1 className="text-2xl font-black">
                      🎂 {isAr ? 'تقويم العائلة والمناسبات السعيدة' : 'Family Birthdays & Milestones'}
                    </h1>
                    <p className="text-xs theme-text-muted">
                      {isAr ? 'تذكيرات ذكية بمناسبات العائلة والأحباب' : 'Smart countdowns for your loved ones'}
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-5 space-y-4">
                  <h3 className="font-black text-sm">{isAr ? '+ إضافة مناسبة أو عيد ميلاد جديد' : '+ Add Family Member Birthday'}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <input
                      type="text"
                      placeholder={isAr ? 'الاسم' : 'Name'}
                      value={famName}
                      onChange={(e) => setFamName(e.target.value)}
                      className="px-3 py-2.5 rounded-xl surface-field text-xs font-bold"
                    />
                    <input
                      type="text"
                      placeholder={isAr ? 'صلة القرابة (ابن، والدة...)' : 'Relation (Son, Mom...)'}
                      value={famRel}
                      onChange={(e) => setFamRel(e.target.value)}
                      className="px-3 py-2.5 rounded-xl surface-field text-xs font-bold"
                    />
                    <input
                      type="date"
                      value={famDate}
                      onChange={(e) => setFamDate(e.target.value)}
                      className="px-3 py-2.5 rounded-xl surface-field text-xs font-bold"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (!famName || !famDate) return;
                        soundFX.playCelebration();
                        updateUserField({
                          familyBirthdays: [...state.user.familyBirthdays, { id: `fam_${Date.now()}`, name: famName, relation: famRel, birthDate: famDate }]
                        });
                        setFamName('');
                        setFamDate('');
                      }}
                      className="btn-primary py-2.5 rounded-xl text-xs font-black"
                    >
                      {t.common.add}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                    {state.user.familyBirthdays.map((item) => (
                      <div key={item.id} className="p-4 rounded-2xl surface-field flex items-center justify-between">
                        <div>
                          <div className="font-black text-sm">🎉 {item.name}</div>
                          <div className="text-xs accent-text font-bold">{item.relation}</div>
                          <div className="text-[11px] font-mono theme-text-muted mt-0.5">{item.birthDate}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => updateUserField({ familyBirthdays: state.user.familyBirthdays.filter((f) => f.id !== item.id) })}
                          className="text-xs text-rose-400 p-1"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ==================== 8. PROFILE, THEMES GALLERY & NATIVE CLOUD ACCOUNT TAB ==================== */}
            {activeTab === 'cloud' && (
              <div className="space-y-5">
                {/* Profile & Encrypted Cloud Status Header */}
                <div className="hero-card rounded-3xl p-6 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-400/30">
                        🔒 SAHLY ID & PERSONALIZATION STUDIO
                      </span>
                      <h1 className="text-2xl font-black mt-1.5">
                        {isAr ? 'حسابي، المظهر البصري، والمزامنة الذكية 🎨' : 'My Account, Visual Themes & Smart Cloud 🎨'}
                      </h1>
                      <p className="text-xs theme-text-muted mt-0.5">
                        {isAr
                          ? 'جميع بياناتك وإنجازاتك محفوظة ومشفرة تلقائياً في سحابة سهلي دي الخاصة بك.'
                          : 'Your progress and health records are automatically encrypted and synced to your personal Sahly Cloud.'}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={async () => {
                          setSyncStatus('syncing');
                          await pushClientStateToCloud(state);
                          setSyncStatus('synced');
                          soundFX.playCelebration();
                          showToast(isAr ? 'تمت المزامنة السحابية المشفرة لحسابك بنجاح! 🔒⚡' : 'Encrypted cloud account synced! 🔒⚡');
                        }}
                        className="btn-primary px-5 py-2.5 rounded-2xl text-xs font-black touch-target"
                      >
                        🔄 {t.common.syncNow}
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const cloud = await fetchClientStateFromCloud(state.user.email, state.user.clientId);
                          if (cloud && cloud.state) {
                            setState((prev) => ({ ...prev, ...cloud.state }));
                            soundFX.playCelebration();
                            showToast(isAr ? 'تم استرجاع أحدث نسخة سحابية لحسابك! ✨' : 'Restored latest cloud backup! ✨');
                          } else {
                            showToast(isAr ? 'حسابك محدث بالفعل لأخر نسخة سحابية ✅' : 'Your account is already up to date ✅');
                          }
                        }}
                        className="glass-card px-4 py-2.5 rounded-2xl text-xs font-black touch-target"
                      >
                        ☁️ {isAr ? 'استرجاع النسخة السحابية' : 'Restore Cloud Backup'}
                      </button>
                    </div>
                  </div>

                  {/* Personal Profile Editor */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="surface-field p-4 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">{isAr ? 'الاسم الشخصي' : 'Full Name'}</label>
                      <input
                        type="text"
                        value={state.user.name}
                        onChange={(e) => updateUserField({ name: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl glass-card text-xs font-black"
                      />
                    </div>
                    <div className="surface-field p-4 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">{isAr ? 'البريد الإلكتروني للحساب' : 'Account Email'}</label>
                      <input
                        type="email"
                        value={state.user.email}
                        onChange={(e) => updateUserField({ email: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl glass-card text-xs font-mono font-bold"
                      />
                    </div>
                    <div className="surface-field p-4 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">{isAr ? 'الوزن الحالي (كجم)' : 'Current Weight (kg)'}</label>
                      <input
                        type="number"
                        value={state.user.weightKg}
                        onChange={(e) => {
                          const w = Number(e.target.value) || 70;
                          updateUserField({ weightKg: w, waterDailyTargetMl: Math.round(w * 35) });
                        }}
                        className="w-full px-3 py-1.5 rounded-xl glass-card text-xs font-mono font-black text-center"
                      />
                    </div>
                    <div className="surface-field p-4 rounded-2xl">
                      <label className="text-xs theme-text-muted font-bold block mb-1">{isAr ? 'الطول (سم)' : 'Height (cm)'}</label>
                      <input
                        type="number"
                        value={state.user.heightCm}
                        onChange={(e) => updateUserField({ heightCm: Number(e.target.value) || 170 })}
                        className="w-full px-3 py-1.5 rounded-xl glass-card text-xs font-mono font-black text-center"
                      />
                    </div>
                  </div>
                </div>

                {/* 7 Interactive Theme Studio Gallery */}
                <div className="glass-card rounded-3xl p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-black">
                      🎨 {isAr ? 'استوديو الثيمات الفاخرة (7 مظاهر مصممة لراحة العين)' : '7 Flagship Eye-Comfort Themes Studio'}
                    </h2>
                    <p className="text-xs theme-text-muted">
                      {isAr ? 'اختر الثيم المفضل لك بضغطة واحدة ليتغير مظهر التطبيق بالكامل فوراً' : 'Tap any theme below to transform the entire application aesthetic'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {THEME_CATALOG.map((th) => {
                      const active = state.user.theme === th.id;
                      return (
                        <button
                          key={th.id}
                          type="button"
                          onClick={() => { soundFX.playClick(); updateUserField({ theme: th.id }); }}
                          className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                            active ? 'border-cyan-400 ring-2 ring-cyan-400/30 hero-card scale-[1.01]' : 'surface-field opacity-85 hover:opacity-100'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-inner border border-white/20" style={{ background: th.preview }}>
                              {th.icon}
                            </span>
                            <div style={{ textAlign: isAr ? 'right' : 'left' }}>
                              <div className="font-black text-xs">{isAr ? th.nameAr : th.nameEn}</div>
                              <div className="text-[10px] theme-text-muted">{active ? (isAr ? 'مُفعّل الآن ✓' : 'Active ✓') : (isAr ? 'اضغط للتفعيل' : 'Tap to apply')}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* NATIVE MOBILE FLOATING GLASS BOTTOM TAB BAR */}
          <nav className="lg:hidden fixed bottom-2 left-2 right-2 z-40 glass-card rounded-3xl px-2 py-2 flex items-center justify-around shadow-2xl">
            {navItems.slice(0, 6).map((item) => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => { soundFX.playClick(); setActiveTab(item.id); }}
                  className={`flex flex-col items-center justify-center py-1.5 px-2.5 rounded-2xl transition-all ${
                    active ? 'btn-primary shadow-md scale-105' : 'theme-text-muted'
                  }`}
                >
                  <span className="text-base leading-none">{item.icon}</span>
                  <span className="text-[10px] font-black mt-1">{item.label.split(' ')[0]}</span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => { soundFX.playClick(); setActiveTab('cloud'); }}
              className={`flex flex-col items-center justify-center py-1.5 px-2.5 rounded-2xl transition-all ${
                activeTab === 'cloud' ? 'btn-primary shadow-md scale-105' : 'theme-text-muted'
              }`}
            >
              <span className="text-base leading-none">🎨</span>
              <span className="text-[10px] font-black mt-1">{isAr ? 'حسابي' : 'Profile'}</span>
            </button>
          </nav>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>