import React, { Component } from 'react';
export default class secondpage extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        getData: {
            State: '',
            City: '',
            Country: ''
        },
        err: '',
    }
    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            getData: {
                ...this.state.getData,
                [name]: value,
            }
        })
    }
    onSubmit() {
        let error = Object.assign({}, this.state.err);
        let validationFlag = false;
        let data = this.state.getData;
        if (data.Country.trim() === "") {
            error.country = "Please Enter Country";
            validationFlag = true;
        }
        else {
            error.country = "";
        }
        if (data.State.trim() === "") {
            error.state = "Please Enter State";
            validationFlag = true;
        }
        else {
            error.state = ""
        }
        if (data.City.trim() === "") {
            error.city = "Please Enter City"
        }
        else {
            error.city = "";
        }
        if (!validationFlag) {
            this.props.history.push({ pathname: '/', state: { getData: data} })
        }

        this.setState({
            err:error
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-6 offset-sm-3" >
                            <div className="card px-4 py-5">
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" className="form-control" name="Country" placeholder="Enter Country" onChange={this.onChange} autoComplete='off'></input>
                                    {this.state.err.country?<span className="text-danger">{this.state.err.country}</span>: ''}
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" className="form-control" name="State" placeholder="Enter State" onChange={this.onChange} autoComplete='off'></input>
                                    {this.state.err.state?<span className="text-danger">{this.state.err.state}</span>:''}
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" className="form-control" name="City" placeholder="Enter City" onChange={this.onChange} autoComplete='off'></input>
                                    {this.state.err.city?<span className="text-danger">{this.state.err.city}</span>:''}
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn-success w-100" name="submit" onClick={this.onSubmit} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}