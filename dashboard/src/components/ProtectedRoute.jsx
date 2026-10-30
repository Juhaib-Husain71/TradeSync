import { useEffect, useState } from "react";
import axios from "axios";
import DashboardSkeleton from "./DashboardSkeleton";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get("https://tradesync-ikxa.onrender.com/users/me", {
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
        window.location.href = "https://tradesync-login.vercel.app/login";
        return null;
    }

    return children;
}

export default ProtectedRoute;