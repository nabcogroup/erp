import React, { Component } from 'react';
import {CardPanel} from '../controls/Cards/CardPanel';
import { DropdownSet,TextSet } from '../controls/Forms/Inputs';

 
class ContractForm extends Component  {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
       super(props);
       this.state = { options: {} }
    }

    componentWillMount() {
        this.setState(
            {
                options: {
                    type: [
                        {value : 'individual' , text: 'Individual'},
                        {value : 'company' , text: 'Company'}
                    ],
                    gender: [
                        {value : 'male' , text: 'Male'},
                        {value : 'female' , text: 'Female'}
                    ],
                    nationality: [
                        {value : 'fil' , text: 'Filipino'},
                        {value : 'india' , text: 'India'},
                        {value : 'qatari' , text: 'Qatari'},
                    ]
                }
            }
        )
    }


    fetchUpdate() 
    {

    }

    render() {
        const {type,gender,nationality } = this.state.options;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 p2">
                        <CardPanel title="Customer Account">
                            <div className="row">
                                <div className="col-md-4">

                                </div>
                                <div className="col-md-8">
                                    <DropdownSet label="Type: "  options={type}  />
                                    <TextSet type="text" 
                                        label="First Name: "/>
                                    
                                    <TextSet type="text" 
                                        label="Last Name: "/>

                                    <DropdownSet 
                                        label="Nationality"
                                        options={nationality} />

                                    <DropdownSet 
                                        label="Gender"
                                        options={gender} />
                                    
                                    <TextSet type="text" 
                                        label="Company: "/>

                                    <TextSet type="text" 
                                        label="Qatar ID: "/>
                                    
                                    <TextSet type="date" 
                                        label="Birthday: "/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-8">
                                    <p>Contact Information</p>
                                    <TextSet type="text" label="Email Address: "/>
                                    <TextSet type="text" label="Tel No: "/>
                                    <TextSet type="text" label="Mobile No: "/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-8">
                                    <p>Company Address</p>
                                    <TextSet type="text" label="Address 1: "/>
                                    <TextSet type="text" label="Address 2: "/>
                                    <TextSet type="text" label="City: "/>
                                </div>
                            </div>
                        </CardPanel>
                    </div>
                    <div className="col-md-4">
                        <CardPanel title="Balance Information">
                            <div className="row">
                                <div className="col-md-6">

                                </div>
                            </div>
                        </CardPanel>
                    </div>
                </div>
            </div>
        )
    }

}



export default ContractForm;