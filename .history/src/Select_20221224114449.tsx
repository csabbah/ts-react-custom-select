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
      <div className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>X</button>
      </div>
    </>
  );
}
