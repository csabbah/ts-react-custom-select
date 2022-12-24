type SelectOption = {
    label: string
    value: string
}
type SelectProps = {
    options: SelectOption[]
    value?: SelectOption // value? means this value is optional
    onChange: (value: SelectOption)
};

export function Select({ value, onChange, options }: SelectProps) {}
