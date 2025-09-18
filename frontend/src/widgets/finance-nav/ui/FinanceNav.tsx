import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/shared/ui/Button/Button';

export type FinanceTab = {
	key: 'statistics' | 'expenses' | 'debts';
	label: string;
};

type FinanceNavProps = {
	tabs: FinanceTab[];
};

const FinanceNav = ({ tabs }: FinanceNavProps) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<nav
			aria-label='Финансовые разделы'
			style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
			{tabs.map(tab => {
				const isActive = location.pathname.includes(tab.key);

				return (
					<Button
						key={tab.key}
						onClick={() => navigate(`/${tab.key}`)}
						color={isActive ? 'default' : 'gray'}
						aria-pressed={isActive}>
						{tab.label}
					</Button>
				);
			})}
		</nav>
	);
};

export default FinanceNav;
