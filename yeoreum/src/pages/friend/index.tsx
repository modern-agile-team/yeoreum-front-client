import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import PostPageTitle from '../../components/board/PostPageTitle';
import FriendPage from '../../components/friend/FriendPage';
import UserSearch from '../../components/friend/UserSearch';

function index() {
  return (
    <PostContainer>
      <PostPageTitle title="친구" />
      <UserSearch />
      <FriendPage />
    </PostContainer>
  );
}

export default index;
