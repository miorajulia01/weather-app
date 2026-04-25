const Search = () => {
  return (
    <div>
      <h3 className="text-center text-5xl mb-8 font-bold ">
        How's the sky looking today?
      </h3>
      <div className="text-center">
        <label className="input bg-[#312f4b] outline-0 border-0">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search for a place" />
        </label>
        <button className="btn btn-primary bg-[#4455da] ml-3 rounded-1xl">Search</button>
      </div>
    </div>
  );
};
export default Search;
