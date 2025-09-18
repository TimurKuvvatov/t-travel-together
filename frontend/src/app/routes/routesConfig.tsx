import MainPage from '@/pages/main/ui/MainPage';
import StatisticsPage from '@/pages/statistics/ui/StatisticsPage';

export const routes = [
	{ path: '/', element: <MainPage /> },
	{ path: '/statistics', element: <StatisticsPage /> }
];
