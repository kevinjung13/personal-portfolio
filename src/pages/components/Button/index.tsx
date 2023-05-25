import { Box, Button, Text, Link } from "@chakra-ui/react";
import { useForm } from '@formspree/react';

/* Button Props */

export interface ButtonProps {
  text: string;
  bgColor: string;
  fontColor: string;
  hoverColor?: string;
  URL?: string;
  target?: string;
  type?: "button" | "submit"
  download?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

/* Rendering */

export default function ProjectButton(props: ButtonProps) {

  const { text, bgColor, fontColor, hoverColor, URL, target, isDisabled, type } = props;

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
            type={type}
            _hover={{ bg: hoverColor }}>
            {text}
          </Button>
        </Link>
      </>
    )
  }