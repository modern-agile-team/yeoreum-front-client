import styled from "@emotion/styled";
import OuterBox from "../../../common/boxes/components/OuterBox";
import InnerBox from "../../../common/boxes/components/InnerBox";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 117px;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 17px;
`;

export const OuterBoxStyle = styled(OuterBox)`
  margin-bottom: 25px;
`;

export const Container = styled.div`
  margin-left: 90px;
`;
export const InnerBoxStyle = styled(InnerBox)`
  position: relative;
`;

export const InnerOuterBox = styled(OuterBox)`
  position: absolute;
  margin: 15px;
`;