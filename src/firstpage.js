import React, { Component } from 'react';

export default class firstpage extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    state = {
        data: '',
        city: '',
        err: '',
    }
    async getReport() {
        let city = this.props.history.location.state.getData.City;
        let country = this.props.history.location.state.getData.Country;
        let api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=60e962d56b0eded4e15e4c0cfb924c37 `)
        const res = await api.json();
        if (res.cod !== "404") {
            this.setState({
                data: res.main,
                city: res.name,
                err: ''
            })
        }
        else {
            this.setState({
                err: res.message
            })
        }
        this.props.history.replace({
            pathname: '/',
            state: {},
        })
    }
    onClick() {
        this.setState({
            data: '',
            err: '',
            city: ''
        })
        this.props.history.push('/secondpage')
    }
    componentDidMount() {
        if (this.props.history.location.state && this.props.history.location.state.getData) {
            this.getReport();
        }
    }
    render() {
        let temp = '';
        let minTemp = '';
        let maxTemp = '';
        if (!this.state.err && this.state.data) {
            temp = (this.state.data.temp - 273).toFixed(2) + String.fromCharCode(176) + "C";
            minTemp = (this.state.data.temp_min - 273).toFixed(2) + String.fromCharCode(176) + "C";
            maxTemp = (this.state.data.temp_max - 273).toFixed(2) + String.fromCharCode(176) + "C";
        }
        var display;
        if (!this.state.err && this.state.data) {
            display = (<table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Humidity</th>
                        <th>Pressure</th>
                        <th>Temperature</th>
                        <th>Min Temperature</th>
                        <th>Max Temperature</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.data.humidity}</td>
                        <td>{this.state.data.pressure}</td>
                        <td>{temp} </td>
                        <td>{minTemp} </td>
                        <td>{maxTemp}</td>
                        <td>{this.state.city}</td>
                    </tr>
                </tbody>
            </table>)
        }
        else if (this.state.err) {
            display = <div className="text-secondary text-capitalize">{this.state.err}</div>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <button className="mt-4 mb-4  btn-primary" type="button" onClick={this.onClick}>Get Weather</button>
                        {display}
                    </div>
                </div>
            </div>
        )
    }
}