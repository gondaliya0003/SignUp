import React, { Component } from 'react'
import styles from "./ContactDetail.module.css";
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import OtpInput from 'react-otp-input';


export class contactDetail extends Component {
    state = {
        btnclick: 0,
        phone: "",
        otp: '',
        errormsg: ""
    }

    handleChange = (otp) => {

        this.setState({ otp });
        console.log(otp);
        if (otp.length == 4) {
            // data from server
            const num = "1234";
            if (parseInt(num) == otp) {
                // login for
                console.log("matched");
                this.props.handleNext();
            } else {
                this.setState({ errormsg: "Enter correct OTP..." });
            }

        } else {
            this.setState({ errormsg: "" });
        }
    }



    otpbtnclick = () => {
        if (this.state.btnclick == 1) {
            this.resendotp();
        }
        this.setState({ btnclick: 1 });
        // logic for first time send otp
    }
    resendotp = () => {
        // logic for resend otp
        console.log("resend");
    }


    render() {

        return (
            <div>
                <PhoneInput

                    inputStyle={{ fontSize: '25px', width: '100%' }}
                    containerStyle={{ margin: 'auto' }}
                    country="in"
                    value={this.state.phone}
                    onChange={phone => this.setState({ phone })}

                />

                <br></br>
                <Button variant="contained"
                    style={{ float: 'right ' }}
                    color="primary" onClick={this.otpbtnclick}>
                    {this.state.btnclick == 1 ? 'resend otp' : 'send otp'}
                </Button >

                {
                    this.state.btnclick === 1 && <OtpInput
                        containerStyle={styles.otpstyle}
                        value={this.state.otp}
                        onChange={this.handleChange}
                        numInputs={4}
                        separator={<span>-</span>}
                    />

                }
                <FormLabel
                    style={{
                        color: "red",
                        fontSize: 17,
                        letterSpacing: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {this.state.errormsg}
                </FormLabel>
            </div >
        )
    }
}

export default contactDetail;
