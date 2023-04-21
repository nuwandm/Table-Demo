import { React, useMemo } from "react";
import { UseTable, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
const BasicTable = () => {
  // needs to memorize the rows and columns, data isn't recreated when an every render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
    // this can be simplified because of ES6 shorthand syntax -->({columns,data})
  });
  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicTable;
