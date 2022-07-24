import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';
import Time from './time';
import WeatherSnap from './weatherSnap';
import MenuSection from './menuSection';
import PlotX from './plotX';

class Movies extends React.Component {

    state = {
        card: []
    };

    componentDidMount() {
    
    }

    getMovies() {
        const allItems = this.props.zoneDetail.summary.map((movie) => <div key={movie.id} id={`movie-card-${movie.id}`} className="movie-card movie-min">
            <div className="movie-card-background background-image" style={{ backgroundImage: `url(${movie.image})` }} />
            <div className="movie-card-content">
                <div className="movie-card-info">
                    <span className="movie-card-title">{movie.title}</span>
                    <span className="movie-card-desc">{movie.desc}</span>
                    <PlotX idP={movie.id + "-pl"} unid={movie.und} limit={movie.d0} unid1={movie.d5} unid2={movie.d4} unid3={movie.d3} unid4={movie.d2} unid5={movie.d1} alarma={movie.alarma}></PlotX>
                </div>
            </div>
        </div>
        );
        return allItems;
    }

    render() {

        if (this.props.zoneDetail !== null && this.props.zoneDetail !== undefined) {
            return (
                <MenuSection icon="fa-solid fa-camera-movie" id="movies-section" scrollable title="Datos historicos">
                    {this.getMovies()}
                </MenuSection>
            );
        }
        else
        {
            return (<div></div>)
        }

    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
        zone: state.streams.zone,
        zoneDetail: state.streams.zoneDetail,
    };
};

export default connect(mapStateToProps, { setLoggin })(Movies);
