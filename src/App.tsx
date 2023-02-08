import Header from "@/container/Header";
import Home from "@/container/Home";
import AboutMe from "@/container/AboutMe";
import Layout from "@components/Layout";
import Skills from "@/container/Skills";
import Project from "@/container/Project";

function App() {
  return (
    <div className="bg-white h-full text-black dark:bg-black dark:text-white">
      <Header />
      <Layout>
        <Home />
        <AboutMe />
        <Skills />
        <Project />
      </Layout>
    </div>
  );
}

export default App;
