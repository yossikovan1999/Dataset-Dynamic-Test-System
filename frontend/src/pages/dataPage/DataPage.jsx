import React, { useEffect, useState } from "react";
import "./DataPage.css";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";



function DataPage({data, dataToShow, setDataToShow}) {

  const [filterFields, setFilterFields] = useState({search: "", greater: "", lower: ""});
  
  
  function filterFuntion(row){
      
      if(!row){
        return false;
      }

      if(filterFields.search !== "" && (row["country_txt"] !== filterFields.search && row.city !== filterFields.search)){
          return false
      }
       
  
      if(filterFields.lower !== "" && (Number(row.iyear) <= Number(filterFields.lower))){
          return false;
      }

      if(filterFields.greater !== "" && (Number(row.iyear) >= Number(filterFields.greater))){
          return false
      }

      return true;
  } 

  
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
        setDataToShow(()=> jsonData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="data-page">
      <h1>Terror Data System</h1>
      <section className="filter-section">
        <form onSubmit={(e)=>{e.preventDefault(); setDataToShow(data.filter(filterFuntion))}}>
          <div className="input-container">
            <label>Search</label>
            <input
              value={filterFields.search}
              onChange={(e) =>
                setFilterFields({ ...filterFields, search: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label>Year Lower</label>
            <input
              value={filterFields.lower}
              onChange={(e) =>
                setFilterFields({ ...filterFields, lower: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label>Year Greater</label>
            <input
              value={filterFields.greater}
              onChange={(e) =>
                setFilterFields({ ...filterFields, greater: e.target.value })
              }
            />
          </div>
          <div>
            <button>Filter</button>
          </div>
        </form>
      </section>
      <section className="table-section">
        <Table data={dataToShow} />
      </section>
      <Link to="/Dynamic-Test-Page">Questions</Link>
    </main>
  );
}

export default DataPage;
