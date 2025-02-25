import "./LabeledInput.css";

interface LabeledInputProps<T extends string | number> {
	position?: "top" | "bottom",
	value: T;
	className?: string,
	setValue?: (newValue: T) => void,
	disabled?: boolean,
	text?: string,
}

const LabeledInput = <T extends string | number>({
	position = "top",
	value,
	className,
	text,
	disabled,
	setValue
}: LabeledInputProps<T>): JSX.Element => {
	return (
		<div className={`labeled_input ${className}`}>
			{position == "top" && <label className="label">{text}</label>}
			<input
				disabled={disabled}
				className="input"
				value={value}
				onChange={(e) => {
					if (setValue) {
						setValue(e.target.value as T);
					}
				}}
			/>
			{position == "bottom" && <label className="label">{text}</label>}
		</div>
	)
}

export default LabeledInput;