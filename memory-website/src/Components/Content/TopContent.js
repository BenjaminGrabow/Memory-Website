import React from 'react';
import google from './Google.jpg';
import microsoft from './Microsoft.png';
import huawei from './Huawei.jpg';
import siemens from './siemens.jpg';
import bulb from './Home.jpg'
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;

button {
        background-color: #28a745;
        color: white;
        border-radius: 2rem;
        box-shadow: 1rem .5rem .5rem black;
}

.left {
        margin: 1rem;
}
.trust {
        color: #dedede;
        font-weight: bold;
        font-size: .8rem;
}
.row {
 img {
         width: 30%;
         height: 3rem;
 }
}

.right {
        img {
                width: 70%;
                height: 90%;
                margin: 2rem;
        }
}
`;

const TopContent = () => {
        return ( 
                <StyledDiv>
<div className="left">
        <h1>The new standard in spend <br/> management</h1>
        <p>Manage yoour entire spend process in one place. Request, pay, and automate <br/>
        your AP accounting with Airbase</p>
        <button>Get a demo</button>
        <p className="trust">Trusted by finance teams at all stages</p>
        <div className="row">
                <img src={google} alt="google" />
        <img src={microsoft} alt="microsoft"/>
        </div>
        <div className="row">
        <img src={siemens}  alt="siemens"/>
        <img src={huawei} alt="huawei"/>
        </div>
</div>
<div className="right">
        <img src={bulb} alt="bulb"/>
</div>
                </StyledDiv>
         );
}
 
export default TopContent;