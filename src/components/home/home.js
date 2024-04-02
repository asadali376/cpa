import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title,TitleName, Span, SubTitle} from './homeStyle'
import HeroImg from '../../images/cpfront2.jpg'
import StarImg from '../../images/stars.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { Wrapper, WrapperClip } from '../../App';




const Home = () => {

    return (
        <div id="about">
            <Wrapper>
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Wellcome to the <br /> <TitleName> {Bio.name}</TitleName> </Title>
                        <TextLoop>
                            We adhere
                            <Span style={{color:'white',}}>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle style={{marginBottom:'10px', fontSize:'20px', color:'#ffffff'}}>why we are the first CHOICE ever?</SubTitle>
                        <SubTitle style={{color:'#d3d3d3',}}>{Bio.descriptionCP}</SubTitle>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
            </Wrapper>
            <WrapperClip>
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>We are in the collaboration with <br /> <TitleName> Stars Academy Lahore</TitleName> </Title>
                        <TextLoop>
                            Prepare your
                            <Span >
                                <Typewriter
                                    options={{
                                        strings: Bio.roles2,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle style={{marginBottom:'10px', fontSize:'20px', }}>First time in the ChichaWatni !!!</SubTitle>
                        <SubTitle>{Bio.descriptionStars}</SubTitle>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
 
                        <Img  src={StarImg} alt="hero-image"  style={{border: 'none',}} />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
            </WrapperClip>
            

        </div>
    )
}

export default Home