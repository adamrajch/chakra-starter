import { useColorMode, IconButton, Button, color } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton
        onClick={toggleColorMode}
        aria-label="toggle darkmode"
        icon={colorMode == "light" ? <SunIcon /> : <MoonIcon />}
        mb={{ base: 6, sm: 0 }}
        mr={{ base: 0, sm: 8 }}
        _focus={{ outline: "none" }}
      />
    </header>
  );
};

export default DarkModeSwitch;
