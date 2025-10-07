import ProjectsSidebar from "./components/projectsSidebar";
import DefaultScreen from "./components/DefaultScreen";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      
      <ProjectsSidebar/>
      <NewProject />
    </main>
  );
}

export default App;
