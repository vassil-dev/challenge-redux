import React, { Component } from 'react';
import {connect} from 'react-redux';


import './App.css';


class Footer extends React.Component {
  render() {
    return (
      <div id="container" className="container">
         <div className="row">
            <div className="col-xs-offset-2 col-xs-8">

            <div>
                <span onClick={() => {this.props.likePouce()}} className="glyphicon glyphicon-thumbs-up"></span>
                <span onClick={() => {this.props.likeCoeur()}} className="glyphicon glyphicon-heart"></span>
                <span onClick={() => {this.props.likeAlert()}} className="glyphicon glyphicon glyphicon-alert"></span>

            </div>


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


export default connect(
  null,
  mapDispatchToProps
)(Footer);
