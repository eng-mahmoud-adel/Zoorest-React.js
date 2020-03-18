import React from 'react';
import {Dropdown} from 'react-bootstrap';

function DropDownTwo(props) {
  return (
    <Dropdown className= "w-100">
      <Dropdown.Toggle variant= {props.variant}>
        Dropdown Expanded
      </Dropdown.Toggle>

      <Dropdown.Menu className= {props.size}>
          <Dropdown.Item href="#">First Point</Dropdown.Item>
          <Dropdown.Item href="#">Second Point</Dropdown.Item>
          <Dropdown.Item href="#">Third Point</Dropdown.Item>
          <Dropdown.Item href="#">Fourth Point</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownTwo;
