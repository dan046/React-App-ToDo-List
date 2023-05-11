import LineItem from "./LineItem"

// Prop Drilling
interface Props {
  items: {
    id: number
    checked: boolean
    item: string
  }[]
  handleCheck: (id: number) => void
  handleDelete: (id: number) => void
}

const ItemList = ({ items, handleCheck, handleDelete }: Props) => {
  return (
    <ul>
      {items.map((data) => (
        <LineItem
        key={data.id}
        item={data}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemList
