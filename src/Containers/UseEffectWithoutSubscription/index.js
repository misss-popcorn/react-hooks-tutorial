import React from "react";
import UseEffectClass from "../../Components/UseEffectWithoutSubscription/Class";
import {UseEffectFunc} from "../../Components/UseEffectWithoutSubscription/Function";

export default function UseEffectWithoutSubscription() {
  return (
    <span className="Container">
      <UseEffectClass></UseEffectClass>
      <UseEffectFunc className="Right"></UseEffectFunc>
    </span>
  );
}