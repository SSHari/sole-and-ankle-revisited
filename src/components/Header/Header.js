import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileHeader>
        <MobileLogoWrapper>
          <Logo />
        </MobileLogoWrapper>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={2} />
        </UnstyledButton>
        <MobileSearchButton>
          <Icon id="search" strokeWidth={2} />
        </MobileSearchButton>
        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" strokeWidth={2} />
        </UnstyledButton>
      </MobileHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto hidden;

  @media${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;

  @media${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    display: flex;
    align-items: center;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }

  @media${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const MobileLogoWrapper = styled.div`
  margin-right: auto;
`;

const MobileSearchButton = styled(UnstyledButton)`
  @media${QUERIES.tabletAndDown} {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media${QUERIES.phoneAndDown} {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 8vw - 3.5rem, 3rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
