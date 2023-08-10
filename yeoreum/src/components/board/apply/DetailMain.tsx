import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  useApplicationDetailQuery,
  useCreateChatMutation,
} from '../../../hooks/queries/posts';
import { Param } from '../../../pages/apply/[postNo]/application/[applicationNo]';

interface DetailHeaderProps {
  param: Param;
}

interface Guest {
  nickname: string;
  profileImage: string;
  userNo: number;
}

function DetailMain({ param }: DetailHeaderProps) {
  const router = useRouter();
  const { data } = useApplicationDetailQuery(param.postNo, param.applicationNo);

  const applicationData = data?.data.response.guestTeam;

  const guestsData = applicationData?.guests;

  console.log(guestsData);

  const { mutate } = useCreateChatMutation(param.postNo, param.applicationNo);

  const btnClickHandler = () => {
    mutate();
    // router.push(`/mypage`);
  };

  return (
    <Main>
      <ContentWrapper>
        <Content>{applicationData?.description}</Content>
        <YeoreumInfo>
          <Subject>신청 인원</Subject>
          <Members>
            {guestsData?.map((guest: Guest, idx: number) => (
              <Member key={guest.nickname + idx}>
                <MemberProfile src="/anonymous.png" />
                <MemberNickname>{guest.nickname}</MemberNickname>
                {idx === 0 && <WriterTag>작성자</WriterTag>}
              </Member>
            ))}
          </Members>
        </YeoreumInfo>
      </ContentWrapper>
      <PostButton onClick={btnClickHandler}>수락하기</PostButton>
    </Main>
  );
}

export default DetailMain;

const Main = styled.main`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.p`
  width: 100%;
  min-height: 140px;
  margin-bottom: 40px;
`;

const Content = styled.span`
  display: flex;
  line-height: 1.6;
  letter-spacing: -1px;
  margin-bottom: 30px;
`;

const PostButton = styled.button`
  margin-top: 40px;
  width: 240px;
  height: 40px;
  border-radius: 10px;

  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.palette.main};

  cursor: pointer;

  @media (max-width: 640px) {
    width: 50%;
  }
`;

const YeoreumInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Subject = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.main};
  margin-bottom: 20px;
`;

const Members = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Member = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 12px;
`;

const MemberProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 6px;
`;

const MemberNickname = styled.span`
  letter-spacing: -0.6px;
`;

const WriterTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.palette.main};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.main};
  margin-left: 10px;
`;
