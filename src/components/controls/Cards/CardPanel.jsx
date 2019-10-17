import React, { Component } from 'react'

export class CardPanel extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        const { title} = this.props;

        return (
            <div className="card">
                <div className="card-header">{title}</div>
                <div className="card-body">
                    {this.props.children}
                </div>
                
            </div>

        )
    }
}
