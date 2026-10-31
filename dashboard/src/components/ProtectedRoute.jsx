import { useEffect, useState } from "react";
import axios from "axios";
import DashboardSkeleton from "./DashboardSkeleton";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/users/me`, {
                withCredentials: true,
            })
            .then(() => {
                setAuthenticated(true);
            })
            .catch(() => {
                setAuthenticated(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <DashboardSkeleton/>
    }

    if (!authenticated) {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        return null;
    }

    return children;
}

export default ProtectedRoute;