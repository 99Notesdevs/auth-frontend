import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { env } from "../config/env";
import { Eye, EyeOff, LogIn as LogInIcon, Lock, Mail } from "lucide-react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, GoogleOneTap } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await login(email, password);
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
      setError("Failed to log in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <GoogleOneTap />
        
        {/* Logo/Brand Section */}
        <div className="login-brand">
          <div className="login-logo">
            <Lock size={40} />
          </div>
          <h2 className="login-title">
            Welcome Back
          </h2>
        </div>

        <div className="login-card">
          <div className="login-card-content">
            {/* Header */}
            <div className="login-header">
              <h1>Sign in to your account</h1>
              <p>Enter your credentials to continue</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="login-error">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <Mail size={20} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="form-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <div className="password-label-row">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <a href="#" className="forgot-link">
                    Forgot password?
                  </a>
                </div>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <Lock size={20} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="form-input password-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`login-button ${isLoading ? "loading" : ""}`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="spinner"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <circle
                        style={{ opacity: 0.25 }}
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        style={{ opacity: 0.75 }}
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogInIcon size={20} style={{ marginRight: '8px' }} />
                    Sign In
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <span>Or continue with</span>
            </div>

            {/* Register Button */}
            <div className="register-section">
              <button
                type="button"
                onClick={() =>
                  (window.location.href = `${env.MAIN_PORTAL_API}/users/register`)
                }
                className="register-button"
              >
                Create a new account
              </button>
            </div>

            {/* Footer Text */}
            <p className="login-footer">
              By signing in, you agree to our{" "}
              <a href="#">Terms of Service</a>{" "}
              and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
