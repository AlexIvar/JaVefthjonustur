import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import { useSearch } from "./components/useSearch";

function App() {
  const [pageNumer, setPageNumber] = useState(1);

  // Kallað er í vefþjónustuna hér
  const { loading, error, results, hasMorePages } = useSearch(pageNumer);
  const observer = useRef();
  const lastResultRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        //Ef notandi er búinn að scrolla niður í síðasta fyritækið
        //og til eru fleirri síður þá köllum við í vefþjónustuna til að fá fleirri gögn
        if (entries[0].isIntersecting && hasMorePages) {
          //Náum í næstu 10 fyritækin
          setPageNumber((prevPage) => prevPage + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMorePages]
  );

  let props = {
    loading: loading,
    error: error,
    results: results,
    hasMorePages: hasMorePages,
  };

  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route
            path="/products"
            exact
            element={<Products results={props} myRef={lastResultRef} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
