import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import MyFriendsList from '../../components/friend/page/MyFriendsList';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';

function index() {
  return (
    <PostContainer>
      <FriendTop />
      <UserSearch />
      <MyFriendsList />
    </PostContainer>
  );
}

export default index;
