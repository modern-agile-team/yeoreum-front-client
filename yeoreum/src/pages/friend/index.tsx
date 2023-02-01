import React from 'react';
import PostContainer from '../../components/board/PostContainer';
import MyFriendList from '../../components/friend/page/MyFriendList';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';

function index() {
  return (
    <PostContainer>
      <FriendTop />
      <UserSearch />
      <MyFriendList />
    </PostContainer>
  );
}

export default index;
