import React from "react"
import {Redirect,Route} from 'react-router-dom'
import Auth from "./auth" 

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          Auth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/loginadmin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute