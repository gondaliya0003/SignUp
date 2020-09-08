import React, { Component } from 'react';
import './signUp.css'
import Timer from './Timer.js'

import { Modal, Form, Row, Col, Button, InputGroup, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export class SignUpDetail extends Component {
    state = {
        modalShow: true,
        username: "",
        pwd: "",
        confirmpwd: "",
        radiovalue: "merchant",
        nameOfState: null,
        nameOfCity: null,
        ecommerceArray: [],
        usernameError: "",
        pwdError: "",
        confirmpwdError: "",
        selectionError: "",
        ecommerceArrayError: "",
        ecommerceAmzonvalue: true,
        ecommerceFilpkartvalue: true,
        ecommercePaytmvalue: true,
        ecommerceEbayvalue: true,
        codeFromServer:200,
        errorCode:400



    }

    dropdown = (e) => {

        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value }, () => { });
    }
   
    // testing : this.testing.bind(this);
    handleClose = () => {

        this.setState({ modalShow: false })
    }


    ecommerce = (e) => {
        this.setState({ ecommerceArray: [...this.stateecommerceArray, e.target.value] });
    }

    changing = (e) => {

        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.username);

        if (e.target.value.length <= 3) {
            this.setState({ usernameError: "username should be more than 5 character..." });
        } else {
            this.setState({ usernameError: "" });
        }

    }

    changingpwd = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("inside pwd: " + e.target.value);



        if (e.target.value.length < 7) {
            this.setState({ pwdError: "password should be more than 6 character..." });
        } else {
            this.setState({ pwdError: "" });
        }

    }

    changingconfirmpwd = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => { });
        if (this.state.pwd != e.target.value) {
            this.setState({ confirmpwdError: "password doesn't match.." });
        } else {
            this.setState({ confirmpwdError: "" });
            return false;
        }

    }
    changingcheackbox = (e) => {
        
        this.setState({ radiovalue: e.target.value });
        // console.log(e.target.value);
        this.props.passingcheckbox(e.target.value);
        
    }
    
    
    ecommerceAmzon = () => {
        this.setState({ ecommerceAmzonvalue: !this.state.ecommerceAmzonvalue })

    }


    ecommerceFilpkart = () => {
        this.setState({ ecommerceFilpkartvalue: !this.state.ecommerceFilpkartvalue })
        
    }
    
    ecommerceEbay = () => {
        this.setState({ ecommerceEbayvalue: !this.state.ecommerceEbayvalue })
        
    }


    
    ecommercePaytm = () => {
        this.setState({ ecommercePaytmvalue: !this.state.ecommercePaytmvalue })
    }
    
    // All validation ---------------------------------------------------------
    
    
    validator = (e) => {
        e.preventDefault();

        const { modalShow, radiovalue, username, pwd, confirmpwd, ecommerceArray, nameOfCity, nameOfState } = this.state;
        const { usernameError, pwdError, confirmpwdError, selectionError, ecommerceArrayError } = this.state;
        
        
        // username validation 
        if (this.state.username.length == 0) {
            this.setState({ usernameError: "Enter Username..." });
            
        }
        
        if (this.state.pwd.length == 0) {
            this.setState({ pwdError: "Enter password.." });
            
        }
        
        if (this.state.confirmpwd.length == 0) {
            this.setState({ confirmpwdError: "Enter Confirm password..." });
            
        }
        
        if (nameOfState == null || nameOfCity == null) {
            this.setState({ selectionError: "Select state and city..." });
            
        } else {
            this.setState({ selectionError: "" });
        }
        

        if (ecommerceArray.length == 0) {
            this.setState({ ecommerceArrayError: "select atleast 1 platform..." });
        } else {
            this.setState({ ecommerceArrayError: "" });
        }
        
        if (radiovalue == "reviewer") {
            if (usernameError == "" || pwdError == "" || confirmpwdError == "" || selectionError == "" || ecommerceArrayError == "") {
                console.log(username);
                console.log(pwd);
                console.log(confirmpwd);
                console.log(radiovalue);
                console.log(nameOfState);
                console.log(nameOfCity);
                console.log(ecommerceArray);
            } else {
                console.log("eroror");
            }
            
        }
        else {
          
                    
                    console.log("merchant");
                    console.log(this.state.usernameError);
                }
            }
            
            render() {
                const { modalShow, radiovalue, username, pwd, confirmpwd, cheackboxvalue, statevalue, nameOfCity, nameOfState, usernameError, pwdError } = this.state;
                const { confirmpwdError, selectionError, ecommerceArray, ecommerceArrayError } = this.state;
                console.log(this.state.radiovalue);
                
                return (
                    <Form style={{ width: '100%' }} >
                
                
                <div>
                

                
                <div className="checkboxbtn">
                    <Form.Check

                        className="mx-4 "
                        value="reviewer"
                        name="cheackboxvalue"
                        onChange={this.changingcheackbox}
                        inline
                        type="radio"
                        label="As a Reviewer"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        defaultChecked
                        value="merchant"
                        onChange={this.changingcheackbox}
                        inline
                        type="radio"
                        label="Merchant"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                </div>


                </div>

        <br></br>               
        {this.state.radiovalue=='merchant'?null:
                 <InputGroup className="mb-2 mr-sm-2 " >
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                   <FormControl id="username" placeholder="Choose your Username:" name="username" value={username} onChange={this.changing} />

                </InputGroup>}

                {usernameError.length > 1 ? <FormLabel style={{ color: "red", fontSize: 12, letterSpacing: 1 }}>{usernameError}</FormLabel> : ""}

                <FormGroup>
                    <FormControl placeholder="Enter Password:" type="password" id="pwd" name="pwd" value={pwd} onChange={this.changingpwd} ></FormControl>
                    {pwdError.length > 0 ? <FormLabel style={{ color: "red", fontSize: 12, letterSpacing: 1 }} >{pwdError}</FormLabel> : ""}
                    <br />
                    <FormControl placeholder="Enter Confirm Password:" type="password" id="confirmpwd" value={confirmpwd} onChange={this.changingconfirmpwd} name="confirmpwd" ></FormControl>
                    {confirmpwdError.length > 0 ? <FormLabel style={{ color: "red", fontSize: 12, letterSpacing: 1 }}>{confirmpwdError}</FormLabel> : null}

                    <br />
                    

                </FormGroup >
            </Form >

        )
    }
}

export default SignUpDetail;
