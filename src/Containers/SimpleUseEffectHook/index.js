import React from "react";
import UseEffectClass from "../../Components/SimpleUseEffectHook/Class";
import {UseEffectFunc} from "../../Components/SimpleUseEffectHook/Function";

export default function UseEffectWithoutSubscription() {
  return (
    <span className="Container">
      <UseEffectClass></UseEffectClass>
      <UseEffectFunc className="Right"></UseEffectFunc>
    </span>
  );
}