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
        console.log(val);
    }
    
    finalsubmission = () => {
        console.log("final submission");
    }
    
    handleReset = () => {
        this.setState({activeStep : 0});
     
      };
    
    render() {
        return (


            <div >
        
              <Modal
                show='true'
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className={classes.root}>
                    <div >
                  
                  {this.state.checkbtn=="merchant"? null :    
                      <Stepper activeStep={this.state.activeStep} alternativeLabel>
                        {getStepsforreviewer.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    }
                    </div>
        
                    <div className={classes.content}>
                      {this.state.activeStep === 1 && <ContactDetail handleNext={this.handleNext} />}
                      {this.state.activeStep === 0 && <SignUpDetail  handleNext={this.handleNext} passingcheckbox={passingcheckbox}/>}
                      {this.state.activeStep === 3 && <PersonalDetail />}
                    </div>  
        
                    <div>
        
                      {this.state.activeStep === this.state.getStepsforreviewer.length ? (
                        <div>
                          <Typography className={classes.instructions}>All steps completed</Typography>
        
                        </div>
                      ) : (
        
                          <div className="btnfooter">
        
                            {this.state.activeStep !== 0 &&
                              <Button
        
                                disabled={this.state.activeStep === 0}
                                variant="contained"
                                onClick={this.handleBack}
        
                                className={classes.btn}
                                color="primary"
                              >
                                Back
                      </Button>
                            }
        
                            {this.state.activeStep == 1 && <Button variant="contained" className={classes.btn}
                              color="primary" onClick={this.handleNext}>
                              Next
                      </Button>}
        
                            {this.state.activeStep == 2 && <Button variant="contained" className={classes.btn}
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
