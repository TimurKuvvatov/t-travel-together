import type { ReactNode } from 'react';

import styles from './SecondaryText.module.scss';

type SecondaryTextProps = {
	children: ReactNode;
	className?: string;
};

const SecondaryText = ({ children, className }: SecondaryTextProps) => (
	<span className={`${styles.secondaryText} ${className || ''}`}>
		{children}
	</span>
);

export default SecondaryText;
