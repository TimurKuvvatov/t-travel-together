import { NavLink } from 'react-router-dom';

import ExpenseItem from '@/shared/ui/ExpenseItem/ExpenseItem';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Subtitle from '@/shared/ui/Subtitle/Subtitle';
import TextButton from '@/shared/ui/TextButton/TextButton';
import type { FinanceTab } from '@/widgets/finance-nav/ui/FinanceNav';
import FinanceNav from '@/widgets/finance-nav/ui/FinanceNav';

import styles from './ExpensesPage.module.scss';

type Expense = {
	id: string;
	author: string;
	title: string;
	amount: number;
};

const tabs: FinanceTab[] = [
	{ key: 'finance', label: 'Статистика' },
	{ key: 'expenses', label: 'Расходы' },
	{ key: 'debts', label: 'Долги' }
];

const mockExpenses: Expense[] = [
	{ id: '1', author: 'Анна Смирнова', title: 'Обед в кафе', amount: 1200 },
	{ id: '2', author: 'Михаил Петров', title: 'Такси', amount: 800 },
	{ id: '3', author: 'Елена Козлова', title: 'Сувениры', amount: 350 }
];

const ExpensesPage = () => (
	<Layout>
		<SectionTitle>Финансы</SectionTitle>

		<FinanceNav tabs={tabs} />
		<div className={styles.textBtn}>
			<NavLink to='/expenses/new'>
				<TextButton>Добавить расход</TextButton>
			</NavLink>
		</div>
		<Subtitle className={styles.subtitle}>История</Subtitle>
		<div className={styles.expensesList}>
			{mockExpenses.map(exp => (
				<ExpenseItem
					key={exp.id}
					author={exp.author}
					title={exp.title}
					amount={exp.amount}
				/>
			))}
		</div>
	</Layout>
);

export default ExpensesPage;
