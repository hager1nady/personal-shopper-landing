export function FadeUpGlobalStyles() {
  return (
    <style>{`
      .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
      .fade-up.is-visible { opacity: 1; transform: translateY(0); }
    `}</style>
  );
}
