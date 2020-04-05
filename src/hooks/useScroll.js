import { useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useWindowSize } from "@react-hook/window-size";

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
  const match = useRouteMatch();
  const [width, height] = useWindowSize();
  useEffect(() => {
    if (ref.current) {
      ref.current.onscroll = (event) => effect(processScroll(event.target));
      effect(processScroll(ref.current));
    }
  }, [effect, ref, match, width, height]);
}
