import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';

class Background extends React.Component {

    state = {
    };

    componentDidMount() {
        this.UserStatuss = new Map([
            ["LoggedIn", "Logged In"],
            ["LoggingIn", "Logging In"],
            ["LoggedOut", "Logged Out"],
            ["LogInError", "Log In Error"],
            ["VerifyingLogIn", "Verifying Log In"],
            ["auto", "car"]
        ]);
    }
    handleOnClick() {
        if (this.props.isloggin === this.UserStatuss.get('LoggedOut')) {
            this.props.setLoggin(this.UserStatuss.get('LoggingIn'));
        }
    }
    render() {

        return (
            <div id="app-background" onClick={() => { this.handleOnClick() }}>
                <div id="app-background-image" className="background-image" />
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
    };
};

export default connect(mapStateToProps, { setLoggin })(Background);


