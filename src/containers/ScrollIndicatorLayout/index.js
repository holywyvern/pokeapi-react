import React from "react";
import PropTypes from "prop-types";

import Chevron from "@/containers/Chevron";

import "./styles.scss";

function ScrollIndicatorLayout({ children, visibility, scrollRef }) {
  return (
    <div
      className="flex-grow flex-column overflow-auto scroll-indicator-wrapper"
      ref={scrollRef}
    >
      {visibility.up && (
        <div
          className="flex-row horizontal-center scroll-indicator scroll-indicator-top"
          style={{
            top: `${visibility.scroll}px`,
          }}
        >
          <Chevron direction="top" />
        </div>
      )}
      {children}
      {visibility.down && (
        <div
          className="flex-row horizontal-center scroll-indicator scroll-indicator-bottom"
          style={{
            bottom: `-${visibility.scroll}px`,
          }}
        >
          <Chevron direction="bottom" />
        </div>
      )}
    </div>
  );
}

ScrollIndicatorLayout.propTypes = {
  children: PropTypes.node,
  scrollRef: PropTypes.any,
  visibility: PropTypes.shape({
    up: PropTypes.bool,
    down: PropTypes.bool,
    scroll: PropTypes.number,
  }).isRequired,
};

export default ScrollIndicatorLayout;
