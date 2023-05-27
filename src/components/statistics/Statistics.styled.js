import styled from 'styled-components';

export const Container = styled.section`
  padding: 50px;
  margin: 70px auto 0;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  h2 {
    color: #747272;
  }
`;

export const List = styled.ul`
  margin-top: 40px;
  display: flex;
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 80px;
  align-items: center;
  border-radius: 3px;
`;

export const Label = styled.span`
  color: white;
`;

export const Percentage = styled.span`
  color: white;
  margin-top: 15px;
  font-size: 30px;
`;
