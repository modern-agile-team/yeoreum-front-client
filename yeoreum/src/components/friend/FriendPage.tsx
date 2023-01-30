import styled from '@emotion/styled';
import React from 'react';

function FriendPage() {
  const 임시list = [
    {
      userNo: 1,
      createrData: {
        profileImage: '',
        nickname: '무친저글링',
        description: 'dsdsdsds',
      },
    },
    {
      userNo: 2,
      createrData: {
        profileImage: '',
        nickname: '제주조랑말',
        description:
          '안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요안녕하ㅔ요',
      },
    },
    {
      userNo: 3,
      createrData: {
        profileImage: '',
        nickname: '까지발덩크',
        description: 'dsdsdsdsㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      },
    },
    {
      userNo: 4,
      createrData: {
        profileImage: '',
        nickname: '무친저글링',
        description: 'dsdsdsds',
      },
    },
  ];
  return (
    <div>
      {/* <Input /> */}
      {임시list.map(item => {
        return (
          <List>
            <ProfileImg />
            <Info>
              <Nickname>{item.createrData.nickname}</Nickname>
              <Description>{item.createrData.description}</Description>
            </Info>
          </List>
        );
      })}
    </div>
  );
}

export default FriendPage;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: #f8f9fa;
`;

const List = styled.div`
  /* background-color: aliceblue; */
  max-width: 600px;
  min-height: 70px;
  padding: 8px 20px 10px;
  border-bottom: 1px solid #bbb;
  display: flex;
  cursor: pointer;
`;

const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

const Info = styled.div`
  width: calc(100% - 65px);
  height: 100%;
`;

const Nickname = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 14px;
`;
