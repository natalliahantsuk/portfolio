/* global React, PROJECTS, nav */
const { useState: useState_p, useEffect: useEffect_p, useRef: useRef_p } = React;

/* ============================================================
   HOME
   ============================================================ */
function HomePage() {
  return (
    <main className="page-fade">
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <PersonalStory />
      <HowIThink />
      <Connect />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-quote">
        <span className="typein">
          <span className="word" style={{ animationDelay: "0ms" }}>I&nbsp;</span>
          <span className="word" style={{ animationDelay: "60ms" }}>design&nbsp;</span>
          <span className="word" style={{ animationDelay: "120ms" }}>products&nbsp;</span>
          <span className="word" style={{ animationDelay: "180ms" }}>where&nbsp;</span>
          <span className="word" style={{ animationDelay: "240ms" }}>users&nbsp;</span>
          <span className="word" style={{ animationDelay: "300ms" }}>
            <span className="accent-word">make decisions</span>.
          </span>
        </span>
      </div>
      <div className="hero-meta">
        <div className="hero-name">Natallia<br/>Hantsuk</div>
        <div className="hero-tagline">
          Senior Product Designer.<br/>
          16 years in design, 10+ in product.<br/>
          Lisbon · open to lead roles.
        </div>
      </div>
    </section>
  );
}

function WhatIDo() {
  const items = [
    {
      title: "Product Direction",
      body: "Shaping unclear problems into clear product decisions — discovery, framing, betting where to invest.",
    },
    {
      title: "Systems & Scale",
      body: "Designing for consistency across complex products. Design systems, governance, multi-surface coherence.",
    },
    {
      title: "Growth & Optimization",
      body: "Improving activation, retention, and the few key metrics that actually move the business.",
    },
  ];
  return (
    <section className="container">
      <div className="section-head">
        <div className="num">/01</div>
        <h2>What I actually do</h2>
      </div>
      <div className="do-list">
        {items.map((it, i) => (
          <div className="do-row" key={i}>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section className="container">
      <div className="section-head">
        <div className="num">/02</div>
        <h2>Featured work</h2>
      </div>
      <div className="feat-grid">
        {featured.map((p, i) => (
          <a
            key={p.id}
            className={`feat-card ${i % 2 === 1 ? "reverse" : ""}`}
            href={`#/project/${p.id}`}
            data-cursor="KNOW MORE"
          >
            <div className="feat-thumb">
              <ProjectThumb project={p} />
            </div>
            <div className="feat-info">
              <div className="meta">
                <span>{p.industry}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* Visual placeholder thumbnail — abstract geometric, varies by project id */
function ProjectThumb({ project, big = false }) {
  const variants = {
    "automotive-hmi": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#06080C",
      }}>
        <img
          src={__r("assets/auto-cover-v2.png")}
          alt="Automotive — Confidential / NDA"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    ),
    "santander": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#EC0000",
        backgroundImage: "url(" + __r("assets/santander-logo.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "106.1% auto",
        backgroundPosition: "center center",
      }} />
    ),
    "bankinter": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#FF6B00",
        display: "grid", placeItems: "center",
      }}>
        <svg viewBox="0 0 400 200" style={{ width: "78%" }}>
          <text
            x="200" y="130"
            textAnchor="middle"
            fontFamily="ui-rounded, 'SF Pro Rounded', system-ui, sans-serif"
            fontSize="84"
            fontWeight="600"
            fill="#FFFFFF"
            letterSpacing="-2"
          >bankinter<tspan fontSize="84">.</tspan></text>
        </svg>
      </div>
    ),
    "bankinter-bkwallet": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#000",
      }}>
        <img
          src={__r("assets/bk-preview.jpg")}
          alt="Bankinter BKwallet"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    ),
    "bankinter-onboarding": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#FFFFFF",
        display: "grid", placeItems: "center",
      }}>
        <svg viewBox="0 0 400 300" style={{ width: "70%" }}>
          <text
            x="40" y="155"
            fontFamily="ui-rounded, 'SF Pro Rounded', system-ui, sans-serif"
            fontSize="170"
            fontWeight="600"
            fill="#FF6B00"
            letterSpacing="-6"
          >bk<tspan>.</tspan></text>
          <text
            x="42" y="210"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="40"
            fontWeight="500"
            fill="#4A4A4A"
            letterSpacing="5"
          >PROTECTED</text>
        </svg>
      </div>
    ),
    "santander-minors": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#000",
      }}>
        <img
          src={__r("assets/snt-cover.jpg")}
          alt="Santander — Minors' Access"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    ),
    "nplan-driving-path": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#0E1B2C",
      }}>
        <img
          src={__r("assets/dp-cover.jpg")}
          alt="nPlan — Driving Path"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    ),
    "nplan-comparison-tool": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#3C7BD1",
      }}>
        <img
          src={__r("assets/cmp-thumb.jpg")}
          alt="nPlan — Comparison Tool"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    ),
    "nplan-comparison-case-study": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#000",
      }}>
        <img
          src={__r("assets/cmp3-cover.jpg")}
          alt="Comparison Tool — A UX Case Study"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    ),
    "fintech-onboarding": (
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, #F6EFDD 0%, #EFE6CF 100%)",
        display: "grid", placeItems: "center",
      }}>
        <svg viewBox="0 0 400 300" style={{ width: "60%" }}>
          <rect x="120" y="40" width="160" height="220" rx="20" fill="#1F1820" />
          <rect x="135" y="60" width="130" height="6" rx="3" fill="#E96A3A" opacity="0.9" />
          <rect x="135" y="76" width="80" height="3" rx="1.5" fill="#F6EFDD" opacity="0.4" />
          <rect x="135" y="100" width="130" height="40" rx="6" fill="#F6EFDD" opacity="0.08" />
          <rect x="135" y="150" width="130" height="40" rx="6" fill="#F6EFDD" opacity="0.08" />
          <rect x="135" y="200" width="130" height="40" rx="20" fill="#E96A3A" />
          <text x="170" y="225" fill="#1F1820" fontFamily="ui-sans-serif" fontSize="11" fontWeight="600">CONFIRM</text>
        </svg>
      </div>
    ),
    "ai-workflow": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#1F1820",
        display: "grid", placeItems: "center",
      }}>
        <svg viewBox="0 0 400 300" style={{ width: "85%" }}>
          {/* nodes */}
          <g stroke="#E96A3A" strokeWidth="1.5" fill="none">
            <path d="M 80 80 C 140 80, 140 150, 200 150" />
            <path d="M 200 150 C 260 150, 260 80, 320 80" />
            <path d="M 200 150 C 260 150, 260 220, 320 220" />
          </g>
          <rect x="50" y="60" width="60" height="40" rx="6" fill="#F6EFDD" />
          <rect x="170" y="130" width="60" height="40" rx="6" fill="#F6EFDD" />
          <rect x="290" y="60" width="60" height="40" rx="6" fill="#E96A3A" />
          <rect x="290" y="200" width="60" height="40" rx="6" fill="#F6EFDD" opacity="0.5" />
          <text x="55" y="84" fill="#1F1820" fontFamily="ui-monospace,monospace" fontSize="9">INPUT</text>
          <text x="178" y="154" fill="#1F1820" fontFamily="ui-monospace,monospace" fontSize="9">REASON</text>
          <text x="298" y="84" fill="#1F1820" fontFamily="ui-monospace,monospace" fontSize="9">ACT</text>
          <text x="298" y="224" fill="#1F1820" fontFamily="ui-monospace,monospace" fontSize="9">AUDIT</text>
        </svg>
      </div>
    ),
    "saas-analytics": (
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, #EFE6CF 0%, #F6EFDD 100%)",
        display: "grid", placeItems: "center",
      }}>
        <svg viewBox="0 0 400 300" style={{ width: "75%" }}>
          <polyline points="40,220 100,180 160,200 220,120 280,140 340,80" fill="none" stroke="#1F1820" strokeWidth="2" />
          <circle cx="40" cy="220" r="4" fill="#1F1820" />
          <circle cx="100" cy="180" r="4" fill="#1F1820" />
          <circle cx="160" cy="200" r="4" fill="#1F1820" />
          <circle cx="220" cy="120" r="6" fill="#E96A3A" />
          <circle cx="280" cy="140" r="4" fill="#1F1820" />
          <circle cx="340" cy="80" r="4" fill="#1F1820" />
          <line x1="40" y1="240" x2="360" y2="240" stroke="#1F1820" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>
    ),
    "health-app": (
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #DDE5D5 0%, #C4D1B8 100%)",
        display: "grid", placeItems: "center",
      }}>
        <svg viewBox="0 0 400 300" style={{ width: "55%" }}>
          <circle cx="200" cy="150" r="100" fill="none" stroke="#1F1820" strokeWidth="1" opacity="0.3" />
          <circle cx="200" cy="150" r="70" fill="none" stroke="#1F1820" strokeWidth="1" opacity="0.4" />
          <path d="M 200 80 A 70 70 0 0 1 254 184" fill="none" stroke="#1F1820" strokeWidth="6" strokeLinecap="round" />
          <text x="170" y="156" fontFamily="serif" fontStyle="italic" fontSize="32" fill="#1F1820">care</text>
        </svg>
      </div>
    ),
    "edu-platform": (
      <div style={{
        position: "absolute", inset: 0,
        background: "#F6EFDD",
        display: "grid", placeItems: "center",
      }}>
        <svg viewBox="0 0 400 300" style={{ width: "75%" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <rect key={i} x={60 + i * 60} y={80 + (i % 2) * 30} width="40" height={140 - (i % 2) * 30} rx="4" fill={i === 2 ? "#E96A3A" : "#1F1820"} opacity={i === 2 ? 1 : 0.85} />
          ))}
        </svg>
      </div>
    ),
  };
  return variants[project.id] || <div className="ph">{project.title.toUpperCase()}</div>;
}

function PersonalStory() {
  return (
    <section className="container">
      <div className="story">
        <aside>
          <div className="label">/03 · Personal story</div>
          <div className="stat">16<span style={{ color: "var(--accent)" }}>.</span></div>
          <div className="stat-label">years in design — 10+ of them in product, across B2B and B2C.</div>
        </aside>
        <div>
          <div className="story-body">
            <p>
              I'm a Senior Product Designer with sixteen years of design experience, including more than ten in product across B2B and B2C. I've led end-to-end UX/UI projects from discovery to delivery, managed design teams, and worked in both large international companies and fast-moving startups.
            </p>
            <p>
              As a Belarusian immigrant living in Portugal, I'm highly adaptable, resilient, and comfortable in multicultural environments. <em>I don't give up easily when facing complexity — I focus on finding the real source of the problem and driving the team toward a practical solution.</em>
            </p>
            <p>
              Strong product design happens through close collaboration with PMs, engineers, and stakeholders. I bring user insight, business alignment, and technical awareness together to create solutions that are useful, feasible, and valuable. With my background in Automotive, Fintech, SaaS, AI, and other industries, I can contribute strategically and hands-on from day one.
            </p>
          </div>
          <a className="story-cta" href={__r("assets/Natallia-Hantsuk-CV.pdf")} download="Natallia-Hantsuk-CV.pdf" data-cursor="DOWNLOAD">
            Download CV <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function HowIThink() {
  const beliefs = [
    "Most UX problems are product problems.",
    "Speed often beats perfection.",
    "Alignment is more valuable than ideal solutions.",
    "Simplicity is a business decision.",
  ];
  return (
    <section className="container">
      <div className="think" data-dark="true">
        <div className="section-head">
          <div className="num">/04</div>
          <h2>How I think</h2>
        </div>
        <div className="think-grid">
          {beliefs.map((b, i) => (
            <div className="think-item" key={i}>
              <div className="num">0{i + 1}</div>
              <h3>{b}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section className="container connect">
      <div className="section-head">
        <div className="num">/05</div>
        <h2 style={{ visibility: "hidden", height: 0, margin: 0 }}></h2>
      </div>
      <h2>
        Let's<br/>
        <a href="#/contact" data-cursor="WRITE">connect.</a>
      </h2>
      <div className="connect-meta">
        <div><strong>Email</strong><br/>natallia.hantsuk@gmail.com</div>
        <div><strong>Based in</strong><br/>Lisbon, Portugal</div>
        <div><strong>Open to</strong><br/>Senior IC · Lead · Team Lead</div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <div className="container">
      <footer>
        <div>© Natallia Hantsuk</div>
        <div>Based in Lisbon</div>
      </footer>
    </div>
  );
}

window.HomePage = HomePage;
window.ProjectThumb = ProjectThumb;
