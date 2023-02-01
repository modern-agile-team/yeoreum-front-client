import styled from '@emotion/styled';
import React, { useState } from 'react';
import AddModalSearch from './AddModalSearch';

interface FriendType {
  id: number;
  img: string;
  nickname: string;
}

function AddFriendModal() {
  const 임시lists = [
    {
      id: 1,
      img: '',
      nickname: '제주조랑말',
    },
    {
      id: 2,
      img: '',
      nickname: '제주조랑말제주조랑말제주조랑말',
    },
  ];

  return (
    <Container>
      <ArrowIcons>
        <Before />
        <Next />
      </ArrowIcons>
      <div style={{ padding: '0 10px' }}>
        <AddModalSearch />
      </div>
      <Div>
        {임시lists.map(item => {
          return <ListItem item={item} />;
        })}
      </Div>
    </Container>
  );
}

interface ItemProps {
  item: FriendType;
}

const ListItem = ({ item }: ItemProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <AllUsersList key={item.id}>
      <ProfileImg>{item.img}</ProfileImg>
      <Nickname>{item.nickname}</Nickname>
      <ApplicationButton
        disabled={isDisabled}
        onClick={() => setIsDisabled(true)}
      >
        신청
      </ApplicationButton>
    </AllUsersList>
  );
};

export default AddFriendModal;

const Container = styled.div`
  padding: 10px;
`;

const ArrowIcons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Before = styled.div`
  width: 20px;
  height: 10px;
  background-color: aliceblue;
`;

const Next = styled.div`
  width: 20px;
  height: 10px;
  background-color: aliceblue;
`;

const Div = styled.div`
  height: 330px;
  overflow: auto;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: #217af4;
    border-radius: 10px;
  }
  /* ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  } */
`;

const AllUsersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 16px 0;
  margin-right: 5px;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

const Nickname = styled.div`
  width: 250px;
  margin-left: 10px;
  font-size: 14px;
`;

const ApplicationButton = styled.button<{ disabled: boolean }>`
  width: 58px;
  height: 30px;
  border-radius: 8px;
  color: white;
  background-color: #626ece;

  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? `&:disabled {
    background: #b8c7e7;
    cursor: default;
  }`
      : ''};
`;

const ClickButton = styled.button`
  width: 58px;
  height: 30px;
  border-radius: 8px;
  color: white;
  background: #b8c7e7;
  cursor: default;
`;
