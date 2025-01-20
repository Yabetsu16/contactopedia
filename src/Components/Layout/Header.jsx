import logo from "../../images/react.png";

import React from "react";

function Header() {
  return (
    <div className="pt-3 pl-2" style={{ borderBottom:"1px solid #777" }}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 text-white-50">ContactOpedia</span>
    </div>
  );
}

export default Header;
