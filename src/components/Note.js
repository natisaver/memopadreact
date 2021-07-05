import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Note(props) {
  return (
    <div className="note">
      <div className="vertright">
        <div className="inlinz">
          <h2>{props.title}</h2>
        </div>

        <p className="animate v2">{props.content}</p>
      </div>
      <div className="br">
        <FaTrashAlt className="trashcan" />
      </div>
    </div>
  );
}

export default Note;
