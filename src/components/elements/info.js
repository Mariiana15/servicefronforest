import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';
import Time from './time';
import WeatherSnap from './weatherSnap';

class Info extends React.Component {

    state = {
    };

    componentDidMount() {

    }

    render() {
        return (
            <div id={this.props.id} className="info">
                <Time />
                <WeatherSnap />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
    };
};

export default connect(mapStateToProps, { setLoggin })(Info);

