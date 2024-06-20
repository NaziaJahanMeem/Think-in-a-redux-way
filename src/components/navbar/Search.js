import React, { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import searchImage from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);

  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if user is not in home page , redirect to home page
    if (!match) {
      navigate("/");
    }
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
};

export default Search;
