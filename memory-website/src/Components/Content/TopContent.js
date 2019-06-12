import React from 'react';
import apple from './apple.jpg';
import styled from 'styled-components';

const StyledDiv = styled.div`

`;

const TopContent = () => {
        return ( 
                <StyledDiv>
<div className="column">
        <h1>The new standard in spend <br/> management</h1>
        <p>Manage yoour entire spend process in one place. Request, pay, and automate <br/>
        your AP accounting with Airbase</p>
        <button>Get a demo</button>
        <p>Trusted by finance teams at all stages</p>
        <img src={apple} />

</div>
                </StyledDiv>
         );
}
 
export default TopContent;