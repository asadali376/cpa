import styled from "styled-components";


export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;



export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 800px;
//   border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 300;
  font-size: 28px;
  color: ${({ theme }) => theme.black};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
export const TitleName = styled.span`
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme }) => theme.primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 30px;
 
  }
  @media (max-width: 640px) {
  
    line-height: 48px;
    margin-bottom: 8px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 100px;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.black};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-weight: 800px;
  font-size: 40px;
  @media (max-width: 640px) {
    font-size: 30px;
   
  }
`;

export const SubTitle = styled.div`
  font-size: 15px;
  font=weight: 600px;
  line-height: 32px;
  margin-bottom: 42px;
  text-align: justify;
  color: ${({ theme }) => theme.black };

  @media (max-width: 960px) {
    text-align: justify;
  }

  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 32px;
  }
`;


// homestyle.js


export const SliderContainer = styled.div`
  display: flex;
  margin: 100px 0 50px 0;
  padding: 0 10px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 640px) {
    padding: 0 7px;
    gap: 5px;
   
  }

  @media (max-width: 425px) {
    font-size: 6px;
    gap: 4px;
    margin: 50px 0 30px 0;
    
  }
`;
export const InnerSliderContainer = styled.div`
  display: flex;
  margin: 0 40px;
  // max-width: 1100px;
  gap:10px;
  // border-bottom: 1px solid ${({theme})=>theme.primary};
  // border-left: 1px solid ${({theme})=>theme.primary};
  position:relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
    @media (max-width: 425px) {
   flex-direction: column;
  }

`;

export const SliderButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const SliderImage2 = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 1440px) {
    width: 1440px;
    height: 576px; //5:2
  }
  @media (max-width: 768px) {
  width: 768px;
    height: 307px;
  }
  @media (max-width: 1024px) {
    width: 1024px;
    height: 409px; 
  }
  @media (max-width: 425px) {
    width: 425px;
    height: 170px; //2:3
  }
  @media (max-width: 375px) {
    width: 375px;
    height: 150px;
  }
  @media (max-width: 320px) {
    width: 320px;
    height: 128px;
  }
`;
export const SliderImage = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 1440px) {
    width: 1200px;
    height: 480px; //5:2
  }
  @media (max-width: 768px) {
    width: 700px;
    height: 280px;
  }
  @media (max-width: 1024px) {
    width: 900px;
    height: 360px; 
  }
  @media (max-width: 425px) {
    width: 400px;
    height: 600px; //2:3
  }
  @media (max-width: 375px) {
    width: 350px;
    height: 525px;
  }
  @media (max-width: 320px) {
    width: 280px;
    height: 420px;
  }
`;

// Add more styles as needed

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    // margin:150px 0 50px 0;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

export const Sectiontitle = styled.div`
  font-size: 40px;
  font-weight: 900px;
  text-align: center;
  margin-bottom: 20px;
  color:  ${({ theme }) => theme.primary};

`;
export const SecContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 28px;
// margin:150px 0 50px 0;
padding: 150px 0;

`;




