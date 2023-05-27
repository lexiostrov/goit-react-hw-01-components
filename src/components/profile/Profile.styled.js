import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Photo = styled.img`
  border-radius: 50%;
  background-color: rgba(101, 102, 102, 0.9);
  width: 200px;
  height: 200px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameUser = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #212121;
`;

export const EmailUser = styled.p`
  color: #8c8a8a;
  margin-top: 10px;
`;

export const LocationUser = styled.p`
  color: #8c8a8a;
  margin-top: 10px;
`;

export const List = styled.ul`
  margin-top: 50px;
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 80px;
  align-items: center;
`;

export const Label = styled.span`
  color: #8c8a8a;
`;

export const Quantity = styled.span`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #212121;
`;
