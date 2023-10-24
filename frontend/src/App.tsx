import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import {Button} from "@nextui-org/react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const MainPage = lazy(() => import("./pages/MainPage"));
const Sidebar = lazy(() => import("./pages/Sidebar"));

const TopContributer = lazy(() => import("./pages/TopContributer"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));

const Toss = lazy(() => import("./pages/apps/Toss"));
const AboutUS = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Login = lazy(()=>import("./pages/Login"))
const NewContribution = lazy(()=> import("./pages/NewContribution"))
const PdfView  = lazy(()=>import("./components/View"))
const PdfPreview  = lazy(()=>import("./components/PdfViewer"))

{/* test */}
const ProfileCard = lazy(()=> import('./ProfileCard'))





const App = () => {
  return (
    <div className="h-screen">
      <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route
            path="/admin"
            element={
              <Link to="/dashboard" className="items-center justify-end ">
              {/* <button>Visit Dashboard</button> */}
                <div className="px-12rem w-[1fr] h-[100vh]  flex justify-center flex-col items-center bg-[Black] gap-6">
                  <div className="text-white text-6xl md:text-8xl text-center text-bold">Weslcome to{' '} <span className="text-[#888]">Note-</span><span className="text-[#4f92ff]">Vault</span></div>
                  <Button className="bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white">Get started</Button>
                </div>
            </Link>
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/topcontributer" element={<TopContributer />} />


          {/* Apps */}

          <Route path="stopwatch" element={<Stopwatch />} />
          <Route path="toss" element={<Toss />} />



          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newcontribution" element={<NewContribution />} />
          <Route path="/pdfview" element={<PdfView />} />

          <Route path="/sidebar" element={<Sidebar/>} />
          <Route path="/pdfsee" element={<PdfPreview pdfUrl="https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview"/>} />
          

          {/* test */}
          <Route path="/profilecards" element={<ProfileCard />} />


        </Routes>
      </Suspense>
    </Router>
    </div>
  );
};

export default App;