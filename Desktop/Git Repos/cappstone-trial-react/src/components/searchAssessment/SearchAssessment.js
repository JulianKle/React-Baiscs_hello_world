export function SearchAssessment({ onFilter }) {
  function filterName(event) {
    event.preventDefault();
    console.log(event.target.elements.search.value);
    onFilter(event.target.elements.search.value);
  }

  return (
    <>
      <form onSubmit={filterName}>
        <label htmlFor="search">
          Search for Assessment Title:
          <input type="text" name="search" />
        </label>
        <button>Search</button>
      </form>
    </>
  );
}
