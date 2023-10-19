
import AdminSidebar from "../components/AdminSidebar";
// import { useNavigate } from "react-router";
import { BsSearch } from "react-icons/bs";

import b1 from "../assets/images/b1.jpg"
import b2 from "../assets/images/b2.jpg"
import b3 from "../assets/images/b3.jpg"
import b4 from "../assets/images/b4.jpeg"
import b5 from "../assets/images/b5.jpg"
import b6 from "../assets/images/b6.jpg"
import b7 from "../assets/images/b7.png"
import b8 from "../assets/images/b8.webp"
import b9 from "../assets/images/b9.jpg"
import b10 from "../assets/images/b10.jpg"
import b11 from "../assets/images/b11.jpg"
import b12 from "../assets/images/b12.jpg"
import { Link } from "react-router-dom";



const dashboard = () => {

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          
        </div>
        <h1 className="text-center font-bold text-3xl mt-8" >Select your Branch</h1><br/>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center text-center ">
          
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <Link to="/admin/semester">
              <img className="mb-3" alt="brances" src={b2} />
              <h2 className="">Bio-Medical</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b1} />
            <h2 className="">Bio-Technology</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b4} />
            <h2 className="">Chemical</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <Link to={'/admin/semester'} >
            <img className="mb-3" alt="brances" src={b5} />
            <h2 className="">Computer Science</h2>
            </ Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b6} />
            <h2 className="">Electronics & Communication</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b7} />
            <h2 className="">Electrical</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b8} />
            <h2 className="">Information Technology</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b9} />
            <h2 className="">Mechanical</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b10} />
            <h2 className="">Metallurgy & Material</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b11} />
            <h2 className="">Mining</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b3} />
            <h2 className="">Civil</h2>
            </Link>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
          <Link to="/admin/semester">
            <img className="mb-3" alt="brances" src={b12} />
            <h2 className="">B.Arch</h2>
            </Link>
          </div>
          
          
        </div>


        {/* <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>

            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          <Table data={data.transaction} />
        </section> */}
      </main>
    </div>
  );
};


export default dashboard;
