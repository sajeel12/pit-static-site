import { useState, useCallback } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface PasswordGateProps {
  onAuth: () => void;
}

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

const EXPECTED_HASH = import.meta.env.VITE_PORTAL_PASSWORD_HASH;

export default function PasswordGate({ onAuth }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(false);
      setIsLoading(true);

      const hash = await sha256(password);
      if (hash === EXPECTED_HASH) {
        sessionStorage.setItem('portal_auth', 'true');
        onAuth();
      } else {
        setError(true);
        setIsLoading(false);
      }
    },
    [password, onAuth]
  );

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <img
            src="/logos/PIT/logo-icon-white.png"
            alt="Perception IT"
            className="h-10 w-auto"
          />
          <span className="text-white carbon-fluid-heading-03-strong">Perception IT</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#0f62fe]" />
            </div>
            <div>
              <h1 className="carbon-heading-02 text-[#161616]">Staff Portal</h1>
              <p className="carbon-helper-text-01 text-gray-500">Internal resources &amp; tools</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            <label htmlFor="portal-password" className="block carbon-label-02 text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="portal-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-3 pr-12 rounded-lg border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2 ${
                  error
                    ? 'border-[#da1e28] bg-[#da1e28]/5'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
                placeholder="Enter staff password"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="mt-2 text-sm text-[#da1e28]">
                Incorrect password. Please try again or contact IT.
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full mt-5 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Checking...' : 'Access Portal'}
            </button>
          </form>

          <p className="mt-4 text-center carbon-helper-text-01 text-gray-500">
            Need access?{' '}
            <a href="mailto:it@perception-it.com" className="text-[#0f62fe] hover:underline">
              Contact IT
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
