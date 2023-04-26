import { useMutation } from '@tanstack/react-query';
import { requestLogin } from '../../../apis/login';

export const useLoginMutation = (
  onSuccess?: (data: any) => void,
  onError?: (error: unknown) => void,
) => {
  return useMutation(requestLogin, {
    onSuccess,
    onError,
  });
};
