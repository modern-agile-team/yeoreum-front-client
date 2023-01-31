import styled from '@emotion/styled';
import React, { useState } from 'react';
import AddModalSearch from './AddModalSearch';

function AddFriendModal() {
  const [upProfile, setUpProfile] = useState(false);

  const AddFriend = () => {
    setUpProfile(true);
  };

  return (
    <Container>
      <ArrowIcons>
        <Before />
        <Next />
      </ArrowIcons>
      {upProfile && (
        <Added>
          <Items>
            <Delete>x</Delete>
            <Item />
          </Items>
        </Added>
      )}
      <div style={{ padding: '10px' }}>
        <AddModalSearch />
      </div>
      <Div>
        <AllUsersList>
          <ProfileImg />
          <Nickname>제주조랑말제주조랑말제주조랑말d</Nickname>
          <Checked onClick={AddFriend}></Checked>
        </AllUsersList>
      </Div>
    </Container>
  );
}

export default AddFriendModal;

const Container = styled.div`
  height: 530px;
  padding: 10px;
`;

const ArrowIcons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Added = styled.div`
  display: flex;
  width: 350px;
  padding: 10px 0;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Items = styled.div`
  position: relative;
  margin-right: 13px;
`;

const Delete = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: aqua;
`;

const Item = styled.div`
  width: 36px;
  height: 36px;
  margin-bottom: 15px;
  border-radius: 50%;
  background-color: #3d4954;
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
  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
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
  font-size: 14px;
`;

const Checked = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid red;
`;
