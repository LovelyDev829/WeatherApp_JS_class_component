import React  from 'react';
class conditionToday extends React.Component {
    render() {
        if(!this.props.responseObj) return"Wait...";
        if (this.props.responseObj.cod === 200 || this.props.responseObj.cod === '200')
            return this.props.responseObj.list[this.props.day].weather[0].main;
        else return "Wait...";
    }
};
export default conditionToday;