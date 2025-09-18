import type { User } from '@/entities/user/model/types';
import UserCard from '@/entities/user/ui/UserCard';

import styles from './UserList.module.scss';
type UserListProps = {
	users: User[];
};

const UserList = ({ users }: UserListProps) => (
	<div className={styles.userList}>
		{users.map(user => (
			<UserCard
				key={user.id}
				user={user}
			/>
		))}
	</div>
);

export default UserList;
