import { useState } from 'react';

import Button from '@/shared/ui/Button/Button';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';

import styles from './StatisticsPage.module.scss';

type ButtonKey = 'stat' | 'expenses' | 'debts';

const buttons: { key: ButtonKey; label: string }[] = [
	{ key: 'stat', label: 'Статистика' },
	{ key: 'expenses', label: 'Расходы' },
	{ key: 'debts', label: 'Долги' }
];

const StatisticsPage = () => {
	const [active, setActive] = useState<ButtonKey>('stat');

	return (
		<Layout>
			<SectionTitle>Финансы</SectionTitle>
			<div className={styles.btnGroup}>
				{buttons.map(({ key, label }) => (
					<Button
						key={key}
						onClick={() => setActive(key)}
						type='button'
						color={key === active ? 'default' : 'gray'}>
						{label}
					</Button>
				))}
			</div>
		</Layout>
	);
};

export default StatisticsPage;
