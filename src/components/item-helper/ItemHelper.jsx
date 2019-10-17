/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import SearchForm from './SearchForm';

class ItemHelper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selections: {
                lookups: [
                    {key: "000", value: "000"},
                    {key: "s01", value: "S01"},
                    {key: "g01", value: "G01"}
                ],
                stockOptions: [
                    {key: "all", value: "All"},
                    {key: "balance", value: "With Balance"},
                    {key: "free-balance", value: "With Free Balance"},
                    {key: "physical-balance", value: "With Physical Balance"},
                ]
            }
        }
    }




    render() {
        const { selections } = this.state;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <SearchForm selections={selections} />
                    </div>
                </div>
            </div>
        )
    }

}

export default ItemHelper
