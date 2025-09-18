import type { ButtonHTMLAttributes } from 'react';

import styles from './TextButton.module.scss';

type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const TextButton = ({ className = '', ...rest }: TextButtonProps) => (
	<button
		className={`${styles.textButton} ${className}`}
		{...rest}
	/>
);

export default TextButton;
