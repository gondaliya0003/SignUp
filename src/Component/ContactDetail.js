import React, { Component } from 'react'
import styles from "./ContactDetail.module.css";
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import OtpInput from 'react-otp-input';
import Timer from './Timer.js'

export class contactDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            btnclick: false,
            phone: "",
            otp: '',
            errormsg: "",
            okFromServer:200,
            errorCode:400,
            resendDispaly:null
        }
    }


    getFromTimer=(val)=>{
        if(val==='true')
         this.setState({resendDispaly:val})
        
        console.log("value from timer:"+val);
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
         
        console.log("send btn clicked");
        this.setState({ btnclick: true });
        // logic for first time send otp
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



                {this.state.resendDispaly==='true'&&

                <Button variant="contained"
                    style={{ float: 'right ' }}
                    color="primary" onClick={this.otpbtnclick}>
                  {this.state.okFromServer===400?'resend':'send'}
                </Button >
                }

                {
                    this.state.okFromServer===200 &&
                    <Timer getFromTimer={this.getFromTimer}/>
                }
                {
                    (this.state.btnclick === true &&  this.state.okFromServer===200) &&
                    <OtpInput
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
