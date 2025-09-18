import type { ReactNode } from 'react';

import styles from './Subtitle.module.scss';

type SubtitleProps = {
	children: ReactNode;
	className?: string;
};

const Subtitle = ({ children, className }: SubtitleProps) => (
	<h2 className={`${styles.subtitle} ${className || ''}`}>{children}</h2>
);

export default Subtitle;
