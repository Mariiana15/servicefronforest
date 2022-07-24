import React from 'react';
import { connect } from 'react-redux';
import './card.scss'

class PlotX extends React.Component {

    state = {
        tilted: false
    };


    componentDidMount() {
    }

    toggleTilt() {
        let body = document.getElementById(this.props.idP);
        this.setState({ tilted: !this.state.tilted })
        if (this.state.tilted)
            body.classList.add('details');
        else
            body.classList.remove('details');
    }

    heightBar() {

    }

    render() {

        return (
            <div id={this.props.idP} onClick={() => { this.toggleTilt() }}>
                <div className="card">
                    <div className="photo"></div>
                    <h2>{this.props.zone}</h2>
                    <p>Historico</p>
                    <div className="chart">
                        <div className="bar bar1" style={{ "--scale_bar1": Math.round(210 * (this.props.unid1 / this.props.limit)) + "px" }}><span>{this.props.unid1}</span></div>
                        <div className="bar bar2" style={{ "--scale_bar2": Math.round(210 * (this.props.unid2 / this.props.limit)) + "px" }}><span>{this.props.unid2}</span></div>
                        <div className="bar bar3" style={{ "--scale_bar3": Math.round(210 * (this.props.unid3 / this.props.limit)) + "px" }}><span>{this.props.unid3}</span></div>
                        <div className="bar bar4" style={{ "--scale_bar4": Math.round(210 * (this.props.unid4 / this.props.limit)) + "px" }}><span>{this.props.unid4}</span></div>
                        <div className="bar bar5" style={{ "--scale_bar5": Math.round(210 * (this.props.unid5 / this.props.limit)) + "px" }}><span>{this.props.unid5}</span></div>
                    </div>
                    <h3>{this.props.unid5} {this.props.unid}</h3>
                </div>

                <div className="info">Click to toggle details view</div>
            </div >);
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
        zone: state.streams.zone,
    };
};

export default connect(mapStateToProps, {})(PlotX);


