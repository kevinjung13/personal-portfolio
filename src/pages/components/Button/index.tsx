import { Button, Link } from "@chakra-ui/react";

/* Button Props */
export interface ButtonProps {
  text: string;
  bgColor: string;
  fontColor: string;
  hoverColor?: string;
  URL?: string;
  target?: string;
  type?: "button" | "submit"
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  size?: string;
}

/* Rendering */
export default function ProjectButton(props: ButtonProps) {

  const {
    text,
    bgColor,
    fontColor,
    hoverColor,
    URL,
    target,
    isDisabled,
    isLoading,
    size,
    type,
    onClick
  } = props;

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
            isDisabled={isDisabled}
            isLoading={isLoading}
            type={type}
            size={size}
            _hover={{ bg: hoverColor }}
            onClick={onClick}>
            {text}
          </Button>
        </Link>
      </>
    )
  }
  