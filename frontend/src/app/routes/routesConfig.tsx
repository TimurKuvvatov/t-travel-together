import ChatPage from '@/pages/chat/ChatPage';
import DebtsPage from '@/pages/debts/ui/DebtsPage';
import ExpensesPage from '@/pages/expenses/ui/ExpensesPage';
import ExpenseNewPage from '@/pages/expenses-new/ui/ExpenseNewPage';
import InvitePage from '@/pages/invite/ui/InvitePage';
import MainPage from '@/pages/main/ui/MainPage';
import StatisticsPage from '@/pages/statistics/ui/StatisticsPage';

export const routes = [
	{ path: '/', element: <MainPage /> },
	{ path: '/statistics', element: <StatisticsPage /> },
	{ path: '/expenses', element: <ExpensesPage /> },
	{ path: '/expenses/new', element: <ExpenseNewPage /> },
	{ path: '/invite', element: <InvitePage /> },
	{ path: '/debts', element: <DebtsPage /> },
	{ path: '/chat', element: <ChatPage /> }
];
