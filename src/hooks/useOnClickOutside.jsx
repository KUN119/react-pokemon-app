import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listner = (event) => {
            console.log((ref.current));
            console.log(event);
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler();
        }

        document.addEventListener('mousedown', listner);
        
        return () => {
            document.removeEventListener('mousedown', listner);
        }
    }, [ref, handler])
}