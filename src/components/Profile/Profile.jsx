import { Container, StatsItem, StatsList } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="300" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StatsList className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </StatsList>
    </Container>
  );
};
