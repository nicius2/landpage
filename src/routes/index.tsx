import { BrowserRouter } from "react-router";
import { InitialRouter } from "./initialRouter";

export function Routes() {
    return(
        <BrowserRouter >
            <InitialRouter />
        </BrowserRouter>
    )
}