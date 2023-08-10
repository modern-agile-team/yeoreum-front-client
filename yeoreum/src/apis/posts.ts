import {
  ApplicationCreateData,
  PostCreateData,
  PostEditData,
} from '../types/post';
import tokenAxios from './config';

export interface RequestGetAllPostsOption {
  gender?: number | undefined;
  people?: number | undefined;
  isDone?: boolean | undefined;
  isImpromptu?: boolean | undefined;
}

const requestGetPosts = (
  pageParam: number,
  option: RequestGetAllPostsOption,
) => {
  const url = `/boards?${
    option.gender === undefined ? '' : `gender=${option.gender}&`
  }${option.people === undefined ? '' : `people=${option.people}&`}${
    option.isDone === undefined ? '' : `isDone=${option.isDone}&`
  }${
    option.isImpromptu === undefined ? '' : `isImpromptu=${option.isDone}&`
  }${`page=${pageParam}`}`;

  return tokenAxios.get(url);
};

const requestPostCreatePost = (body: PostCreateData) => {
  return tokenAxios.post('/boards', body);
};

const requestPatchEditPost = (boardNo: number, body: PostEditData) => {
  return tokenAxios.patch(`/boards/${boardNo}`, body);
};

const requestDeletePost = (boardNo: number) => {
  return tokenAxios.delete(`/boards/${boardNo}`);
};

const requestPostCreateApplication = (
  boardNo: number,
  body: ApplicationCreateData,
) => {
  return tokenAxios.post(`/boards/${boardNo}/join`, body);
};

const requestGetPostDetail = (boardNo: number) => {
  return tokenAxios(`/boards/${boardNo}`);
};

const requestGetPostApplication = (boardNo: number) => {
  return tokenAxios(`/boards/apply/${boardNo}?page=1`);
};

const requestGetApplicationDetail = (boardNo: number, teamNo: number) => {
  return tokenAxios(`/boards/apply/${boardNo}/${teamNo}`);
};

const requestPostCreateChatRoom = (boardNo: number, teamNo: number) => {
  return tokenAxios.post(`/chats/${boardNo}/${teamNo}`);
};

export {
  requestGetPosts,
  requestPostCreatePost,
  requestPatchEditPost,
  requestDeletePost,
  requestPostCreateApplication,
  requestGetPostDetail,
  requestGetPostApplication,
  requestGetApplicationDetail,
  requestPostCreateChatRoom,
};
