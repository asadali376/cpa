import {React} from 'react';
import {FooterContainer,FooterWrapper,Nav,NavLink,SocialMediaIcon,SocialMediaIcons,Copyright, Span } from './footerStyle';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import { darkTheme, lightTheme } from '../../themes/themes';
import { useState } from 'react';

const Footer = () => {
    const [darkMode] = useState(true);
    const theme=darkMode?darkTheme:lightTheme;
  return (
    <FooterContainer >
    <FooterWrapper>
      <Nav>
            <NavLink to="/components/home/home">Home</NavLink>
            <NavLink to="/components/cpstars/cpstars">CP Stars</NavLink>
            <NavLink to="/components/contact/contact">Contcat Us</NavLink>
      </Nav>
      <SocialMediaIcons>
        <SocialMediaIcon href={Bio.whatsapp} target="display"><WhatsAppIcon /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
      </SocialMediaIcons>
      <Copyright>
       Adress: Abdullah Town opposite to DPS near 1122 office, Chichawatni.
      </Copyright>
      <Copyright>
        &copy; 2024 <Span to="https://asadalihere.netlify.app/" style={{color: theme.secondary, textDecoration: 'underline' , cursor: 'pointer' }}> AAiSH Tech</Span> | All rights reserved.
      </Copyright>

    </FooterWrapper>
  </FooterContainer>
  );
}

export default Footer;
