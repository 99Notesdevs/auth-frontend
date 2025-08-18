import { useAuth } from "../contexts/AuthContext";
import { env } from "../config/env";

const Dashboard = () => {
    const { logout } = useAuth();
    
    const handleLogout = () => {
        logout();
    };

    const handleAdminLogin = () => {
        window.location.href = `${env.MAIN_PORTAL_API}`;
    };

    const handleEditorLogin = () => {
        window.location.href = `${env.TEST_PORTAL_API}`;
    };

    const handleAuthorLogin = () => {
        window.location.href = `${env.SHOP_PORTAL_API}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
                    <p className="text-gray-600">Welcome to your portal dashboard</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PortalCard 
                        title="Main Website"
                        description="Access the main administration portal"
                        onClick={handleAdminLogin}
                        icon={
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        }
                    />
                    
                    <PortalCard 
                        title="Test Website"
                        description="Access the testing portal"
                        onClick={handleEditorLogin}
                        icon={
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />
                    
                    <PortalCard 
                        title="Shop Website"
                        description="Access the shopping portal"
                        onClick={handleAuthorLogin}
                        className="md:col-span-2 lg:col-span-1"
                        icon={
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        }
                    />
                </div>

                <div className="mt-10 text-center">
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

interface PortalCardProps {
    title: string;
    description: string;
    onClick: () => void;
    icon: React.ReactNode;
    className?: string;
}

const PortalCard = ({ title, description, onClick, icon, className = '' }: PortalCardProps) => (
    <div 
        onClick={onClick}
        className={`${className} bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200`}
    >
        <div className="p-6">
            <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-blue-600 font-medium flex items-center">
                Open portal
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </div>
    </div>
);

export default Dashboard;
