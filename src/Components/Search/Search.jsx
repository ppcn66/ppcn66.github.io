import React, { useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const SimpleSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    "Data Company Employee.docx",
    "Financial_Report_Q1_2024.xlsx",
    "Budget_Approval_March_2024.pdf",
    "User_Manual_Model_A123.pdf",
    "Technical_Specs_Model_B456.docx",
    "Employee_Training_Schedule_2024.xlsx",
    "Leave_Policy_Update_November_2024.pdf",
    "Purchase_Order_10234.pdf",
    "Supplier_Contract_TechParts_Ltd_2024.docx",
    "Meeting_Minutes_Technical_Team_2024_11_15.docx",
    "Meeting_Minutes_Management_Team_2024_11_27.docx",
    "Project_Kickoff_Meeting_Model_XYZ_2024_10_15.pdf",
    "Project_Plan_SmartHome_Device_X234.pptx",
    "Prototype_Design_Diagram_Version3.pdf",
    "Quality_Audit_Report_2024_09.pdf",
    "Inspection_Results_Lot_23001.xlsx",
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <i class="bi bi-search"></i>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      {searchTerm && (
        <div className="results-container">
          <ul className="results">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li className="li-item" key={index}>
                  {item}
                </li>
              ))
            ) : (
              <li className="no-results">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimpleSearch;
