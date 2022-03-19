import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSmallWindow } from "../../../hooks/useSmallWindow";
import { DialogSearch } from "./DialogSearch";
import { DialogSearchContext } from "./DialogSearchContext"

export const DialogSearchProvider: React.FunctionComponent = (props)  => {
    const [open, setOpen] = useState(false);
    const history = useHistory<{ showSearchDialog?: number }>();
    const isSmallWindow = useSmallWindow()

    const actions = useMemo(() => ({
        show: () => setOpen(true),
        hide: () => setOpen(false),
    }), []);

    useEffect(() => {
        history.push({
            ...history.location,
            state: {
                ...history.location.state,
                showSearchDialog: open ? 1 : 0,
            }
        })
    }, [open, history])

    useEffect(() => {
        const unregister = history.listen((location, action) => {
            if(action === "POP") {
                actions.hide();
                const { showSearchDialog } = location.state || {}
                showSearchDialog ? actions.show() : actions.hide();
            };  
        });
        return () => {
            unregister();
        };
    }, [history, actions]);


    useEffect(() => {
        if(!isSmallWindow) {
            actions.hide();
        }
    }, [isSmallWindow, actions])

    return (
        <DialogSearchContext.Provider value={actions}>
            {props.children}
            <DialogSearch open={open} />
        </DialogSearchContext.Provider>
    )
}