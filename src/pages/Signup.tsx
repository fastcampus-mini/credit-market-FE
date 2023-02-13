import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import colors from '@/styles/colors';
import { isValidateEmail } from '@/utils/validLogic';

const HomeStyle = styled.div`
  padding: 20px 10px;
  position: relative;
  z-index: 1;

  #lottie {
    width: 100px;
  }
`;

const Signup = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/', { state: '/signup' });
  };

  const goLogin = () => {
    navigate('/login', { state: '/signup' });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 엔터키 입력시 서브밋 되는 거 막아야함
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    console.log({ name, email });
  };

  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <HomeStyle>
      <button onClick={goHome}>
        <FiArrowLeft />
      </button>
      <div className="title">
        <h1>credit market</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="이메일" ref={emailRef} />
        {emailRef.current && isValidateEmail(emailRef.current.value) ? ( // useState 이용해야 할듯
          <p style={{ color: 'green' }}> 확인 완료 </p>
        ) : (
          <p style={{ color: 'red' }}> 이메일 에러 </p>
        )}
        <input type="password" name="password" placeholder="비밀번호 (8자 이상)" />
        <input type="password" name="password-check" placeholder="비밀번호 확인" />
        <input type="text" name="name" placeholder="이름" />
        <input type="number" name="birth" placeholder="생년월일" />
        <select name="sex" id="">
          <option value="">성별</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
        <select name="job" id="">
          <option value="job1">직업</option>
          <option value="job2">공무원</option>
          <option value="job3">개인사업자</option>
          <option value="job4">무직</option>
          <option value="job5">전문직</option>
          <option value="job6">직장인</option>
          <option value="job7">학생</option>
        </select>
        <input type="number" name="credit" placeholder="개인신용점수" />
        <select name="loan" id="">
          <option value="">선호 대출 종류</option>
          <option value="">중장기 신용 대출</option>
          <option value="">단기 신용 대출</option>
          <option value="">소액 신용 대출</option>
        </select>
        <select name="interest" id="">
          <option value="">선호 금리 종류</option>
          <option value="interest1">고정 금리</option>
          <option value="interest2">변동 금리</option>
        </select>
        <button type="submit" onClick={goLogin}>
          Submit
        </button>
      </form>
    </HomeStyle>
  );
};

export default Signup;
