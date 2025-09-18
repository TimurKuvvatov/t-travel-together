import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
	color?: 'gray' | 'default';
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ color = 'default', children, ...rest }: ButtonProps) => {
	const buttonClasses = [styles.button, styles[color]]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			className={buttonClasses}
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
