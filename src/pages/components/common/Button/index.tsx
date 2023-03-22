export interface ButtonProps {
  onClick?(event: React.MouseEvent<HTMLElement>): void
  isDisabled?: Boolean
  isLoading?: Boolean
  children: string
}


export default function Button(props: ButtonProps) {

  const { onClick, isDisabled, isLoading, children } = props;

  if (isDisabled) {
    ''
    
  }

  if (isLoading) {
   ''
  }


  return (
    <>
      <Button onClick={onClick} isDisabled={isDisabled}>
        {children}
      </Button>
    </>
  )
}