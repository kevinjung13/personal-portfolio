import Link from "next/link";
import { NavBarProps } from "../..";
import { Links } from "../..";
import { Box, Stack, Text, useColorModeValue} from "@chakra-ui/react";

/* Function for Navbar Items */
function DesktopItem(props: NavBarProps) {

  /* Props */
  const { name, href } = props;

  return (
    <>
      {/* Stacking */}
      <Stack direction={"row"} align={"center"}>
        {/* Container */}
        <Link
          href={`${href}`}>
          <Box p={2} rounded={"md"}>
            {/* Options */}
            <Text
              color={useColorModeValue("black", "white")}
              transition={"all .3s ease"}
              fontWeight={"bold"}
              fontSize={"lg"}
              _hover={{ color: useColorModeValue("brown", "yellow.400") }}>
              {name}
            </Text>
          </Box>
        </Link>
      </Stack>
    </>
  );
}

/* Desktop Version Navbar */
export default function Desktop() {
  return (
    <>
      {/* Stacking */}
      <Stack direction={"row"} spacing={4}>
        {/* Rendering Navbar Items */}
        {Links.map((link) => (
          <DesktopItem key={link.name} {...link} />
        ))}
      </Stack>
    </>
  );
}
