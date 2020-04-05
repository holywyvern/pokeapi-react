import React, { useCallback, useState, useRef } from "react";
import PropTypes from "prop-types";

import ScrollIndicatorLayout from "@/containers/ScrollIndicatorLayout";

import useScroll from "@/hooks/useScroll";

function ScrollIndicator({ children }) {
  const ref = useRef();
  const [visibility, setVisibility] = useState({ up: false, down: false });
  const onScroll = useCallback((event) => setVisibility(event), []);
  useScroll(onScroll, ref);
  return (
    <ScrollIndicatorLayout visibility={visibility} scrollRef={ref}>
      {children}
    </ScrollIndicatorLayout>
  );
}

ScrollIndicator.propTypes = {
  children: PropTypes.node,
};

export default ScrollIndicator;
