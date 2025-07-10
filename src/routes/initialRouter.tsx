import { Routes,Route } from "react-router"
import { Initial } from "../pages/initial"
Initial

export function InitialRouter() {
    return (
        <Routes>
            <Route path="/" element={<Initial />}/>
        </Routes>
    )
}