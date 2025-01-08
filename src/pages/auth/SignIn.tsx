import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function SignIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Admin login check
    if (credentials.email === 'admin' && credentials.password === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
      return;
    }

    // Regular user login simulation
    if (credentials.email && credentials.password) {
      localStorage.setItem('user', JSON.stringify({ email: credentials.email }));
      navigate('/dashboard');
    } else {
      setError('Please enter valid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-md mx-auto">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email or Username"
              type="text"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button type="submit" variant="primary" className="w-full">
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}