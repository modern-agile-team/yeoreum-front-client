import React, { useState, useEffect } from 'react';
import SubmitButton from '../../../../components/board/create/SubmitButton';
import PostContainer from '../../../../components/board/PostContainer';
import PostInput from '../../../../components/board/create/PostInput';
import PostPageTitle from '../../../../components/board/PostPageTitle';
import { PostEditData, PostType } from '../../../../types/post';
import { useRouter } from 'next/router';
import {
  useEditPostMutation,
  usePostDetailQuery,
} from '../../../../hooks/queries/posts';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface PostEditPageProps {
  postNo: number;
}

function PostEditPage({ postNo }: PostEditPageProps) {
  const [postEditData, setPostEditData] = useState<PostEditData>({
    title: '',
    description: '',
    location: '',
    meetingTime: '',
    recruitMale: 0,
    recruitFemale: 0,
  });

  const { data } = usePostDetailQuery(postNo);
  const prevPostData: PostType = data?.data.response.board;

  useEffect(() => {
    setPostEditData({
      title: prevPostData?.title,
      description: prevPostData?.description,
      location: prevPostData?.location,
      meetingTime: prevPostData?.meetingTime,
      recruitMale: prevPostData?.recruitMale,
      recruitFemale: prevPostData?.recruitFemale,
    });
  }, [prevPostData]);

  const router = useRouter();

  const onSuccess = (data: any) => {
    console.log('게시글 수정 성공', data);
    alert('게시글이 수정되었습니다.');
    router.push(`/board/post/${postNo}`);
  };

  const onError = (error: any) => {
    console.log('게시글 수정 실패', error);
    alert('알 수 없는 오류가 발생했습니다.');
    router.push(`/board`);
  };

  const { mutate } = useEditPostMutation(
    postNo,
    postEditData,
    onSuccess,
    onError,
  );

  const submitPostEditHandler = () => {
    if (!postEditData.title) return alert('제목은 비워둘 수 없습니다.');
    if (!postEditData.location) return alert('장소는 비워둘 수 없습니다.');
    if (!postEditData.meetingTime) return alert('시간은 비워둘 수 없습니다.');
    if (postEditData.recruitMale + postEditData.recruitFemale < 2)
      return alert('모집 인원을 한명 이상 설정해주세요.');
    if (!postEditData.description) return alert('내용은 비워둘 수 없습니다.');
    mutate();
  };

  return (
    <PostContainer>
      <PostPageTitle title="게시글 수정" />
      <PostInput
        title="제목"
        keyName="title"
        postData={postEditData}
        setPostData={setPostEditData}
      />
      <PostInput
        title="장소"
        keyName="location"
        postData={postEditData}
        setPostData={setPostEditData}
      />
      <PostInput
        title="시간"
        keyName="meetingTime"
        postData={postEditData}
        setPostData={setPostEditData}
      />
      <PostInput
        title="내용"
        keyName="description"
        postData={postEditData}
        setPostData={setPostEditData}
        textarea
      />
      <SubmitButton onClick={submitPostEditHandler} content="수정" />
    </PostContainer>
  );
}

export default PostEditPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { postNo } = context.query;
  return {
    props: {
      postNo,
    },
  };
};
