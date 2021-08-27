import React from 'react'
import {Button} from 'react-bootstrap'
import SignUpPopUp from './component/SignUpPopUp'
import LogInBtn from './component/LogInBtn';

function SignUpBtn(){
    const [modalShow, setModalShow] = React.useState(false);
        return (
            
            <div className="mb-2">

            <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
                Sign Up
            </Button>
            <SignUpPopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            </div>
            
        )
    }

export default SignUpBtn;