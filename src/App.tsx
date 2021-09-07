/** @format */
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import "./App.css";
import { Post } from "./pages/Post";
import { ProductStore } from "./pages/ProductStore";
import * as ActionCreator from "./store/actionCreator";

function App() {
  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(ActionCreator, dispatch);
  useEffect(() => {
    fetchData("https://jsonblob.com/api/882555877874413568");
  }, [fetchData]);

  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <ProductStore />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
