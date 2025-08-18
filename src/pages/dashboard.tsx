import { useAuth } from "../contexts/AuthContext";
import { env } from "../config/env";
const Dashboard = () => {
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
    }
    const handleAdminLogin = () => {
        window.location.href = `${env.MAIN_PORTAL_API}`;
    }
    const handleEditorLogin = () => {
        window.location.href = `${env.TEST_PORTAL_API}`;
    }
    const handleAuthorLogin = () => {
        window.location.href = `${env.SHOP_PORTAL_API}`;
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleAdminLogin}>Main Website</button>
            <button onClick={handleEditorLogin}>Test Website</button>
            <button onClick={handleAuthorLogin}>Shop Website</button>        </div>
    )
}

export default Dashboard
