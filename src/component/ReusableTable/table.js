import React from "react";
const Table = ({ data, columns }) => {
  const getCapital = (str) => {
    return str.toUpperCase();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((head) => (
              <th>{getCapital(head.header)}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((col) => (
                <td>{row[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
