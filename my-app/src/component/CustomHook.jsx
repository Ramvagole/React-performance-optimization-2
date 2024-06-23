import { useState } from "react";


export function useCustom(a){
    let [b,setVal]=useState(a)

    function addValue(c){
        setVal({...b,...c})
    }

    return [b,addValue]
}