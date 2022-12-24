import { Select } from "./Select";

const options = [{ label: "First", value: 1 }];
function App() {
  return (
    <div>
      <Select options={options} />
    </div>
  );
}

export default App;
