import GridLabel from "../layout/GridLabel";
import GridModSource from "../layout/GridModSource";
import GridNumberSource from "../layout/GridNumberSource";
import GridRow from "../layout/GridRow";
import GridSink from "../layout/GridSink";
import GridStringSource from "../layout/GridStringSource";
import Section from "../layout/Section";
import { setBaseAttackBonus, selectOffense } from "../redux/offenseSlice";
import { useAppSelector } from "../redux/store";

const OffenseSection = () => {
	const baseAttackBonus = useAppSelector(selectOffense).baseAttackBonus;

	const handleBaseAttack = (newValue: number) => {
		console.log("AHHH")
		setBaseAttackBonus(newValue);
	}

	return <Section title='Offense'>
		<GridRow>
			<GridLabel size={2} title="Initiative" subtitle="Modifier"/>
			<GridModSource position="bottom" label="Total =" value={0} setValue={() => {}} size={1} />
			<GridSink position="bottom" label="DEX Modifier" value="test" size={1} />
			<GridModSource position="bottom" label="+ Misc Modifier" value={0} setValue={() => {}} size={1} />
			<GridLabel title="BAB" subtitle="Base Attack Bonus"/>
			<GridModSource position="bottom" value={baseAttackBonus} setValue={handleBaseAttack} size={1} />
			<GridLabel size={2} title="Conditional" subtitle="Modifiers"/>
			<GridStringSource position="bottom" label="Modifiers & Notes" value="test" setValue={() => {}} size={3} />
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="Speed" subtitle="Land"/>
			<GridNumberSource position="bottom" label="Base Speed" value={0} setValue={() => {}} size={1}/>
			<GridNumberSource position="bottom" label="With Armor" value={0} setValue={() => {}} size={1}/>
			<GridNumberSource position="bottom" label="Fly/Maneuverability" value={0} setValue={() => {}} size={2}/>
			<GridNumberSource position="bottom" label="Climb" value={0} setValue={() => {}} size={1}/>
			<GridNumberSource position="bottom" label="Burrow" value={0} setValue={() => {}} size={1}/>
			<GridNumberSource position="bottom" label="Modifiers & Notes" value={0} setValue={() => {}} size={2}/>
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="CMB" subtitle="Combat Manuever Bonus" />
			<GridModSource size={1} label={"Total ="} value={0} setValue={() => {}} position={"bottom"}/>
			<GridSink position="bottom" label="Base Attack Bonus" value="test" size={1} />
			<GridSink position="bottom" label="+ STR Modifier" value="test" size={1} />
			<GridSink position="bottom" label="+ Size Modifier" value="test" size={1} />
			<GridModSource size={3} label={"+ Misc Modifier"} value={0} setValue={() => {}} position={"bottom"}/>
			<GridStringSource size={3} label={"Temp Modifiers"} value={"test"} setValue={() => {}} position={"bottom"}/>
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="Ranged" subtitle="Ranged Attack" />
			<GridStringSource size={1} label={"Weapon"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSink position="bottom" label="Attack Bonus" value="test" size={1} />
			<GridStringSource size={3} label={"Damage"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridStringSource size={3} label={"Critical"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridStringSource size={3} label={"Type"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridStringSource size={3} label={"Ammunition"} value={"test"} setValue={() => {}} position={"bottom"}/>
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="Melee" subtitle="Melee Attack" />
			<GridStringSource size={1} label={"Weapon"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridSink position="bottom" label="Attack Bonus" value="test" size={1} />
			<GridStringSource size={3} label={"Damage"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridStringSource size={3} label={"Critical"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridStringSource size={3} label={"Type"} value={"test"} setValue={() => {}} position={"bottom"}/>
			<GridStringSource size={3} label={"Notes"} value={"test"} setValue={() => {}} position={"bottom"}/>
		</GridRow>
	</Section>
}

export default OffenseSection;