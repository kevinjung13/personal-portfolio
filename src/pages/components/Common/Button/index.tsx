import { Button } from "@chakra-ui/react";

/* Button Props */

export interface ButtonProps {
  text: string;
  bgColor: string;
  fontColor: string;
  hoverColor?: string;
  URL?: string;
  target?: string;
  download?: string;
  onClick?(event: React.MouseEvent<HTMLElement>): void
  isDisabled?: boolean
  isLoading?: boolean
}

/* Rendering */

export default function ProjectButton(props: ButtonProps) {

  const { text, bgColor, fontColor, hoverColor, URL, target} = props;

  return (
    <>
      <Button
      as={'a'}
      w={'fit-content'}
      rounded={'full'}
      href={URL}
      target={target}
      bg={bgColor}
      color={fontColor}
      _hover={{ bg: hoverColor }}>
      {text}
      </Button>
    </>
  )
}