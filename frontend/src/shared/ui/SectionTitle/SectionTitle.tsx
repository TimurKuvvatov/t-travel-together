import type { ReactNode } from 'react';

import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h1 className={styles.title}>{children}</h1>
);

export default SectionTitle;
