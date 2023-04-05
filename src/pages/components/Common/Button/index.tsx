import { Button } from "@chakra-ui/react";

/* Button Props */

export interface ButtonProps {
  text: string;
  bgColor: string;
  fontColor: string;
  hoverColor?: string;
  URL: string;
  onClick?(event: React.MouseEvent<HTMLElement>): void
  isDisabled?: boolean
  isLoading?: boolean
  children?: string
}

/* Rendering */

export default function ProjectButton(props: ButtonProps) {

  const { text, bgColor, fontColor, hoverColor, URL } = props;

  return (
    <>
      <Button
      as={'a'}
      w={'fit-content'}
      rounded={'full'}
      href={URL}
      bg={bgColor}
      color={fontColor}
       _hover={{ bg: hoverColor }}>
      {text}
      </Button>
    </>
  )
}