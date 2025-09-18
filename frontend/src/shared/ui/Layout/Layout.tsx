import type { ReactNode } from 'react';

import Footer from '@/widgets/footer/ui/Footer';

import styles from './Layout.module.scss';

type LayoutProps = {
	children: ReactNode;
	className?: string;
};

const Layout = ({ children, className }: LayoutProps) => (
	<div className={`${styles.layout} ${className || ''}`}>
		<div className={styles.content}>{children}</div>
		<Footer />
	</div>
);

export default Layout;
