import styled from '@emotion/styled';
import React, { useState } from 'react';

function MyFriendSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <InputBox>
      <SearchIcon
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlPSIjQzVDNUM1IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSI2LjYxMSIgY3k9IjYuNjExIiByPSI1Ljg2MSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE1LjI1IDE1LjI1bC00LjI0My00LjI0MyIvPjwvZz48L3N2Zz4=
"
      />
      <Input
        placeholder="이름 검색"
        value={searchTerm}
        onChange={({ target: { value } }) => setSearchTerm(value)}
      />
      {searchTerm && (
        <SearchIcon
          hover
          onClick={() => setSearchTerm('')}
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiPgogICAgICAgICAgICA8Y2lyY2xlIGZpbGw9IiNDNUM1QzUiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im02IDYgNi4wMDUgNi4wMDZNMTIuMDA1IDYgNiAxMi4wMDYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=
"
        />
      )}
    </InputBox>
  );
}

export default MyFriendSearch;

const InputBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 20px;
  align-self: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.background.light};

  @media (max-width: 640px) {
    width: 100%;
    max-width: 560px;
  }
`;

const SearchIcon = styled.img<{ hover?: boolean }>`
  width: 20px;
  height: 20px;
  cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
`;

const Input = styled.input`
  margin: 0 10px;
  background-color: ${({ theme }) => theme.palette.background.light};
  font-size: 0.875rem;
  border: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.palette.font.subHeadline};
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.palette.font.disable};
    font-size: 0.875rem;
  }
`;
