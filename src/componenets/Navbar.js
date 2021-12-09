import { React } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/Navbar.css";

const Navbar = ({onSearch}) => {
  
  return (
    <div>
      <div className="header-search">
        <input
          className="header-searchInput"
          type="text"
          placeholder="Buscar"
          name="busqueda"
          onChange={(e) => onSearch(e.target.value)}
        />
        <SearchIcon className="header-searchIcon" />
      </div>
    </div>
  );
};

export default Navbar;
