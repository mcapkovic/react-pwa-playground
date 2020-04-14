import React, { useEffect, useState } from "react";
import { useGetNotes } from "../api/API";

function Notes(props) {
  const [data, setData] = useState([]);
  const getNotes = useGetNotes();

  useEffect(() => {
    getNotes().then((response) => setData(response || []));
  }, []);

  // console.log(data);
  return (
    <div>
      <h1>notes</h1>

      {data.length > 0 ? (
        <div style={{ height: "300px", overflow: "auto" }}>
          <table style={{ margin: "auto"}}>
            <thead>
              <tr>
                <th>date</th>
                <th>note</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <tr key={row.objectId}>
                  <td>{new Date(row.created).toLocaleDateString()}</td>
                  <td>{row.note} </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      ) : (
        "no data"
      )}
    </div>
  );
}
export default Notes;
