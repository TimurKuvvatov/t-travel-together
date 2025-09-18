import InvitePage from '@/pages/invite/ui/InvitePage';
import MainPage from '@/pages/main/ui/MainPage';

export const routes = [
	{ path: '/', element: <MainPage /> },
	{ path: '/invite', element: <InvitePage /> }
];
