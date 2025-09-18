import ChatPage from '@/pages/chat/ChatPage';
import DebtsPage from '@/pages/debts/ui/DebtsPage';
import ExpensesPage from '@/pages/expenses/ui/ExpensesPage';
import ExpenseNewPage from '@/pages/expenses-new/ui/ExpenseNewPage';
import FinalPage from '@/pages/final/ui/FinalPage';
import FinancePage from '@/pages/finance/ui/FinancePage';
import InvitePage from '@/pages/invite/ui/InvitePage';
import MainPage from '@/pages/main/ui/MainPage';
import ServicesPage from '@/pages/services/ui/ServicesPage';

export const routes = [
	{ path: '/', element: <MainPage /> },
	{ path: '/finance', element: <FinancePage /> },
	{ path: '/expenses', element: <ExpensesPage /> },
	{ path: '/expenses/new', element: <ExpenseNewPage /> },
	{ path: '/invite', element: <InvitePage /> },
	{ path: '/debts', element: <DebtsPage /> },
	{ path: '/chat', element: <ChatPage /> },
	{ path: '/final', element: <FinalPage /> },
	{ path: '/services', element: <ServicesPage /> }
];
