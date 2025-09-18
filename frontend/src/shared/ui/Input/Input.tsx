import type { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	id?: string;
};

const Input = ({ label, id, ...rest }: InputProps) => {
	const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

	return (
		<div className={styles.inputWrapper}>
			<input
				id={inputId}
				className={`${styles.input} ${label ? styles.withLabel : styles.noLabel}`}
				placeholder={label ? ' ' : undefined}
				{...rest}
			/>
			{label && (
				<label
					htmlFor={inputId}
					className={styles.label}>
					{label}
				</label>
			)}
		</div>
	);
};

export default Input;
