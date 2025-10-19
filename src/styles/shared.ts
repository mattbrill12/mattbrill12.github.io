import styled from 'styled-components';

export const PackageGrid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1.5rem;
  margin: 2rem -1rem;
  padding: 0 1rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  scroll-padding: 0 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    margin: 1.5rem -1.5rem;
    padding: 0 1.5rem;
  }
`;
