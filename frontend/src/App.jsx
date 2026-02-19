import "./App.css";
import { useState, useEffect } from "react";
import DataPage from "./pages/dataPage/DataPage";
import DynamicTestPage from "./pages/DynamicTestPage/DynamicTestPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const URL = "http://localhost:3000/api/data";

function App() {
  const [data, setData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL, {
          method: "GET",
        });

        const jsonData = await res.json();

        if (!res.ok) {
          throw new Error(
            `${res.status} - ${jsonData.error || "Server error occured."}`,
          );
        }

        setData(() => jsonData.data);
        setDataToShow(() => jsonData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DataPage
                data={data}
                dataToShow={dataToShow}
                setDataToShow={setDataToShow}
              />
            }
          />
          <Route path="/Dynamic-Test-Page" element={<DynamicTestPage data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
