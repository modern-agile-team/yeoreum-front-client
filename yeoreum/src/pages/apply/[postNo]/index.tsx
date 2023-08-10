import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import PostContainer from '../../../components/board/PostContainer';
import PostList from '../../../components/board/PostList';
import PostPageTitle from '../../../components/board/PostPageTitle';
import { useApplicationList } from '../../../hooks/queries/posts';

interface ApplyStatusProps {
  postNo: number;
}

function ApplyStatus({ postNo }: ApplyStatusProps) {
  const { data } = useApplicationList(postNo);
  const applicationList = data?.data.response.guestTeamMetaData.guestTeams;
  const acceptedGuestTeamNo =
    data?.data.response.guestTeamMetaData.acceptedGuestTeamNo;

  applicationList?.forEach((guestTeam: any) => {
    if (!acceptedGuestTeamNo) {
      guestTeam.isAdoptedStatus = 2;
      return;
    }
    if (guestTeam.teamNo === acceptedGuestTeamNo) {
      guestTeam.isAdoptedStatus = 3;
    } else guestTeam.isAdoptedStatus = 4;
  });

  console.log(applicationList);

  return (
    <PostContainer>
      <PostPageTitle title="신청 현황" />
      <PostList posts={applicationList} isApplication />
    </PostContainer>
  );
}

export default ApplyStatus;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const { postNo } = query;
  return {
    props: {
      postNo,
    },
  };
};
