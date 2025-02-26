import GridLabel from "./layout/GridLabel";
import GridRow from "./layout/GridRow";
import GridSink from "./layout/GridSink";
import GridSource from "./layout/GridSource";
import Section from "./layout/Section";

const DefenseSection = () => {
	return (
		<Section title="Defense">
			<GridRow>
				<GridLabel size={1} title="AC" subtitle="Armor Class" />
				<GridSource size={1} label={"Total ="} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridLabel title="+10" />
				<GridSource size={1} label={"Armor Bonus"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"Shield Bonus"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"DEX Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"Size Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"Natural Armor"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"Deflection Bonus"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource label={"Misc. Modifier"} value={"test"} setValue={() => {}} position={"bottom"} size={4}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"Touch"} subtitle="AC"/>
				<GridSource size={1} label={""} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridLabel title={"Flat"} subtitle="AC"/>
				<GridSource size={1} value={"test"} setValue={() => {}} />
				<GridSource label={"Other AC Modifiers"} value={"test"} setValue={() => {}} position={"bottom"} size={5}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"HP"} subtitle="Hit Points"/>
				<GridSource size={1} label={"Total"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={2} label="Wounds/Current" value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={2} label={"Non-Lethal Damage"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridLabel size={1} title={"DR"} subtitle="Damage Reduction"/>
				<GridSource value={"test"} setValue={() => {}} position={"bottom"} size={2}/>
				<GridLabel title={"SR"} subtitle="Spell Resistance"/>
				<GridSource value={"test"} setValue={() => {}} position={"bottom"} size={1}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"Fortitude"} subtitle={"CON"} size={2}/>
				<GridSource size={1} label={"Total ="} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"Base Save"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSink size={1} label={"+ Ability Modifier"} value={"test"} position={"bottom"}/>
				<GridSource size={1} label={"+ Misc Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"+ Temp Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={4} label={"Other Modifiers"} value={"test"} setValue={() => {}} position={"bottom"}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"Reflex"} subtitle={"DEX"} size={2}/>
				<GridSource size={1} label={"Total ="} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"Base Save"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSink size={1} label={"+ Ability Modifier"} value={"test"} position={"bottom"}/>
				<GridSource size={1} label={"+ Misc Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"+ Temp Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={4} label={"Other Modifiers"} value={"test"} setValue={() => {}} position={"bottom"}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"Will"} subtitle={"WIS"} size={2}/>
				<GridSource size={1} label={"Total ="} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"Base Save"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSink size={1} label={"+ Ability Modifier"} value={"test"} position={"bottom"}/>
				<GridSource size={1} label={"+ Misc Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"+ Temp Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={4} label={"Other Modifiers"} value={"test"} setValue={() => {}} position={"bottom"}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"Resist"} subtitle={"All Resistances"} size={2}/>
				{/* Think about MUI Chips for stuff like this, anything that involves adding an unknown amount, even if from a list of other ones*/}
				<GridSource size={4} label={"Elemental & Other"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridLabel title={"Immune"} subtitle={"All Immunities"} size={2}/>
				<GridSource size={3} label={"Effects & Other"} value={"test"} setValue={() => {}} position={"bottom"}/>
			</GridRow>
			<GridRow>
				<GridLabel size={2} title="CMD" subtitle="Combat Manuever Defense" />
				<GridSource size={1} label={"Total ="} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridLabel title="+10" />
				<GridSource size={1} label={"Base Attack Bonus"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"+ STR Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"+ DEX Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={1} label={"+ Size Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={2} label={"+ Misc Modifiers"} value={"test"} setValue={() => {}} position={"bottom"}/>
				<GridSource size={2} label={"Temp Modifiers"} value={"test"} setValue={() => {}} position={"bottom"}/>
			</GridRow>
		</Section>
	);
}

export default DefenseSection;