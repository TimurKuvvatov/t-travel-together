import { useState } from 'react';

import Button from '@/shared/ui/Button/Button';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import type { FinanceTab } from '@/widgets/finance-nav/ui/FinanceNav';
import FinanceNav from '@/widgets/finance-nav/ui/FinanceNav';

type ButtonKey = 'my' | 'all';

const buttons: { key: ButtonKey; label: string }[] = [
	{ key: 'my', label: 'Мои долги' },
	{ key: 'all', label: 'Все долги' }
];

const tabs: FinanceTab[] = [
	{ key: 'finance', label: 'Статистика' },
	{ key: 'expenses', label: 'Расходы' },
	{ key: 'debts', label: 'Долги' }
];

type Debt = {
	id: number;
	name: string;
	amount: number;
	currency: string;
	date: string;
	type: 'owedToYou' | 'youOwe';
	reminder: boolean;
};

type AllDebt = {
	id: number;
	debtor: string;
	creditor: string;
	amount: number;
	currency: string;
	date: string;
	status: 'active' | 'closed';
};

type DebtItemProps = {
	debt: Debt;
};

const DebtItem = ({ debt }: DebtItemProps) => {
	const isOwedToYou = debt.type === 'owedToYou';

	return (
		<div
			style={{
				backgroundColor: '#fff',
				borderRadius: '16px',
				padding: '20px',
				boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
				border: '1px solid #e8e8e8'
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: '12px'
				}}>
				<span
					style={{
						fontSize: '16px',
						fontWeight: '500',
						color: '#1e1e1e'
					}}>
					{isOwedToYou ? `${debt.name} вам должен` : `Вы должны ${debt.name}`}
				</span>
				<span
					style={{
						fontSize: '18px',
						fontWeight: '700',
						color: '#1e1e1e'
					}}>
					{debt.amount} {debt.currency}
				</span>
			</div>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
				<span
					style={{
						fontSize: '14px',
						color: '#8e8e93'
					}}>
					{debt.date}
				</span>

				<Button
					style={{
						backgroundColor: isOwedToYou ? '#27AE60' : '#ff3b30',
						color: 'white',
						width: 'auto',
					}}>
					{isOwedToYou ? 'Напомнить' : 'Вернуть'}
				</Button>
			</div>
		</div>
	);
};

type DebtItemInAllDebtsProps = {
	debt: AllDebt;
};

const DebtItemInAllDebts = ({ debt }: DebtItemInAllDebtsProps) => (
	<div
		style={{
			backgroundColor: '#fff',
			borderRadius: '16px',
			padding: '20px',
			boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
			border: '1px solid #e8e8e8'
		}}>
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: '12px'
			}}>
			<span
				style={{
					fontSize: '16px',
					fontWeight: '500'
				}}>
				{debt.debtor} должен {debt.creditor}
			</span>
			<span
				style={{
					fontSize: '18px',
					fontWeight: '700'
				}}>
				{debt.amount} {debt.currency}
			</span>
		</div>

		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
			<span
				style={{
					fontSize: '14px',
					color: '#8e8e93'
				}}>
				{debt.date}
			</span>

			<Button>Детали</Button>
		</div>
	</div>
);

const DebtsPage = () => {
	const [active, setActive] = useState<ButtonKey>('my');

	const debtsData: Debt[] = [
		{
			id: 1,
			name: 'Слава',
			amount: 5000,
			currency: '₽',
			date: '25.09.2025',
			type: 'owedToYou',
			reminder: true
		},
		{
			id: 2,
			name: 'Гриша',
			amount: 1000,
			currency: '₽',
			date: '20.09.2025',
			type: 'owedToYou',
			reminder: true
		},
		{
			id: 3,
			name: 'Никите',
			amount: 1500,
			currency: '₽',
			date: '19.09.2025',
			type: 'youOwe',
			reminder: false
		}
	];

	const allDebtsData: AllDebt[] = [
		{
			id: 1,
			debtor: 'Гриша',
			creditor: 'Славе',
			amount: 500,
			currency: '₽',
			date: '22.09.2025',
			status: 'active'
		},
		{
			id: 2,
			debtor: 'Никита',
			creditor: 'Тимур',
			amount: 500,
			currency: '₽',
			date: '19.09.2025',
			status: 'active'
		},
		{
			id: 3,
			debtor: 'Слава',
			creditor: 'Никите',
			amount: 5000,
			currency: '₽',
			date: '18.09.2025',
			status: 'active'
		}
	];

	return (
		<Layout>
			<SectionTitle>Финансы</SectionTitle>

			<FinanceNav tabs={tabs} />
			<div
				style={{
					backgroundColor: '#F0F1F3',
					display: 'inline-block',
					padding: '8px 10px',
					borderRadius: 10,
					width: '100%'
				}}>
				<nav
					className='btnGroup'
					aria-label='Финансовые разделы'
					style={{ display: 'flex', width: '100%' }}>
					{buttons.map(({ key, label }) => (
						<Button
							key={key}
							onClick={() => setActive(key)}
							type='button'
							color={key === active ? 'default' : 'gray'}
							aria-pressed={key === active}
							style={{ flex: 1, textAlign: 'center' }}>
							{label}
						</Button>
					))}
				</nav>
			</div>

			<section>
				<div
					style={{
						maxWidth: '400px',
						margin: '20px auto',
						padding: '20px',
						backgroundColor: '#f5f5f7',
						borderRadius: 10,
						display: 'flex',
						flexDirection: 'column',
						gap: 16
					}}>
					{active === 'my'
						? debtsData.map(debt => (
								<DebtItem
									key={debt.id}
									debt={debt}
								/>
							))
						: allDebtsData.map(debt => (
								<DebtItemInAllDebts
									key={debt.id}
									debt={debt}
								/>
							))}
				</div>
			</section>
		</Layout>
	);
};

export default DebtsPage;
