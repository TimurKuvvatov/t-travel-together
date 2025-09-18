import { Link } from 'react-router-dom';

import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';

import arrowLeftSvg from '../../../assets/arrow-left.svg';

import styles from './Header.module.scss';

const Header = () => (
	<header className={styles.header}>
		<button>
			<Link to='/'>
				<img
					src={arrowLeftSvg}
					alt='back'
				/>
			</Link>
		</button>
		<SectionTitle>Поездка Анапа</SectionTitle>
	</header>
);

export default Header;
