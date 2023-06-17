import React from "react";
import { styled } from "styled-components";
import user01 from "../../img/userImg_01.png";

// 추후에 이미지와 online 상태 props 받아서 처리 추가
const ProfileImg = () => {
  return (
    <StImg className="profileImg">
      <div>
        <img src={user01} alt="내 프로필 이미지" />
      </div>
      <span className="onlineAlert">&nbsp;</span>
    </StImg>
  );
};

export default ProfileImg;

const StImg = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  & > div {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 30px;
    & img {
      width: 100%;
    }
  }
  & > .onlineAlert {
    position: absolute;
    bottom: 0;
    right: -2px;
    display: block;
    width: 10px;
    height: 10px;
    border: 3px solid #232428;
    border-radius: 10px;
    background: #23a559;
  }
  & > .onlineAlert.offline {
    background: #949ba4;
  }
`;