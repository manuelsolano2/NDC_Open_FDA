import * as React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import TableSearch from "./pages/TableSearch/index.jsx"
import SideNav from "./AppBar.jsx"
import HomePage from "./pages/Home.jsx"

export default function App() {
    return <BrowserRouter>
        <SideNav>
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/table-search" exact element={<TableSearch/>}/>
            </Routes>
        </SideNav>
    </BrowserRouter>
}
