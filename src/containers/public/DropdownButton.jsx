import React from "react";

export default function DropdownButton({ dropDownLink }) {
  return (
    <button
      className="btn btn-secondary dropdown-toggle publicNavBarLink"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {dropDownLink}
    </button>
  );
}
