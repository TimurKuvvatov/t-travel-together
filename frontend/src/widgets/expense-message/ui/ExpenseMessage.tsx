import Button from '@/shared/ui/Button/Button';
import SecondaryText from '@/shared/ui/SecondaryText/SecondaryText';
import Subtitle from '@/shared/ui/Subtitle/Subtitle';

import styles from './ExpenseMessage.module.scss';

const ExpenseMessage = () => (
	<div className={styles.message}>
		<Subtitle>Добавлен расход!</Subtitle>
		<SecondaryText>Вы должны 500 рублей</SecondaryText>
		<Button>Открыть расход</Button>
	</div>
);

export default ExpenseMessage;
