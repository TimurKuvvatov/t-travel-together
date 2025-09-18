import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
	color?: 'orange' | 'black';
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => (
	<button
		className={styles.button}
		{...rest}>
		{children}
	</button>
);

export default Button;
