import { HStack, Icon } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode } from '../components/ui/color-mode';
import { Switch } from '../components/ui/switch';

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<HStack>
			<Switch
				colorPalette="blue"
				size="lg"
				trackLabel={{
					on: (
						<Icon color="yellow.400">
							<FaSun />
						</Icon>
					),
					off: (
						<Icon color="gray.400">
							<FaMoon />
						</Icon>
					),
				}}
				isChecked={colorMode === 'dark'}
				onChange={toggleColorMode}
			/>
		</HStack>
	);
};

export default ColorModeSwitch;
