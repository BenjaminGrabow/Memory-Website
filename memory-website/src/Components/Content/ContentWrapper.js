import React from 'react';
import TopContent from './TopContent';
import MiddleContent from './MiddleContent';
import BottomContent from './BottomContent';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

const ContentWrapper = () => {
        return ( 
                <StyledContainer>
                        <TopContent/>
                 <MiddleContent/>
                 <BottomContent/>
                </StyledContainer>
         );
}
 
export default ContentWrapper;