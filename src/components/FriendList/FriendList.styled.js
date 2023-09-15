import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin-top: 70px;
  list-style: none;
`;
export const IsOnline = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: black;
  &.online {
    background-color: green;
  }
  &.offline {
    background-color: red;
  }
`;
