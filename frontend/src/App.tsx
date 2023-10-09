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
              <Link to="/admin/dashboard" className="items-center justify-end ">
              {/* <button>Visit Dashboard</button> */}
                <div className="px-12rem w-[1fr] h-[100vh]  flex justify-center flex-col items-center bg-[Black] gap-6">
                  <div className="text-white text-6xl md:text-8xl text-center text-bold">Welcome to <span className="text-[#888]">Note-</span><span className="text-[#4f92ff]">Vault</span></div>
                  <Button className="bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white">Get started</Button>
                </div>
            </Link>
            }
          />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/top-contributer" element={<TopContributer />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/subjects" element={<Subjects />} />

          {/* Charts */}

          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Apps */}

          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route path="/admin/aboutus" element={<AboutUS />} />
          <Route path="/admin/contactus" element={<ContactUs />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/newcontribution" element={<NewContribution />} />
          <Route path="/admin/semester" element={<Semester />} />
          <Route path="/admin/pdfview" element={<PdfView />} />
          <Route path="/admin/booksection" element={<BookSection/>} />
          
        </Routes>
      </Suspense>
    </Router>
    </div>
  );
};

export default App;
