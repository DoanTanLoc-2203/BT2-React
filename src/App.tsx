/** @format */
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import "./App.css";
import { Post } from "./pages/Post";
import { ProductStore } from "./pages/ProductStore";
import { fetchData } from "./store/actionCreator";

function App() {
  const dispatch = useDispatch();
  const { fetchData: data } = bindActionCreators({ fetchData }, dispatch);
  useEffect(() => {
    data("https://jsonblob.com/api/882555877874413568");
  }, [data]);

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
