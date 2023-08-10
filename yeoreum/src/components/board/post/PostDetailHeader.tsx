import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import {
  useDeletePostMutation,
  usePostDetailQuery,
} from '../../../hooks/queries/posts';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { useLoginState } from '../../../store/hooks';

interface PostDetailHeaderProps {
  postNo: number;
}

function PostDetailHeader({ postNo }: PostDetailHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  const { userData } = useLoginState();

  const { data } = usePostDetailQuery(postNo);
  const postData = data?.data.response.board;

  const isMyPost = postData?.hostUserNo === userData?.userNo;

  useOutsideClick(ref, () => setIsOpen(false));

  const { mutate } = useDeletePostMutation(postNo);

  const handleClickDeleteBtn = () => {
    const deletePost = confirm('게시글을 삭제하시겠습니까?');
    if (deletePost) {
      mutate();
    }
  };

  return (
    <Header>
      <PostPageShortcut onClick={() => history.back()}>
        {'≪ 여름게시판'}
      </PostPageShortcut>
      <PostTitle>{postData?.title}</PostTitle>
      <PostInfo>
        <FlexRowContainer>
          <PosterProfile
            width={100}
            height={100}
            src={'/anonymous.png'}
            alt="profile"
            priority
          />
          <NicknameDate>
            <Nickname>{postData?.hostNickname}</Nickname>
            <PostedAt>{postData?.createdDate}</PostedAt>
          </NicknameDate>
        </FlexRowContainer>
        <MoreBtn
          width={24}
          height={24}
          src={'/icons/more.svg'}
          alt="profile"
          priority
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <ReportModal ref={ref}>
            {isMyPost ? (
              <>
                <ReportBtn
                  onClick={() => router.push(`/board/post/${postNo}/edit`)}
                >
                  게시글 수정하기
                </ReportBtn>
                <ReportBtn onClick={handleClickDeleteBtn}>
                  게시글 삭제하기
                </ReportBtn>
              </>
            ) : (
              <ReportBtn>게시글 신고하기</ReportBtn>
            )}
          </ReportModal>
        )}
      </PostInfo>
    </Header>
  );
}

export default PostDetailHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const PostPageShortcut = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.main};
  margin-bottom: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 30px;
  letter-spacing: -0.2px;
`;

const FlexRowContainer = styled.div`
  display: flex;
`;

const PostInfo = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PosterProfile = styled(Image)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
`;

const NicknameDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.palette.fontBlack};
`;

const PostedAt = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.palette.fontGrey};
`;

const MoreBtn = styled(Image)`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  &:hover {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.lightGrey};
  }
`;

const ReportModal = styled.div`
  background-color: white;
  width: 135px;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  border: 1px solid #d0d0d0;
  top: 50%;
  right: 0;
  transform: translate(10px, 8px);
`;

const ReportBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: inherit;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.lightGrey};
  }
`;
