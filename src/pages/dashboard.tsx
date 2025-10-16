import { useAuth } from "../contexts/AuthContext";
import { env } from "../config/env";

const Dashboard = () => {
    const { logout } = useAuth();

    const handleLogout = () => logout();
    const handleAdminLogin = () => (window.location.href = env.MAIN_PORTAL_API);
    const handleEditorLogin = () => (window.location.href = env.TEST_PORTAL_API);
    const handleAuthorLogin = () => (window.location.href = env.SHOP_PORTAL_API);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f7fa',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: '2rem'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#1f2937'
            }}>Welcome to the Dashboard</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '250px'
            }}>
                <button 
                    onClick={handleLogout} 
                    style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: '#ef4444',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'background-color 0.2s',
                    }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#dc2626'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#ef4444'}
                >
                    Logout
                </button>

                <button
                    onClick={handleAdminLogin}
                    style={buttonStyle('#3b82f6')}
                >
                    Main Website
                </button>

                <button
                    onClick={handleEditorLogin}
                    style={buttonStyle('#10b981')}
                >
                    Test Website
                </button>

                <button
                    onClick={handleAuthorLogin}
                    style={buttonStyle('#f59e0b')}
                >
                    Shop Website
                </button>
            </div>
        </div>
    )
}

// Helper for consistent button styling
const buttonStyle = (bgColor: string) => ({
    padding: '0.75rem 1rem',
    backgroundColor: bgColor,
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.2s',
    marginBottom: '0.5rem',
    ':hover': {
        backgroundColor: darken(bgColor, 0.1),
    }
});

// Optional function to darken a color
function darken(color: string, percent: number) {
    const f = parseInt(color.slice(1),16), t=0, R=f>>16, G=f>>8&0x00FF, B=f&0x0000FF;
    return "#" + (0x1000000 + (Math.round((t-R)*percent)+R)*0x10000 + (Math.round((t-G)*percent)+G)*0x100 + (Math.round((t-B)*percent)+B)).toString(16).slice(1);
}

export default Dashboard;
