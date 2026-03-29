import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "decisionlog — Decisions where they're made",
  description: "Decision logging for dev teams. Slack-native, zero friction.",
};

export default function HomePage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
    <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --white:   #ffffff;
      --off:     #F9F9F8;
      --light:   #F2F2F0;
      --border:  #E4E4E2;
      --muted:   #999896;
      --body:    #44433F;
      --dark:    #111110;
      --black:   #0A0A09;
      --r:       18px;
      --rl:      28px;
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: 'Figtree', sans-serif;
      background: var(--white);
      color: var(--dark);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* ══ NAV ══════════════════════════════════════ */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 40px; height: 60px;
      background: rgba(255,255,255,0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }
    .logo {
      font-family: 'Fraunces', serif;
      font-size: 18px; font-weight: 600; letter-spacing: -0.4px;
      color: var(--black); text-decoration: none;
    }
    .logo sup { font-size: 9px; font-family: 'Figtree', sans-serif; font-weight: 500; color: var(--muted); vertical-align: super; margin-left: 2px; }
    .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
    .nav-links a { font-size: 13.5px; font-weight: 400; color: var(--body); text-decoration: none; padding: 6px 14px; border-radius: 8px; transition: background .15s, color .15s; }
    .nav-links a:hover { background: var(--light); color: var(--dark); }
    .nav-right { display: flex; align-items: center; gap: 10px; }
    .nav-signin { font-size: 13.5px; color: var(--body); text-decoration: none; padding: 6px 14px; border-radius: 8px; transition: background .15s; }
    .nav-signin:hover { background: var(--light); }
    .nav-cta {
      font-size: 13.5px; font-weight: 500;
      background: var(--black); color: #fff;
      padding: 8px 18px; border-radius: 50px;
      text-decoration: none; display: flex; align-items: center; gap: 7px;
      transition: opacity .2s, transform .2s;
    }
    .nav-cta:hover { opacity: .82; transform: translateY(-1px); }

    /* ══ HERO ══════════════════════════════════════ */
    .hero {
      padding: 130px 24px 0;
      text-align: center;
      position: relative; overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,0,0,0.035) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-pill {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--light); border: 1px solid var(--border);
      padding: 5px 14px 5px 10px; border-radius: 50px;
      font-size: 12.5px; font-weight: 500; color: var(--body);
      margin-bottom: 32px;
      animation: fadeUp .5s ease both;
    }
    .hero-pill-dot {
      width: 18px; height: 18px; border-radius: 50%;
      background: var(--black);
      display: flex; align-items: center; justify-content: center;
    }
    .hero-pill-dot svg { width: 10px; height: 10px; }

    h1 {
      font-family: 'Fraunces', serif;
      font-size: clamp(48px, 7.5vw, 96px);
      font-weight: 500; line-height: 1.0; letter-spacing: -3px;
      color: var(--black); max-width: 860px; margin: 0 auto;
      animation: fadeUp .55s .08s ease both;
    }
    h1 em { font-style: italic; font-weight: 300; color: var(--muted); }

    .hero-sub {
      font-size: clamp(16px, 1.8vw, 19px); font-weight: 300; color: var(--body);
      max-width: 480px; margin: 22px auto 0; line-height: 1.65;
      animation: fadeUp .55s .16s ease both;
    }
    .hero-btns {
      display: flex; align-items: center; justify-content: center; gap: 12px;
      margin-top: 36px; animation: fadeUp .55s .24s ease both;
    }
    .btn-black {
      display: inline-flex; align-items: center; gap: 9px;
      background: var(--black); color: #fff;
      padding: 14px 26px; border-radius: 50px;
      font-size: 15px; font-weight: 500; text-decoration: none;
      box-shadow: 0 2px 16px rgba(0,0,0,0.22);
      transition: transform .2s, box-shadow .2s;
    }
    .btn-black:hover { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(0,0,0,0.28); }
    .btn-ghost {
      display: inline-flex; align-items: center; gap: 6px;
      color: var(--body); font-size: 15px; font-weight: 400;
      text-decoration: none; padding: 14px 20px; border-radius: 50px;
      border: 1px solid var(--border); transition: background .15s, border-color .15s;
    }
    .btn-ghost:hover { background: var(--light); border-color: #ccc; }

    /* Hero mockup */
    .hero-mockup {
      margin: 60px auto 0; max-width: 900px; position: relative;
      animation: fadeUp .6s .32s ease both;
    }
    .hero-mockup-inner {
      background: var(--white); border: 1px solid var(--border);
      border-radius: var(--rl) var(--rl) 0 0; padding: 28px;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.03), 0 8px 40px rgba(0,0,0,0.07), 0 40px 100px rgba(0,0,0,0.04);
      overflow: hidden;
    }
    .browser-bar { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
    .browser-dots { display: flex; gap: 6px; }
    .browser-dots span { width: 10px; height: 10px; border-radius: 50%; background: var(--border); }
    .browser-url {
      flex: 1; background: var(--light); border-radius: 8px;
      height: 28px; display: flex; align-items: center; padding: 0 12px; gap: 7px;
    }
    .browser-url span { font-size: 12px; color: var(--muted); }
    .app-layout {
      display: grid; grid-template-columns: 220px 1fr;
      border: 1px solid var(--border); border-radius: 14px; overflow: hidden; min-height: 380px;
    }
    .app-sidebar { background: var(--off); border-right: 1px solid var(--border); padding: 18px 14px; }
    .sidebar-logo {
      font-family: 'Fraunces', serif; font-size: 15px; font-weight: 600; color: var(--black);
      padding: 4px 8px; margin-bottom: 20px;
      display: flex; align-items: center; gap: 8px;
    }
    .sidebar-logo-dot {
      width: 22px; height: 22px; border-radius: 6px; background: var(--black);
      display: flex; align-items: center; justify-content: center;
    }
    .sidebar-logo-dot span { font-size: 11px; color: #fff; font-weight: 700; }
    .sidebar-section { font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); padding: 0 8px; margin-bottom: 8px; }
    .sidebar-item {
      display: flex; align-items: center; gap: 8px;
      padding: 7px 10px; border-radius: 8px;
      font-size: 13px; color: var(--body); margin-bottom: 2px; cursor: pointer;
      transition: background .15s;
    }
    .sidebar-item:hover { background: var(--border); }
    .sidebar-item.active { background: var(--white); color: var(--dark); font-weight: 500; box-shadow: 0 1px 4px rgba(0,0,0,0.07); }
    .sidebar-count { margin-left: auto; background: var(--dark); color: #fff; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 50px; }
    .sidebar-divider { border: none; border-top: 1px solid var(--border); margin: 12px 0; }
    .app-main { background: var(--white); display: flex; flex-direction: column; }
    .app-topbar { padding: 16px 22px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 14px; }
    .app-topbar h3 { font-size: 15px; font-weight: 600; flex: 1; }
    .app-search {
      display: flex; align-items: center; gap: 8px;
      background: var(--off); border: 1px solid var(--border); border-radius: 8px; padding: 7px 12px;
    }
    .app-search input { border: none; background: none; outline: none; font-size: 13px; color: var(--dark); width: 160px; font-family: 'Figtree', sans-serif; }
    .app-search input::placeholder { color: var(--muted); }
    .tag-pill { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 50px; display: inline-flex; align-items: center; }
    .tag-arch { background: #F0F0F0; color: #444; }
    .tag-infra { background: #F5F5F5; color: #555; }
    .tag-product { background: #EBEBEB; color: #333; }
    .tag-team { background: #F8F8F8; color: #444; }
    .decision-list { padding: 12px; flex: 1; }
    .decision-item {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 14px 16px; border-radius: 10px;
      border: 1px solid transparent; margin-bottom: 6px; cursor: pointer;
      transition: background .15s, border-color .15s;
    }
    .decision-item:hover { background: var(--off); border-color: var(--border); }
    .decision-item.selected { background: var(--off); border-color: var(--border); box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
    .di-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--light); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 14px; }
    .di-body { flex: 1; min-width: 0; }
    .di-title { font-size: 13.5px; font-weight: 500; color: var(--dark); margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .di-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .di-date { font-size: 11px; color: var(--muted); }
    .di-owner { font-size: 11px; color: var(--muted); }
    .di-owner::before { content: '· '; }

    /* Slack float */
    .slack-float {
      position: absolute; right: -28px; bottom: 50px; width: 270px;
      background: var(--white); border: 1px solid var(--border);
      border-radius: 14px; box-shadow: 0 8px 40px rgba(0,0,0,0.12); overflow: hidden;
      animation: floatCard 4s ease-in-out infinite;
    }
    @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    .sf-header { background: #111; padding: 10px 14px; display: flex; align-items: center; gap: 8px; }
    .sf-header .dots { display: flex; gap: 5px; }
    .sf-header .dots span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.18); }
    .sf-channel { font-size: 12px; color: rgba(255,255,255,0.5); margin-left: 4px; }
    .sf-body { padding: 14px; }
    .sf-msg { display: flex; gap: 9px; margin-bottom: 10px; }
    .sf-av { width: 26px; height: 26px; border-radius: 6px; background: #2a2a2a; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #fff; }
    .sf-name { font-size: 11.5px; font-weight: 600; color: var(--dark); }
    .sf-time { font-size: 10px; color: var(--muted); margin-left: 5px; }
    .sf-content { font-size: 11.5px; color: var(--body); line-height: 1.45; margin-top: 2px; }
    .sf-menu { margin: 0 0 0 35px; background: var(--white); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.1); display: inline-flex; flex-direction: column; }
    .sf-item { padding: 7px 14px; font-size: 12px; color: var(--body); border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 7px; }
    .sf-item:last-child { border-bottom: none; }
    .sf-item.sf-active { background: var(--black); color: #fff; font-weight: 500; }

    /* ══ LOGOS ══════════════════════════════════════ */
    .logos {
      padding: 48px 24px; text-align: center;
      border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-top: 80px;
    }
    .logos p { font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); margin-bottom: 28px; }
    .logos-list { display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap; }
    .logo-item { font-size: 14px; font-weight: 500; color: #C8C8C4; transition: color .2s; }
    .logo-item:hover { color: var(--body); }
    .logo-item.serif { font-family: 'Fraunces', serif; }
    .logo-item.mono { font-family: monospace; letter-spacing: -1px; font-size: 13px; }

    /* ══ SHARED ══════════════════════════════════════ */
    .section-kicker { font-size: 11.5px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
    .section-h2 { font-family: 'Fraunces', serif; font-size: clamp(34px, 4.5vw, 58px); font-weight: 500; letter-spacing: -1.8px; line-height: 1.08; color: var(--black); }
    .section-h2 em { font-style: italic; font-weight: 300; color: var(--muted); }

    /* ══ PAIN ══════════════════════════════════════ */
    .pain-wrap { max-width: 1080px; margin: 0 auto; padding: 96px 24px; }
    .pain-head { margin-bottom: 52px; }
    .pain-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--rl); overflow: hidden; }
    .pain-item { background: var(--white); padding: 36px 28px; }
    .pain-num { font-family: 'Fraunces', serif; font-size: 44px; font-weight: 300; font-style: italic; color: var(--border); line-height: 1; margin-bottom: 16px; }
    .pain-item h4 { font-size: 15px; font-weight: 500; color: var(--dark); margin-bottom: 8px; line-height: 1.4; }
    .pain-item p { font-size: 13.5px; color: var(--muted); line-height: 1.6; }

    /* ══ FEATURES BENTO ══════════════════════════════ */
    .features-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px 96px; }
    .features-head { margin-bottom: 52px; }
    .bento { display: grid; grid-template-columns: repeat(12,1fr); gap: 12px; }
    .bc {
      background: var(--off); border: 1px solid var(--border);
      border-radius: var(--rl); padding: 36px 34px;
      position: relative; overflow: hidden;
      transition: border-color .2s, box-shadow .2s, transform .2s;
    }
    .bc:hover { border-color: #C8C8C6; box-shadow: 0 8px 40px rgba(0,0,0,0.06); transform: translateY(-2px); }
    .bc-dark { background: var(--black); border-color: #222; }
    .bc-dark:hover { border-color: #333; }
    .bc-white { background: var(--white); }
    .span-7 { grid-column: span 7; }
    .span-5 { grid-column: span 5; }
    .span-4 { grid-column: span 4; }
    .span-12 { grid-column: span 12; }
    .bc-kicker { display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: .09em; text-transform: uppercase; color: var(--muted); margin-bottom: 18px; }
    .bc-dark .bc-kicker { color: rgba(255,255,255,0.3); }
    .bc h3 { font-family: 'Fraunces', serif; font-size: clamp(22px,2.5vw,32px); font-weight: 500; letter-spacing: -0.8px; line-height: 1.15; color: var(--black); margin-bottom: 10px; }
    .bc-dark h3 { color: #fff; }
    .bc p { font-size: 14.5px; font-weight: 300; color: var(--body); line-height: 1.65; }
    .bc-dark p { color: rgba(255,255,255,0.4); }
    .bc-quote { margin-top: 22px; padding-top: 22px; border-top: 1px solid var(--border); font-family: 'Fraunces', serif; font-style: italic; font-size: 16px; line-height: 1.5; letter-spacing: -0.3px; color: var(--dark); }
    .bc-dark .bc-quote { border-top-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); }
    .bc-deco { position: absolute; right: 32px; top: 32px; display: grid; grid-template-columns: repeat(4,1fr); gap: 6px; }
    .bc-deco span { width: 5px; height: 5px; border-radius: 50%; background: var(--border); }
    .bc-dark .bc-deco span { background: rgba(255,255,255,0.07); }

    /* Slack demo in card */
    .slack-demo { margin-top: 24px; }
    .sdk-header { background: #111; border-radius: 10px 10px 0 0; padding: 10px 14px; display: flex; align-items: center; gap: 8px; }
    .sdk-header .dots { display: flex; gap: 5px; }
    .sdk-header .dots span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.15); }
    .sdk-ch { font-size: 12px; color: rgba(255,255,255,0.45); margin-left: 6px; }
    .sdk-body { background: var(--white); border: 1px solid var(--border); border-radius: 0 0 10px 10px; padding: 16px; }
    .sdm { display: flex; gap: 10px; margin-bottom: 12px; }
    .sdm-av { width: 28px; height: 28px; border-radius: 6px; background: var(--dark); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #fff; }
    .sdm-nm { font-size: 12.5px; font-weight: 600; color: var(--dark); }
    .sdm-tm { font-size: 10.5px; color: var(--muted); margin-left: 5px; }
    .sdm-ms { font-size: 12.5px; color: var(--body); line-height: 1.45; margin-top: 2px; }
    .ctx { margin: 0 0 0 38px; display: inline-flex; flex-direction: column; background: var(--white); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.1); }
    .ctx-i { padding: 8px 14px; font-size: 12.5px; display: flex; align-items: center; gap: 8px; color: var(--body); border-bottom: 1px solid var(--border); }
    .ctx-i:last-child { border-bottom: none; }
    .ctx-i.on { background: var(--black); color: #fff; font-weight: 500; }

    /* Search UI */
    .search-ui { margin-top: 22px; background: var(--white); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
    .search-top { padding: 12px 16px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 8px; }
    .search-top input { flex: 1; border: none; outline: none; font-size: 13px; font-family: 'Figtree',sans-serif; color: var(--dark); background: none; }
    .search-top input::placeholder { color: var(--muted); }
    .search-filters { padding: 10px 16px; border-bottom: 1px solid var(--border); display: flex; gap: 6px; }
    .fc { padding: 3px 10px; border-radius: 50px; border: 1px solid var(--border); font-size: 11.5px; color: var(--muted); background: var(--white); }
    .fc.on { background: var(--dark); color: #fff; border-color: var(--dark); }
    .sr { padding: 14px 16px; border-bottom: 1px solid #f4f4f4; transition: background .12s; }
    .sr:last-child { border-bottom: none; }
    .sr:hover { background: var(--off); }
    .sr-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
    .sr-t { font-size: 13px; font-weight: 500; color: var(--dark); }
    .sr-hl { background: #F0F0F0; border-radius: 2px; padding: 0 2px; }
    .sr-m { font-size: 11.5px; color: var(--muted); }

    /* Dark card stats */
    .stats-row { display: flex; gap: 40px; margin-top: 32px; flex-wrap: wrap; }
    .stat-val { font-family: 'Fraunces', serif; font-size: 42px; font-weight: 300; letter-spacing: -2px; color: #fff; line-height: 1; }
    .stat-lbl { font-size: 12.5px; color: rgba(255,255,255,0.32); margin-top: 5px; }

    /* ══ HOW ══════════════════════════════════════ */
    .how-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px 96px; }
    .how-head { margin-bottom: 56px; }
    .steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--rl); overflow: hidden; }
    .step { background: var(--white); padding: 40px 34px; position: relative; }
    .step-n { font-family: 'Fraunces', serif; font-size: 72px; font-weight: 300; font-style: italic; color: var(--border); line-height: 1; margin-bottom: 20px; }
    .step h4 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 500; letter-spacing: -0.4px; margin-bottom: 10px; color: var(--dark); }
    .step p { font-size: 14px; color: var(--muted); line-height: 1.65; font-weight: 300; }
    .step-icon { font-size: 24px; margin-bottom: 18px; }
    .step-arr { position: absolute; top: 40px; right: -12px; width: 24px; height: 24px; border-radius: 50%; background: var(--white); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--muted); z-index: 2; }

    /* ══ TESTIMONIALS ══════════════════════════════ */
    .testi-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px 96px; }
    .testi-head { margin-bottom: 52px; }
    .testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
    .testi-card { background: var(--off); border: 1px solid var(--border); border-radius: var(--rl); padding: 32px; transition: border-color .2s, transform .2s; }
    .testi-card:hover { border-color: #C8C8C6; transform: translateY(-3px); }
    .testi-stars { display: flex; gap: 3px; margin-bottom: 18px; }
    .testi-stars span { font-size: 13px; color: var(--dark); }
    .testi-q { font-family: 'Fraunces', serif; font-style: italic; font-size: 18px; line-height: 1.5; letter-spacing: -0.4px; color: var(--dark); margin-bottom: 22px; }
    .testi-author { display: flex; align-items: center; gap: 11px; }
    .testi-av { width: 36px; height: 36px; border-radius: 50%; background: var(--border); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--dark); flex-shrink: 0; }
    .testi-av.d { background: var(--dark); color: #fff; }
    .testi-av.m { background: #DDDDD9; }
    .testi-name { font-size: 13px; font-weight: 600; color: var(--dark); }
    .testi-role { font-size: 12px; color: var(--muted); }

    /* ══ CTA ══════════════════════════════════════ */
    .cta-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px 100px; }
    .cta-box { background: var(--black); border-radius: var(--rl); padding: 100px 72px; text-align: center; position: relative; overflow: hidden; }
    .cta-box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 65%); pointer-events: none; }
    .cta-box h2 { font-family: 'Fraunces', serif; font-size: clamp(40px,6vw,72px); font-weight: 500; letter-spacing: -2.5px; color: #fff; line-height: 1.0; margin-bottom: 16px; position: relative; }
    .cta-box h2 em { font-style: italic; font-weight: 300; color: rgba(255,255,255,0.35); }
    .cta-box p { font-size: 17px; color: rgba(255,255,255,0.4); font-weight: 300; margin-bottom: 44px; position: relative; }
    .cta-btns { display: flex; justify-content: center; gap: 12px; position: relative; }
    .btn-white { display: inline-flex; align-items: center; gap: 9px; background: #fff; color: var(--black); padding: 15px 30px; border-radius: 50px; font-size: 15px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 24px rgba(0,0,0,0.3); transition: transform .2s, box-shadow .2s; }
    .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(0,0,0,0.4); }
    .btn-outline-w { display: inline-flex; align-items: center; gap: 7px; color: rgba(255,255,255,0.5); font-size: 15px; text-decoration: none; padding: 15px 24px; border: 1px solid rgba(255,255,255,0.13); border-radius: 50px; transition: color .2s, border-color .2s; }
    .btn-outline-w:hover { color: #fff; border-color: rgba(255,255,255,0.32); }

    /* ══ FOOTER ══════════════════════════════════════ */
    .site-footer { border-top: 1px solid var(--border); padding: 36px 40px; display: flex; align-items: center; justify-content: space-between; max-width: 1080px; margin: 0 auto; }
    .footer-links { display: flex; gap: 24px; }
    .footer-links a { font-size: 13px; color: var(--muted); text-decoration: none; transition: color .15s; }
    .footer-links a:hover { color: var(--dark); }
    .footer-copy { font-size: 13px; color: var(--muted); }

    /* ══ ANIMATIONS ══════════════════════════════════ */
    @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
    .reveal.vis { opacity: 1; transform: translateY(0); }

    /* ══ RESPONSIVE ══════════════════════════════════ */
    @media (max-width: 920px) {
      nav { padding: 0 20px; }
      .nav-links { display: none; }
      .span-7,.span-5,.span-4,.span-12 { grid-column: span 12; }
      .steps,.testi-grid,.pain-grid { grid-template-columns: 1fr; }
      .slack-float { display: none; }
      .cta-box { padding: 60px 28px; }
      .site-footer { flex-direction: column; gap: 20px; text-align: center; }
      .stats-row { gap: 24px; }
    }
  </style>
    

  <!-- NAV -->
  <nav>
    <a href="#" class="logo">decisionlog<sup>↗</sup></a>
    <ul class="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#how">How it works</a></li>
      <li><a href="#teams">Teams</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
    </ul>
    <div class="nav-right">
      <a href="/login" class="nav-signin">Log in</a>
      <a href="/signup" class="nav-signin">Sign up</a>
      <a href="https://slack.com/oauth_v2/authorize?client_id=10708640313204.10701649677509&scope=users:read,channels:history,chat:write,commands,im:write&redirect_uri=https://api.decisionslog.space/slack/oauth_redirect" class="nav-cta">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        Add to Slack
      </a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-pill">
      <div class="hero-pill-dot">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
      Native Slack Shortcut · No new tool to learn
    </div>

    <h1>Decisions live where<br>conversations <em>happen</em></h1>
    <p class="hero-sub">Right-click any Slack message. Log the decision. Find it years later. Zero context switching.</p>

    <div class="hero-btns">
      <a href="https://slack.com/oauth_v2/authorize?client_id=10708640313204.10701649677509&scope=users:read,channels:history,chat:write,commands,im:write&redirect_uri=https://api.decisionslog.space/slack/oauth_redirect" class="btn-black">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        Add to Slack — Free
      </a>
      <a href="#features" class="btn-ghost">See features</a>
    </div>

    <div class="hero-mockup">
      <div class="hero-mockup-inner">
        <div class="browser-bar">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>app.decisionlog.io/decisions</span>
          </div>
        </div>
        <div class="app-layout">
          <div class="app-sidebar">
            <div class="sidebar-logo">
              <div class="sidebar-logo-dot"><span>d</span></div>
              decisionlog
            </div>
            <div class="sidebar-section">Views</div>
            <div class="sidebar-item active">
              <span>📋</span> All Decisions
              <span class="sidebar-count">48</span>
            </div>
            <div class="sidebar-item"><span>🏗</span> Architecture</div>
            <div class="sidebar-item"><span>⚙️</span> Infrastructure</div>
            <div class="sidebar-item"><span>👥</span> Team</div>
            <hr class="sidebar-divider" />
            <div class="sidebar-section">My Activity</div>
            <div class="sidebar-item"><span>🙋</span> My Decisions</div>
            <div class="sidebar-item"><span>⭐</span> Starred</div>
          </div>
          <div class="app-main">
            <div class="app-topbar">
              <h3>All Decisions</h3>
              <div class="app-search">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input type="text" placeholder="Search decisions…" value="database" readonly />
              </div>
            </div>
            <div class="decision-list">
              <div class="decision-item selected">
                <div class="di-icon">🗄️</div>
                <div class="di-body">
                  <div class="di-title">Use PostgreSQL as primary data store</div>
                  <div class="di-meta"><span class="tag-pill tag-arch">Architecture</span><span class="di-date">Mar 4, 2024</span><span class="di-owner">Alex Kim</span></div>
                </div>
              </div>
              <div class="decision-item">
                <div class="di-icon">☁️</div>
                <div class="di-body">
                  <div class="di-title">Migrate off MongoDB Atlas — self-host Postgres</div>
                  <div class="di-meta"><span class="tag-pill tag-infra">Infrastructure</span><span class="di-date">Nov 12, 2023</span><span class="di-owner">Sam Park</span></div>
                </div>
              </div>
              <div class="decision-item">
                <div class="di-icon">📐</div>
                <div class="di-body">
                  <div class="di-title">Database naming conventions — v2 approved</div>
                  <div class="di-meta"><span class="tag-pill tag-team">Team</span><span class="di-date">Aug 3, 2023</span><span class="di-owner">Jordan Wu</span></div>
                </div>
              </div>
              <div class="decision-item">
                <div class="di-icon">⚡</div>
                <div class="di-body">
                  <div class="di-title">Add Redis for session caching layer</div>
                  <div class="di-meta"><span class="tag-pill tag-infra">Infrastructure</span><span class="di-date">May 19, 2023</span><span class="di-owner">Dev Patel</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Slack card -->
      <div class="slack-float">
        <div class="sf-header">
          <div class="dots"><span></span><span></span><span></span></div>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span class="sf-channel">#engineering</span>
        </div>
        <div class="sf-body">
          <div class="sf-msg">
            <div class="sf-av">AK</div>
            <div>
              <span class="sf-name">Alex Kim</span><span class="sf-time">10:41 AM</span>
              <div class="sf-content">Going with PostgreSQL. Relational queries, team familiarity, schema control wins.</div>
            </div>
          </div>
          <div class="sf-menu">
            <div class="sf-item">😊 Add reaction</div>
            <div class="sf-item">🔗 Copy link</div>
            <div class="sf-item sf-active">📋 Log Decision</div>
            <div class="sf-item">⋯ More</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LOGOS -->
  <div class="logos">
    <p>Trusted by engineering teams at</p>
    <div class="logos-list">
      <span class="logo-item serif">Narrative</span>
      <span class="logo-item mono">./buildco</span>
      <span class="logo-item">Stackform</span>
      <span class="logo-item serif">Archetype</span>
      <span class="logo-item mono">[devhub]</span>
      <span class="logo-item">Meridian</span>
    </div>
  </div>

  <!-- PAIN POINTS -->
  <div class="pain-wrap">
    <div class="pain-head reveal">
      <div class="section-kicker">The Problem</div>
      <h2 class="section-h2">Your team has this conversation<br><em>every week.</em></h2>
    </div>
    <div class="pain-grid reveal">
      <div class="pain-item">
        <div class="pain-num">01</div>
        <h4>"Wait, we decided this already."</h4>
        <p>Rework costs days. The decision was made — just buried in thread #482.</p>
      </div>
      <div class="pain-item">
        <div class="pain-num">02</div>
        <h4>"Why is the code structured this way?"</h4>
        <p>New engineers spend months reverse-engineering context that was never documented.</p>
      </div>
      <div class="pain-item">
        <div class="pain-num">03</div>
        <h4>"Who decided that?"</h4>
        <p>Decisions made in DMs create politics, misalignment, and repeated arguments.</p>
      </div>
      <div class="pain-item">
        <div class="pain-num">04</div>
        <h4>"Let me check my notes…"</h4>
        <p>Meetings repeat. Debates restart. Because the answer was never written down.</p>
      </div>
    </div>
  </div>

  <!-- FEATURES -->
  <div class="features-wrap" id="features">
    <div class="features-head reveal">
      <div class="section-kicker">Features</div>
      <h2 class="section-h2">Everything you need.<br><em>Nothing you don't.</em></h2>
    </div>

    <div class="bento">

      <!-- Log decisions -->
      <div class="bc bc-white span-7 reveal">
        <div class="bc-deco"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <div class="bc-kicker">01 — Log Decisions</div>
        <h3>Right-click.<br>Captured. Done.</h3>
        <p>Use the native Slack message shortcut to log any decision — with context, category, and reasoning — without leaving the conversation.</p>
        <div class="bc-quote">"Capture decisions where they're made. Not in another tool."</div>
        <div class="slack-demo">
          <div class="sdk-header">
            <div class="dots"><span></span><span></span><span></span></div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span class="sdk-ch">#engineering</span>
          </div>
          <div class="sdk-body">
            <div class="sdm">
              <div class="sdm-av">SL</div>
              <div>
                <span class="sdm-nm">Sarah Lee</span><span class="sdm-tm">2:14 PM</span>
                <div class="sdm-ms">Shipping with a monorepo. Nx for tooling. Decision final — no more Lerna debate.</div>
              </div>
            </div>
            <div class="ctx">
              <div class="ctx-i">😊 React</div>
              <div class="ctx-i on">📋 Log Decision</div>
              <div class="ctx-i">⋯ More</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div class="bc span-5 reveal">
        <div class="bc-kicker">02 — Search & Filter</div>
        <h3>Find any decision in seconds.</h3>
        <p>Full-text search. Filter by date, category, owner. No more scrolling Slack history.</p>
        <div class="search-ui">
          <div class="search-top">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input type="text" placeholder="Search decisions…" value="monorepo" readonly />
          </div>
          <div class="search-filters">
            <span class="fc on">All</span>
            <span class="fc">Architecture</span>
            <span class="fc">2024</span>
          </div>
          <div class="sr">
            <div class="sr-row"><span class="tag-pill tag-arch">Architecture</span><span class="sr-m">Mar 4, 2024 · Sarah Lee</span></div>
            <div class="sr-t">Ship with <span class="sr-hl">monorepo</span> — Nx toolchain</div>
          </div>
          <div class="sr">
            <div class="sr-row"><span class="tag-pill tag-infra">Infra</span><span class="sr-m">Nov 12, 2023 · Sam</span></div>
            <div class="sr-t"><span class="sr-hl">Monorepo</span> CI/CD pipeline approved</div>
          </div>
        </div>
      </div>

      <!-- Collaboration -->
      <div class="bc span-4 reveal">
        <div class="bc-kicker">03 — Collaboration</div>
        <h3>Build institutional memory.</h3>
        <p>See who decided what and when. New engineers onboard in days, not months. No tribal knowledge.</p>
        <div class="bc-quote">"Why did we build it this way?" — it's documented.</div>
      </div>

      <!-- Real-time -->
      <div class="bc span-4 reveal">
        <div class="bc-kicker">04 — Real-time Sync</div>
        <h3>Everyone aligned, always.</h3>
        <p>Decisions appear instantly. No more "wait, did we decide that?" across 4 time zones.</p>
        <div style="margin-top:20px; display:flex; align-items:center; gap:10px;">
          <div style="width:9px;height:9px;border-radius:50%;background:var(--dark);box-shadow:0 0 0 4px rgba(0,0,0,0.09);animation:pulse 2s infinite;"></div>
          <span style="font-size:12.5px;color:var(--muted);">Syncing · 4 members online now</span>
        </div>
        <style>@keyframes pulse{0%,100%{box-shadow:0 0 0 4px rgba(0,0,0,0.08)}50%{box-shadow:0 0 0 9px rgba(0,0,0,0.03)}}</style>
      </div>

      <!-- Transparency -->
      <div class="bc span-4 reveal">
        <div class="bc-kicker">05 — Transparency</div>
        <h3>No black boxes.</h3>
        <p>Every decision logged, searchable, and accessible to the full team. Decision-making becomes visible — reducing politics and rework.</p>
      </div>

      <!-- Dark stat card -->
      <div class="bc bc-dark span-12 reveal">
        <div class="bc-deco"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:32px;">
          <div style="max-width:520px;">
            <div class="bc-kicker">The Result</div>
            <h3 style="font-size:clamp(28px,3.5vw,44px);">Stop losing decisions<br>to Slack history.</h3>
            <p>Log them. Search them. Learn from them. Build better products together — without repeating the same arguments.</p>
            <a href="https://slack.com/oauth_v2/authorize?client_id=10708640313204.10701649677509&scope=users:read,channels:history,chat:write,commands,im:write&redirect_uri=https://api.decisionslog.space/slack/oauth_redirect" style="display:inline-flex;align-items:center;gap:8px;margin-top:28px;background:#fff;color:var(--black);padding:13px 26px;border-radius:50px;font-size:14px;font-weight:600;text-decoration:none;transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
              Add to Slack — it's free →
            </a>
          </div>
          <div class="stats-row">
            <div><div class="stat-val">0s</div><div class="stat-lbl">context switching</div></div>
            <div><div class="stat-val">∞</div><div class="stat-lbl">searchable history</div></div>
            <div><div class="stat-val">1</div><div class="stat-lbl">shortcut to rule them all</div></div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- HOW IT WORKS -->
  <div class="how-wrap" id="how">
    <div class="how-head reveal">
      <div class="section-kicker">How it works</div>
      <h2 class="section-h2">Three steps.<br><em>Zero friction.</em></h2>
    </div>
    <div class="steps">
      <div class="step reveal">
        <div class="step-n">01</div>
        <div class="step-icon">💬</div>
        <h4>Decide in Slack</h4>
        <p>Your team already lives in Slack. Make the decision where the conversation is happening — no new tool to open.</p>
        <div class="step-arr">→</div>
      </div>
      <div class="step reveal">
        <div class="step-n">02</div>
        <div class="step-icon">⚡</div>
        <h4>Right-click → Log Decision</h4>
        <p>Use the native Slack shortcut. Add category, owner, reasoning. Under 15 seconds.</p>
        <div class="step-arr">→</div>
      </div>
      <div class="step reveal">
        <div class="step-n">03</div>
        <div class="step-icon">🔍</div>
        <h4>Search. Forever.</h4>
        <p>Find any decision instantly — keyword, date, owner, category. Even on a new hire's first day.</p>
      </div>
    </div>
  </div>

  <!-- TESTIMONIALS -->
  <div class="testi-wrap" id="teams">
    <div class="testi-head reveal">
      <div class="section-kicker">What teams say</div>
      <h2 class="section-h2">Built for teams that move fast<br><em>and forget things.</em></h2>
    </div>
    <div class="testi-grid">
      <div class="testi-card reveal">
        <div class="testi-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div class="testi-q">"We onboarded three engineers in a week. They just searched decisionlog. No tribal knowledge transfer needed."</div>
        <div class="testi-author">
          <div class="testi-av d">MR</div>
          <div><div class="testi-name">Maya Rodriguez</div><div class="testi-role">Engineering Lead · Fintech startup</div></div>
        </div>
      </div>
      <div class="testi-card reveal">
        <div class="testi-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div class="testi-q">"We were about to redo an architecture we'd already ruled out. Someone searched decisionlog and found the exact reason we didn't. Saved two weeks."</div>
        <div class="testi-author">
          <div class="testi-av m">DP</div>
          <div><div class="testi-name">Dev Patel</div><div class="testi-role">Senior Engineer · B2B SaaS</div></div>
        </div>
      </div>
      <div class="testi-card reveal">
        <div class="testi-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div class="testi-q">"It's just a right-click in Slack. Didn't change a single habit. Adoption was instant and the logs have already saved us from two repeated debates."</div>
        <div class="testi-author">
          <div class="testi-av">JW</div>
          <div><div class="testi-name">Jordan Wu</div><div class="testi-role">CTO · Early-stage startup</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta-wrap">
    <div class="cta-box reveal">
      <h2>Your next decision<br>shouldn't be <em>lost.</em></h2>
      <p>Add decisionlog to Slack in 60 seconds. Free forever for small teams.</p>
      <div class="cta-btns">
        <a href="#" class="btn-white">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Add decisionlog to Slack
        </a>
        <a href="#features" class="btn-outline-w">See all features →</a>
      </div>
    </div>
  </div>

  <!-- FOOTER -->

  <!-- BLOG PREVIEW -->
  <section style="padding: 100px 24px; background: var(--white);">
    <div style="max-width: 1200px; margin: 0 auto;">
      <!-- Section Header -->
      <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 48px;">
        <div>
          <h2 style="font-family: 'Fraunces', serif; font-size: 42px; font-weight: 600; color: var(--dark); margin-bottom: 8px;">From the blog</h2>
          <p style="font-size: 16px; font-weight: 400; color: var(--muted); max-width: 400px;">Learn how teams are building better decision-making practices.</p>
        </div>
        <a href="/blog" style="font-size: 15px; font-weight: 500; color: var(--body); text-decoration: none; white-space: nowrap; margin-left: 20px;">View all posts →</a>
      </div>

      <!-- Blog Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
        <!-- Blog Card 1 -->
        <a href="/blog/decision-logging-dev-teams" style="text-decoration: none; color: inherit;">
          <div style="border: 1px solid var(--border); border-radius: 14px; padding: 28px; background: var(--white); transition: all 0.2s ease; cursor: pointer; height: 100%; display: flex; flex-direction: column;" onmouseover="this.style.boxShadow='0 8px 40px rgba(0,0,0,0.07)'" onmouseout="this.style.boxShadow='none'">
            <div style="margin-bottom: 16px;">
              <span style="display: inline-block; font-size: 12.5px; font-weight: 500; color: var(--body); background: var(--light); padding: 5px 14px; border-radius: 50px;">Knowledge Management</span>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: var(--dark); margin-bottom: 12px; line-height: 1.4;">Decision Logging for Dev Teams</h3>
            <p style="font-size: 14px; color: var(--muted); margin-bottom: 16px; flex-grow: 1; line-height: 1.6;">When a senior developer leaves, their decisions leave with them. Here's the fix.</p>
            <div style="font-size: 13px; color: var(--muted);">Mar 28, 2026 · 7 min read</div>
          </div>
        </a>

        <!-- Blog Card 2 -->
        <a href="/blog/decision-culture" style="text-decoration: none; color: inherit;">
          <div style="border: 1px solid var(--border); border-radius: 14px; padding: 28px; background: var(--white); transition: all 0.2s ease; cursor: pointer; height: 100%; display: flex; flex-direction: column;" onmouseover="this.style.boxShadow='0 8px 40px rgba(0,0,0,0.07)'" onmouseout="this.style.boxShadow='none'">
            <div style="margin-bottom: 16px;">
              <span style="display: inline-block; font-size: 12.5px; font-weight: 500; color: var(--body); background: var(--light); padding: 5px 14px; border-radius: 50px;">Best Practices</span>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: var(--dark); margin-bottom: 12px; line-height: 1.4;">Building a Decision Culture</h3>
            <p style="font-size: 14px; color: var(--muted); margin-bottom: 16px; flex-grow: 1; line-height: 1.6;">How to shift from "we decided this" to "here's why we decided this."</p>
            <div style="font-size: 13px; color: var(--muted);">Mar 25, 2026 · 5 min read</div>
          </div>
        </a>

        <!-- Blog Card 3 -->
        <a href="/blog/onboarding-faster" style="text-decoration: none; color: inherit;">
          <div style="border: 1px solid var(--border); border-radius: 14px; padding: 28px; background: var(--white); transition: all 0.2s ease; cursor: pointer; height: 100%; display: flex; flex-direction: column;" onmouseover="this.style.boxShadow='0 8px 40px rgba(0,0,0,0.07)'" onmouseout="this.style.boxShadow='none'">
            <div style="margin-bottom: 16px;">
              <span style="display: inline-block; font-size: 12.5px; font-weight: 500; color: var(--body); background: var(--light); padding: 5px 14px; border-radius: 50px;">Onboarding</span>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: var(--dark); margin-bottom: 12px; line-height: 1.4;">Onboard 3x Faster</h3>
            <p style="font-size: 14px; color: var(--muted); margin-bottom: 16px; flex-grow: 1; line-height: 1.6;">Real numbers from teams using decision logs to cut onboarding time by 75%.</p>
            <div style="font-size: 13px; color: var(--muted);">Mar 24, 2026 · 3 min read</div>
          </div>
        </a>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <a href="#" class="logo">decisionlog<sup>↗</sup></a>
    <div class="footer-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Docs</a>
      <a href="#">Contact</a>
    </div>
    <p class="footer-copy">© 2025 decisionlog</p>
  </footer>

  <script>
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('vis'), i * 55);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  </script>

    ` }} />
  );
}
