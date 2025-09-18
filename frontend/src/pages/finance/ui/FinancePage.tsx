import { useState } from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import type { FinanceTab } from '@/widgets/finance-nav/ui/FinanceNav';
import FinanceNav from '@/widgets/finance-nav/ui/FinanceNav';

import styles from './FinancePage.module.scss';

const tabs: FinanceTab[] = [
	{ key: 'statistics', label: 'Статистика' },
	{ key: 'expenses', label: 'Расходы' },
	{ key: 'debts', label: 'Долги' }
];

const FinancePage = () => {
	const chartData = [
		{ name: 'Остаток', value: 15000, color: '#FF962D' },
		{ name: 'Фактический бюджет', value: 35000, color: '#FFDD2D' }
	];

	const progressData = [
		{ name: 'Еда', value: 60, color: '#FFDD2D' },
		{ name: 'Транспорт', value: 25, color: '#FF962D' },
		{ name: 'Развлечения', value: 15, color: '#FF6B2D' }
	];

	const totalBudget = 50000;

	return (
		<Layout>
			<div className={styles.page}>
				<SectionTitle>Финансы</SectionTitle>

				<FinanceNav tabs={tabs} />

				<section aria-labelledby='budget-heading'>
					<h2
						id='budget-heading'
						className={styles.budgetHeader}>
						Запланированный бюджет
					</h2>
					<p className={styles.budgetAmount}>
						{totalBudget.toLocaleString('ru-RU')} ₽
					</p>

					<div className={styles.chartContainer}>
						<ResponsiveContainer
							width={200}
							height={200}>
							<PieChart>
								<Pie
									data={chartData}
									cx='50%'
									cy='50%'
									innerRadius={60}
									outerRadius={80}
									dataKey='value'>
									{chartData.map((entry, index) => (
										<Cell
											key={index}
											fill={entry.color}
										/>
									))}
								</Pie>
								<Tooltip
									formatter={(value: number) => [
										`${value.toLocaleString('ru-RU')} ₽`,
										'Сумма'
									]}
								/>
							</PieChart>
						</ResponsiveContainer>
					</div>

					{/* Статистика */}
					<div className={styles.statsList}>
						{chartData.map((item, index) => (
							<div
								key={index}
								className={styles.statItem}>
								<div className={styles.statLabel}>
									<div
										style={{
											backgroundColor: item.color,
											width: '20px',
											height: '20px',
											marginRight: '8px'
										}}
									/>
									<span>{item.name}</span>
								</div>
								<span className={styles.statValue}>
									{item.value.toLocaleString('ru-RU')} ₽
								</span>
							</div>
						))}
					</div>
				</section>

				{/* Категории */}
				<section
					style={{ marginTop: '40px' }}
					aria-labelledby='categories-heading'>
					<h2
						id='categories-heading'
						className={styles.budgetHeader}>
						Траты на категории
					</h2>
					<div
						style={{
							height: '20px',
							backgroundColor: '#D9D9D9',
							borderRadius: '10px',
							overflow: 'hidden',
							display: 'flex'
						}}>
						{progressData.map((item, index) => {
							const left = progressData
								.slice(0, index)
								.reduce((sum, i) => sum + i.value, 0);

							return (
								<div
									key={item.name}
									style={{
										width: `${item.value}%`,
										backgroundColor: item.color,
										position: 'absolute',
										left: `${left}%`
									}}
								/>
							);
						})}
					</div>
					<div className={styles.statsList}>
						{progressData.map(item => (
							<div
								key={item.name}
								className={styles.statItem}>
								<div className={styles.statLabel}>
									<div
										style={{
											backgroundColor: item.color,
											width: '20px',
											height: '20px',
											borderRadius: '5px',
											marginRight: '8px'
										}}
									/>
									<span>{item.name}</span>
								</div>
								<span className={styles.statValue}>{item.value}%</span>
							</div>
						))}
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default FinancePage;
