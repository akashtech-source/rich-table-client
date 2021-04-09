import React from 'react';
import './CustomerDetailsForm.css';

const CustomerDetailsForm = () => {
    return (
        <div>
            <input type="text" className="form-control" placeholder="Deliver to Door"/>
            <br/>
            <input type="text" className="form-control" placeholder="Road 108 by 7"/>
            <br/>
            <input type="text" className="form-control" placeholder="Flat, suite, floor"/>
            <br/>
            <input type="text" className="form-control" placeholder="Business Name"/>
            <br/>
            <input type="text" className="form-control" placeholder="Add a instructor"/>
            <button id="order-button" className="btn btn-danger">Save & Continue</button>
        </div>
    );
};

export default CustomerDetailsForm;