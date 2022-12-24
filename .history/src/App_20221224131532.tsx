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
  // SelectedOption is a type used from Select.tsx
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple
        options={options}
        value={value2}
        onChange={(option) => {
          setValue2(option);
        }}
      />
      <Select
        options={options}
        value={value1}
        onChange={(option) => {
          setValue1(option);
        }}
      />
    </>
  );
}

export default App;
