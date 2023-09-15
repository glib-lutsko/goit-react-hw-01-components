import { FriendsList, IsOnline } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(item => (
        <li key={item.id} className="item">
          <IsOnline className={item.isOnline ? 'online' : 'offline'}>
            {item.isOnline}
          </IsOnline>
          <img
            src={item.avatar}
            className="avatar"
            alt="User avatar"
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </FriendsList>
  );
};
