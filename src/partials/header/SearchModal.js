import React, { useState, useRef, useEffect } from "react";

function SearchModal({ setSearchKey }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInput = useRef("");

  return (
    <div className="flex items-center">
      <input
        id="modal-search"
        className="w-full border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4"
        type="search"
        placeholder="Enter site name"
        ref={searchInput}
        onChange={() => setSearchKey(searchInput.current.value)}
      />
    </div>
  );
}

export default SearchModal;
