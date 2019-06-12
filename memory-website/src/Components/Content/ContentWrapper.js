import React from 'react';
import MiddleContent from './MiddleContent';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

const ContentWrapper = () => {
        return ( 
                <StyledContainer>
                 <MiddleContent/>
                </StyledContainer>
         );
}
 
export default ContentWrapper;