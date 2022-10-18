import  OuterBox from '../../../common/boxes/components/OuterBox';
import {Wrapper, RightContainer, Title, OuterBoxStyle, Container, InnerBoxStyle, InnerOuterBox} from '../styles/MyPage'
import MyProfile from './myProfile/MyProfile';
import MyPost from './myPost/MyPost';
import MyList from './myList/MyList';

function MyPage() {
  return (
    <Wrapper>
      <RightContainer>
        <Title>Profile</Title>
        <OuterBoxStyle size={['545px', '396px']} shadow={5}><MyProfile /></OuterBoxStyle>
        <Title>My Post</Title>
        <OuterBox size={['545px', '135px']} shadow={5}><MyPost /></OuterBox>
      </RightContainer> 
      <Container>
        <Title>My List</Title>
         <InnerBoxStyle size={['500px', '590px']} shadow={5}>
          <InnerOuterBox size={['470px', '560px']} shadow={5}><MyList /></InnerOuterBox>
        </InnerBoxStyle> 
      </Container> 
    </Wrapper>
  )
}

export default MyPage;