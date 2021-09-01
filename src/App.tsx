/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MenuUser } from "./components/MenuUser";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";
import { getData, Item } from "./services/getData";

interface Store {
  productData: Item[];
}

export const GlobalData = React.createContext<Store>({
  productData: [],
});

function App() {
  const [data, setdata] = useState<Item[]>([]);
  useEffect(() => {
    getData("https://jsonblob.com/api/882291362746281984").then((dataRes) => {
      setdata(dataRes);
    });
  }, []);
  return (
    <ChakraProvider>
      <GlobalData.Provider value={{ productData: data }}>
        <div className="App">
          <MenuUser />
          <Product />
          <Footer />
        </div>
      </GlobalData.Provider>
    </ChakraProvider>
  );
}

export default App;
