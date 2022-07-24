import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin, setSelZone } from '../../actions';
import MenuSection from './menuSection';
import {
    GenericZone
} from '../../apis/config';

class Info extends React.Component {

    state = {
        card: []
    };

    componentDidMount() {

        this.loadZone();
    }

    loadZone() {
        setTimeout(() => {
            this.props.setSelZone(this.props.generic.zones[0].id)
            var obj = document.getElementById(this.props.generic.zones[0].id);
            obj.classList.add("selzone");
            this.props.GenericZone(this.props.generic.zones[0].id);
            this.loadZoneRender();
        }, 1000);
    }

    loadZoneRender() {
        setTimeout(() => {
            this.props.GenericZone(this.props.zone);
            this.loadZoneRender();
        }, 300000);
    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    getIcon(day) {

        if (day.temperature >= 0 && day.temperature < 21)
            return "fa-solid fa-mountain-sun";
        else if (day.temperature >= 21 && day.temperature < 28)
            return "fa-solid fa-temperature-arrow-up";
        else if (day.temperature >= 28 && day.temperature < 35)
            return "fa-solid fa-temperature-high";
        else if (day.temperature >= 35)
            return "fa fa-solid fa-fire";
    }


    getZone(day) {

        if (day.temperature >= 0 && day.temperature < 21)
            return "Cloudy";
        else if (day.temperature >= 21 && day.temperature < 28)
            return "Stormy";
        else if (day.temperature >= 28 && day.temperature < 35)
            return "Rainy";
        else if (day.temperature >= 35)
            return "Sunny";
    }

    setZone(id) {

        var obj0 = document.getElementById(this.props.zone);
        var obj = document.getElementById(id);
        if (obj0 !== null && obj0 !== obj) {
            if (obj0.classList.contains("selzone")) {
                obj0.classList.remove("selzone");
            }
        }
        if (obj.classList.contains("selzone")) {
            this.props.setSelZone("");
            obj.classList.remove("selzone");
        }
        else {
            obj.classList.add("selzone");
            this.props.setSelZone(id);
            this.props.GenericZone(id);
        }
    }

    showCard() {
        const allItems = this.props.generic.zones.map((day) => <div key={day.id} id={day.id} className="day-card" onClick={() => { this.setZone(day.id) }}>
            <div className="day-card-content" >
                <span className="day-weather-temperature">{day.temperature}<span className="day-weather-temperature-unit">°F</span></span>
                <i className={"day-weather-icon " + this.getIcon(day) + " " + this.getZone(day).toLowerCase()} />
                <span className="day-name">{day.id}</span>
            </div>
        </div>

        );
        return allItems;
    }

    render() {
        if (this.props.generic !== undefined)
            return (

                <MenuSection icon="fa-solid fa-sun" id="weather-section" scrollable title="Analisis de las zonas y sus bosques">
                    {this.showCard()}
                </MenuSection>

            );
        else
            <div></div>
    }
}

const mapStateToProps = state => {
    return {
        isloggin: state.streams.isloggin,
        zone: state.streams.zone,
        generic: state.streams.generic,
    };
};

export default connect(mapStateToProps, { setLoggin, setSelZone, GenericZone })(Info);

