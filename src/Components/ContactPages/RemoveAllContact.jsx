import React from "react";

const RemoveAllContact = (props) => {
  return (
    <div>
      <button className="btn btn-danger form-control" onClick={props.handleDeleteAllContact}>
        Remove All
      </button>
    </div>
  );
};

export default RemoveAllContact;
