import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

interface AddItemProps {
  newItem: string
  setNewItem: (e: any) => void
  handleSubmit: (e: any) => void
}

const AddItem = ({ newItem, setNewItem, handleSubmit }: AddItemProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        name="addItem"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        aria-label="Add Item"
        type="submit"
        onClick={() => inputRef.current!.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem
