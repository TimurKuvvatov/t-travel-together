import DebtsPage from '@/pages/debts/ui/DebtsPage';
import FinalPage from '@/pages/final/ui/FinalPage';
import FinancePage from '@/pages/finance/ui/FinancePage';
import ExpensesPage from '@/pages/expenses/ui/ExpensesPage';
import ExpenseNewPage from '@/pages/expenses-new/ui/ExpenseNewPage';
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
	{ path: '/final', element: <FinalPage /> },
	{ path: '/services', element: <ServicesPage /> }
];
