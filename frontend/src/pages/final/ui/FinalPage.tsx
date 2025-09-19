import { useState } from 'react';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import Button from '@/shared/ui/Button/Button';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';

import styles from './FinalPage.module.scss';

type Debt = {
	id: number;
	name: string;
	amount: number;
	currency: string;
	date: string;
	type: 'owedToYou' | 'youOwe';
	reminder: boolean;
};

type ChartItem = {
	name: string;
	value: number;
	color: string;
};

type ProgressItem = {
	name: string;
	value: number;
	color: string;
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
						color: 'white'
					}}>
					{isOwedToYou ? 'Напомнить' : 'Вернуть'}
				</Button>
			</div>
		</div>
	);
};

type FirstTabProps = {
	chartData: ChartItem[];
	totalBudget: number;
};

const FirstTab = ({ chartData, totalBudget }: FirstTabProps) => (
	<>
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
								formatter={(value: number | string) => [
									`${Number(value).toLocaleString('ru-RU')} ₽`,
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

		<h2 className={styles.bottomText}>
			Вы уложились в запланированный бюджет!
		</h2>
	</>
);

type SecondTabProps = {
	debtsData: Debt[];
};

const SecondTab = ({ debtsData }: SecondTabProps) => (
	<>
		<h2
			id='budget-heading'
			className={styles.budgetHeader}>
			Не закрытые долги...
		</h2>
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
			{debtsData.map(debt => (
				<DebtItem
					key={debt.id}
					debt={debt}
				/>
			))}
		</div>
	</>
);

type ThirdTabProps = {
	progressData: ProgressItem[];
};

const ThirdTab = ({ progressData }: ThirdTabProps) => (
	<>
		<h2
			id='categories-heading'
			className={styles.budgetHeader}>
			Интересный факт!
		</h2>

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

		<h2 className={styles.bottomText}>Больше всего вы потратили на еду!</h2>
	</>
);

const FinalPage = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const chartData: ChartItem[] = [
		{ name: 'Остаток', value: 15000, color: '#FF962D' },
		{ name: 'Расходы', value: 35000, color: '#FFDD2D' }
	];

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

	const progressData: ProgressItem[] = [
		{ name: 'Еда', value: 60, color: '#FFDD2D' },
		{ name: 'Транспорт', value: 25, color: '#FF962D' },
		{ name: 'Развлечения', value: 15, color: '#FF6B2D' }
	];

	const totalBudget = 50000;

	return (
		<Layout>
			<SectionTitle className={styles.title}>Поездка завершена!</SectionTitle>

			{activeIndex === 0 && (
				<FirstTab
					chartData={chartData}
					totalBudget={totalBudget}
				/>
			)}

			{activeIndex === 1 && <SecondTab debtsData={debtsData} />}

			{activeIndex === 2 && <ThirdTab progressData={progressData} />}

			<div className={styles.legendDots}>
				{[0, 1, 2].map(item => (
					<button
						key={item}
						className={`${styles.legendDot} ${
							activeIndex === item
								? styles.legendDotPrimary
								: styles.legendDotSecondary
						}`}
						onClick={() => setActiveIndex(item)}
						aria-label={`Select item ${item + 1}`}
						aria-pressed={activeIndex === item}
						type='button'
					/>
				))}
			</div>
		</Layout>
	);
};

export default FinalPage;
