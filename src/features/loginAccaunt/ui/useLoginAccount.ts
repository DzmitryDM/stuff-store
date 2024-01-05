import { useRef } from "react";
import { useClickOutside } from "../../../shared/hooks/useClickOutside";



export const useLoginAccount =(closeAuth:()=>void)=>{
  
  const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, () => {
      closeAuth()
    })

    return [ref]
}