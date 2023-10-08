import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";
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

const dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center text-center ">
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b2} />
            <h2 className="">Bio-Medical</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b1} />
            <h2 className="">Bio-Technology</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b4} />
            <h2 className="">Chemical</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b5} />
            <h2 className="">Computer Science</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b6} />
            <h2 className="">Electronics & Communication</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b7} />
            <h2 className="">Electrical</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b8} />
            <h2 className="">Information Technology</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b9} />
            <h2 className="">Mechanical</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b10} />
            <h2 className="">Metallurgy & Material</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b11} />
            <h2 className="">Mining</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b3} />
            <h2 className="">Civil</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-5 m-4 bg-white rounded-lg shadow-lg">
            <img className="mb-3" alt="brances" src={b12} />
            <h2 className="">B.Arch</h2>
          </div>
          
          
        </section>


        <section className="transaction-container">
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
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default dashboard;
