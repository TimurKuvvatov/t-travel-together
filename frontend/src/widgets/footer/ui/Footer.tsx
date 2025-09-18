import type { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Footer.module.scss';

type FooterItem = {
	icon: ReactNode;
	label: string;
	link: string;
};

const footerItems: FooterItem[] = [
	{ icon: <span>🏠</span>, label: 'Главная', link: '/' },
	{ icon: <span>💰</span>, label: 'Финансы', link: '/statistics' },
	{ icon: <span>💬</span>, label: 'Чат', link: '/chat' },
	{ icon: <span>ℹ️</span>, label: 'Инфо', link: '/info' }
];

const Footer = () => (
	<footer className={styles.footer}>
		{footerItems.map(item => (
			<NavLink
				key={item.label}
				to={item.link}
				className={({ isActive }) =>
					`${styles.footerItem} ${isActive ? styles.active : ''}`
				}>
				{item.icon}
				<span>{item.label}</span>
			</NavLink>
		))}
	</footer>
);

export default Footer;
