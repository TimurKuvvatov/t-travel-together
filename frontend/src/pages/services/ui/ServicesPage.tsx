import { useState, type FormEvent } from 'react';

import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Layout from '@/shared/ui/Layout/Layout';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import Select from '@/shared/ui/Select/Select';

import styles from './ServicesPage.module.scss';

type ButtonKey = 'tickets' | 'hotels' | 'rests' | 'transport';

const buttons: { key: ButtonKey; label: string }[] = [
	{ key: 'tickets', label: 'Билеты' },
	{ key: 'hotels', label: 'Отели' },
	{ key: 'rests', label: 'Рестораны' },
	{ key: 'transport', label: 'Транспорт' }
];

type SearchFormState = {
	from: string;
	to: string;
	departureDate: string;
	passengers: string;
};

const initialSearchFormState: SearchFormState = {
	from: 'Москва',
	to: 'Санкт-Петербург',
	departureDate: '',
	passengers: '1 пассажир'
};
type Flight = {
	airline: string;
	price: number;
	currency: string;
	isDirect: boolean;
	duration: string;
	departure: {
		time: string;
		airport: string;
	};
	arrival: {
		time: string;
		airport: string;
	};
	class: string;
	detailsLink: string;
};

type FlightCardProps = {
	flight: Flight;
};
const FlightCard = ({ flight }: FlightCardProps) => (
	<div
		style={{
			border: '1px solid #e0e0e0',
			borderRadius: '8px',
			padding: '16px',
			marginTop: 20,
			backgroundColor: '#ffffff',
			boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
			maxWidth: '400px'
		}}>
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: '12px'
			}}>
			<span
				style={{
					fontSize: '18px',
					fontWeight: 'bold',
					color: '#333'
				}}>
				{flight.airline}
			</span>
			<span
				style={{
					fontSize: '20px',
					fontWeight: 'bold',
					color: '#000'
				}}>
				от {flight.price} {flight.currency}
			</span>
		</div>

		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				marginBottom: '16px',
				color: '#666',
				fontSize: '14px'
			}}>
			{flight.isDirect && (
				<span
					style={{
						backgroundColor: '#e8f5e8',
						color: '#2e7d32',
						padding: '4px 8px',
						borderRadius: '4px',
						marginRight: '8px',
						fontSize: '12px'
					}}>
					Прямой рейс
				</span>
			)}
			<span>• {flight.duration}</span>
		</div>

		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				marginBottom: '16px'
			}}>
			<div style={{ textAlign: 'center' }}>
				<div
					style={{
						fontSize: '12px',
						color: '#666',
						marginBottom: '4px'
					}}>
					ОТПРАВЛЕНИЕ
				</div>
				<div
					style={{
						fontSize: '16px',
						fontWeight: 'bold',
						color: '#333'
					}}>
					{flight.departure.time}
				</div>
				<div
					style={{
						fontSize: '14px',
						color: '#666'
					}}>
					{flight.departure.airport}
				</div>
			</div>

			<div style={{ textAlign: 'center' }}>
				<div
					style={{
						fontSize: '12px',
						color: '#666',
						marginBottom: '4px'
					}}>
					ПРИБЫТИЕ
				</div>
				<div
					style={{
						fontSize: '16px',
						fontWeight: 'bold',
						color: '#333'
					}}>
					{flight.arrival.time}
				</div>
				<div
					style={{
						fontSize: '14px',
						color: '#666'
					}}>
					{flight.arrival.airport}
				</div>
			</div>
		</div>

		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingTop: '12px',
				borderTop: '1px solid #e0e0e0'
			}}>
			<div>
				<span
					style={{
						fontSize: '12px',
						color: '#666',
						marginRight: '8px'
					}}>
					КЛАСС
				</span>
				<span
					style={{
						fontSize: '14px',
						color: '#333',
						fontWeight: '500'
					}}>
					{flight.class}
				</span>
			</div>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '16px'
				}}>
				<a
					href={flight.detailsLink}
					style={{
						fontSize: '14px',
						color: '#1976d2',
						textDecoration: 'none'
					}}>
					Подробнее
				</a>
				<Button
					style={{
						fontWeight: '500'
					}}>
					Выбрать
				</Button>
			</div>
		</div>
	</div>
);

const ServicesPage = () => {
	const [active, setActive] = useState<ButtonKey>('tickets');
	const [formState, setFormState] = useState<SearchFormState>(
		initialSearchFormState
	);

	const passengerOptions = [
		{ value: '1', label: '1 пассажир' },
		{ value: '2', label: '2 пассажира' },
		{ value: '3', label: '3 пассажира' },
		{ value: '4', label: '4 пассажира' },
		{ value: '5', label: '5 пассажиров' }
	];

	const flightData = [
		{
			airline: 'Аэрофлот',
			price: 8500,
			currency: '₽',
			isDirect: true,
			duration: '1ч 35м',
			departure: {
				time: '10:30',
				airport: 'SVO'
			},
			arrival: {
				time: '12:05',
				airport: 'LED'
			},
			class: 'Эконом',
			detailsLink: '#'
		},
		{
			airline: 'S7 Airlines',
			price: 7200,
			currency: '₽',
			isDirect: true,
			duration: '1ч 55м',
			departure: {
				time: '12:00',
				airport: 'SVO'
			},
			arrival: {
				time: '13:55',
				airport: 'LED'
			},
			class: 'Эконом',
			detailsLink: '#'
		}
	];

	const handleInputChange = (field: string, value: string) => {
		setFormState(prev => ({
			...prev,
			[field]: value
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log('Отправка формы:', formState);

		setFormState(initialSearchFormState);
	};

	return (
		<Layout>
			<SectionTitle>Развлечения и услуги</SectionTitle>

			<nav
				className={styles.btnGroup}
				aria-label='Финансовые разделы'>
				{buttons.map(({ key, label }) => (
					<Button
						key={key}
						onClick={() => setActive(key)}
						type='button'
						color={key === active ? 'default' : 'gray'}
						aria-pressed={key === active}>
						{label}
					</Button>
				))}
			</nav>

			<section>
				<form
					onSubmit={handleSubmit}
					className={styles.form}>
					<div className='form-grid'>
						<Input
							label='Откуда'
							value={formState.from}
							onChange={e => handleInputChange('from', e.target.value)}
						/>

						<Input
							label='Куда'
							value={formState.to}
							onChange={e => handleInputChange('to', e.target.value)}
						/>

						<Input
							label='Дата отправления'
							type='date'
							value={formState.departureDate}
							onChange={e => handleInputChange('departureDate', e.target.value)}
						/>

						<Select
							label='Пассажиры'
							options={passengerOptions}
							value={formState.passengers}
							onChange={e => handleInputChange('passengers', e.target.value)}
						/>
					</div>

					<div style={{ display: 'flex', justifyContent: 'end' }}>
						<Button>Найти</Button>
					</div>

					<section>
						{flightData.map(flight => (
							<FlightCard
								key={`${flight.airline} ${flight.price}`}
								flight={flight}
							/>
						))}
					</section>
				</form>
			</section>
		</Layout>
	);
};

export default ServicesPage;
