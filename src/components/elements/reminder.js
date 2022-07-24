import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';

class Reminder extends React.Component {

    state = {};

    componentDidMount() {

    }

    render() {
        if (this.props.generic !== undefined) {
            return (
                <div className="reminder" >
                    <div className="reminder-icon" >
                        <i className="fa-regular fa-bell" />
                    </div>
                    <span className="reminder-text" > Temperatura media en el bosque de {this.props.generic.id}
                    </span>
                </div >
            );
        }
        else
            return (< div > </div>);
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
})(Reminder);