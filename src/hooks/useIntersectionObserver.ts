import { RefObject, useEffect, useRef, useState } from 'react';

type Visible = boolean;
type IntersectionObserverHook<T> = [RefObject<T>, Visible];

/**
 * Intersection observer hook
 * @typeparam T   - Type of the DOM element to observe 
 * @param options - native intersection observer options
 */
const useIntersectionObserver = <T extends HTMLElement>(
  options: IntersectionObserverInit
): IntersectionObserverHook<T> => {
  /**
   * @targetElemRef visibility on ViewPort
   */
  const [isVisible, setIsVisible] = useState(false);
  /**
   * target reference, extends HTMLElement
   */
  const targetElemRef = useRef<T>(null);
  /**
   * state manager, whenever triggered on -IntersectionObserver-
   * @param entries IntersectionObserverEntry[]
   */
  const updateVisibility = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const $observable = new IntersectionObserver(updateVisibility, options);
    if (targetElemRef.current) {
      $observable.observe(targetElemRef.current);
    }
    return () => {
      if (targetElemRef.current) $observable.unobserve(targetElemRef.current);
    };
  }, [targetElemRef, options]);

  return [targetElemRef, isVisible];
};

export default useIntersectionObserver;