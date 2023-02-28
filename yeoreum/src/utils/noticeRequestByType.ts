import { OnError, OnSuccess } from '../types/mutation';

interface NoticeRequestObject {
  [key: string]: {
    accept: {
      onSuccess: OnSuccess;
      onError: OnError;
    };
    reject: {
      onSuccess: OnSuccess;
      onError: OnError;
    };
  };
}

export default function noticeRequestByType(type: number) {
  const noticeRequestObject: NoticeRequestObject = {
    1: {
      accept: {
        onSuccess: data => {
          alert('타입 1 여름 채팅 초대를 수락했습니다.');
          console.log('알림 타입 1 수락 성공', data);
        },
        onError: error => {
          console.log('알림 타입 1 수락 오류', error);
        },
      },
      reject: {
        onSuccess: data => {
          alert('타입 1 여름 채팅 초대를 거절했습니다.');
          console.log('알림 타입 1 거절 성공', data);
        },
        onError: error => {
          console.log('알림 타입 1 거절 오류', error);
        },
      },
    },
    2: {
      accept: {
        onSuccess: data => {
          alert('타입 2 여름 채팅 초대를 수락했습니다.');
          console.log('알림 타입 2 수락 성공', data);
        },
        onError: error => {
          console.log('알림 타입 2 수락 오류', error);
        },
      },
      reject: {
        onSuccess: data => {
          alert('타입 2 여름 채팅 초대를 거절했습니다.');
          console.log('알림 타입 2 거절 성공', data);
        },
        onError: error => {
          console.log('알림 타입 2 거절 오류', error);
        },
      },
    },
    3: {
      accept: {
        onSuccess: data => {
          alert('타입 3 친구 요청을 수락했습니다.');
          console.log('알림 타입 3 수락 성공', data);
        },
        onError: error => {
          console.log(error.response.status);
          console.log('알림 타입 3 수락 오류', error);
        },
      },
      reject: {
        onSuccess: data => {
          alert('타입 3 친구 요청을 거절했습니다.');
          console.log('알림 타입 3 거절 성공', data);
        },
        onError: error => {
          console.log(error.response.status);
          console.log('알림 타입 3 거절 오류', error);
        },
      },
    },
    5: {
      accept: {
        onSuccess: data => {
          alert('타입 5 여름 참가 초대를 수락했습니다.');
          console.log('알림 타입 5 수락 성공', data);
        },
        onError: error => {
          console.log('알림 타입 5 수락 오류', error);
        },
      },
      reject: {
        onSuccess: data => {
          alert('타입 5 여름 참가 초대를 거절했습니다.');
          console.log('알림 타입 5 거절 성공', data);
        },
        onError: error => {
          console.log('알림 타입 5 거절 오류', error);
        },
      },
    },
    7: {
      accept: {
        onSuccess: data => {
          alert('타입 7 여름 모집 초대를 수락했습니다.');
          console.log('알림 타입 7 수락 성공', data);
        },
        onError: error => {
          console.log('알림 타입 7 수락 오류', error);
        },
      },
      reject: {
        onSuccess: data => {
          alert('타입 7 여름 모집 초대를 거절했습니다.');
          console.log('알림 타입 7 거절 성공', data);
        },
        onError: error => {
          console.log('알림 타입 7 거절 오류', error);
        },
      },
    },
  };

  return noticeRequestObject[type];
}