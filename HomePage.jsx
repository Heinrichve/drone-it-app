import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  Circle, 
  FileText, 
  Shield, 
  Award, 
  TrendingUp,
  Calendar,
  Users,
  AlertTriangle
} from 'lucide-react';
import api from '../lib/api';

const HomePage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await api.get('/dashboard/overview');
      setDashboardData(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const toggleMonthCompletion = async (month) => {
    try {
      const currentMonth = dashboardData.monthlyChecklist.find(m => m.month === month);
      const response = await api.put(`/dashboard/checklist/${dashboardData.year}/${month}`, {
        isCompleted: !currentMonth.isCompleted
      });
      
      // Update local state
      setDashboardData(prev => ({
        ...prev,
        monthlyChecklist: prev.monthlyChecklist.map(m => 