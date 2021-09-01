/** @format */

import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { MenuUser } from "./components/MenuUser";
import { Product } from "./components/Product";
import { getData, Item } from "./services/getData";

interface Store {
  productData: Item[];
  setText: (value: string) => void;
}

export const GlobalData = React.createContext<Store>({
  productData: [],
  setText: () => {},
});

function App() {
  const [data, setdata] = useState<Item[]>([]);
  const [dataDisplay, setdataDisplay] = useState<Item[]>([]);
  const [textSearch, settextSearch] = useState<string>("");
  useEffect(() => {
    getData("https://jsonblob.com/api/882457098991120384").then((dataRes) => {
      setdata(dataRes);
      setdataDisplay(dataRes);
    });
  }, []);
  useEffect(() => {
    let tempData: Item[] = [];
    data.forEach((element: Item) => {
      if (element.name.indexOf(textSearch) >= 0) {
        tempData.push(element);
      }
    });
    setdataDisplay(tempData);
  }, [textSearch, data]);
  return (
    <ChakraProvider>
      <GlobalData.Provider
        value={{ productData: dataDisplay, setText: settextSearch }}>
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
