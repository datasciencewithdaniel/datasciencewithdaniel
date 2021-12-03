import React from 'react';
import { Container, Row, Form, Button }  from 'react-bootstrap';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Username: '',
            Message: '',
            success: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleResetChange(event){
        event.currentTarget.reset();
        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            Username: '',
            Message: '',
        });
    }

    submitContactData = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state))
        // postData('https://46mkh28k2e.execute-api.ap-southeast-2.amazonaws.com/PROD/', this.state)
        //     .then(data => {
        //         console.log(data);
        //         this.setState({['success']: "Request Submitted Successfully!"})
        //     });
        this.handleResetChange(event);
    }

    render() {
    return (<>
        <div className="pt-3">
            <Form onSubmit={this.submitContactData} className="w-full justify-items-center mx-auto mt-10 max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="FirstName">
                            First Name
                        </label>
                        <input onChange={this.handleChange} className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="FirstName" type="text" />
                        <p className="text-red-500 text-xs italic">* Required</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="LastName">
                            Last Name
                        </label>
                        <input onChange={this.handleChange} className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="LastName" type="text" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="Email">
                            E-mail
                        </label>
                        <input onChange={this.handleChange} className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Email" type="email" />
                        <p className="text-red-500 text-xs italic">* Required</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="Username">
                            Discord Username
                        </label>
                        <input onChange={this.handleChange} className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Username" type="text" />
                        <p className="text-gray-400 text-xs italic">if applicable</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="Message">
                            Message
                        </label>
                        <textarea onChange={this.handleChange} className=" no-resize appearance-none block w-full shadow-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="Message"></textarea>
                        {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="flex md:w-1/3">
                        <button className="blueBackLight blueTextDark focus:shadow-outline focus:outline-none shadow-lg font-bold py-2 px-4 rounded font-mono transition duration-500 ease-in-out hover:border-blue-200 hover:bg-blue-300 " type="submit">
                            Send
                        </button>
                    </div>
                </div>
            </Form>
            <Container>
                <br/>
                <p className='text-center'>{this.state.success}</p>
                <br/>
            </Container>
        </div>
    </>)
}}

export default Contact;
// https://www.pluralsight.com/guides/how-to-use-multiline-text-area-in-reactjs
