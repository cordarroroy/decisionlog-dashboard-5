'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Add any dynamic content if needed
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `

  <!-- NAV -->
  <nav>
    <a href="#" class="logo">decisionlog<sup>↗</sup></a>
    <ul class="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#how">How it works</a></li>
      <li><a href="#teams">Teams</a></li>
    </ul>
    <div class="nav-right">
      <a href="#" class="nav-signin">Sign in</a>
      <a href="#" class="nav-cta">
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
      <a href="#" class="btn-black">
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
            <a href="#" style="display:inline-flex;align-items:center;gap:8px;margin-top:28px;background:#fff;color:var(--black);padding:13px 26px;border-radius:50px;font-size:14px;font-weight:600;text-decoration:none;transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
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
