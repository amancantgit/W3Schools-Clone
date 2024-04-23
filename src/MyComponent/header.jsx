import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaCode } from "react-icons/fa6";

const Header = ({passingprops}) => {
  return (
    <>
     <header>
      
      <Link style={{color: 'white', marginLeft: '1%'}} to="/"><FaCode size={35}/></Link>
      
      <div id='logo-dropdown' style={{marginLeft: '-9%'}}>
      <div id='dropdown' style={{display: 'flex', width:'fit-content'}}>
      <Dropdown style={{margin: "0px 2px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Tutorials
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Web Building</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Vue</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Raspberry Pi</Dropdown.Item>
        <Dropdown.Item href="#/action-4">AWS Cloud</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Create a Server</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown style={{margin: "0px 2px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Exercises
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">DSA</Dropdown.Item>
        <Dropdown.Item href="#/action-2">JavaScript</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Backend</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Data Analytics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown style={{margin: "0px 2px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Certificates
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Backend</Dropdown.Item>
        <Dropdown.Item href="#/action-2">JavaScript</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Programs</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Cyber Security</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown style={{margin: "0px 2px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Create a Website</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Get Certified</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Jobs</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
     
      </div>
     
      <h2 style={{marginLeft: '-5%'}}>W4Schools</h2>


  <div id='search-register'>
      <Form>
        <Row >
          <Col xs="auto" >
            <Form.Control
              type="text"
              placeholder="Search.."
              className=" mr-sm-2 form-control-sm"
              style={{height: '2.1rem', borderRadius: '50px', width: '140px'}}
              onChange={(e) => passingprops(e.target.value)}
            />
          </Col>
        </Row>
      </Form>
      

      <div id='signup-login'>
        <button id='signup'>
        Sign Up
        </button>
      <button id='login'>
        Log in
      </button>
      </div>
  </div>

    </header>
    </>
  )
}

export default Header;