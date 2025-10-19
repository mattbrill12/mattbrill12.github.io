import React, { useEffect } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ModalProps } from '../../types';

const ModalOverlay = styled.div<{ isOpen: boolean; theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(192, 170, 216, 0.95);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(5px);
  z-index: 100;
  padding: 2rem;
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background: white;
  padding: 2rem 1rem;
  border-radius: 15px;
  max-width: 95%;
  width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '30px')});
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.textDark};
  margin: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 2rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textDark};
  padding: 0.5rem;
  transition: all 0.3s ease;
  opacity: 0.7;
  line-height: 1;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    transform: rotate(90deg);
    opacity: 1;
    background: rgba(192, 170, 216, 0.2);
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textDark};
  text-align: center;
`;

export const Modal: React.FC<ModalProps> = ({ id, title, isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay id={id} isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{title}</Title>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
