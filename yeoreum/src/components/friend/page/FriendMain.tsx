import styled from '@emotion/styled';
import { useState } from 'react';
import FriendList from './FriendList';
import FriendsRequests from './requestList/FriendsRequests';
import ReceivedFriendsRequests from './requestList/ReceivedFriendsRequests';
import SentFriendsRequests from './requestList/SentFriendsRequests';

function FriendMain() {
  const [viewList, setViewList] = useState(0);

  const tabs = [
    {
      id: 0,
      title: '친구 목록',
      content: <FriendsRequests />,
    },
    {
      id: 1,
      title: '보낸 신청',
      content: <SentFriendsRequests />,
    },
    {
      id: 2,
      title: '받은 신청',
      content: <ReceivedFriendsRequests />,
    },
  ];

  return (
    <MainContainer>
      <ButtonBox>
        {tabs.map(tab => (
          <SelectButton
            key={tab.id}
            onClick={() => {
              setViewList(tab.id);
            }}
            className={viewList === tab.id ? 'active' : ''}
          >
            {tab.title}
          </SelectButton>
        ))}
      </ButtonBox>
      <ListsBox>
        {tabs
          .filter(tab => viewList === tab.id)
          .map(tab => (
            <ListItem key={tab.id}>{tab.content}</ListItem>
          ))}
      </ListsBox>
    </MainContainer>
  );
}

export default FriendMain;

const MainContainer = styled.div``;

const ButtonBox = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const SelectButton = styled.button`
  width: 90px;
  height: 100%;
  margin: 0;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.font.headline};
  background-color: inherit;
  cursor: pointer;

  &.active {
    font-weight: 600;
    border-bottom: 2px solid ${({ theme }) => theme.palette.main};
  }
`;

const ListsBox = styled.div`
  height: calc(100% - 60px);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const ListItem = styled.div`
  cursor: pointer;
`;

// 혹시 몰라서 주석
// function FriendMain() {
//   const [viewList, setViewList] = useState(0);

//   const tabs = [
//     {
//       id: 0,
//       title: '친구 목록',
//       response: 'friends',
//     },
//     {
//       id: 1,
//       title: '보낸 신청',
//       response: 'sentFriendRequests',
//     },
//     {
//       id: 2,
//       title: '받은 신청',
//       response: 'receivedRequests',
//     },
//   ];

//   return (
//     <MainContainer>
//       <ButtonBox>
//         {tabs.map(tab => (
//           <SelectButton
//             key={tab.id}
//             onClick={() => {
//               setViewList(tab.id);
//             }}
//             className={viewList === tab.id ? 'active' : ''}
//           >
//             {tab.title}
//           </SelectButton>
//         ))}
//       </ButtonBox>
//       <ListsBox>
//         {tabs
//           .filter(tab => viewList === tab.id)
//           .map(tab => (
//             <ListItem key={tab.id}>
//               <FriendList tab={tab} />
//             </ListItem>
//           ))}
//       </ListsBox>
//     </MainContainer>
//   );
// }

// export default FriendMain;
