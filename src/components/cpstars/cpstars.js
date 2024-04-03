import React, { useState } from 'react';
import styled from 'styled-components';
import { cpstars } from '../../data/constants'
// import { Wrapper } from '../../App';

const Outcontainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
  // align-items: center;
`;
const Incontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Year = styled.div`
  // background-color: blue;
  color: black;
  padding: 5px;
  margin-top: 10px;
`;

const Section = styled.div`
  // background-color: red;
  color: black;
  padding: 5px;
  margin-top: 5px;
`;

const StudentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 5px;
`;

const StudentCard = styled.div`
  text-align: center;
`;

const StudentImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${({theme})=>theme.primary};
`;

const StudentName = styled.div`
  margin-top: 5px;
`;

const StudentMarks = styled.div`
  margin-top: 5px;
`;

// export const Wrapper = styled.div`
//   background: rgb(37, 21, 84);
//   background: linear-gradient(
//     0deg,
//     rgba(37, 21, 84, 1) 3%,
//     rgba(255, 255, 255, 1) 100%
//   );
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
// `;

const Cpstars = () => {
  // const [wrapperflag,setWrapperflag]= useState('cn');
  return (

    <>
    {/* <Wrapper> */}
    
      {cpstars.map((yearData, yearIndex) => (
        <div className={((yearIndex + 1) % 2 !== 0)? "primary_background":"secondary_background"} >
          <Outcontainer>
        <React.Fragment key={yearIndex}>
          <Year>{yearData.year}</Year>
          <Incontainer>
          {yearData.sections.map((sectionData, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <Section>{sectionData.sec_name}</Section>
              <StudentsContainer>
                {sectionData.students.map((student, studentIndex) => (
                  <StudentCard key={studentIndex}>
                    <StudentImage src={student.img} alt={student.name} />
                    <StudentName>{student.name}</StudentName>
                    <StudentMarks>{student.marks}</StudentMarks>
                  </StudentCard>
                ))}
              </StudentsContainer>
            </React.Fragment>
          ))}
          </Incontainer>
        </React.Fragment>
    </Outcontainer> 
        </div>
      ))
      
      }
   
    {/* </Wrapper> */}
    
    </>
  );
};

export default Cpstars;


