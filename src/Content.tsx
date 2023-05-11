import ItemList from "./ItemList"

interface Props {
  items: {
    id: number
    checked: boolean
    item: string
  }[]
  handleCheck: (id: number) => void
  handleDelete: (id: number) => void
}

const Content = ({ items, handleCheck, handleDelete }: Props) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  )
}

export default Content
