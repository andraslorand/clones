import "./scss/App.scss";
import Row from "./components/Row";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <h1>Still working on it, dont judge :)</h1>
      <Row
        title="Netflix original"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top rated" fetchURL={requests.fetchTopRated} />
      <Row title={"Comdey"} fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentation" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
