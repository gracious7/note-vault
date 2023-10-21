import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
// import "./styles/index.scss"
import {Button} from "@nextui-org/react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/NewContribution"));
const Transaction = lazy(() => import("./pages/Transaction"));
const TopContributer = lazy(() => import("./pages/TopContributer"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const Subjects = lazy(() => import("./components/Subjects"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);

const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const AboutUS = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Login = lazy(()=>import("./pages/Login"))
const NewContribution = lazy(()=> import("./pages/NewContribution"))
const Semester = lazy(()=> import("./components/Semester"))
const PdfView  = lazy(()=>import("./components/View"))
const BookSection = lazy(()=>import("./pages/BookSection"))

const App = () => {
  return (
    <div className="h-screen">
      <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/dashboard" className="items-center justify-end ">
              {/* <button>Visit Dashboard</button> */}
                <div className="px-12rem w-[1fr] h-[100vh]  flex justify-center flex-col items-center bg-[Black] gap-6">
                  <div className="text-white text-6xl md:text-8xl text-center text-bold">Welcome to <span className="text-[#888]">Note-</span><span className="text-[#4f92ff]">Vault</span></div>
                  <Button className="bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white">Get started</Button>
                </div>
            </Link>
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/top-contributer" element={<TopContributer />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/subjects" element={<Subjects />} />

          {/* Charts */}

          <Route path="/chart/bar" element={<BarCharts />} />
          <Route path="/chart/pie" element={<PieCharts />} />
          <Route path="/chart/line" element={<LineCharts />} />

          {/* Apps */}

          <Route path="/app/stopwatch" element={<Stopwatch />} />
          <Route path="/app/coupon" element={<Coupon />} />
          <Route path="/app/toss" element={<Toss />} />

          {/* Management */}
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductManagement />} />
          <Route
            path="/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newcontribution" element={<NewContribution />} />
          <Route path="/semester" element={<Semester />} />
          <Route path="/pdfview" element={<PdfView />} />
          <Route path="/booksection" element={<BookSection/>} />
          
        </Routes>
      </Suspense>
    </Router>
    </div>
  );
};

export default App;