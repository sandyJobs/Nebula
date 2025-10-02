import { motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    video: "https://cdn.pixabay.com/video/2022/07/15/124255-730503324_large.mp4",
    quote:
      "Our website conversion was decent before but we’ve now increased it by 50%! Our page speeds are also 7X faster which helps our SEO.",
    author: "ER, Ashley & Steve - Shore Hire",
  },
  {
    video: "https://cdn.pixabay.com/video/2022/09/08/130645-747868363_large.mp4",
    quote:
      "Nebula Studio taught me the true power of mastering attention to increase our chance of winning tenders.",
    author: "Robert Krastich - Sharper",
  },
  {
    video: "https://cdn.pixabay.com/video/2024/06/16/216973_tiny.mp4",
    quote:
      "Our website is our greatest marketing asset. We’ve now seen a 3x increase in traffic and conversions.",
    author: "Jane Smith - Growth Co.",
  },
  {
    video: "https://cdn.pixabay.com/video/2021/08/04/83875-584870588_tiny.mp4",
    quote:
      "Working with this team was like having a whole digital department backing us up.",
    author: "Michael Tan - Vision Labs",
  },
  {
    video: "https://cdn.pixabay.com/video/2021/09/11/88139-602895197_tiny.mp4",
    quote:
      "We’ve been able to focus on scaling while they handled the digital strategy seamlessly.",
    author: "Lisa Wong - Horizon Global",
  },
  {
    video: "https://cdn.pixabay.com/video/2025/02/26/261014_large.mp4",
    quote:
      "They didn’t just build a site, they gave us a growth platform. Conversions are up 40%.",
    author: "Daniel Ruiz - InnovateX",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesToShow(1);
      else if (w < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);
  const handlePrev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const handleNext = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  
  

  return (
    <section id="testimonials" className="bg-surface py-20 md:py-40 scroll-mt-24 ">
      <div className="max-w-6xl mx-auto px-1">
        <motion.h2
          className="font-headline text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="mt-8 md:mt-16">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2 md:px-1"
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    <TestimonialCard {...t} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-6">
              <PrevArrow className="" style={{}} onClick={handlePrev} />
              <NextArrow className="" style={{}} onClick={handleNext} />
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? 'bg-cta' : 'bg-gray-300'}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Custom Arrows that forward props
const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} !flex !items-center !justify-center !bg-yellow-300 hover:!bg-yellow-400 !rounded-full !p-2 sm:!p-3 !shadow-lg`}
    style={{ ...style }}
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>
);

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} !flex !items-center !justify-center !bg-yellow-300 hover:!bg-yellow-400 !rounded-full !p-2 sm:!p-3 !shadow-lg`}
    style={{ ...style }}
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>
);

const TestimonialCard = ({ video, quote, author }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      className="bg-white my-5 md:my-8 pb-2 shadow-lg rounded-2xl overflow-hidden flex flex-col mx-2 md:mx-1 h-[420px] md:h-[480px] xl:h-[500px]"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Video with overlay Play/Pause */}
      <div className="relative">
        <video
          ref={videoRef}
          src={video}
          className="w-full h-48 sm:h-56 md:h-60 xl:h-64 object-cover"
          controls={false}
        />
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/40 transition"
        >
          <div className="bg-yellow-400 p-4 sm:p-5 rounded-full shadow-lg">
            {playing ? (
              <Pause className="w-8 h-8 text-black" />
            ) : (
              <Play className="w-8 h-8 text-black" />
            )}
          </div>
        </button>
      </div>

      {/* Quote + Author */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="text-yellow-400 text-4xl sm:text-5xl leading-none mb-2 sm:mb-3">“</div>
        <p className="text-gray-700 italic mb-3 sm:mb-4 flex-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>{quote}</p>
        <p className="font-semibold text-gray-900 text-sm sm:text-base">{author}</p>
      </div>
    </motion.div>
  );
};

export default Testimonials;
