import "./scss/App.scss";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Banner/>
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
