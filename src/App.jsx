import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#252128]">
      <div className="bg-[linear-gradient(90deg,#4731D3_80%,#CBF281_80%)] dark:bg-[linear-gradient(90deg,#171043_80%,#211F0B_80%)] px-[10%]">
        <Header />
        <Hero />
      </div>
      <Skills />
    </div>
  );
}

export default App;