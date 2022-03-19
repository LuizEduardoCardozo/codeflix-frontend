import { createContext } from "react";

export interface DialogSearchContextValue {
    show: () => void;
    hide: () => void;
}

export const DialogSearchContext = createContext<DialogSearchContextValue>({
    show: () => {},
    hide: () => {},
})
