import Menu from "../../components/menu";
import Search from "../../components/search";
import './dashboard.css';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">

        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Menu page="dashboard" />
        </div>

        <div className="col py-3 me-3">
          <div className="mb-5">
            <Search text="O que vc procura?" />
          </div>

          <div className="d-flex justify-content-between">
            <h1>DASHBOARD</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard;