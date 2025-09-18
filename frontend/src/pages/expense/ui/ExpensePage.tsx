import Button from '@/shared/ui/Button/Button';
import Layout from '@/shared/ui/Layout/Layout';
import SecondaryText from '@/shared/ui/SecondaryText/SecondaryText';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Subtitle from '@/shared/ui/Subtitle/Subtitle';
import TextButton from '@/shared/ui/TextButton/TextButton';

import checkSvg from '../../../assets/check.svg';
import errorSvg from '../../../assets/error.svg';

import styles from './ExpensePage.module.scss';

const mockUsers = [
	{ id: '1', author: 'Анна Смирнова', amount: 1200, status: 'pending' },
	{ id: '2', author: 'Михаил Петров', amount: 800, status: 'pending' },
	{ id: '3', author: 'Елена Козлова', amount: 350, status: 'paid' }
];

const ExpensePage = () => (
	<Layout>
		<section className={styles.section}>
			<SectionTitle className={styles.title}>Поход в ресторан</SectionTitle>
			<TextButton className={styles.textBtn}>Посмотреть чек</TextButton>
			<div className={styles.fields}>
				<div className={styles.field}>
					<SecondaryText>Категория</SecondaryText>
					<Subtitle>Питание</Subtitle>
				</div>
				<div className={styles.field}>
					<SecondaryText>Сумма</SecondaryText>
					<Subtitle>5000 ₽</Subtitle>
				</div>
				<div className={styles.field}>
					<Subtitle>Участники</Subtitle>
					<div className={styles.users}>
						{mockUsers.map(user => (
							<div
								key={user.id}
								className={styles.user}>
								<div className={styles.name}>{user.author}</div>
								<div className={styles.info}>
									<div className={styles.price}>{user.amount}₽</div>
									<div className={`${styles.status} ${styles[user.status]}`}>
										{user.status === 'pending' ? (
											<img
												src={errorSvg}
												alt='Ожидание'
											/>
										) : (
											<img
												src={checkSvg}
												alt='Успешно'
											/>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<Button style={{ background: '#27AE60', color: '#fff' }}>
					Напомнить
				</Button>
				<Button style={{ background: '#ff3b30', color: '#fff' }}>
					Оплатить долг
				</Button>
			</div>
		</section>
	</Layout>
);

export default ExpensePage;
