import React from 'react';
import { Container, Row, Form, Button }  from 'react-bootstrap';

const Contact = () => {
    return (<>
            <Container>
                <Row>
                    <Form>
                    <p class="formfield">
                              <div>
                                <label>Name:</label>
                                <textarea
                                name="Name"
                                placeholder="Please insert your name"
                                rows={1}
                                cols={100}
                                />
                             </div>
                        </p>
                        <p class="formfield">
                              <div>
                                <label>Email:</label>
                                <textarea
                                name="Email"
                                placeholder="Please insert your email"
                                rows={1}
                                cols={100}
                                />
                             </div>
                        </p>

                        <p class="formfield">
                              <div>
                                <label>Message:</label>
                                <textarea
                                name="Message"
                                placeholder="Please insert your message"
                                rows={10}
                                cols={100}
                                />
                             </div>
                        </p>

                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
  </>)
}

export default Contact;

// https://www.pluralsight.com/guides/how-to-use-multiline-text-area-in-reactjs
