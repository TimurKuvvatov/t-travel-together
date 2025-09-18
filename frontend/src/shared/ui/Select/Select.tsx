import type { SelectHTMLAttributes } from 'react';

import styles from './Select.module.scss';

type SelectOption = {
	value: string;
	label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
	label?: string;
	id?: string;
	className?: string;
	options: SelectOption[];
};

const Select = ({ label, id, className, options, ...rest }: SelectProps) => {
	const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

	return (
		<div className={styles.selectWrapper}>
			<select
				id={selectId}
				className={`${styles.select} ${label ? styles.withLabel : styles.noLabel} ${className || ''}`}
				{...rest}>
				{options.map(option => (
					<option
						key={option.value}
						value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{label && (
				<label
					htmlFor={selectId}
					className={styles.label}>
					{label}
				</label>
			)}
			{/* Стрелка для селекта */}
			<div className={styles.arrow}>
				<svg
					width='12'
					height='8'
					viewBox='0 0 12 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M1 1.5L6 6.5L11 1.5'
						stroke='#6C6F71'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Select;
