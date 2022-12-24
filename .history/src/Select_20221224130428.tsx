import { useState, useEffect } from "react";
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  value?: SelectOption; // value? means this value is optional
  onChange: (value: SelectOption | undefined) => void; // Void -  This function returns nothing
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption; // value? means this value is optional
  onChange: (value: SelectOption | undefined) => void; // Void -  This function returns nothing
};

export function Select({ multiple, value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    // Only call the change when necessary
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    return option === value;
  }

  useEffect(() => {
    // If dialogue box is open, set highlighted index to 0
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <>
      <div
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        className={styles.container}
      >
        <span className={styles.value}>{value?.label}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${isOpen && styles.show}`}>
          {options.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`${styles.option} ${
                highlightedIndex === index && styles.highlighted
              } ${isOptionSelected(option) && styles.selected}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
