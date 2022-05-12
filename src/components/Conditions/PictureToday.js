import React from 'react';
import Icon_Broken_clouds from "../../image/weatherIcons/broken_clouds.png";
import Icon_Clear_sky from "../../image/weatherIcons/clear_sky.png";
import Icon_Few_clouds from "../../image/weatherIcons/few_clouds.png";
import Icon_Mist from "../../image/weatherIcons/mist.png";
import Icon_Rain from "../../image/weatherIcons/rain.png";
import Icon_Scattered_clouds from "../../image/weatherIcons/scattered_clouds.png";
import Icon_Shower_rain from "../../image/weatherIcons/shower_rain.png";
import Icon_Snow from "../../image/weatherIcons/snow.png";
import Icon_Thunderstorm from "../../image/weatherIcons/thunderstorm.png";
import Icon_Waiting from "../../image/weatherIcons/waiting.png";


class pictureToday extends React.Component {
    getCon() {
        if(this.props.responseObj)
        if (this.props.responseObj.cod === 200 || this.props.responseObj.cod === '200')
            return this.props.responseObj.list[this.props.day].weather[0].main;
    }
    render() {
        if(!this.props.responseObj) return <img src={Icon_Waiting} alt='Icon_Waiting' width={this.props.width} />;
        let Str = this.getCon();
        switch (Str) {
            case 'Broken clouds': return <img src={Icon_Broken_clouds} alt='Icon_Broken_clouds' width={this.props.width} />
            case 'Clear sky': return <img src={Icon_Clear_sky} alt='Icon_Clear_sky' width={this.props.width} />
            case 'Clear': return <img src={Icon_Clear_sky} alt='Icon_Clear_sky' width={this.props.width} />
            case 'Clouds': return <img src={Icon_Few_clouds} alt='Icon_Few_clouds' width={this.props.width} />
            case 'Mist': return <img src={Icon_Mist} alt='Icon_Mist' width={this.props.width} />
            case 'Rain': return <img src={Icon_Rain} alt='Icon_Rain' width={this.props.width} />
            case 'Scattered clouds': return <img src={Icon_Scattered_clouds} alt='Icon_Scattered_clouds' width={this.props.width} />
            case 'Shower rain': return <img src={Icon_Shower_rain} alt='Icon_Shower_rain' width={this.props.width} />
            case 'Snow': return <img src={Icon_Snow} alt='Icon_Snow' width={this.props.width} />
            case 'Thunderstorm': return <img src={Icon_Thunderstorm} alt='Icon_Thunderstorm' width={this.props.width} />
            default: return <img src={Icon_Waiting} alt='Icon_Waiting' width={this.props.width} />
        }
    }
}
export default pictureToday;