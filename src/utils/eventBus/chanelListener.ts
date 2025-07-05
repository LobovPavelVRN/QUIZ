import { useEffect } from "react"
import { eventBus } from "."

export const useListenChanel = <T extends unknown>(chanel: string, onMsg: (data: T) => void) => {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe(chanel, onMsg);

    return () => { unsubscribe(); }
  }, []);
}