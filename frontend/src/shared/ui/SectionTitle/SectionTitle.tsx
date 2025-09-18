import type { ReactNode } from 'react';

import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
	children: ReactNode;
	className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => (
	<h1 className={`${styles.title} ${className || ''}`}>{children}</h1>
);

export default SectionTitle;
