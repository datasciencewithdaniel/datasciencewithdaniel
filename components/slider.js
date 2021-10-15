import React from 'react';

import { Col, RangeSlider, Form } from 'react-bootstrap';

const Slider = () => {

    const [ value, setValue ] = React.useState(50);
  
    return (<>
          <Col xs="9">
            <RangeSlider
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Col>
          <Col xs="3">
            <Form.Control value={value}/>
          </Col>
      </>
    );
  
};

export default Slider
