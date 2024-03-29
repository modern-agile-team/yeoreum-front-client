import axios from 'axios';

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');

    alert('로그아웃되었다.');
    window.location.reload();
  }
  return undefined;
};

export const getToken = () => {
  if (typeof window !== 'undefined') return localStorage.getItem('token');
  return undefined;
};

export const login = async () => {
  try {
    const {
      data: {
        response: {
          user: { accessToken: token },
        },
      },
    } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
      email: `${process.env.NEXT_PUBLIC_ID}`,
      password: `${process.env.NEXT_PUBLIC_PASSWORD}`,
    });

    localStorage.setItem('token', token);
    alert('로그인 완료');
    window.location.reload();
  } catch (error) {
    alert('에러 발생');
  }
};
