/* global React */
const { useState: useState_c } = React;

/* ============================================================
   CONTACT
   ============================================================ */
function ContactPage() {
  const [data, setData] = useState_c({ name: "", email: "", company: "", subject: "Hello", message: "" });
  const [status, setStatus] = useState_c("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState_c("");

  /* Web3Forms — replace YOUR_ACCESS_KEY_HERE with the key from web3forms.com.
     Sign up free at https://web3forms.com using natallia.hantsuk@gmail.com,
     then paste the access key into the WEB3FORMS_KEY constant below. */
  const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

  const submit = async (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: data.name,
          email: data.email,
          subject: `[Portfolio] ${data.subject}: ${data.name}`,
          company: data.company || "—",
          message: data.message,
          // optional: cc, reply-to, etc.
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please email natallia.hantsuk@gmail.com directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Couldn't reach the form service. Please email natallia.hantsuk@gmail.com directly.");
    }
  };

  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <main className="page-fade contact">
      <LisbonScene />
      <div className="contact-form-wrap">
        <h2>Let's talk.</h2>
        <p className="lede">
          Senior IC, lead, or team lead. Lisbon-based, open to hybrid in EU and remote-first roles. I read every message.
        </p>
        {status !== "sent" ? (
          <form className="contact-form" onSubmit={submit}>
            <div className="field">
              <label>Your name</label>
              <input type="text" value={data.name} onChange={set("name")} placeholder="" required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" value={data.email} onChange={set("email")} placeholder="" required />
            </div>
            <div className="field">
              <label>Company (optional)</label>
              <input type="text" value={data.company} onChange={set("company")} placeholder="—" />
            </div>
            <div className="field">
              <label>What's this about?</label>
              <select value={data.subject} onChange={set("subject")}>
                <option>A senior product role</option>
                <option>A team-lead role</option>
                <option>Project / consultancy</option>
                <option>Mentorship or chat</option>
                <option>Hello</option>
              </select>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows="3" value={data.message} onChange={set("message")} placeholder="Tell me a little about the team and the work…" required></textarea>
            </div>
            <button type="submit" className="contact-submit" disabled={status === "sending"} data-cursor="SEND">
              {status === "sending" ? "Sending…" : <>Send <span>→</span></>}
            </button>
            {status === "error" && (
              <div style={{ marginTop: 12, color: "#c0392b", fontSize: "0.95rem" }}>
                {errorMsg}
              </div>
            )}
          </form>
        ) : (
          <div className="contact-success">
            <strong>Message sent successfully.</strong>
            <p style={{ marginTop: 12, color: "var(--muted)" }}>
              Thank you for getting in touch. I'll review your message and respond soon.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

/* Stylized Lisbon scene — typographic + soft gradient instead of stock photo */
function LisbonScene() {
  return (
    <div className="contact-image">
      <span className="lisbon-label">● 38.7223° N · 9.1393° W</span>
      <svg
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMax slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        {/* Sun */}
        <circle cx="600" cy="280" r="140" fill="#F6EFDD" opacity="0.55" />
        <circle cx="600" cy="280" r="80" fill="#F6EFDD" opacity="0.45" />

        {/* Tagus river suggestion */}
        <path d="M 0 720 Q 200 700 400 730 T 800 720 L 800 1000 L 0 1000 Z" fill="#1F1820" opacity="0.35" />

        {/* Buildings silhouette — Alfama-style stepping rooftops */}
        <g fill="#1F1820" opacity="0.85">
          <rect x="0" y="640" width="80" height="360" />
          <rect x="80" y="600" width="60" height="400" />
          <polygon points="80,600 110,575 140,600" />
          <rect x="140" y="660" width="70" height="340" />
          <rect x="210" y="610" width="90" height="390" />
          <polygon points="210,610 255,580 300,610" />
          <rect x="300" y="650" width="60" height="350" />
          <rect x="360" y="590" width="100" height="410" />
          <rect x="460" y="660" width="70" height="340" />
          <polygon points="460,660 495,625 530,660" />
          <rect x="530" y="620" width="90" height="380" />
          <rect x="620" y="670" width="60" height="330" />
          <rect x="680" y="640" width="120" height="360" />
          <polygon points="680,640 720,605 760,640" />
        </g>

        {/* Windows — small lit dots */}
        <g fill="#E96A3A" opacity="0.7">
          {Array.from({ length: 30 }).map((_, i) => (
            <rect key={i} x={20 + (i * 27) % 760} y={680 + ((i * 53) % 220)} width="4" height="6" />
          ))}
        </g>

        {/* Tile pattern hint at bottom */}
        <g fill="#F6EFDD" opacity="0.07">
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={i * 100} y={960} width="80" height="40" />
          ))}
        </g>
      </svg>
      <div className="lisbon-art">
        <p className="lisbon-quote">
          "Where I work, think,<br/>and walk a lot."
        </p>
      </div>
    </div>
  );
}

window.ContactPage = ContactPage;
