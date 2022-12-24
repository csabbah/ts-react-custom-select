import { Select } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];
function App() {
  const [value, setValue] = useState(options[0]);
  return (
    <div>
      <Select options={options} value={value} />
    </div>
  );
}

export default App;