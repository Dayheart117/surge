


import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = (props: any) => {
    // 定义白名单
    const WhiteList = ["/login"];
    // 读取路径
    const { pathname } = useLocation()
    if (WhiteList.indexOf((pathname ? pathname : "/")) === -1) {
        let token = localStorage.getItem("token");
        if (token) {
            return props.children;
        } else {
            return <Navigate to="/login" />;
        }
    } else {
        return props.children;
    }
}

export default RouteGuard
