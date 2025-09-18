import type { User } from '../model/types';

import styles from './UserCard.module.scss';

type UserCardProps = {
	user: User;
};

const UserCard = ({ user }: UserCardProps) => (
	<div className={styles.userCard}>
		<div className={styles.name}>
			{user.lastName} {user.firstName}
		</div>
		<div className={styles.phone}>{user.phone}</div>
	</div>
);

export default UserCard;
