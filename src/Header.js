import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';


class Header extends React.Component {
  render() {

    var text = "";
    if (this.props.pouceLiked === 0 && this.props.coeurLiked === 0 && this.props.alertLiked === 0) {
      text = "Veuillez liker"
    } else if (this.props.coeurLiked<5) {
      text = "Plus de coeur svp"
    } else {
      text = "Meeeeeerci (ne cliquez pas sur l'image)"
    }

    return (
      <div id="container" className="container">
         <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <h2>
                {text}
              </h2>
              <p>
                <span>{this.props.pouceLiked} like</span> &bull;
                <span>{this.props.coeurLiked} crush</span> &bull;
                <span>{this.props.alertLiked} alert</span>
              </p>
            </div>
         </div>
      </div>
  );
}}

function mapDispatchToProps(dispatch) {
  return {
    likePouce: function() {
        dispatch( {type: 'LIKE',
        })
    },
    likeCoeur: function() {
        dispatch( {type: 'PRESS',
        })
    },
    likeAlert: function() {
        dispatch( {type: 'CLICK',
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
)(Header);
