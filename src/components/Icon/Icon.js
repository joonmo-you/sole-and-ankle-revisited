import React from "react";
import styled from "styled-components/macro";
import { AlignJustify, ChevronDown, Menu, Search, ShoppingBag, X } from "react-feather";

const icons = {
  "chevron-down": ChevronDown,
  close: X,
  hamburger: AlignJustify,
  menu: Menu,
  search: Search,
  "shopping-bag": ShoppingBag,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) => (p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined)};
  }
`;

export default Icon;
