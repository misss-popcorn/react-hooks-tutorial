import React from "react";
import UseEffectClass from "../../Components/UseEffectWithDependency/Class";
import {UseEffectFunc} from "../../Components/UseEffectWithDependency/Function";

export default function UseEffectWithDependency() {
  return (
    <span className="Container">
      <UseEffectClass></UseEffectClass>
      <UseEffectFunc className="Right"></UseEffectFunc>
    </span>
  );
}