import { useState } from "react"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import AddItem from "./AddItem"
import SearchItem from "./SearchItem"

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("shoppinglist")
    return storedItems ? JSON.parse(storedItems) : []
  })

  const [newItem, setNewItem] = useState("")

  const [search, setSearch] = useState("")

  const setAndSaveItems = (newItems: any) => {
    setItems(newItems)
    localStorage.setItem("shoppinglist", JSON.stringify(newItems))
  }

  const addItem = (item: any) => {
    // Ternary statement that sets the id value.
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {
      id,
      checked: false,
      item,
    }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleCheck = (id: any) => {
    // ID is the key of the items
    const listItems = items.map((data: { id: any; checked: any }) =>
      // Making the checkbox dynamic.
      data.id === id ? { ...data, checked: !data.checked } : data
    )
    setAndSaveItems(listItems)
  }

  const handleDelete = (id: any) => {
    const listItems = items.filter((data: { id: any }) => data.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!newItem) return
    // Call the add item function.
    addItem(newItem)
    setNewItem("")
  }

  const filterItems = (item: any) => {
    item.item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter(filterItems)}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
