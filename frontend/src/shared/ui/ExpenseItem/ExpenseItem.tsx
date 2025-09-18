import type { ButtonHTMLAttributes } from 'react';

import styles from './ExpenseItem.module.scss';

type ExpenseItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	author: string;
	title: string;
	amount: number;
};

const ExpenseItem = ({
	author,
	title,
	amount,
	className,
	...rest
}: ExpenseItemProps) => (
	<button
		className={`${styles.expenseItem} ${className || ''}`}
		{...rest}>
		<label className={styles.label}>{author}</label>
		<div className={styles.content}>
			<span className={styles.title}>{title}</span>
			<span className={styles.amount}>{amount.toLocaleString('ru-RU')} ₽</span>
		</div>
	</button>
);

export default ExpenseItem;
