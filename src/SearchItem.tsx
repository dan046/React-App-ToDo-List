interface SearchItemProps {
  search: string
  setSearch: (e: any) => void
}

const SearchItem = ({ search, setSearch }: SearchItemProps) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        role="searchbox"
        placeholder="Search Items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem
