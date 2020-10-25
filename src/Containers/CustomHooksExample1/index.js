import React from "react";
import { PlainHook } from "../../Components/CustomHooksExample1/PlainHookExample1";
import {CustomHook} from "../../Components/CustomHooksExample1/CustomHookExample1";


export default function CustomHooksExample1() {
  return(<span className="Container">
    <PlainHook></PlainHook>
    <CustomHook className="Right"></CustomHook>
  </span>);
}