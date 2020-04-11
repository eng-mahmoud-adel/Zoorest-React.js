import React from 'react'
import {Route,Redirect} from "react-router-dom";

/*This Route wrapper acts as a middleware, if the user is authenticated
* then open the target page or to homepage otherwise
* */
const AuthRoute = ({path, props, component: Component, isAuthenticated}) => {
    return (
        <Route
            path={path}
            render={
                routerProps => {

                    //if the
                    if (isAuthenticated) {
                        return (<Component {...props} {...routerProps}/>)
                    }

                    /*Todo maybe redirect to a login page ?*/
                    return <Redirect to="/" />
                }
            }

        />
    );
};

export default AuthRoute;
