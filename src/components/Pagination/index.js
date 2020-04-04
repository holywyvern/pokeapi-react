import React from "react";
import PropTypes from "prop-types";

import Button from "@/containers/Button";
import Chevron from "@/containers/Chevron";

import "./styles.scss";

function Pagination({ loadPage, nextPage, prevPage, page, totalPages }) {
  const buttons = [];
  const minButtons = [];
  const maxButtons = [];
  const min = Math.max(page - 1, 3);
  const max = Math.min(page + 2, totalPages - 3);
  for (let i = 0; i < 3; ++i) {
    minButtons.push(i);
  }
  for (let i = min; i < max; ++i) {
    buttons.push(i);
  }
  for (let i = totalPages - 3; i < totalPages; ++i) {
    maxButtons.push(i);
  }
  const checkMax = buttons.length ? buttons : maxButtons;
  const checkMin = buttons.length ? buttons : minButtons;
  const drawMinorDots = Boolean(
    checkMax[0] > minButtons[minButtons.length - 1] + 1
  );
  const drawMajorDots =
    Boolean(checkMin[checkMin.length - 1] < maxButtons[0] - 1) &&
    (buttons.length || !drawMinorDots);
  return (
    <div className="flex-row vertical-center">
      <Button
        disabled={typeof prevPage !== "number"}
        onClick={() => loadPage(prevPage)}
      >
        <Chevron direction="left" />
      </Button>
      {minButtons.map((i) => (
        <Button
          key={i}
          disabled={i === page}
          onClick={() => loadPage(i)}
          compact
        >
          {i + 1}
        </Button>
      ))}
      {drawMinorDots && "..."}
      {buttons.map((i) => (
        <Button
          key={i}
          disabled={i === page}
          onClick={() => loadPage(i)}
          compact
        >
          {i + 1}
        </Button>
      ))}
      {drawMajorDots && "..."}
      {maxButtons.map((i) => (
        <Button
          key={i}
          disabled={i === page}
          onClick={() => loadPage(i)}
          compact
        >
          {i + 1}
        </Button>
      ))}
      <Button
        disabled={typeof nextPage !== "number"}
        onClick={() => loadPage(nextPage)}
      >
        <Chevron direction="right" />
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  loadPage: PropTypes.func,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  nextPage: PropTypes.number,
  prevPage: PropTypes.number,
};

export default Pagination;
