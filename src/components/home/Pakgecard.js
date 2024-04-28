import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";

export const Card = styled.div`
width: 300px;
height: 450px;
border-radius: 5px;
padding: 5px;
background:  white;
display: flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
position: relative;
overflow: hidden;
border: 1px solid  ${({ theme }) => theme.primary};


  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}
`;


export const TextCard = styled.div`
// flex-grow: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items:center;
    // color:  ${({ theme }) => theme.primary};
    color: black;
    font-weight: 900;
    font-size: 1.5em;
`
export const Subtitle = styled.div`
    margin-top:5px;
    color: balck;
    font-weight: 600;
    font-size: 0.6em;
    text-align: center;

`
export const Price = styled.div`
display: flex;
align-items: flex-end;
font-weight: 600;
 margin:5px 0;
    color:  ${({ theme }) => theme.primary};
  
`
export const Span = styled.div`
   
    color:  ${({ theme }) => theme.primary +200};
    
    font-size: 20px;
   

`
export const Span2 = styled.div`
    font-size: 40px;
`
export const Ul = styled.ul`
    padding: 0 50px;
        list-style-type: symbols(+);
       

        
 
`
export const List = styled.li`
    font-size: 15px;
    font-weight: 500;
`
export const Button = styled(Link)`
    width: auto;
    background: ${({ theme }) => theme.primary};
    color: white;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    padding: 5px 3px;
    margin: 0 50px;
    border-radius: 10px;
    text-align: center;
    box-shadow:  0 0 0 2px ${({ theme }) => theme.primary};
    border: 1px solid white;
    transition: all ease 0.5s;
    
    &:hover{
        
        margin: 0 60px;
        // background-color: var(--second-bg-color);
    //   border: 1px solid var(--text-color);
        transform: translateY(-2px);
        
    }
`

const Pakgecard = ({pakage}) => {
  return (
      
	<Card class="card">
		<TextCard class="text">
			<span>{pakage.name}</span>
			<Subtitle class="subtitle"> {pakage.desc}</Subtitle>
            <Price> <Span>RS</Span> <Span2>{pakage.price}</Span2> <Span>/month</Span> </Price>
			<Subtitle style={{color: "red", fontSize:"0.8em",}} > + Free Counseling</Subtitle>
		</TextCard>
        {/* <hr style={{border: "1px solid #251554", padding: "0 15px", margin:"0 50px 10px 50px",}}/> */}
        <Button to="https://wa.me/+923260065376"> Get Pakage</Button>
        {/* <hr style={{border: "1px solid #251554", padding: "0 15px", margin:"0 50px 10px 50px",}}/> */}
        <Subtitle style={{color: "#251554", fontSize:"1em", margin:"10px 0"}} > Top features</Subtitle>
        <hr style={{border: "1px solid #251554", padding: "0 15px", margin:"0 50px 10px 50px",}}/>
           <div className="listfe"><Ul> { pakage.features.map((fe)=>(
                <List>{fe}</List>
            )) }</Ul> 
            </div>
	</Card>
   
  );
}

export default Pakgecard;
