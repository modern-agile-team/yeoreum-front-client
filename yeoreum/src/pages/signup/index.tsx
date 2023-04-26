import { useState } from 'react';
import SignUpContainer from '../../components/signUp/SignUpContainer';
import SignUpBody from '../../components/signUp/SignUpBody';
import SignUpHeader from '../../components/signUp/SignUpHeader';
import SignUpBodyIndex from '../../components/signUp/SignUpBodyIndex';

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <SignUpBody>
        <SignUpBodyIndex />
      </SignUpBody>
    </SignUpContainer>
  );
};

export default SignUp;
