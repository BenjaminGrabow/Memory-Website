import React from 'react';
import MiddleContent from './MiddleContent';
import TopContent from './TopContent';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

const ContentWrapper = () => {
        return ( 
                <StyledContainer>
                        <TopContent></TopContent>
                 <MiddleContent/>
                </StyledContainer>
         );
}
 
export default ContentWrapper;