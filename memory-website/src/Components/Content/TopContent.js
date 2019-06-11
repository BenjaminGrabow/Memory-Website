import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`

.row {
        display: flex;
}
`;

const TopContent = () => {
        return (
                <StyleDiv>
                        <h1>One platform.
<br />
                                From purchase request to general ledger</h1>
                        <p>Scalable workflows to request, pay, and sync transactions to GL in real-time</p>
                        <div className="row">
                                <div>
                                        <img></img>
                                        <h3>Pre-approvals</h3>
                                        <p>Get ahead of spend with a <br />
                                                streamlined approval process.</p>
                                        <a href="/"> Learn more -></a>
                                </div>
                                <div>
                                        <img>
                                        </img>
                                        <h3>Pre-approvals</h3>
                                        <p>Get ahead of spend with a <br />
                                                streamlined approval process.</p>
                                        <a href="/"> Learn more -></a>
                                </div>
                                <div>
                                        <img></img>
                                        <h3>Pre-approvals</h3>
                                        <p>Get ahead of spend with a <br />
                                                streamlined approval process.</p>
                                        <a href="/"> Learn more -></a>
                                </div>
                                <div>
                                        <img></img>
                                        <h3>Pre-approvals</h3>
                                        <p>Get ahead of spend with a <br />
                                                streamlined approval process.</p>
                                        <a href="/"> Learn more -></a>
                                </div>
                        </div>
                </StyleDiv>);
}

export default TopContent;