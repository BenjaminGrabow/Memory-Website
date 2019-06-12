import React from 'react';
import styled from 'styled-components';
import pic1 from './row1.jpg';
import pic2 from './row2.jpg';
import pic3 from './row3.jpg';
import pic4 from './row4.jpg';

const StyleDiv = styled.div`

.row {
        display: flex;
        justify-content: space-between;
        
}
                       img {
                         height: 6rem;
                         width: 50%;
                         border-radius: 50%;       
                        }

                        h3 {
                                font-weight: bolder;
                        }

                        p {
                                font-size: .8rem;
                        }
        
                a {
                        text-decoration: none;
                        color: #28a745;
                        font-weight: bolder;
                }


                .column {
                        width: 25%;
                }



`;

const MiddleContent = () => {
        return (
                <StyleDiv>
                        <h1>One platform.
<br />
                                From purchase request to general ledger</h1>
                        <p>Scalable workflows to request, pay, and sync transactions to GL in real-time.</p>
                        <div className="row">
                                <div className="column">
                                        <img src={pic1} alt="pic1"></img>
                                        <h3>Pre-approvals</h3>
                                        <p>Get ahead of spend with a <br />
                                                streamlined approval process.</p>
                                        <a href="/"> Learn more &rarr;</a>
                                </div>
                                <div className="column">
                                        <img src={pic2} alt="pic2">
                                        </img>
                                        <h3>Payments</h3>
                                        <p>All of your payments--card, ACH<br />
                                                and check-- in one place.</p>
                                        <a href="/"> Learn more <span>&rarr;</span></a>
                                </div>
                                <div className="column">
                                        <img src={pic3} alt="pic3"></img>
                                        <h3>Accounting</h3>
                                        <p>Automate accounting<br />
                                                faster.</p>
                                        <a href="/"> Learn more <span>&rarr;</span></a>
                                </div>
                                <div className="column">
                                        <img src={pic4} alt="pic4"></img>
                                        <h3>Visibility</h3>
                                        <p>Drive speed accountability, reduce<br />
                                                waste, and increase savings.</p>
                                        <a href="/"> Learn more <span>&rarr;</span></a>
                                </div>
                        </div>
                </StyleDiv>);
}

export default MiddleContent;