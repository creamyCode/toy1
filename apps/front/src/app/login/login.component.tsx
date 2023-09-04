import styled from '@emotion/styled';
import { Button, TextField, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Dtos } from '@toy1/common';
import { useState } from 'react';
import { loginApi } from '../common/apis/authentication.api';
import { css } from '@emotion/react';

/* eslint-disable-next-line */
export interface LoginProps {}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 300px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SpinnerArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const marginBottom = css`
  margin-bottom: 10px;
`;

export function Login(props: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const resolver = classValidatorResolver(Dtos.LoginUserDto);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Dtos.LoginUserDto>({ mode: 'all', resolver });

  const onSubmit = async (data: Dtos.LoginUserDto) => {
    setIsLoading(true);
    const apiResult = await loginApi(data);
    setIsLoading(false);
    if (apiResult.ok) {
      navigate('/main');
    } else if (!apiResult.isUnExpected) {
      alert('계정정보가 일치하지 않습니다..');
    } else {
      alert('통신에러');
    }
  };

  return (
    <Container>
      <h1 css={marginBottom}>APP</h1>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          css={marginBottom}
          required
          label="Id"
          variant="outlined"
          helperText="Id를 입력하세요"
          {...register('id')}
        />
        {errors.id && <span>{errors.id.message}</span>}
        <TextField
          required
          type="password"
          label="비밀번호"
          variant="outlined"
          helperText="비밀번호를 입력하세요"
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <ButtonArea>
          <Button variant="contained" type="submit">
            login
          </Button>
        </ButtonArea>
        {isLoading && (
          <SpinnerArea>
            <CircularProgress />
          </SpinnerArea>
        )}
      </LoginForm>
    </Container>
  );
}

export default Login;
