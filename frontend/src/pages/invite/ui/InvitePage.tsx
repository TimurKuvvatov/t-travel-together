import { useState } from 'react';

import { QRCodeCanvas } from 'qrcode.react';

import type { User } from '@/entities/user/model/types';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Layout from '@/shared/ui/Layout/Layout';
import SecondaryText from '@/shared/ui/SecondaryText/SecondaryText';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Subtitle from '@/shared/ui/Subtitle/Subtitle';
import UserList from '@/widgets/user-list/ui/UserList';

import styles from './InvitePage.module.scss';

const mockUsers: User[] = [
	{
		id: '1',
		firstName: 'Анна',
		lastName: 'Смирнова',
		phone: '+7 (999) 123-45-67',
		createdAt: new Date()
	},
	{
		id: '2',
		firstName: 'Михаил',
		lastName: 'Петров',
		phone: '+7 (999) 876-54-32',
		createdAt: new Date()
	},
	{
		id: '3',
		firstName: 'Елена',
		lastName: 'Козлова',
		phone: '+7 (999) 555-12-34',
		createdAt: new Date()
	}
];

const InvitePage = () => {
	const [search, setSearch] = useState('');
	const [users, setUsers] = useState<User[]>(mockUsers);

	const filteredUsers = users.filter(
		user =>
			`${user.firstName} ${user.lastName}`
				.toLowerCase()
				.includes(search.toLowerCase()) ||
			user.phone.replace(/\D/g, '').includes(search.replace(/\D/g, ''))
	);

	const handleAddUser = () => {
		const newUser: User = {
			id: String(Date.now()),
			firstName: 'Новый',
			lastName: 'Контакт',
			phone: search,
			createdAt: new Date()
		};
		setUsers(prev => [...prev, newUser]);
		setSearch('');
	};

	return (
		<Layout className={styles.section}>
			<SectionTitle className={styles.title}>Пригласить в поездку</SectionTitle>

			<Subtitle>Контакты в T-Bank</Subtitle>
			<SecondaryText className={styles.secondary}>
				Добавьте друзей, которые уже пользуются T-Bank
			</SecondaryText>
			<Input
				className={styles.search}
				placeholder='Поиск по контактам'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<div className={styles.users}>
				{filteredUsers.length > 0 ? (
					<UserList users={filteredUsers} />
				) : search ? (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<p>Контакт не найден</p>
						<Button onClick={handleAddUser}>Добавить контакт</Button>
					</div>
				) : null}
			</div>

			<div className={styles.linkWrapper}>
				<Subtitle>Пригласить по ссылке</Subtitle>
				<SecondaryText className={styles.secondary}>
					Отправьте ссылку друзьям, чтобы они присоединились к поездке
				</SecondaryText>
				<Input
					readOnly
					value='https://t-bank.ru/trip/invite/abc123xyz789'
				/>
				<Button>Скопировать ссылку</Button>
			</div>

			<div className={styles.qrWrapper}>
				<Subtitle>QR-код для приглашения</Subtitle>
				<div className={styles.qr}>
					<QRCodeCanvas
						value='https://t-travel-together.netlify.app'
						size={150}
						bgColor='#ffffff'
						fgColor='#000000'
						level='H'
					/>
				</div>
				<SecondaryText>
					Покажите QR-код друзьям для быстрого присоединения
				</SecondaryText>
			</div>
		</Layout>
	);
};

export default InvitePage;
