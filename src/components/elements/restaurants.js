import React from 'react';
import { connect } from 'react-redux';
import '../home.scss';
import { setLoggin } from '../../actions';
import Time from './time';
import WeatherSnap from './weatherSnap';
import MenuSection from './menuSection';

class Restaurants extends React.Component {

  state = {
    card: []
  };

  componentDidMount() {
    this.setState({
      "card": [{
        desc: "En el suelo depende al tipo de nitratos",
        id: 1,
        image: "https://images.unsplash.com/photo-1647247599347-0a54ee73afa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        title: "Humedad"
      }, {
        desc: "En el ambiente depende de la geografia y el ecocistema",
        id: 2,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        title: "Humedad"
      }, {
        desc: "del suelo y la tierra, suele ser diferentes",
        id: 3,
        image: "https://images.unsplash.com/photo-1614281325430-a3da58d1d34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        title: "Temperatura"
      }, {
        desc: "Indica el numero de paticulas de CO2",
        id: 4,
        image: "https://images.unsplash.com/photo-1569875770758-f17664dfe4f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5000&q=80",
        title: "Particulas"
      }]
    });
  }

  getRestaurants() {
    const allItems = this.state.card.map((restaurant) => <div key={restaurant.id} className="restaurant-card background-image" style={{ backgroundImage: `url(${restaurant.image})` }}>
      <div className="restaurant-card-content">
        <div className="restaurant-card-content-items">
          <span className="restaurant-card-title">{restaurant.title}</span>
          <span className="restaurant-card-desc">{restaurant.desc}</span>
        </div>
      </div>
    </div>
    );
    return allItems;
  }

  render() {

    return (
      <MenuSection icon="fa-regular fa-pot-food" id="restaurants-section" title="Variables medidas">
        {this.getRestaurants()}
      </MenuSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    isloggin: state.streams.isloggin,
  };
};

export default connect(mapStateToProps, { setLoggin })(Restaurants);