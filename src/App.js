import "./App.css";
import Weather from "./components/Weather";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="lagos" />
      <footer>
        <p>
          This project was coded by
          <a href="bukifad@gmail.com">Fadahunsi oluwabukola</a> and is{" "}
          open-sourced on
          <a href="https://github.com/Bukifad/weather-react">github</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
