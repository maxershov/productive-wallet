import { useCallback, useEffect, useRef, useState } from 'preact/compat';

export function useSwipe() {
  const [isSwiped, setIsSwiped] = useState(false);
  const touchstartX = useRef(0);
  const touchendX = useRef(0);

  const onSwipe = () => {
    if (touchendX.current < touchstartX.current) {
      setIsSwiped(true);
    }
    if (touchendX.current > touchstartX.current) {
      setIsSwiped(true);
    }
  };

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setIsSwiped(false);
    touchstartX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    touchendX.current = e.changedTouches[0].screenX;
    onSwipe();
  }, []);

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchStart]);

  return isSwiped;
}
