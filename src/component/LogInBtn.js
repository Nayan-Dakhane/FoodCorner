import React from 'react';
import {Button} from 'react-bootstrap';
import LogInPopUp from './LogInPopUp';

function LogInBtn(){
    const [modalShow, setModalShow] = React.useState(false);
        return (
            
             <div className="mb-2">
            
            <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
                Log In
            </Button>
            <LogInPopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            </div>
            
        );
    }

export default LogInBtn;