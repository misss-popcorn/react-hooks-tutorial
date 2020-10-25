import React from "react";
import { PlainHook } from "../../Components/CustomHooksExample2/PlainHookExample2";
import {CustomHook} from "../../Components/CustomHooksExample2/CustomHookExample2";


export default function CustomHooksExample2() {
  return(<span className="Container">
    <PlainHook></PlainHook>
    <CustomHook className="Right"></CustomHook>
  </span>);
}