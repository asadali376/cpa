import styled from "styled-components";
import React from 'react';

export const Card = styled.div`
width: 200px;
height: 200px;
border-radius: 15px;
padding: 5px;
background:  ${({ theme }) => theme.primary};
display: flex;
flex-direction: column;
align-items:center;
position: relative;
overflow: hidden;

&::before{
    content: "";
    height: 100px;
    width: 100px;
    position: absolute;
    top: -40%;
    left: -20%;
    border-radius: 50%;
    border: 35px solid rgba(255, 255, 255, 0.102);
    transition: all .8s ease;
    filter: blur(.5rem);
}
&:hover::before {
    width: 140px;
    height: 140px;
    top: -30%;
    left: 50%;
    filter: blur(0rem);
  }
`;


export const TextCard = styled.div`
flex-grow: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items:center;
    color: aliceblue;
    font-weight: 900;
    font-size: 1em;
`
export const Subtitle = styled.div`
    margin-top:5px;
    color: aliceblue;
    font-weight: 600;
    font-size: 0.6em;
    text-align: justify;
`
export const Img = styled.img`
    width: 70px;
    height: 70px;
    color: white;
    filter: grayscale(100%);
`

const Programcard = ({program}) => {
  return (
      
	<Card class="card">
        {/* <Evening sx={{ fontSize: 80 , color: "white" }}/> */}
        <Img src={program.img}/>
		<TextCard class="text">
			<span>{program.name}</span>
			<Subtitle class="subtitle"> {program.desc}</Subtitle>
		</TextCard>
	</Card>
   
  );
}

export default Programcard;
