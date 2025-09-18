import type { ReactNode } from 'react';

import styles from './Layout.module.scss';

type LayoutProps = {
	children: ReactNode;
	className?: string;
};

const Layout = ({ children, className }: LayoutProps) => (
	<div className={`${styles.layout} ${className || ''}`}>{children}</div>
);

export default Layout;
