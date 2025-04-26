import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.checkSession();
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('access_token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    const userData = await authService.login(credentials);
    setUser(userData);
    navigate('/admin');
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    navigate('/admin/login');
  };

  return { user, loading, login, logout };
};