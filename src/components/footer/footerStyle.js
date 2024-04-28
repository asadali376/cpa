import styled from "styled-components";
import { Link} from 'react-router-dom';
export const FooterContainer = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.white};
`;

export const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

export const NavLink = styled(Link)`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  // margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const Copyright = styled.p`
  // margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;
export const Span = styled(Link)`

`;

