import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    const showThreshold = 700;
    const hideThreshold = 520;

    const onScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const y = window.scrollY;
        setShow((prev) => {
          const next = prev ? y > hideThreshold : y > showThreshold;
          return prev === next ? prev : next;
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true } as any);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll as any);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    show ? (
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-600 text-white rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center hover:bg-orange-500 transition-colors z-50"
        title="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    ) : null
  );
};

export default ScrollToTop;

