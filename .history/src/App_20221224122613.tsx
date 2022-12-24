import { useState } from "react";
import { Select } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];
function App() {
  // Our state variable can either be an option as seen above {label:"First", value: 1} or..
  // undefined if no value is set
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  return (
    <div>
      <Select options={options} value={value} />
    </div>
  );
}

export default App;
