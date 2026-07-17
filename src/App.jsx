import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWorkintechData from "./hooks/useWorkintechData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useWorkintechData();
  return (
    <div className="min-h-screen bg-white dark:bg-[#252128]">
      <ToastContainer position="top-right" autoClose={3000}/>
      <div className="bg-[linear-gradient(90deg,#4731D3_80%,#CBF281_80%)] dark:bg-[linear-gradient(90deg,#171043_80%,#211F0B_80%)]">
        <Header />
        <div className="px-[10%]">
        <Hero />
        </div>
      </div>
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;