import React from 'react'
import styled from 'styled-components'
import { WhatsApp, Facebook } from '@mui/icons-material';

export const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Span = styled.span`
// overflow: hidden;
display: -webkit-box;
max-width: 100%;
text-align: justify;
-webkit-line-clamp: 4;
// -webkit-box-orient: vertical;
// text-overflow: ellipsis;
`

const Card = styled.div`
    width: 100%;
    max-width: 1000px;
    border: none;
    // border-radius: 10px;
    // box-shadow: 0px 0px 10px ${({ theme }) => theme.primary} ;
    padding: 12px 16px;
    justify-content: center;
    position: relative;
    // overflow: hidden;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    // &:hover{
    //     box-shadow: 0px 0px 8px ${({ theme }) => theme.primary};
    //     transform: translateY(-5px);
    // }
    // border: 0.1px solid ${({ theme }) => theme.primary};
    // box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    @media only screen and (max-width: 768px){
        padding: 10px;
        padding-left 0px;
        gap: 8px;
        width: 300px;
    }

   
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

   
`

const Top = styled.div`
    // order: 1;
    width: 25%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.primary}; /* Add this */

    
    // justify-content:center;
    align-items:center;
    gap: 12px

    // @media(max-width: 768px){
    //     order:1;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    // }
`

const RC = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
margin-left: 20px;

`
const Description = styled.div`
    // order:2;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
        
    }
`

const Image = styled.img`
    width:100%;
    height:100%;
    max-height: 150px;
    max-width: 150px;
    background-color: #000;
    border: 2px solid  ${({ theme }) => theme.primary};
    border-radius: 50%;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        // width:70%;
        // // height:70%;
        height: 60px;
        width: 60px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Name = styled.div`
    font-size: 30px;
    margin-top: 20px;
    font-weight: 900;
    color: ${({ theme }) => theme.primary};
    @media only screen and (max-width: 768px){
        font-size: 18px;
    }
`

const Subject = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
` 
const Works = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary +99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Degrees = styled.div`
    width: 100%;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    gap: 8px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
        flex-direction:column;
        align-items:start;
    }
`

const Degree = styled.div`
    font-size: 15px;
    font-weight: 400;
    border: 1px solid  ${({ theme }) => theme.primary +80};
    // background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    border-radius: 12px;
    padding: 4px 6px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    color: ${({ theme }) => theme.secondary};
    flex-direction:row;
    justify-content: center;
    margin: 12px 0px;
    gap: 12px;
`;




const StaffCard = ({ staf }) => {
    return (
        <Card>

            <Top>
                <Image src={staf.img} />
                <Body>
                <ButtonGroup>
                {staf?.fb &&(<a href={staf?.fb} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <WhatsApp />
                                    </a>)}
                                        {staf?.whatsapp && (<a href={staf?.whatsapp} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <Facebook />
                                        </a>)}

            
                    </ButtonGroup>

                </Body>
            </Top>

            <RC>
                <Name>{staf.name}</Name>
                <Subject>{staf.subject} Specialist | {staf.experience} experience</Subject>
                
                <Works >Works at {staf.institue}</Works>
                <Description>
                    {staf?.desc &&
                        <Span>{staf?.desc}</Span>

                    }
                    {staf?.degrees &&
                        <>
                            <br />
                            <Degrees>
                                <b>Degrees:</b>
                                <ItemWrapper>
                                    {staf?.degrees?.map((deg, index) => (
                                        <Degree>{deg}</Degree>
                                    ))}
                                </ItemWrapper>
                            </Degrees>
                        </>
                    }
                </Description>
            </RC>

        </Card>
    )
}

export default StaffCard