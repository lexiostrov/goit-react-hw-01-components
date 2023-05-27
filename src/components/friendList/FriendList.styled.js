import styled from 'styled-components';

export const Container = styled.div`
  margin: 70px auto 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  padding-left: 20px;
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Status = styled.span`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isHide }) => (isHide ? 'green' : 'red')};
`;

export const Name = styled.p`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
`;
