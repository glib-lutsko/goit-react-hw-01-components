import { StatisticsContainer, StatisticsList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <StatisticsList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};
