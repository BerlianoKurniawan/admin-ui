import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/datatable/Datatable";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        <h1 className="title">New</h1>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="item">
                <img
                    src="https://i.pinimg.com/564x/07/79/66/077966d00e45d3b811abd68057364077.jpg"
                    alt=""
                    className="itemImg"/>
                </div>
            </div>
            <div className="right">
                <List/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default New;