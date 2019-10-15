import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import Footer from "./Footer";

import './App.css';

class App extends React.Component {

  render() {

    var imageFlower = (number) => {
      if (number < 8) {
        return "./flowers.jpg"
      } else {
        return "./flowers2.jpg"
      }
    }

    return (
      <div>
        <Header/>
        <div id="container" className="container">
           <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <img onClick={() => {this.props.likeBoom()}} className="img-responsive" src={imageFlower(this.props.alertLiked)} />
              </div>
           </div>
        </div>
        <Footer/>
      </div>
  );
}}


function mapDispatchToProps(dispatch) {
  return {
    likeBoom: function() {
        dispatch( {type: 'BOOM',
        })
    },
  }
}

function mapStateToProps(state) {

  console.log('contenu du store -->', state)
  return {
    pouceLiked: state.pouceReducer,
    coeurLiked: state.coeurReducer,
    alertLiked: state.alertReducer,
   }
 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
