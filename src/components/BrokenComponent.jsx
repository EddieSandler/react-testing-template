import React from "react";

function BrokenComponent(props) {
  return (
    <div>
      <p>Hello, I'm an BrokenComponent!</p>
      <p>Here are some numbers:</p>
      <p>{props.favNum}</p>
      {/* cant alter the prop itself- need to +1 to add to it */}
      <p>{props.favNum++}</p>
      <p>{props.favNum++}</p>
      <p>{props.favNum +1}</p> {/*the fixed version */}

    </div>
  );
}

BrokenComponent.defaultProps = {
  favNum: 42
};

export default BrokenComponent;
