import React from 'react';
import styled from '@emotion/styled';
import Notification from './Notification';

const alarmArray = [
  {
    noticeNo: 6,
    type: 6,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    boardNo: 1,
  },
  {
    noticeNo: 4,
    type: 4,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 2,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 1,
  },
  {
    noticeNo: 2,
    type: 2,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.137Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 1,
    type: 1,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    boardNo: 1,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 6,
    type: 6,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    boardNo: 1,
  },
  {
    noticeNo: 4,
    type: 4,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 2,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 1,
  },
  {
    noticeNo: 2,
    type: 2,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.137Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 1,
    type: 1,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    boardNo: 1,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
];

function NotificationList() {
  return (
    <ListContainer>
      {alarmArray.map((alarm, idx) => (
        <Notification key={idx} alarmInfo={alarm} />
      ))}
    </ListContainer>
  );
}

export default NotificationList;

const ListContainer = styled.ul`
  margin-top: 10px;
`;