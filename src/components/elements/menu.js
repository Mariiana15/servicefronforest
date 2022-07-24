import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';
import Reminder from './reminder';
import Info from './info';
import Weather from './weather';
import Movies from './movies';
import Restaurants from './restaurants';
import PlotX from './plotX';
import MenuSection from './menuSection';
import Plot from './plot';

class Menu extends React.Component {

    state = {
    };

    componentDidMount() {
    }


    render() {
        let plot = null;

        if (this.props.zoneDetail !== undefined && this.props.zoneDetail !== null)
            plot = <div>
                <MenuSection icon="fa-solid fa-camera-movie" id="movies-section" scrollable title="Senso actual">
                    <div key={67} id={`movie-card-${67}`} className="movie-card movie-min2">
                        <Plot typeColor="humedad" title='Sensor humedad ambiente' rows={this.props.zoneDetail.data_h}>
                        </Plot>
                    </div>
                    <div key={57} id={`movie-card-${57}`} className="movie-card movie-min2" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1531418580067-04bc72baa73c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80")` }}>

                        <Plot typeColor="humedad2" title='Sensor humedad en el suelo' rows={this.props.zoneDetail.data_ht}>
                        </Plot>
                    </div>
                </MenuSection>
                <MenuSection icon="fa-solid fa-camera-movie" id="movies-section" scrollable title="Senso actual">
                    <div key={47} id={`movie-card-${47}`} className="movie-card movie-min2">
                        <Plot typeColor="temperature" title='Sensor temperatura' rows={this.props.zoneDetail.data_t}>
                        </Plot>
                    </div>
                    <div key={37} id={`movie-card-${37}`} className="movie-card movie-min2">
                        <Plot typeColor="smot" title='Sensor particulas CO²' rows={this.props.zoneDetail.data_c} >
                        </Plot>
                    </div>
                </MenuSection>
            </div>

        return (
            <div id="app-menu">
                <div id="app-menu-content-wrapper">
                    <div id="app-menu-content">
                        <div id="app-menu-content-header">
                            <div className="app-menu-content-header-section">
                                <Info id="app-menu-info" />
                                <Reminder />
                            </div>

                        </div>
                        <Weather />
                        <Restaurants />
                        <Movies />
                        {plot}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
        zoneDetail: state.streams.zoneDetail,
    };
};

export default connect(mapStateToProps, { setLoggin })(Menu);




