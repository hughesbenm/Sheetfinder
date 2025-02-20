import GridRow from "./layout/GridRow"
import GridSink from "./layout/GridSink"
import Section from "./layout/Section"

const GeneralSection = () => {
	return <Section title='General'>
		<GridRow>
			<GridSink label="Character Name" value={'Daxter Kaad'} size={2}/>
			<GridSink label="Alignment" value={'True Neutral'} size={1}/>
			<GridSink label="Player Name" value={'Ben Hughes'} size={2}/>
		</GridRow>
		<GridRow>
			<GridSink label="Race" value={'White'} size={2}/>
			<GridSink label="Size" value={'Medium'} size={1}/>
			<GridSink label="Gender" value={'Masc'} size={1}/>
			<GridSink label="Age" value={'18'} size={1}/>
			<GridSink label="Height" value={'6\'1\"'} size={1}/>
			<GridSink label="Weight" value={'180'} size={1}/>
			<GridSink label="Hair" value={'Brown'} size={1}/>
			<GridSink label="Eyes" value={'Brown'} size={1}/>
		</GridRow>
	</Section>
}

export default GeneralSection;