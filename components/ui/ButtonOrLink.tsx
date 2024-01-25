import Link from 'next/link'

type ButtonOrLinkProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      as?: 'button'
    })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as: 'link'
    })

export const ButtonOrLink = (props: ButtonOrLinkProps) => {
  if (props.as === 'link') {
    return <a {...props} />
  }

  return <button {...props} />
}
