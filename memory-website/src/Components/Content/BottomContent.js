import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
justify-content: space-around;

.left {

}

.right {

}
`;

const BottomContent = () => {
        return ( 
                <StyledDiv>
                        <div className="left">
<h1>Out with <br/> the old</h1>
<p>With multiple systems to manage spend, control <br/>
and visibility take time and effort.</p>
<img src="/" alt="pic1" />
                        </div>
                        <div className="right">
                        <h1>In with <br/> Memory</h1>
<p>With one integrated system between your bank<br/>
account and GL, control and visibility is effortless.</p>
<img src="/" alt="pic1" />
                        </div>
                        
                </StyledDiv>
         );
}
 
export default BottomContent;