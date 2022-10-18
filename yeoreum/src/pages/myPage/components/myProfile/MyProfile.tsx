import {Wrapper, Container, List, InnerBoxStyle, Manner } from '../../styles/MyProfile'
import InputList from "./InputList";
import Graph from './Graph';

function MyProfile() {
  return (
    <Wrapper>
      <Container>
        <InnerBoxStyle size={['150px', '150px']} shadow={5}>ddd</InnerBoxStyle>
        <Graph />
      </Container>
      <List>
        <InputList />
      </List>
    </Wrapper>
  )


}

export default MyProfile;

