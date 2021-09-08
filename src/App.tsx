/** @format */
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import "./App.css";
import { Footer } from "./components/Footer";
import { MenuUser } from "./components/MenuUser";
import { fetchData, fecthDataPost } from "./store/actionCreator";

const Product = lazy(() => import("./components/Product"));
const Post = lazy(() => import("./components/Post"));

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// 3. extend the theme
const theme = extendTheme({ config });

function App() {
  const dispatch = useDispatch();
  const { fetchData: data, fecthDataPost: getdata } = bindActionCreators(
    { fetchData, fecthDataPost },
    dispatch,
  );

  useEffect(() => {
    data("https://jsonblob.com/api/882555877874413568");
  }, [data]);
  useEffect(() => {
    getdata("https://jsonblob.com/api/884987287335878656");
  }, [getdata]);
  return (
    <ChakraProvider>
      <Router>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <div className="App">
          <MenuUser />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Product />
              </Route>
              <Route path="/post">
                <Post />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
