import React from 'react';


export const DropdownSet = ({title, lists }) => {

    return (
        <div className="form-group row">
            <label className="col-md-3 col-form-label">{title}</label>
            <div className="col-md-9">
                <select className="form-control">
                    {lists.map( (item) =>  <option value={item.value} key={item.value}>{item.text}</option> ) }
                </select>
            </div>
        </div>
    )

}

export const TextSet = ({title,type, options }) => {

    const labelCss = (options && options.labelCss) ? `${options.labelCss} col-form-label` : "col-3 col-form-label";
    const labelControl = (options && options.showLabel && options.showLabel === true) ? (<label className={labelCss}>{title}</label>) : "";
    

    return (
        <div className="form-group row">
            {labelControl}
            <div className="col">
                <input type={type} className="form-control" />
            </div>
        </div> 
    )

}