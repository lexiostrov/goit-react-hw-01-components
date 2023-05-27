import styled from 'styled-components';

export const Container = styled.table`
  margin: 70px auto 0;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListTitle = styled.tr`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
`;

export const Title = styled.th`
  padding: 20px;
  width: 100%;
  background-color: #3bc8ff;
  color: white;
  border: 1px solid #e3e2e2;
`;

export const ListBody = styled.tr`
  display: flex;
  justify-content: space-around;
  height: 50px;
  width: 800px;
`;

export const ListBodyItem = styled.td`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  color: #8c8a8a;
  border: 1px solid #e3e2e2;
`;
