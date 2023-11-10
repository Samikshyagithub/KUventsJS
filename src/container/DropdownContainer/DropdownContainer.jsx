import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Dropdown } from "../../components";
import "./DropdownContainer.css";

const DropdownContainer = () => {
  const [schools, setSchools] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedSchools, setSelectedSchools] = useState("");
  const [selectedClubs, setSelectedClubs] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSchoolChange = (value) => {
    setSelectedSchools(value);
  };

  const handleClubsChange = (value) => {
    setSelectedClubs(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSearch = () => {
    console.log("Selected School:", selectedSchools);
    console.log("Selected Clubs:", selectedStatus);
    console.log("Selected Category:", selectedCategory);
  };

  return (
    <div className="dropdown__container">
      <Dropdown
        options={schools}
        label="Select School"
        value={selectedSchools}
        onChange={handleSchoolChange}

       
      />
      
      <Dropdown
        options={clubs}
        label="Select Clubs"
        value={selectedClubs}
        onChange={handleClubsChange}
      />
      <Dropdown
        options={categories}
        label="Select Category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      />
      <Link to="/search">
        <button onClick={handleSearch}>Search</button>
      </Link>
    </div>
  );
};

export default DropdownContainer;
