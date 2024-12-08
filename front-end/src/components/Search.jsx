import { Form } from "react-router-dom";
import searchIcon from "../assets/imgs/SVGs/Search button.svg";
import { FiSearch } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const SearchBar = ({className}) => {
  return (
    <Form
      action="search"
      className={`flex flex-row items-center justify-between bg-primary-1 lg:w-[500px] w-[80vw] rounded-[20px] h-[50px] md:h-[60px] has-[:focus]:outline outline-2 has-[:focus]:outline-secondary-1 ${className}`}
    >
      <div className="flex items-center w-10/12 ">
        <FiSearch className="text-[30px] ml-3" />
        <input
          type="text"
          placeholder="Search..."
          className="block bg-primary-1 focus:outline-none overflow-auto w-full ml-2"
        />
      </div>
      <button
        onClick={() => alert("hello")}
        className="m-3 md:m-2 md:w-8 md:h-8 w-7 h-7 hover:bg-secondary-2 bg-secondary-1 rounded-full"
      >
        <FaArrowRight className="text-textColors-1 m-auto"/>
      </button>
    </Form>
  );
};

export default SearchBar;
