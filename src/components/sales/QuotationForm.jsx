import React, { Component } from 'react'
import { CardPanel } from '../controls/Cards/CardPanel'
import {DropdownSet, TextSet } from '../controls/Forms/Inputs';

class QuotationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {options: {}}
    }
    
    componentWillMount() {
        this.setState({
            options: {
                location : [
                    { value: "s01", text: "S01 - Al Wakrah Branch" },
                    { value: "g01", text: "G01 - Gharafa Branch" },
                    {  value: "p01", text: "P01 - Projects "  }
                ]
            }
        })
    }

    render() {
        const {location} = this.state.options;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <CardPanel title="Sales Quotation">
                            <div className="row">
                                <div className="col-md-3">
                                    <DropdownSet title="Store: "  lists={location}  />
                                </div>
                                <div className="col-md-3">
                                    <TextSet title="Ref No: " options={{showLabel:true}} />
                                </div>
                                <div className="col-md-3">
                                <TextSet title="Date: " type="date" options={{showLabel:true}} />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-3">
                                    <TextSet title="Cust No: " options={{showLabel:true}} />
                                </div>
                                <div className="col-md-6">
                                    <TextSet title="Cust No: " options={{showLabel:false}} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <TextSet title="Contact: " options={{showLabel:true}} />
                                </div>
                                <div className="col-md-3">
                                    <TextSet title="Email: " options={{showLabel:true}} />
                                </div>
                                <div className="col-md-6">
                                    <TextSet title="Address: " options={{showLabel:true, labelCss: 'col-md-2'}} />
                                </div>
                            </div>
                        </CardPanel>
                    </div>
                    <div className="col-md-2">
                        <CardPanel title="Action">

                        </CardPanel>
                    </div>
                    <div className="col-md-12">
                        <CardPanel title="Details">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>SN No</th>
                                                <th>Location</th>
                                                <th>Item Code</th>
                                                <th>Description</th>
                                                <th>UOM</th>
                                                <th>Qty</th>
                                                <th>Foc</th>
                                                <th>Price</th>
                                                <th>Disc %</th>
                                                <th>Disc (Qr)</th>
                                                <th>Net Amount</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>W05</td>
                                                <td>80000455</td>
                                                <td>BEDROOM SET DOUBLE (BM+NT2+DM1)</td>
                                                <td>SET</td>
                                                <td>1</td>
                                                <td>0</td>
                                                <td>32,000.00</td>
                                                <td>10%</td>
                                                <td>3,200.00</td>
                                                <td>28,000.00</td>
                                                <td><button className="btn btn-light btn-sm"><span className="fa fa-pencil"></span></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-sm-3 ml-auto">
                                    <table className="table table-clear">
                                        <tbody>
                                            <tr>
                                                <td class="text-right"><strong>Subtotal</strong> </td>
                                                <td class="text-right"><strong>32,000.00</strong></td>
                                            </tr>
                                            <tr>
                                                <td class="text-right"><strong>Discount (%)</strong> </td>
                                                <td class="text-right"><strong>10%</strong></td>
                                            </tr>
                                            <tr>
                                                <td class="text-right"><strong>Total</strong> </td>
                                                <td class="text-right"><strong>28,000.00</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CardPanel>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuotationForm;
