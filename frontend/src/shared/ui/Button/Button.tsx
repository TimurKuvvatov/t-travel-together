import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
	color?: 'gray' | 'default';
	children: ReactNode;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	color = 'default',
	children,
	className,
	...rest
}: ButtonProps) => {
	const buttonClasses = [styles.button, styles[color], className]
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
