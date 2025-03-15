import { Route, Routes } from "react-router-dom"
import { ProtectedPaths, UnProtectedPaths } from "./paths"
import UnProtectedLayout from "../UnProtectedLayout"
import ProtectedLayout from "../ProtectedLayout"

const Navigation = () => {

    return (
        <>
            <Routes>
                <Route path="/">
                    {/* protected paths */}
                    <Route element={<ProtectedLayout />}>
                        {ProtectedPaths.map((route, index) => (
                            <Route
                                key={`${index}-ProtectedPaths`}
                                Component={route.component}
                                path={route.path}
                            />
                        ))}
                    </Route>

                    {/* unProtected paths */}
                    <Route element={<UnProtectedLayout />}>
                        {UnProtectedPaths.map((route, index) => (
                            <Route 
                                key={`${index}-UnProtectedPaths`} 
                                Component={route.component} 
                                path={route.path} 
                            />
                        ))}
                    </Route>

                </Route>
            </Routes>
        </>
    )
}

export default Navigation