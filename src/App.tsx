import Header from "@/container/Header";
import Home from "@/container/Home";
import AboutMe from "@/container/AboutMe";
import Layout from "@components/Layout";
import Skills from "@/container/Skills";
import Project from "@/container/Project";
import Interview from "./container/Interview";

function App() {
  return (
    <div className="bg-white h-full text-black dark:bg-black dark:text-white">
      <Header />
      <Layout>
        <Home />
        <AboutMe />
        <Skills />
        <Project />
        <Interview />
      </Layout>
    </div>
  );
}

export default App;
