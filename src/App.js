import Appbar from "./components/Appbar";
import HomeBanner from "./components/HomeBanner";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import WorkWithMe from "./components/workWithMe";
import "./styles/styles.css";

function App() {
	return (
		<>
			<Appbar />
			<HomeBanner />
			<Skills />
			<Projects />
			<WorkWithMe />
		</>
	);
}

export default App;
