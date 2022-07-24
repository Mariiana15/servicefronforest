import React from 'react';
import {
    connect
} from 'react-redux';
import '../home.scss';
import {
    setLoggin
} from '../../actions';

class WeatherSnap extends React.Component {

    state = {};

    componentDidMount() {

    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    render() {
        if (this.props.generic !== undefined)
            return (<span className="weather" >
                <i className="weather-type fa-duotone fa-sun" />
                <span className="weather-temperature-value" > {
                    this.props.generic.temperature
                } </span> <span className="weather-temperature-unit"> °C</span> </span>
            );
        else
            return (<div></div>)
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
        generic: state.streams.generic,
    };
};

export default connect(mapStateToProps, {
    setLoggin
})(WeatherSnap);