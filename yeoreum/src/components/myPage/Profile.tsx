import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import ProfileImage from '../common/ProfileImage';
import { useUserProfileQuery } from '../../hooks/queries/users';

function Profile() {
  const router = useRouter();
  const { data } = useUserProfileQuery();
  const user = data?.data.response.userProfile;

  return (
    <Container>
      <UserProfile>
        <ImageWrapper>
          <ProfileImage src={user?.profileImage} size={70} />
        </ImageWrapper>
        <InfoWrapper>
          <Major>{user?.major}</Major>
          <Nickname>{user?.nickname}</Nickname>
          <Description>{user?.description}</Description>
        </InfoWrapper>
      </UserProfile>
      <EditButton
        onClick={() => {
          router.push({
            pathname: '/editProfile',
          });
        }}
      >
        계정설정
      </EditButton>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  height: 252px;
  padding: 16px 29px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.background.light};
`;

const UserProfile = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  margin-right: 25px;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 450px;
`;

const Major = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Nickname = styled.div`
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 18px;
  font-weight: 600;
  &::after {
    content: '님';
    margin-left: 3px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Description = styled.div`
  min-height: 120px;
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.subHeadline};
`;

const EditButton = styled.button`
  float: right;
  width: 100px;
  height: 48px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.font.white};

  cursor: pointer;
`;
