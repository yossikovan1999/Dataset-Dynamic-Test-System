import "./Table.css";

function Table({data}){

    return(
        <table>
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Year</th>
              <th>Country</th>
              <th>City</th>
              <th>Attack Type</th>
              <th>Motive</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return(
                <tr key={index}>
                  <td>{row.eventid}</td>
                  <td>{row.iyear}</td>
                  <td>{row["country_txt"]}</td>
                  <td>{row.city}</td>
                  <td>{row["attacktype1_txt"]}</td>
                  <td>{row.motive}</td>
                </tr>
              )

            })}
          </tbody>
        </table>
    )
}

export default Table;