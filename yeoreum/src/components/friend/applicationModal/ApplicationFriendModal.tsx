import styled from '@emotion/styled';
import React from 'react';
import AllUserList from './AllUserList';
import AllUserSearch from './AllUserSearch';

function ApplicationFriendModal() {
  const users = [
    {
      userNo: 1,
      nickname: '제주조랑말',
      profileImage: '',
    },
    {
      userNo: 2,
      profileImage: '제주조랑말제주조랑말제주조랑말',
      nickname: '',
    },
  ];

  return (
    <Container>
      <ArrowIcons>
        <Before />
        <Next />
      </ArrowIcons>
      <div style={{ padding: '0 10px' }}>
        <AllUserSearch />
      </div>
      <ListWrapper>
        {users.map(item => {
          return <AllUserList item={item} />;
        })}
      </ListWrapper>
    </Container>
  );
}

export default ApplicationFriendModal;

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

const ListWrapper = styled.div`
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
