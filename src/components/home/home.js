import React, { useState, useEffect } from "react";
import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  TitleName,
  Span,
  SubTitle,
  SliderContainer,
  SliderButton,
  SliderImage,
  InnerSliderContainer,
  CardContainer,
  Sectiontitle,
  SecContainer,
  SliderImage2,
} from "./homeStyle";
import HeroImg from "../../images/cpfront2.jpg";
import StarImg from "../../images/stars.jpeg";
import Typewriter from "typewriter-effect";
import { Bio, highlights, programs, pakages, topslider } from "../../data/constants";
import { Wrapper, WrapperClip } from "../../App";
import Programcard from "./Programcard";
import Pakgecard from "./Pakgecard";

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
    const imageCount2 = topslider.length;

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % imageCount2);
    }, 5000);

    return () => clearInterval(intervalId2);
  }, [imageCount2]);

  // const nextSlide2 = () => {
   
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount2);
  // };

  // const prevSlide2 = () => {
  //   setCurrentImageIndex(
  //     (prevIndex) => (prevIndex - 1 + imageCount) % imageCount2
  //   );
  // };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageCount = highlights.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageCount]);

  const nextSlide = () => {
   
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageCount) % imageCount
    );
  };

  return (
    <div id="about">
         <div className="slider">
        {/* <SliderHeading> Highlights</SliderHeading> */}
      
        {/* <SliderContainer> */}
          {/* <SliderButton onClick={prevSlide2}>{"<"}</SliderButton> */}
          {/* <InnerSliderContainer> */}
           
        <SliderImage2
          src={topslider[currentImageIndex2]}
          alt="slider-image"
        />
  
          {/* </InnerSliderContainer> */}
          {/* <SliderButton onClick={nextSlide2}>{">"}</SliderButton> */}
        {/* </SliderContainer> */}
      </div>

      <Wrapper>
        <HeroContainer>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>
                Wellcome to the <br /> <TitleName> {Bio.name}</TitleName>{" "}
              </Title>
              <TextLoop>
                We adhere
                <Span style={{ color: "white" }}>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle
                style={{
                  marginBottom: "10px",
                  fontSize: "20px",
                  color: "#ffffff",
                }}
              >
                why we are the first CHOICE ever?
              </SubTitle>
              <SubTitle style={{ color: "#d3d3d3" }}>
                {Bio.descriptionCP}
              </SubTitle>
            </HeroLeftContainer>

            <HeroRightContainer id="Right">
              <Img src={HeroImg} alt="hero-image" />
            </HeroRightContainer>
          </HeroInnerContainer>
        </HeroContainer>
      </Wrapper>

      <div className="slider">
        {/* <SliderHeading> Highlights</SliderHeading> */}
      
        <SliderContainer>
          <SliderButton onClick={prevSlide}>{"<"}</SliderButton>
          <InnerSliderContainer>
            {screenWidth < 426 ? (
        <SliderImage
          src={highlights[currentImageIndex].imgnew}
          alt="slider-image"
        />
      ) : (
        <SliderImage
          src={highlights[currentImageIndex].img}
          alt="slider-image"
        />
      )}
          </InnerSliderContainer>
          <SliderButton onClick={nextSlide}>{">"}</SliderButton>
        </SliderContainer>
      </div>

      <WrapperClip>
        <HeroContainer>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>
                We are in the collaboration with <br />{" "}
                <TitleName> Stars Academy Lahore</TitleName>{" "}
              </Title>
              <TextLoop>
                Prepare your
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles2,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle style={{ marginBottom: "10px", fontSize: "20px" }}>
                First time in the ChichaWatni !!!
              </SubTitle>
              <SubTitle>{Bio.descriptionStars}</SubTitle>
            </HeroLeftContainer>

            <HeroRightContainer id="Right">
              <Img src={StarImg} alt="hero-image" style={{ border: "none" }} />
            </HeroRightContainer>
          </HeroInnerContainer>
        </HeroContainer>
      </WrapperClip>
      <Wrapper>
                    <SecContainer>
          <Sectiontitle>Programs we offer for you</Sectiontitle>

      <CardContainer>
      {programs.map((program) => (
          
          <Programcard program={program}/>
        ))}
      </CardContainer>
        </SecContainer>
        </Wrapper>

      <SecContainer>
            <Sectiontitle> Choose your perfect Pakage</Sectiontitle>
      <CardContainer>
      {pakages.map((pakage) => (
             <Pakgecard pakage={pakage}/> 
        
            ))}
      </CardContainer>
      </SecContainer>
    </div>
  );
};

export default Home;
