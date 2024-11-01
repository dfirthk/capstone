import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root borderRadius={10} overflow={'hidden'}>
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize="3xl">{game.name}</Heading>
			</CardBody>
		</Card.Root>
	);
};

export default GameCard;
