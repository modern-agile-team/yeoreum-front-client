import styled from '@emotion/styled';
import React from 'react';
import PostPageTitle from '../board/PostPageTitle';

function FriendTop() {
  return (
    <Div>
      <PostPageTitle title="친구" />
      <AddIcon />
    </Div>
  );
}

export default FriendTop;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
  margin-left: 10px;
  background-color: antiquewhite;
`;
