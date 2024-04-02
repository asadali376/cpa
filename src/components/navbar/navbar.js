import React from 'react';
import styled from 'styled-components';
import { Link as LinkR , Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import cplogo from '../../images/cplogo.jpg';


export const Nav = styled.div`
    background-color: ${({theme}) => theme.primary};
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 6px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    // padding: 0 1px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding-left: 10px;
      justify-content: center;
  }
`;
export const Span = styled.div`
    padding: 0 16px;
    font-weight: bold;
    font-size: 30px;
    color: ${({theme}) => theme.white};
    @media (max-width: 640px) {
      font-size: 16px;
      padding-left: 30px;
  }

`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:end;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled(Link)`
    color: ${({ theme }) => theme.white};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.secondary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.secondary};
    }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.primary};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`
export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;



export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;



const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
               <img src={cplogo} alt="not found" style={{width:'50px', height:'50px', borderRadius:'10%',}}></img><Span>Concept Point Academy</Span> 
           
            </NavLogo>
            <MobileIcon>
            <FaBars onClick={() => {
                setIsOpen(!isOpen)
            }} />
            </MobileIcon>
            <NavItems>
            <NavLink to="/components/home/home">Home</NavLink>
            <NavLink to="/components/staff/staff">Staff</NavLink>
            <NavLink to="/components/courses/courses">Courses</NavLink>
            <NavLink to="/components/cpstars/cpstars">CP Stars</NavLink>
            <NavLink to="/components/updates/updates">Updates</NavLink>
            <NavLink to="/components/contact/contact">Contcat Us</NavLink>
            </NavItems>
            {
            isOpen &&
            <MobileMenu isOpen={isOpen}>
                <MobileLink href="#about" onClick={() => {
                setIsOpen(!isOpen)
                }}>Home</MobileLink>
                <MobileLink href='#skills' onClick={() => {
                setIsOpen(!isOpen)
                }}>Staff</MobileLink>
                <MobileLink href='#experience' onClick={() => {
                setIsOpen(!isOpen)
                }}>Courses</MobileLink>
                <MobileLink href='#experience' onClick={() => {
                setIsOpen(!isOpen)
                }}>CP Stars</MobileLink>
                <MobileLink href='#projects' onClick={() => {
                setIsOpen(!isOpen)
                }}>Updates</MobileLink>
                <MobileLink href='#education' onClick={() => {
                setIsOpen(!isOpen)
                }}>Contact Us</MobileLink>
            </MobileMenu>
            }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
