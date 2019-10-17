import React, { Component } from 'react'

class SearchForm extends Component {

    render() {

        return(
            <div className="card">
                <div className="card-header"><strong>Search</strong></div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-1">
                                <select className="form-control" name="location">
                                    <option value="000" selected>000</option>
                                    <option value="s01">S01</option>
                                    <option value="g01">G01</option>
                                </select>
                            </div>
                            <div className="form-group col">
                                <input type="text" className="form-control" placeholder="Item Code" name="code" />
                            </div>
                            <div className="form-group col">
                                <input type="text" className="form-control" placeholder="Model" name="model" />
                            </div>
                            <div className="form-group col">
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Description" 
                                        name="description" />
                            </div>
                            <div className="form-group col">
                                <input type="text" className="form-control" placeholder="Brand" name="brand" />
                            </div>
                            <div className="form-group col">
                                <input type="text" className="form-control" placeholder="Country" name="country" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-2">
                                <select className="form-control" name="stockoption">
                                    <option value="balance" selected>With Balance</option>
                                    <option value="freebalance">With Free Balance</option>
                                </select>
                            </div>
                            <div className="form-group col-2">
                                <select className="form-control" name="orderby">
                                    <option value="balance" selected>Model</option>
                                    <option value="freebalance">Description</option>
                                    <option value="freebalance">Price</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className="row justify-content-end">
                            <div className="col-3 text-right">
                                <button className="btn btn-success">Search</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchForm