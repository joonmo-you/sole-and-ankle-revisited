/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS } from "../../constants";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const StyledDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(96, 100, 108, 0.8);
`;

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 100%;
  padding: 26px 32px 32px 16px;
  margin-left: auto;
  background-color: white;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & a {
    font-weight: 600;
    font-size: ${18 / 16}rem;
    color: ${COLORS.gray[900]};
    text-decoration: none;

    &:first-of-type {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & a {
    font-weight: 500;
    font-size: ${14 / 16}rem;
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDialogOverlay>
      <StyledDialogContent>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

export default MobileMenu;
