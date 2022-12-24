import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];
function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);

  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <div>
      <Select
        options={options}
        value={value}
        onChange={(option) => {
          setValue(option);
        }}
      />
      <Select
        multiple
        options={options}
        value={value}
        onChange={(option) => {
          setValue(option);
        }}
      />
    </div>
  );
}

export default App;
