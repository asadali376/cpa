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

  @media (max-width: 640px) {
    font-size: 35px;
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
    font-size: 16px;
    line-height: 32px;
  }
`;



