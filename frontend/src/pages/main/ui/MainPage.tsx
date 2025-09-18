import { useState, type ChangeEvent } from 'react';

import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';

import styles from './MainPage.module.scss';

type TravelFormState = {
	from: string;
	to: string;
	startDate: string;
	endDate: string;
};

const MainPage = () => {
	const [form, setForm] = useState<TravelFormState>({
		from: '',
		to: '',
		startDate: '',
		endDate: ''
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({
			...prev,
			[name]: value
		}));
	};

	return (
		<section className={styles.section}>
			<Layout>
				<SectionTitle>Поездка</SectionTitle>
				<div className={styles.inputs}>
					<Input
						label='Откуда'
						name='from'
						value={form.from}
						onChange={handleChange}
						placeholder='Введите город отправления'
					/>
					<Input
						label='Куда'
						name='to'
						value={form.to}
						onChange={handleChange}
						placeholder='Введите город назначения'
					/>
					<Input
						label='Дата начала'
						name='startDate'
						type='date'
						value={form.startDate}
						onChange={handleChange}
					/>
					<Input
						label='Дата конца'
						name='endDate'
						type='date'
						value={form.endDate}
						onChange={handleChange}
					/>
				</div>
				<Input
					label='Карта'
					value={form.endDate}
					onChange={handleChange}
				/>
				<Button>Добавить участников</Button>
			</Layout>
		</section>
	);
};

export default MainPage;
