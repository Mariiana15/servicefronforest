import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';
import Plot from 'react-plotly.js';

import data from './data.json';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

class Plott extends React.Component {

    state = {
        rows: null
    };

    componentDidMount() {
        this.setState({ rows: data.data })
    }

    typeColor() {
        switch (this.props.typeColor) {
            case "humedad":
                return "Viridis"
            case "humedad2":
                return "YlGnBu"
            case "temperature":
                return "YlOrRd"
            case "smot":
                return "Bluered"
            default:
                return "heatmap"
        }
    }

    zoneDetail() {
        let rows_ = []
        var t = Object.keys(this.props.rows).map((key, i) => {
            rows_.push(this.props.rows[key]);
            return this.props.rows[key]
        });
        console.log(rows_)
        return rows_

    }

    render() {
        console.log(this.props.rows)
        if (this.state.rows && this.props.rows) {
            var data = [{
                z: this.zoneDetail(),
                type: 'surface',
                colorscale: this.typeColor(),
                opacity: 0.8
            }];

            var layout = {
                title: this.props.title,
                autosize: false,
                width: 550,
                height: 600,
                margin: {
                    l: 25,
                    r: 20,
                    b: 65,
                    t: 30,
                },

                scene: {
                    xaxis: {
                        backgroundcolor: "rgb(200, 200, 230)",
                        gridcolor: "rgb(255, 255, 255)",
                        showbackground: true,
                        zerolinecolor: "rgb(255, 255, 255)",
                    },
                    camera: {
                        center: {
                            x: 0, y: 0, z: 0
                        },
                        eye: {
                            x: 2, y: 1.5, z: 1.1
                        },
                        up: {
                            x: 0, y: 0, z: 0.6
                        }
                    },
                    yaxis: {
                        backgroundcolor: "rgb(230, 200,230)",
                        gridcolor: "rgb(255, 255, 255)",
                        showbackground: true,
                        zerolinecolor: "rgb(255, 255, 255)"
                    },
                    zaxis: {
                        backgroundcolor: "rgb(230, 230,200)",
                        gridcolor: "rgb(255, 255, 255)",
                        showbackground: true,
                        zerolinecolor: "rgb(255, 255, 255)"
                    }
                }

            };

            return (

                <Plot
                    data={data}
                    layout={layout}
                />
            );
        }
        else {
            return (<div></div>)
        }
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
        zoneDetail: state.streams.zoneDetail,
    };
};

export default connect(mapStateToProps, { setLoggin })(Plott);

