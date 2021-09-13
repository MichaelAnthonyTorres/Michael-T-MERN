import React, { useState } from "react";

const PersonCard = (props) => {

  const [birthday, setBirthday] = useState(props.age);

  return (
    <div className="container">
      <h2>{props.lastName}, {props.firstName}</h2>
      <p>Age: {birthday}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={() => setBirthday( birthday + 1 )}>
        Its {props.firstName} {props.lastName}'s Birthday
      </button>
    </div>
  );
}

export default PersonCard;