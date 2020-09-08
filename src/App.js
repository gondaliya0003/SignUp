import React, { Component } from 'react'

import ContactDetail from './Component/ContactDetail';
import PersonalDetail from './Component/PersonalDetail';
import SignUpDetail from './Component/SignUpDetail';
import './AppCss.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

 class App extends Component {
    state={
        getStepsforreviewer:['Contact Detail', 'SignUp Detail', 'Personal Detail'],
        getStepsformerchant:['Contact Detail', 'SignUp Detail'],
        checkbtn:"merchant",
        activeStep:0,

    }


     handleNext = () => {
         this.setState({activeStep : this.state.activeStep + 1});
         
        };
        
        handleBack = () => {
        this.setState({activeStep : this.state.activeStep - 1});
        
    };
    
    passingcheckbox=(val)=>{
      this.setState({checkbtn:val})
        console.log(val);
    }
    
    finalsubmission = () => {
        console.log("final submission");
    }
    
    handleReset = () => {
        this.setState({activeStep : 0});
     
      };

      merchantover=()=>{
        console.log("merchant signup");
      }
    
    render() {
        return (


            <div >
        
              <Modal
                show='true'
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
               
                <Modal.Body>
                  {/* <div className={classes.root}> */}
                  <div>
                    <div style={{textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>SignUp Page</div>
                    <div >
                  {console.log(this.state.checkbtn)}
                  {(this.state.checkbtn=="merchant" || this.state.activeStep == 0 && this.state.checkbtn=="reviewer"|| this.state.activeStep == 1 && this.state.checkbtn=="merchant") ? 
                  
                  <Stepper activeStep={this.state.activeStep} alternativeLabel>
                  {this.state.getStepsformerchant.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                  :    
                      <Stepper activeStep={this.state.activeStep} alternativeLabel>
                        {this.state.getStepsforreviewer.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    }
                    </div>
        
                        {/* {(this.state.activeStep == 0 && this.state.checkbtn=="reviewer") && <Button variant="contained" 
                          color="primary" onClick={this.merchantover}>
                          submit
                  </Button>} */}
                    {/* <div className={classes.content}> */}
                    
                    <div>
                      {this.state.activeStep === 0 && <ContactDetail handleNext={this.handleNext} />}
                      {this.state.activeStep === 1 && <SignUpDetail  handleNext={this.handleNext} passingcheckbox={this.passingcheckbox}/>}
                      {this.state.activeStep === 2 && <PersonalDetail />}
                    </div>  
        
                    <div>
        
                      {this.state.activeStep === this.state.getStepsforreviewer.length ? (
                        <div>
                          {/* <Typography className={classes.instructions}>All steps completed</Typography> */}
        
                        </div>
                      ) : (
        
                          <div className="btnfooter">
        
                            {this.state.activeStep !== 0 &&
                              <Button
        
                                disabled={this.state.activeStep === 0}
                                variant="contained"
                                onClick={this.handleBack}
        
                                // className={classes.btn}
                                color="primary"
                              >
                                Back
                      </Button>
                            }
        
                            {(this.state.activeStep == 1 && this.state.checkbtn=="merchant") && <Button variant="contained" 
                              color="primary" onClick={this.merchantover}>
                              submit
                      </Button>}


                            {(this.state.activeStep == 1 && this.state.checkbtn=="reviewer") && <Button variant="contained" 
                              color="primary" onClick={this.handleNext}>
                              Next
                      </Button>}
        
                            {this.state.activeStep == 2 && <Button variant="contained" 
                              color="primary" onClick={this.finalsubmission}>
                              Finish
                      </Button>}
                          </div>
        
        
        
                        )}
                    </div>
        
                  </div >
        
                </Modal.Body>
        
              </Modal>
              <h1>hellooo</h1>
            </div >
          );
    }
}

export default App;
