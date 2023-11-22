import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const isAuth = true;
    if (!isAuth) {
        return <Navigate to="/" />;
    }
    return children;
}