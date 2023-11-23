import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../..";

export const ProtectedRoute = ({ children }) => {
    const { user } = useContext(Context)

    if (!user.isAuth) {
        return <Navigate to="/" />;
    }
    return children;
}