import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import MyFriendsList from '../../components/friend/MyFriendsList';
import FriendTop from '../../components/friend/FriendTop';
import UserSearch from '../../components/friend/UserSearch';

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
