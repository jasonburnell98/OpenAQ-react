import "./App.css";
import { Container } from "semantic-ui-react";
import AirQuality from "./components/air-quality";

function App() {
  return (
    <Container
      style={{ backgroundColor: "#3578fe", height: "100vh", width: "100%" }}
    >
      <div className="ui black "> Air Quality Assesment </div>
      <AirQuality />
    </Container>
  );
}

export default App;
