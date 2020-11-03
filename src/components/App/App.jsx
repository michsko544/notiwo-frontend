import React from "react"
import { BrowserRouter, Redirect, Switch } from "react-router-dom"
import Store from "store"
import AppTheme from "./App.theme"
import Menu from "../Menu"
import { PublicRoute, PrivateRoute } from "components/routes"
import {
  LoginView,
  RegisterView,
  NoticesView,
  NoticeView,
  ProfileView,
  SettingsView,
  BecomeFreelancerView,
  OrdersView,
  CommisionsView,
  YourNoticesView,
  ConversationView,
} from "views"
import AppInit from "./App.init"

const App = () => {
  return (
    <Store.Container>
      <AppTheme>
        <AppInit />
        <div className="App">
          <BrowserRouter>
            <Menu />
            <main>
              <div className="contentContainer">
                <Switch>
                  <PublicRoute exact path="/login">
                    <LoginView />
                  </PublicRoute>
                  <PublicRoute exact path="/register">
                    <RegisterView />
                  </PublicRoute>
                  <PublicRoute exact path="/notices/:category" component={NoticesView} />
                  <PublicRoute exact path="/notice/:id" component={NoticeView} />
                  <PublicRoute exact path="/user/:id" component={ProfileView} />
                  <PrivateRoute exact path="/settings">
                    <SettingsView />
                  </PrivateRoute>
                  <PrivateRoute exact path="/become-freelancer">
                    <BecomeFreelancerView />
                  </PrivateRoute>
                  <PrivateRoute exact path="/your-orders">
                    <OrdersView />
                  </PrivateRoute>
                  <PrivateRoute exact path="/your-commisions">
                    <CommisionsView />
                  </PrivateRoute>
                  <PrivateRoute exact path="/your-notices">
                    <YourNoticesView />
                  </PrivateRoute>
                  <PrivateRoute exact path="/conversation/:id" component={ConversationView} />
                  <Redirect to="/notices/it" />
                </Switch>
              </div>
            </main>
          </BrowserRouter>
        </div>
      </AppTheme>
    </Store.Container>
  )
}

export default App
