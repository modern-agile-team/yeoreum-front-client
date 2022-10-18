import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`

export const Ballon = styled.div`
  position:relative; 
  width:60px; 
  height:30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 74px;
  background: #E6E6EE;
  box-shadow: 5px 5px 6px rgba(63, 63, 143, 0.25), -5px -5px 6px #FFFFFF;
  border-radius: 13px;
  &:after { 
    border-top: 7px solid #E6E6EE; 
    border-left: 7px solid transparent; 
    border-right: 7px solid transparent; 
    content:""; 
    position:absolute;
    top:30px;
    left:20px;  
  }
`
export const Container = styled.div`
    margin-left: 19px;
`
export const Manner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 176px;
  height: 15px;
  margin-top: 15px;
  padding: 5px;
  background: #E6E6EE;
  box-shadow: 5px 5px 6px rgba(63, 63, 143, 0.25), -5px -5px 6px #FFFFFF;
  border-radius: 50px;
`

export const Color = styled.div`
  position: absolute;
  width: 80px;
  height: 10px;
  background: #52ABFF;
  box-shadow: 5px 5px 6px rgba(63, 63, 143, 0.25), -5px -5px 6px #FFFFFF;
  border-radius: 50px;
`
