import React from 'react';
import StaffCard from './staffCard';
import { staff } from '../../data/constants';
import { Container, Wrapper,Title,Desc } from './staffStyle';

const Staff = () => {
 
  return (
    <Container id="experience">
            <Wrapper>
                <Title>Star Maker</Title>
                <Desc>
                "I am not a teacher, but an awakener" Robert Frost
                </Desc>
                {/* <TimelineSection>
                    <Timeline> */}
                        {staff.map((staf,index) => (
                            // <TimelineItem>
                            //     <TimelineSeparator>
                            //         <TimelineDot variant="outlined"   style={{ background:  '#8EE4AF' }} />
                            //         {index !== staff.length - 1 && <TimelineConnector style={{ background: '#8EE4AF' }} />}
                            //     </TimelineSeparator>
                            //     <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <StaffCard key={index} staf={staf}/>
                //                 </TimelineContent>
                //             </TimelineItem>
                        )
                        )}
                {/* //     </Timeline> */}

                {/* // </TimelineSection> */}
            </Wrapper>
        </Container>
  );
}

export default Staff;
