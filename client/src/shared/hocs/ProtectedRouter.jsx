/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function ProtectedRouter({children, isAllowed, redirect = '/'}) {
    return isAllowed ? children : <Navigate to={redirect} replace/>
}

export default ProtectedRouter;