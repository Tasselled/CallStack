import React from "react";

export default function TagDropDownButton({ tagLink }) {
  return (
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id=""
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="true"
    >
      {tagLink}
    </button>
  );
}
