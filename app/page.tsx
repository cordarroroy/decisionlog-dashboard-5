import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DecisionLog — Stop losing decisions to Slack history",
  description:
    "Decision logging + search for dev teams. Slack-native, zero friction. Log decisions in one click, search them forever.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#111110] font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-[#E4E4E2]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-serif text-[17px] font-semibold tracking-tight text-[#0A0A09]">
            decisionlog
          </Link>
          <ul className="hidden md:flex items-center gap-1 list-none">
            <li><Link href="/" className="text-[13.5px] text-[#44433F] px-3 py-1.5 rounded-lg hover:bg-[#F2F2F0] transition-colors">Home</Link></li>
            <li><Link href="/blog" className="text-[13.5px] text-[#44433F] px-3 py-1.5 rounded-lg hover:bg-[#F2F2F0] transition-colors">Blog</Link></li>
            <li><Link href="/pricing" className="text-[13.5px] text-[#44433F] px-3 py-1.5 rounded-lg hover:bg-[#F2F2F0] transition-colors">Pricing</Link></li>
            <li><Link href="/login" className="text-[13.5px] text-[#44433F] px-3 py-1.5 rounded-lg hover:bg-[#F2F2F0] transition-colors">Sign In</Link></li>
          </ul>
          <a
            href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] font-medium bg-[#0A0A09] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <SlackIcon />
            Add to Slack
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F2F2F0] border border-[#E4E4E2] px-3.5 py-1.5 rounded-full text-[12.5px] font-medium text-[#44433F] mb-8">
            <span className="w-4 h-4 rounded-full bg-[#0A0A09] flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            Native Slack Shortcut · No new tool to learn
          </div>
          <h1 className="font-serif text-[clamp(44px,7vw,84px)] font-medium leading-[1.0] tracking-[-3px] text-[#0A0A09] mb-6">
            Stop losing decisions<br />
            <span className="italic font-light text-[#999896]">to Slack history</span>
          </h1>
          <p className="text-[clamp(16px,1.8vw,19px)] font-light text-[#44433F] max-w-xl mx-auto leading-relaxed mb-10">
            Decision logging + search for dev teams. Slack-native, zero friction. Log in one click, find anything in seconds.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0A0A09] text-white px-7 py-3.5 rounded-full text-[15px] font-medium shadow-[0_2px_16px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(0,0,0,0.28)] transition-all"
            >
              <SlackIcon />
              Add to Slack for free
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#44433F] text-[15px] px-5 py-3.5 rounded-full border border-[#E4E4E2] hover:bg-[#F2F2F0] transition-colors"
            >
              Read the blog
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex">
              {["👨‍💻", "👩‍💻", "🧑‍💻", "👨‍💻"].map((e, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-[#F2F2F0] flex items-center justify-center text-sm"
                  style={{ marginLeft: i === 0 ? 0 : -8 }}
                >
                  {e}
                </span>
              ))}
            </div>
            <p className="text-[13px] text-[#999896]">
              <span className="text-[#44433F] font-medium">Trusted by dev teams</span> who got tired of losing decisions
            </p>
          </div>
        </div>
      </section>

      {/* PAIN STRIP */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0A0A09] rounded-[28px] p-14 md:p-16">
            <p className="text-[11.5px] font-semibold tracking-[.12em] uppercase text-[rgba(255,255,255,0.35)] mb-4">The Problem</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.1] tracking-[-1.5px] text-white max-w-lg mb-12">
              Sound familiar?<br />
              <span className="italic font-light text-[rgba(255,255,255,0.4)]">You've been here before.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
              {[
                { num: "01", title: '"Wait, we already decided this."', body: "Rework costs your team days. The decision was made — just buried in thread #482." },
                { num: "02", title: '"Why is the codebase like this?"', body: "New engineers spend months reverse-engineering context no one documented." },
                { num: "03", title: '"Who decided that?"', body: "Decisions in DMs create politics, misalignment, and repeated arguments." },
                { num: "04", title: '"Let me check my notes…"', body: "Meetings repeat. Debates restart. Because the answer was never written down." },
              ].map((item) => (
                <div key={item.num} className="bg-[#0A0A09] p-7">
                  <div className="font-serif text-[40px] font-light italic text-[rgba(255,255,255,0.1)] leading-none mb-4">{item.num}</div>
                  <h4 className="text-[14.5px] font-medium text-white mb-2 leading-snug">{item.title}</h4>
                  <p className="text-[13px] text-[rgba(255,255,255,0.42)] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11.5px] font-semibold tracking-[.12em] uppercase text-[#999896] mb-4">Why teams love it</p>
            <h2 className="font-serif text-[clamp(32px,4.5vw,54px)] font-medium leading-[1.08] tracking-[-1.8px] text-[#0A0A09]">
              Everything your team<br />
              <span className="italic font-light text-[#999896]">actually needs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                num: "01",
                title: "Faster Onboarding",
                body: "New engineer joins → Can search 'Why is our API async?' instead of asking. Save 20 hours per new hire on tribal knowledge transfer.",
                icon: "🚀",
              },
              {
                num: "02",
                title: "Prevent Rework",
                body: "Quarterly planning: Reference past tradeoff decisions. Avoid re-debating 'Should we use Postgres or MongoDB?' for the 3rd time.",
                icon: "🔁",
              },
              {
                num: "03",
                title: "Team Transparency",
                body: "See who decided what, when, and why. No more 'that was decided in a Slack thread nobody remembers.'",
                icon: "👁",
              },
            ].map((vp) => (
              <div
                key={vp.num}
                className="bg-[#F9F9F8] border border-[#E4E4E2] rounded-[24px] p-9 hover:border-[#C8C8C6] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all"
              >
                <div className="text-2xl mb-5">{vp.icon}</div>
                <p className="text-[11px] font-semibold tracking-[.09em] uppercase text-[#999896] mb-3">{vp.num}</p>
                <h3 className="font-serif text-[24px] font-medium tracking-[-0.5px] text-[#0A0A09] mb-3 leading-snug">{vp.title}</h3>
                <p className="text-[14.5px] font-light text-[#44433F] leading-relaxed">{vp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-[11.5px] font-semibold tracking-[.12em] uppercase text-[#999896] mb-4">How it works</p>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.08] tracking-[-1.5px] text-[#0A0A09]">
              Three steps.<br />
              <span className="italic font-light text-[#999896]">Zero friction.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E4E4E2] border border-[#E4E4E2] rounded-[28px] overflow-hidden">
            {[
              { n: "01", icon: "💬", title: "Decide in Slack", body: "Your team already lives in Slack. Make the decision where the conversation is happening." },
              { n: "02", icon: "⚡", title: "Right-click → Log Decision", body: "Use the native Slack shortcut. Add category, owner, reasoning. Under 15 seconds." },
              { n: "03", icon: "🔍", title: "Search Forever", body: "Find any decision instantly — keyword, date, owner, category. Even years later." },
            ].map((s) => (
              <div key={s.n} className="bg-white p-10 relative">
                <div className="font-serif text-[64px] font-light italic text-[#E4E4E2] leading-none absolute top-6 right-7">{s.n}</div>
                <div className="text-2xl mb-5">{s.icon}</div>
                <h4 className="font-serif text-[21px] font-medium tracking-[-0.4px] text-[#0A0A09] mb-3">{s.title}</h4>
                <p className="text-[14px] font-light text-[#999896] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0A0A09] rounded-[28px] py-24 px-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 65%)" }} />
            <h2 className="font-serif text-[clamp(38px,6vw,68px)] font-medium tracking-[-2.5px] text-white leading-[1.0] mb-4 relative">
              Your next decision<br />
              <span className="italic font-light text-[rgba(255,255,255,0.35)]">shouldn't be lost.</span>
            </h2>
            <p className="text-[17px] font-light text-[rgba(255,255,255,0.42)] mb-10 relative">
              Add decisionlog to Slack in 60 seconds. Free forever for small teams.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap relative">
              <a
                href="https://slack.com/apps/A0ALMK3KXEZ-decisionlog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-[#0A0A09] px-8 py-4 rounded-full text-[15px] font-semibold shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all"
              >
                <SlackIcon dark />
                Add decisionlog to Slack
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-[rgba(255,255,255,0.5)] text-[15px] px-6 py-4 border border-[rgba(255,255,255,0.13)] rounded-full hover:text-white hover:border-[rgba(255,255,255,0.32)] transition-colors"
              >
                Read the blog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E4E4E2] px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-serif text-[17px] font-semibold text-[#0A0A09]">decisionlog</Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Blog</Link>
            <Link href="/pricing" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Pricing</Link>
            <Link href="/privacy" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Privacy Policy</Link>
            <Link href="/login" className="text-[13px] text-[#999896] hover:text-[#44433F] transition-colors">Sign In</Link>
          </div>
          <p className="text-[13px] text-[#999896]">DecisionLog © 2026</p>
        </div>
      </footer>
    </div>
  );
}

function SlackIcon({ dark }: { dark?: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={dark ? "#0A0A09" : "white"}>
      <path d="M6 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6-9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-2 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-2 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
    </svg>
  );
}
