import { Route, Routes } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "../../utils/consts"
import Admin from '../../pages/Admin'
import Basket from '../../pages/Basket'
import Shop from '../../pages/Shop'
import Auth from "../../pages/Auth"
import DevicePage from '../../pages/DevicePage'
import NotFound from "../../pages/NotFound"
import { ProtectedRoute } from "./ProtectedRoute";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path={SHOP_ROUTE} element={<Shop />} />
            <Route path={REGISTER_ROUTE} element={<Auth />} />
            <Route path={LOGIN_ROUTE} element={<Auth />} />
            <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage />} />

            <Route path={ADMIN_ROUTE} element={
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>
            } />
            <Route path={BASKET_ROUTE} element={
                <ProtectedRoute>
                    <Basket />
                </ProtectedRoute>
            } />
        </Routes>
    )
}