import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;

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
<p>With multiple systems to manage</p>
                        </div>
                        <div className="right">

                        </div>
                        
                </StyledDiv>
         );
}
 
export default BottomContent;