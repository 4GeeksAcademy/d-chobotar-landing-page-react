import React from "react";

function ListItem(props) {
    const classNames = `nav-link ${props.active === "true" ? "active" : ""}`;
    return (
      <li className="nav-item">
        <a className={classNames} aria-current="page" href="#">
          {props.contentText}
        </a>
      </li>
    );
  }
  
  export default ListItem;
  