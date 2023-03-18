import { useCallback, useEffect, useRef, useState } from 'preact/compat';
import { isThreshold } from '@/Utils/IsThreshold';

const swipeThresholdY = 30;
const swipeThresholdX = 50;

export function useSwipe() {
  const [isSwiped, setIsSwiped] = useState(false);

  const touchstartX = useRef(0);
  const touchendX = useRef(0);

  const touchstartY = useRef(0);
  const touchendY = useRef(0);

  const onSwipe = () => {
    if (
      isThreshold(touchstartY.current, touchendY.current, swipeThresholdY) &&
      !isThreshold(touchstartX.current, touchendX.current, swipeThresholdX)
    ) {
      setIsSwiped(true);
    }
  };

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setIsSwiped(false);
    touchstartX.current = e.changedTouches[0].screenX;
    touchstartY.current = Math.floor(e.changedTouches[0].screenY);
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    touchendX.current = e.changedTouches[0].screenX;
    touchendY.current = Math.floor(e.changedTouches[0].screenY);
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
