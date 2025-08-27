// public/components/Carousel.jsx
// Centered spotlight carousel (no libs) — arrows fixed, middle start, side-click to focus
window.Carousel = function Carousel({ children }) {
  const trackRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const count = React.Children.count(children);

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const slides = () =>
    trackRef.current
      ? Array.from(trackRef.current.querySelectorAll(".carousel-slide"))
      : [];

  // Center slide i by computing the left offset (works across browsers)
  const centerTo = (i, behavior = "smooth") => {
    const track = trackRef.current;
    const list = slides();
    i = clamp(i, 0, list.length - 1);
    const slide = list[i];
    if (!track || !slide) return;

    const left =
      slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2;
    track.scrollTo({ left, behavior });
    setIndex(i);
  };

  const prev = () => centerTo(index - 1);
  const next = () => centerTo(index + 1);

  // Start at the middle card
  React.useEffect(() => {
    const mid = Math.floor((count - 1) / 2);
    setIndex(mid);
    // wait a frame so layout is ready, then jump without animation
    requestAnimationFrame(() => centerTo(mid, "auto"));
  }, [count]);

  // Keep index in sync while user scrolls/dragging
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const list = slides();
      const midX = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      list.forEach((el, i) => {
        const cx = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.abs(cx - midX);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };

    const onResize = () => centerTo(index, "auto");

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [index]);

  return (
    <div className="carousel is-centered">
      <div className="carousel-viewport">
        <div ref={trackRef} className="carousel-track">
          {/* CSS ::before/::after provide the side spacers */}
          {React.Children.map(children, (child, i) => {
            const pos =
              i === index
                ? "is-active"
                : i === index - 1
                ? "is-left"
                : i === index + 1
                ? "is-right"
                : "is-far";

            const onSlideClick = () => {
              if (i !== index) centerTo(i); // click blurred card to focus
            };
            const onKey = (e) => {
              if (e.key === "Enter" || e.key === " ") onSlideClick();
            };

            return (
              <div
                className={`carousel-slide ${pos}`}
                onClick={onSlideClick}
                onKeyDown={onKey}
                tabIndex={i === index ? -1 : 0}
                role="button"
                aria-label={`Slide ${i + 1} of ${count}`}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>

      {/* BIG, visible arrows */}
      <button
        className="carousel-btn prev big raised"
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="carousel-btn next big raised"
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Slides">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => centerTo(i)}
            aria-current={i === index ? "true" : "false"}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
