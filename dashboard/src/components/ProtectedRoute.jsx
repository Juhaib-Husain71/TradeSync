import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import DashboardSkeleton from "./DashboardSkeleton";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/users/me", {
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
        window.location.href = "http://localhost:5173/login";
        return null;
    }

    return children;
}

export default ProtectedRoute;