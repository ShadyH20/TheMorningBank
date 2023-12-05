import React from "react";
import { CardTitle } from "reactstrap";

function CardField({ title, value, alignLeft ,alignRight, style, titleColor}) {
  return (
    <CardTitle
      tag="h7"
      className={"no-margin " + (alignLeft ? "text-left" : alignRight? "text-right" : "text-center")}
        style={{ ...style }}
    >
      <span style={{color: 
        titleColor == undefined ? null : titleColor
      }}><b>{title}</b></span>
      {style == undefined ? <br /> : null}
      {value}
    </CardTitle>
  );
}

export default CardField;
