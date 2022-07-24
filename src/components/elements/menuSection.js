import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';

class MenuSection extends React.Component {

    state = {
    };

    componentDidMount() {

    }

    getContent() {
        if (this.props.scrollable) {
            return (
                <div className="menu-section-content">
                    {this.props.children}
                </div>
            );
        }

        return (
            <div className="menu-section-content">
                {this.props.children}
            </div>
        );
    }


    render() {

        return (
            <div id={this.props.id} className="menu-section">
                <div className="menu-section-title">
                    <i className={this.props.icon} />
                    <span className="menu-section-title-text">{this.props.title}</span>
                </div>
                {this.getContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
    };
};

export default connect(mapStateToProps, { })(MenuSection);


