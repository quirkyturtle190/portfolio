import NavBar from './components/NavBar';
import './App.css';

import projectData from "./assets/project-data.json";
import ProjectCard from "./components/ProjectCard";

projectData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {
  return (
        <div className="App">
          <NavBar/>
            <div className="container">
                <div className="child1">
                    <div className="info">
                        <h2 className="typed-out">Hello, I am Anon!</h2>
                    </div>
                    <div className="about">
                        <h1>Future software engineer passionate about creating neat solutions to difficult problems </h1>
                    </div>
                    <div className="about">
                        <h1>Currently studying Computer Science at Brown University and previous Cloud Development Intern at Cisco Summer 2022 </h1>
                    </div>
                </div>
                <div className="child2">
                    <img className="selfie" src="/selfie.png" alt="selfie"/>
                </div>
            </div>
            <div className="flex-row">
                {projectData.map((item) => ( <ProjectCard info={item}/>))}
            </div>
        </div>
  );
}


export default App;
