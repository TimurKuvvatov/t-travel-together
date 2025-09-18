import type { ReactNode } from 'react';

import styles from './Subtitle.module.scss';

type SubtitleProps = {
	children: ReactNode;
};

const Subtitle = ({ children }: SubtitleProps) => (
	<h2 className={styles.subtitle}>{children}</h2>
);

export default Subtitle;
