import React from 'react'
import icon from "../Images/delete.png";

export default function AnswerCard({ text, id, correct, onDeleteHandler }) {
  return (
    <div>
      <div className="submit-container">
        <div className="submit-main-answercard">
          <p>{text}</p>

          <img
            src={icon}
            alt=""
            width="20px"
            onClick={() => onDeleteHandler(id)}
          />
        </div>
        <div
          className="submit-correct"
          style={{ background: `${correct ? "green" : "lightgrey"}` }}
        >
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              checked={correct ? true : false}
            />
            <p className="form-checkbox">correct</p>
          </div>
        </div>
      </div>
    </div>
  );
}
