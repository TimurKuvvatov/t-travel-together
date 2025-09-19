import { Outlet } from 'react-router';

import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Layout from '@/shared/ui/Layout/Layout';
import SecondaryText from '@/shared/ui/SecondaryText/SecondaryText';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Subtitle from '@/shared/ui/Subtitle/Subtitle';
import TextButton from '@/shared/ui/TextButton/TextButton';

import styles from './ExpenseNewPage.module.scss';

const ExpenseNewPage = () => (
	<>
		<Layout>
			<SectionTitle className={styles.title}>Создание расхода</SectionTitle>

			<form className={styles.form}>
				<div className={styles.check}>
					<Subtitle>Прикрепить чек</Subtitle>
					<SecondaryText>Нажмите, чтобы добавить фото</SecondaryText>
				</div>
				<Input
					label='Название'
					placeholder='Название'
					onChange={() => {}}
				/>

				<Input
					label='Категория'
					placeholder='Категория'
					onChange={() => {}}
				/>

				<Input
					label='Сумма'
					placeholder='Сумма'
					onChange={() => {}}
				/>

				<div className={styles.field}>
					<Subtitle className={styles.subtitle}>Как делить чек</Subtitle>
					<div className={styles.options}>
						<label>
							<input
								type='radio'
								name='split'
								value='none'
							/>
							Не делить чек
						</label>
						<label>
							<input
								type='radio'
								name='split'
								value='even'
							/>
							Поделить по ровну
						</label>
					</div>
				</div>
			</form>

			<div className={styles.members}>
				<TextButton onClick={() => console.log('Add member')}>
					Добавить участников
				</TextButton>
			</div>
			<Button style={{width: '100%'}}>Создать</Button>
		</Layout>
		<Outlet />
	</>
);

export default ExpenseNewPage;
