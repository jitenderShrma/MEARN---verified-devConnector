// import React from 'react'
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({component:Component, auth, ...rest}) => (
//   <Route 
//   {...rest}
//   render={
//     props => auth.isAuthenticated === true ?
//     (<Component {...props}/>) :
//     (<Redirect to="/login"/>)
//   }
//   />
// );
// PrivateRoute.propstypes = {
//   auth:PropTypes.func.isRequired
// }
// const mapStateToProp = state => ({
//   auth:state.auth
// });
// export default connect(mapStateToProp)(PrivateRoute);


import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticate === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);