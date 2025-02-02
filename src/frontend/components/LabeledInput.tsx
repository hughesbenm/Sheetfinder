import "./LabeledInput.css";

interface LabeledFillProps {
	position?: "top" | "bottom",
	children: string;
	value: string;
	setValue: (value: string) => void;
}

const LabeledInput : React.FC<LabeledFillProps> = ({position = "top", value, setValue, children} : LabeledFillProps) => {
	return (
		<div className="labeled_input">
			{position == "top" && <label className="label">{children}</label>}
			<input className="input" value={value} onChange={(e) => setValue(e.target.value)}></input>
			{position == "bottom" && <label className="label">{children}</label>}
		</div>
	)
}

export default LabeledInput;