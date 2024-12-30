import theme from '../styles/theme';

export type PostStatusType = number;

export const statusMaker = (status: number) => {
  if (status === 0) return '모집 중';
  if (status === 1) return '여름 마감';
  if (status === 2) return '여름 신청(대기)';
  if (status === 3) return '여름 신청(수락)';
  if (status === 4) return '여름 신청(거절)';
};

export function ProgressColor({ status }: { status: PostStatusType }) {
  if (!(typeof status === 'number') || status < 0 || status > 4) return;
  if (status === 0) return theme.palette.main;
  if (status === 1) return theme.palette.fontGrey;
  if (status === 2) return theme.palette.main;
  if (status === 3) return theme.palette.dark;
  if (status === 4) return theme.palette.disable;
}
