import { useState } from 'react';

import ExpenseMessage from '@/widgets/expense-message/ui/ExpenseMessage';
import Header from '@/widgets/header/ui/Header';

import arrowUpSvg from '../../assets/arrow-up.svg';

import styles from './ChatPage.module.scss';

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	phone: string;
	createdAt: Date;
};

type ChatMessage = {
	id: number;
	author: User;
	text: string;
	createdAt: Date;
};

const formatTime = (date: Date) =>
	date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const ChatPage = () => {
	const me: User = {
		id: '1',
		firstName: 'Иван',
		lastName: 'Иванов',
		phone: '79001234567',
		createdAt: new Date()
	};

	const other: User = {
		id: '2',
		firstName: 'Анна',
		lastName: 'Петрова',
		phone: '79007654321',
		createdAt: new Date()
	};

	const [messages, setMessages] = useState<ChatMessage[]>([
		{ id: 1, author: other, text: 'Привет! 👋', createdAt: new Date() },
		{ id: 2, author: me, text: 'Привет, как дела?', createdAt: new Date() }
	]);

	const [input, setInput] = useState('');

	const sendMessage = () => {
		if (!input.trim()) return;

		const newMessage: ChatMessage = {
			id: Date.now(),
			author: me,
			text: input.trim(),
			createdAt: new Date()
		};

		setMessages(prev => [...prev, newMessage]);
		setInput('');
	};

	return (
		<div className={styles.chat}>
			<Header />
			<div className={styles.history}>
				{messages.map(m => (
					<div
						key={m.id}
						className={`${styles.message} ${
							m.author.id === me.id ? styles.me : styles.other
						}`}>
						<div className={styles.header}>
							<span className={styles.name}>
								{m.author.firstName} {m.author.lastName}
							</span>
							<div className={styles.text}>{m.text}</div>
						</div>
						<span className={styles.time}>{formatTime(m.createdAt)}</span>
					</div>
				))}
				<ExpenseMessage />
			</div>

			<div className={styles.inputArea}>
				<input
					value={input}
					onChange={e => setInput(e.target.value)}
					placeholder='Сообщение'
				/>
				<button onClick={sendMessage}>
					<img
						src={arrowUpSvg}
						alt='Send message'
					/>
				</button>
			</div>
		</div>
	);
};

export default ChatPage;
