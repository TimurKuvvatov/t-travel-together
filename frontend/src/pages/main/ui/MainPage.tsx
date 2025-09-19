import { useState, type ChangeEvent } from 'react';

import { useNavigate } from 'react-router';

import type { User } from '@/entities/user/model/types';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Subtitle from '@/shared/ui/Subtitle/Subtitle';
import UserList from '@/widgets/user-list/ui/UserList';

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

	const users: User[] = [
		{
			id: '1',
			firstName: 'Тимур',
			lastName: 'Кувватов',
			phone: '+7 923 456-37-89',
			createdAt: new Date()
		},
		{
			id: '2',
			firstName: 'Гриша',
			lastName: 'Вербицкий',
			phone: '+7 923 435-67-11',
			createdAt: new Date()
		},
		{
			id: '3',
			firstName: 'Никита',
			lastName: 'Посканной',
			phone: '+7 983 435-67-11',
			createdAt: new Date()
		},
		{
			id: '4',
			firstName: 'Вячеслав',
			lastName: 'Зварич',
			phone: '+7 999 435-67-11',
			createdAt: new Date()
		}
	];
	const navigate = useNavigate();

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
				<div className={styles.members}>
					<Button onClick={() => navigate('invite')}>
						Добавить участников
					</Button>
					<div className={styles.userList}>
						<Subtitle>Участники</Subtitle>
						<UserList users={users} />
					</div>
				</div>
			</Layout>
		</section>
	);
};

export default MainPage;
