import Chart, {
  Series,
  ZoomAndPan,
  Legend,
  ScrollBar,
} from "devextreme-react/chart";
import { zoomingData } from "./const";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="root">
        <Chart id="chart" palette="Harmony Light" dataSource={zoomingData}>
          <Series argumentField="abc" valueField="def" />
          <ScrollBar visible={true} />
          <ZoomAndPan argumentAxis="both" />
          <Legend visible={false} />
        </Chart>
      </div>
    </div>
  );
}

export default App;
