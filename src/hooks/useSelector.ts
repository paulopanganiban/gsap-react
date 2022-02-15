import { gsap } from "gsap";
import { useMemo, useRef } from "react";

export function useSelector() {
    const ref = useRef(null);
    const q = useMemo(() => gsap.utils.selector(ref), [ref]);
    return [q, ref];
}

export function useArrayRef() {
    const refs = useRef<any>([]);
    refs.current = [];
    return [refs, (ref: any) => ref && refs.current.push(ref)];
  }