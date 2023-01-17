/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={() => onDismiss()}>
          <Icon id="close" strokeWidth={2} />
          <VisuallyHidden>Close</VisuallyHidden>
        </CloseButton>
        <ModalNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </ModalNav>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 32px 32px;
`
const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 22px;
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline-offset: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`
const ModalNav = styled.nav`
display: flex;
flex-direction: column;
gap: 22px;
margin: auto 0;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`
const Footer = styled.footer`
display: flex;
flex-direction: column;
gap: 14px;

`

const FooterLink = styled.a`
color: ${COLORS.gray[700]};
text-decoration: none;
`

export default MobileMenu;
