import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`

display: flex;

.footer-right {
        display: flex;
}
`;

const Footer = () => {
        return (
                        <StyledFooter>
                                <div className="footer-left">
                                        {/* <img></img> */}
                                        <p>Memory</p>
                                        <p>Memory Inc. 2019</p>
                                </div>
                                <div className="footer-right">
                                        <div className="row">
                                                <h4>Top Features</h4>
                                                <p>Pre-approvels</p>
                                                <p>Payments</p>
                                                <p>Accounting</p>
                                                <p>Visibilty</p>
                                        </div>
                                        <div className="row">
                                                <h4>Resources</h4>
                                                <p>Pricing</p>
                                                <p>Case study</p>
                                        </div>
                                        <div className="row">
                                                <h4>Company</h4>
                                                <p>About us</p>
                                                <p>Customers</p>
                                                <p>Careesr</p>
                                                <p>Press</p>
                                                <p>Legal</p>
                                        </div>
                                        <div className="row">
                                                <h4>Connect</h4>
                                                <p>Support</p>
                                                <p>Twitter</p>
                                                <p>Linkedin</p>
                                        </div>
                                </div>
                        </StyledFooter>
        );
}

export default Footer;