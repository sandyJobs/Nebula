

const StickyButterflyCTA = () => {
  return (
    <a
      href="#cta"
      className="fixed right-6 bottom-6 z-40"
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
        @keyframes flapLeft {
          0%, 100% {
            transform: rotate(0deg);
            transform-origin: 100px 100px;
          }
          50% {
            transform: rotate(-20deg);
            transform-origin: 100px 100px;
          }
        }

        @keyframes flapRight {
          0%, 100% {
            transform: rotate(0deg);
            transform-origin: 100px 100px;
          }
          50% {
            transform: rotate(20deg);
            transform-origin: 100px 100px;
          }
        }

        .wing-left {
          animation: flapLeft 1.2s infinite ease-in-out;
        }

        .wing-right {
          animation: flapRight 1.2s infinite ease-in-out;
        }
      `}</style>
    </a>
  );
};

export default StickyButterflyCTA;
