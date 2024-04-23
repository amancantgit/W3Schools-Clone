import { FaGithub, FaTwitter, FaCodepen, FaStackOverflow, FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCode } from "react-icons/fa6";

export default function Footer()
{
    return (
        <>
        <div style={{backgroundColor: '#D9EEE1', paddingTop: '10px'}}>
        <div id="ok" >
            
            <div id="footer">
                <div id="first-footer">
                    <p style={{textAlign:"center" }}><FaCode size={35} /></p>
                   
                    <p>W4Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors. While using W4Schools, you agree to have read and accepted our <u>terms of use</u>, <u>cookie and privacy policy</u>.</p>
    
                    <div id="footer-icons">
                    <p><FaStackOverflow size={25}/></p>
                    <p><FaGithub size={25}/></p>
                    <p><FaTwitter size={25}/></p>
                    <p><FaCodepen size={25}/></p>
                    <p><FaLinkedinIn size={25}/></p>
                    <p><FaHackerrank size={25}/></p>
                    </div>
                </div>
    
                <div id="second-footer">
                    <Container>
                    <Row >
                     <Col sm><ul>
                        <h5>Top Tutorials</h5>
                        <li>Java Tutorial</li>
                        <li>JavaScript Tutorial</li>
                        <li>React  Tutorial</li>
                        <li>PHP Tutorial</li>
                        <li>Python Tutorial</li>
                        
                    </ul></Col>
                     <Col sm><ul>
                        <h5>Top References</h5>
                        <li>Next Reference</li>
                        <li>Rust Reference</li>
                        <li>Angular Reference</li>
                        <li>jQuery Reference</li>
                        <li>React Reference</li>
                    </ul></Col>
                     <Col sm><ul>
                        <h5>Legal</h5>
                        <li>Claim</li>
                        <li>Privacy</li>
                        <li>Terms and Conditions</li>
                    </ul></Col>
                    </Row>
                    </Container>
    
                </div>
            </div>
    
            <div id="footer-para">
            <hr style={{width: '90%'}}/>
            <p>&copy; <u>1999-2024</u> W4Schools, Inc. All Rights Reserved.</p>
            </div>
            </div>
        </div>
        </>
    )
}
