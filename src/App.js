import React, { Fragment, Suspense, useEffect } from "react";
import Notification from "./components/UI/Notification";
import Layout from "./components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { Redirect, Route, Switch } from "react-router-dom";
import HousesPage from "./pages/HousesPage";
import BooksPage from "./pages/BooksPage";
import CharactersPage from "./pages/CharactersPage";
import NotFound from "./pages/NotFound";
import { loadHousesData } from "./store/actions/houses-actions";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(loadHousesData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/houses" />
            </Route>
            <Route path="/houses" component={HousesPage} exact />
            <Route path="/books" component={BooksPage} />
            <Route path="/characters" component={CharactersPage} />
            <Route path="*" component={NotFound}>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
