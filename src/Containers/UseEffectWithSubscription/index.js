import React from "react";
import UseEffectClass from "../../Components/UseEffectWithSubscription/Class";
import {UseEffectFunc} from "../../Components/UseEffectWithSubscription/Function";

export default function UseEffectWithSubscription() {
  return (
    <span className="Container">
      <UseEffectClass></UseEffectClass>
      <UseEffectFunc className="Right"></UseEffectFunc>
    </span>
  );
}