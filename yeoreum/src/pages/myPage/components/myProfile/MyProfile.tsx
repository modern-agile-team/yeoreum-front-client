import {Wrapper, Container, List, InnerBoxStyle, Image } from '../../styles/MyProfile'
import InputList from "./InputList";
import Graph from './Graph';

function MyProfile() {
  return (
    <Wrapper>
      <Container>
        <InnerBoxStyle size={['150px', '150px']} shadow={5}>
          <Image />
        </InnerBoxStyle>
        <Graph />
      </Container>
      <List>
        <InputList />
      </List>
    </Wrapper>
  )


}

export default MyProfile;

