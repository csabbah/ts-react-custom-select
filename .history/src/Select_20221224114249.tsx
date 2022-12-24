import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption; // value? means this value is optional
  onChange: (value: SelectOption | undefined) => void; // Void -  This function returns nothing
};

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <>
      <div>Correct</div>
      <div className={styles.container}>Wrong</div>
    </>
  );
}
