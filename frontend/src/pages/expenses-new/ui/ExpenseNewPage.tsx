import { Outlet } from 'react-router';

import Input from '@/shared/ui/Input/Input';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Subtitle from '@/shared/ui/Subtitle/Subtitle';
import TextButton from '@/shared/ui/TextButton/TextButton';

import styles from './ExpenseNewPage.module.scss';

const ExpenseNewPage = () => (
	<>
		<Layout>
			<SectionTitle>Создание расхода</SectionTitle>

			<div className={styles.form}>
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
					<Subtitle>Как делить чек</Subtitle>
					<div className={styles.options}>
						<label>
							<input
								type='radio'
								name='split'
								value='none'
							/>{' '}
							Не делить чек
						</label>
						<label>
							<input
								type='radio'
								name='split'
								value='even'
							/>{' '}
							Поделить по ровну
						</label>
					</div>
				</div>

				<div className={styles.field}>
					<TextButton>Добавить участников</TextButton>
				</div>

				<TextButton className={styles.submit}>Создать</TextButton>
			</div>
		</Layout>
		<Outlet />
	</>
);

export default ExpenseNewPage;
