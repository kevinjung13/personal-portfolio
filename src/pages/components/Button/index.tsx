import { Button, Link } from "@chakra-ui/react";

/* Button Props */

export interface ButtonProps {
  text: string;
  bgColor: string;
  fontColor: string;
  hoverColor?: string;
  URL?: string;
  target?: string;
  type?: string;
  download?: string;
  onClick?(event: React.MouseEvent<HTMLElement>): void
  isDisabled?: boolean;
  isLoading?: boolean;
}

/* Rendering */

export default function ProjectButton(props: ButtonProps) {

  const { text, bgColor, fontColor, hoverColor, URL, target} = props;

  return (
    <>
      <Link
        href={URL}
        target={target}
        isExternal>
        <Button
          w={'fit'}
          rounded={'full'}
          bg={bgColor}
          color={fontColor}
          _hover={{ bg: hoverColor }}>
          {text}
        </Button>
      </Link>
    </>
  )
}