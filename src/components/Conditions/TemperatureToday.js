import React from 'react';
class temperatureToday extends React.Component {
    render() {
        if(!this.props.responseObj) return "00";
        if (this.props.responseObj.cod === 200 || this.props.responseObj.cod === '200')
            return Math.round(this.props.responseObj.list[this.props.day].main.temp) - 273;
        else return "00";
    }
}
export default temperatureToday;