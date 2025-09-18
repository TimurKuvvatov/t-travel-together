import { useState } from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import Button from '@/shared/ui/Button/Button';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';

import styles from './StatisticsPage.module.scss';

type ButtonKey = 'stat' | 'expenses' | 'debts';

const buttons: { key: ButtonKey; label: string }[] = [
	{ key: 'stat', label: 'Статистика' },
	{ key: 'expenses', label: 'Расходы' },
	{ key: 'debts', label: 'Долги' }
];

const StatisticsPage = () => {
	const [active, setActive] = useState<ButtonKey>('stat');

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

				<nav
					className={styles.btnGroup}
					aria-label='Финансовые разделы'>
					{buttons.map(({ key, label }) => (
						<Button
							key={key}
							onClick={() => setActive(key)}
							type='button'
							color={key === active ? 'default' : 'gray'}
							aria-pressed={key === active}>
							{label}
						</Button>
					))}
				</nav>

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
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
								position: 'relative'
							}}>
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
												key={`cell-${index}`}
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

							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								style={{
									position: 'absolute',
									right: 'calc(50% - 120px)',
									marginRight: '-40px',
									cursor: 'pointer'
								}}>
								<path
									d='M9 18L15 12L9 6'
									stroke='#FFDD2D'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>

						<div className={styles.legendDots}>
							{chartData.map((item, index) => (
								<div
									key={index}
									className={`${styles.legendDot} ${
										index === 0
											? styles.legendDotPrimary
											: styles.legendDotSecondary
									}`}
									aria-label={item.name}
								/>
							))}
						</div>
					</div>

					<div className={styles.statsList}>
						{chartData.map((item, index) => (
							<div
								key={index}
								className={styles.statItem}>
								<div className={styles.statLabel}>
									<div
										className={`${styles.colorIndicator} ${
											index === 0
												? styles.colorIndicatorRemaining
												: styles.colorIndicatorActual
										}`}
										aria-hidden='true'
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

				<section
					aria-labelledby='categories-heading'
					style={{ marginTop: '40px' }}>
					<h2
						id='categories-heading'
						className={styles.budgetHeader}>
						Траты на категории
					</h2>

					{/* Прогресс-бар */}
					<div
						style={{
							height: '20px',
							backgroundColor: '#D9D9D9',
							borderRadius: '10px',
							margin: '20px 0',
							overflow: 'hidden',
							position: 'relative',
							display: 'flex'
						}}>
						{progressData.map((item, index) => {
							const isFirst = index === 0;
							const isLast = index === progressData.length - 1;
							const left = progressData
								.slice(0, index)
								.reduce((sum, i) => sum + i.value, 0);

							return (
								<div
									key={item.name}
									style={{
										width: `${item.value}%`,
										height: '100%',
										backgroundColor: item.color,
										position: 'absolute',
										left: `${left}%`,
										borderRadius: isFirst
											? '10px 0 0 10px'
											: isLast
												? '0 10px 10px 0'
												: '0'
									}}
								/>
							);
						})}
					</div>

					{/* Подписи категорий */}
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
										}}></div>
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

export default StatisticsPage;
