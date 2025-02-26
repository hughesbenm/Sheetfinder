import GridLabel from "./layout/GridLabel";
import GridRow from "./layout/GridRow";
import GridSink from "./layout/GridSink";
import GridSource from "./layout/GridSource";
import Section from "./layout/Section";

const OffenseSection = () => {
	return <Section title='Offense'>
		<GridRow>
			<GridLabel size={2} title="Initiative" subtitle="Modifier"/>
			<GridSource position="bottom" label="Total =" value="test" setValue={() => {}} size={1} />
			<GridSink position="bottom" label="DEX Modifier" value="test" size={1} />
			<GridSource position="bottom" label="+ Misc Modifier" value="test" setValue={() => {}} size={1} />
			<GridLabel title="BAB" subtitle="Base Attack Bonus"/>
			<GridSource position="bottom" label="+ Misc Modifier" value="test" setValue={() => {}} size={1} />
			<GridLabel size={2} title="Conditional" subtitle="Modifiers"/>
			<GridSource position="bottom" label="Modifiers & Notes" value="test" setValue={() => {}} size={3} />
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="Speed" subtitle="Land"/>
			<GridSource position="bottom" label="Base Speed" value="test" setValue={() => {}} size={1}/>
			<GridSource position="bottom" label="With Armor" value="test" setValue={() => {}} size={1}/>
			<GridSource position="bottom" label="Fly/Maneuverability" value="test" setValue={() => {}} size={2}/>
			<GridSource position="bottom" label="Climb" value="test" setValue={() => {}} size={1}/>
			<GridSource position="bottom" label="Burrow" value="test" setValue={() => {}} size={1}/>
			<GridSource position="bottom" label="Modifiers & Notes" value="test" setValue={() => {}} size={2}/>
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="CMB" subtitle="Combat Manuever Bonus" />
			<GridSource size={1} label={"Total ="} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSink position="bottom" label="Base Attack Bonus" value="test" size={1} />
			<GridSink position="bottom" label="+ STR Modifier" value="test" size={1} />
			<GridSink position="bottom" label="+ Size Modifier" value="test" size={1} />
			<GridSource size={3} label={"+ Misc Modifier"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSource size={3} label={"Temp Modifiers"} value={"test"} setValue={() => {}} position={"bottom"}/>
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="Ranged" subtitle="Ranged Attack" />
			<GridSource size={1} label={"Weapon"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSink position="bottom" label="Attack Bonus" value="test" size={1} />
			<GridSource size={3} label={"Damage"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSource size={3} label={"Critical"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSource size={3} label={"Type"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSource size={3} label={"Ammunition"} value={"test"} setValue={() => {}} position={"bottom"}/>
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="Melee" subtitle="Melee Attack" />
			<GridSource size={1} label={"Weapon"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSink position="bottom" label="Attack Bonus" value="test" size={1} />
			<GridSource size={3} label={"Damage"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSource size={3} label={"Critical"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSource size={3} label={"Type"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSource size={3} label={"Notes"} value={"test"} setValue={() => {}} position={"bottom"}/>
		</GridRow>
	</Section>
}

export default OffenseSection;