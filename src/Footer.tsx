interface Props {
  length: number
}

const Footer = ({ length }: Props) => {
  return (
    <footer>
      {/* {length >= 2 ? (
        <p>You currently have {length} items in your list.</p>
      ) : (
        <p>You currently have {length} item in your list.</p>
      )} */}
      <p>
        You currently have {length} {length === 1 ? "item" : "items"} in your
        list.
      </p>
    </footer>
  )
}

export default Footer
