import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './comps/NavBar';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<GridItem area="aside" bg="gold" hideBelow="lg">
				Aside
			</GridItem>
			<GridItem area="main" bg="dodgerblue">
				Main
			</GridItem>
		</Grid>
	);
}

export default App;