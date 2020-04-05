import { useEffect } from "react";

function processScroll(target) {
  const visible = target.scrollHeight > target.clientHeight;
  const down = target.scrollTop < target.scrollHeight - target.clientHeight;
  return {
    up: visible && target.scrollTop > 0,
    down: visible && down,
    scroll: target.scrollTop,
  };
}

export default function useScroll(effect, ref) {
  useEffect(() => {
    if (ref.current) {
      ref.current.onscroll = (event) => effect(processScroll(event.target));
      effect(processScroll(ref.current));
    }
  }, [effect, ref]);
}
