

const StickyButterflyCTA = () => {
  return (
    <a
      href="#cta"
      className="fixed right-6 bottom-6 z-40 butterfly-cta"
      aria-label="Call Now"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
      >
        {/* Left Wing */}
        <path
          d="M100 100 C40 40, 20 120, 100 140"
          fill="orange"
          stroke="black"
          strokeWidth="2"
          className="wing-left"
        />

        {/* Right Wing */}
        <path
          d="M100 100 C160 40, 180 120, 100 140"
          fill="gold"
          stroke="black"
          strokeWidth="2"
          className="wing-right"
        />

        {/* Body */}
        <rect
          x="95"
          y="80"
          width="10"
          height="50"
          rx="5"
          fill="black"
        />

        {/* Antennas */}
        <path
          d="M95 80 C90 60, 80 50, 70 40"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
        />
        <path
          d="M105 80 C110 60, 120 50, 130 40"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>

      <style >{`
        /* Subtle idle flutter */
        @keyframes flutterLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-10deg); }
        }
        @keyframes flutterRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }

        /* Hover flutter (slightly faster) */
        @keyframes flapLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-16deg); }
        }
        @keyframes flapRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(16deg); }
        }

        /* Shimmer sweep over the button area */
        @keyframes shimmerSweep {
          0% { left: -160%; }
          100% { left: 160%; }
        }

        .wing-left, .wing-right {
          transform-box: fill-box;
          transform-origin: center;
          transition: transform 200ms ease, filter 200ms ease;
          will-change: transform, filter;
        }
        .wing-left { animation: flutterLeft 1.8s infinite ease-in-out; }
        .wing-right { animation: flutterRight 1.8s infinite ease-in-out; }

        /* On hover: faster flutter and a soft glow */
        .butterfly-cta:hover .wing-left { animation: flapLeft 0.9s infinite ease-in-out; filter: brightness(1.06) drop-shadow(0 0 6px rgba(249,168,37,0.35)); }
        .butterfly-cta:hover .wing-right { animation: flapRight 0.9s infinite ease-in-out; filter: brightness(1.06) drop-shadow(0 0 6px rgba(249,168,37,0.35)); }

        /* Shimmer highlight overlay */
        .butterfly-cta { position: fixed; transition: transform 200ms ease; }
        .butterfly-cta:hover { transform: translateY(-2px) scale(1.02); }
        .butterfly-cta:focus-visible { outline: none; transform: translateY(-2px) scale(1.02); }
        .butterfly-cta::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          border-radius: 16px;
          background: linear-gradient(120deg, rgba(255,255,255,0.25), rgba(255,193,7,0.18), transparent);
          width: 60%;
          left: -160%;
          transform: skewX(-20deg);
          pointer-events: none;
          opacity: 0;
        }
        .butterfly-cta:hover::after, .butterfly-cta:focus-visible::after { animation: shimmerSweep 900ms ease; opacity: 1; }

        /* Slight overall glow on hover */
        .butterfly-cta:hover svg { filter: drop-shadow(0 6px 18px rgba(249,168,37,0.28)) saturate(1.05); }
      `}</style>
    </a>
  );
};

export default StickyButterflyCTA;
