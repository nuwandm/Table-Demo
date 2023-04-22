import "./App.css";
import BasicTable from "./component/BasicTable";
import { tableData } from "./component/ReusableTable/data";
import Table from "./component/ReusableTable/table";
import SortingTable from "./component/sortingTable";
import columns from "./component/ReusableTable/columns";

function App() {
  return (
    <div>
      {/* <SortingTable /> */}
      <Table data={tableData} columns={columns} />
    </div>
  );
}

export default App;
