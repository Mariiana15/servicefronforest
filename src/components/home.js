import React from 'react';
import {
  connect
} from 'react-redux';
import './home.scss';
import Background from './elements/background'
import Info from './elements/info';
import {
  setLoggin,
  setSelZone
} from '../actions';
import Menu from './elements/menu';
import {
  GenericData
} from '../apis/config';

class Home extends React.Component {

  state = { objMenu: null };

  componentDidMount() {
    this.props.setLoggin("logged-in")
    this.props.GenericData();
    this.renderTime();
    setTimeout(() => {
      this.setState({ objMenu: <Menu /> })
    }, 500);
  }
  renderTime() {
    setTimeout(() => {
      this.props.GenericData();
      this.renderTime();
    }, 600000);
  }

  render() {

    return (
      <div id="app" className={this.props.isloggin}>
        <Info id="app-info" />
        <Background />
        {this.state.objMenu}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isloggin: state.streams.isloggin,
  };
};

export default connect(mapStateToProps, {
  setLoggin,
  setSelZone,
  GenericData
})(Home);