/* global React, ReactDOM, useRoute, TopBar, NavBar, CustomCursor, HomePage, PortfolioPage, ProjectPage, ContactPage, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */
const { useState: useState_a, useEffect: useEffect_a } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "cream",
  "cursor": true,
  "hero_quote_speed": 0.6,
  "grid_columns": 3,
  "show_tweaks": true
}/*EDITMODE-END*/;

function App() {
  const route = useRoute();
  const [textSize, setTextSize] = useState_a(() => localStorage.getItem("text_size") || "md");
  const [t, setTweak] = (typeof useTweaks === "function") ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  useEffect_a(() => {
    localStorage.setItem("text_size", textSize);
    const map = { sm: "16px", md: "18px", lg: "20.5px" };
    document.documentElement.style.setProperty("--base-size", map[textSize]);
  }, [textSize]);

  useEffect_a(() => {
    document.documentElement.dataset.theme = t.theme === "cream" ? "" : t.theme;
  }, [t.theme]);

  useEffect_a(() => {
    document.documentElement.style.setProperty("--grid-cols", t.grid_columns);
  }, [t.grid_columns]);

  // Route resolution
  let page;
  if (route === "#/" || route === "" || route === "#") {
    page = <HomePage />;
  } else if (route === "#/portfolio") {
    page = <PortfolioPage />;
  } else if (route.startsWith("#/project/")) {
    const id = route.replace("#/project/", "");
    page = <ProjectPage id={id} />;
  } else if (route === "#/contact") {
    page = <ContactPage />;
  } else {
    page = <HomePage />;
  }

  return (
    <>
      <CustomCursor enabled={t.cursor} />
      <TopBar textSize={textSize} setTextSize={setTextSize} />
      <NavBar route={route} />
      <div key={route}>{page}</div>
      {typeof TweaksPanel !== "undefined" && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="Theme">
            <TweakRadio
              label="Palette"
              value={t.theme}
              onChange={(v) => setTweak("theme", v)}
              options={["cream", "mono", "dark"]}
            />
          </TweakSection>
          <TweakSection label="Interaction">
            <TweakToggle
              label="Custom cursor"
              value={t.cursor}
              onChange={(v) => setTweak("cursor", v)}
            />
          </TweakSection>
          <TweakSection label="Portfolio grid">
            <TweakRadio
              label="Columns"
              value={String(t.grid_columns)}
              onChange={(v) => {
                setTweak("grid_columns", parseInt(v, 10));
                const grid = document.querySelector(".work-grid");
                if (grid) grid.style.gridTemplateColumns = `repeat(${v}, 1fr)`;
              }}
              options={["2", "3", "4"]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
