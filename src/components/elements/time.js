import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';

class Time extends React.Component {

    state = {
    };

    componentDidMount() {

    }

    format(date) {

        const hours = this.formatHours(date.getHours());
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${this.formatSegment(minutes)}`;

    }

    formatHours(hours) {
        return hours % 12 === 0 ? 12 : hours % 12;
    }

    formatSegment(segment) {
        return segment < 10 ? `0${segment}` : segment;
    }

    render() {
        const date = new Date();
        return (
            <span className="time">{this.format(date)}</span>
        );
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
    };
};

export default connect(mapStateToProps, { setLoggin })(Time);
