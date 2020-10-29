import React from "react"
import Store from "store"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ children, ...rest }) => {
  const store = Store.useStore()

  const isAuthenticated = () => {
    return store.get("authToken") !== ""
  }

  return isAuthenticated() ? <Route {...rest}>{children}</Route> : <Redirect to="/login" />
}

export default PrivateRoute
