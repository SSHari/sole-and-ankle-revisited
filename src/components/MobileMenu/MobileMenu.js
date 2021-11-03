/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <DismissButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </DismissButton>
        <NavMenu>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavMenu>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: ${COLORS.gray["700"]};
  background: hsl(220 5% 40% / 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media ${QUERIES.phoneAndDown} {
    top: 4px;
  }
`;

const Content = styled(DialogContent)`
  width: clamp(300px, 50%, 400px);
  height: 100%;
  background: ${COLORS.white};
  margin-left: auto;
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DismissButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  line-height: 2;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray["900"]};

  &:hover,
  &:focus {
    color: ${COLORS.secondary};
    outline: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  line-height: 2;
  text-decoration: none;
  color: ${COLORS.gray["700"]};

  &:hover,
  &:focus {
    color: ${COLORS.secondary};
    outline: none;
  }
`;

export default MobileMenu;
