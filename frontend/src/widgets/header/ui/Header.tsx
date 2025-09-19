import { Link } from 'react-router-dom';

import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';

import arrowLeftSvg from '../../../assets/arrow-left.svg';

import styles from './Header.module.scss';

const Header = () => (
	<header className={styles.header}>
		<div className={styles.left}>
			<button>
				<Link to='/'>
					<img
						src={arrowLeftSvg}
						alt='back'
					/>
				</Link>
			</button>
		</div>
		<SectionTitle>Поездка Анапа</SectionTitle>
		<button className={styles.expense}>
			<Link to='/expenses'>
				$
			</Link>
		</button>
	</header>
);

export default Header;
