import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router';
import COLORS from '@/styles/colors';
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from 'react-modal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import BackButton from '@/components/common/BackButton';
import ModalBox from '@/components/template/ModalBox';
import { ROUTES } from '@/constants/routes';
import { ErrStyle } from './Login';

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  age: number;
  sex: string;
  bank: string;
  loan: string;
  credit: number;
  interest: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const location1 = useLocation();
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<FormValues>();
  const [FormData, setFormData] = useState<FormValues>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    age: 0,
    sex: '',
    bank: '',
    loan: '',
    credit: 0,
    interest: '',
  });
  // 비밀번호와 비밀번호 확인이 일치하는지 검증하기 위해 "password" input 의 value 를 추적함
  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('password');

  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', handleEvent);
    return () => {
      window.removeEventListener('popstate', handleEvent);
    };
  }, []);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    setIsSubmitModalOpen(true);
  };

  const validateSelectOption = (value: string) => {
    return value === '' ? 'Please select an option' : true;
  };

  const modalSubmitHandler = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(FormData));
    goWelcome();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleEvent = () => {
    history.pushState(null, '', location.href);
    setIsBackModalOpen(true);
  };

  const goBack = () => {
    navigate(location1.state?.from || '/', { replace: true });
  };

  const goWelcome = () => {
    navigate(ROUTES.WELCOME, { state: ROUTES.SIGNUP });
  };

  return (
    <SignForm>
      <BackButton onClick={() => setIsBackModalOpen(true)} size={25} />
      <FormContainer>
        <SignupStyle>
          <div className="title">
            <h1 css={H1Style}>
              <img css={LogoStyle} src="../../images/logo_Main.png" alt="" />
            </h1>
          </div>
          <SignupFormStyle onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
            <Input
              inputType="text"
              classType="text-input-white"
              placeholder="이메일"
              aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
              register={{
                ...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식을 올바르게 작성해주세요.',
                  },
                }),
              }}
            />
            {errors.email && (
              <small css={ErrStyle} role="alert">
                {errors.email.message}
              </small>
            )}

            <Input
              inputType="password"
              classType="text-input-white"
              placeholder="비밀번호"
              aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
              register={{
                ...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: { value: 8, message: '비밀번호를 8자리 이상 입력해주세요.' },
                }),
              }}
            />
            {errors.password && (
              <small css={ErrStyle} role="alert">
                {errors.password.message}
              </small>
            )}

            <Input
              inputType="password"
              classType="text-input-white"
              placeholder="비밀번호 확인"
              aria-invalid={!isDirty ? undefined : errors.passwordConfirm ? 'true' : 'false'}
              register={{
                ...register('passwordConfirm', {
                  required: true,
                  validate: (value) => value === passwordRef.current,
                }),
              }}
            />
            {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' && (
              <small css={ErrStyle} role="alert">
                비밀번호가 일치하지 않습니다.
              </small>
            )}

            <Input
              inputType="text"
              classType="text-input-white"
              placeholder="이름"
              aria-invalid={!isDirty ? undefined : errors.name ? 'true' : 'false'}
              register={{
                ...register('name', {
                  required: '이름을 입력해주세요.',
                  pattern: {
                    value: /^[가-힣]{2,4}$/,
                    message: '이름을 한글로 올바르게 작성해주세요.',
                  },
                }),
              }}
            />
            {errors.name && (
              <small css={ErrStyle} role="alert">
                {errors.name.message}
              </small>
            )}

            <Input
              inputType="number"
              classType="text-input-white"
              placeholder="나이"
              aria-invalid={!isDirty ? undefined : errors.age ? 'true' : 'false'}
              register={{
                ...register('age', {
                  required: '나이를 입력해주세요.',
                  pattern: {
                    value: /^(0|[1-9]|[1-9][0-9])$/,
                    message: '나이는 0 이상 100 미만의 숫자로 입력해주세요.',
                  },
                }),
              }}
            />
            {errors.age && (
              <small css={ErrStyle} role="alert">
                {errors.age.message}
              </small>
            )}

            <Input
              inputType="number"
              classType="text-input-white"
              placeholder="개인신용점수"
              aria-invalid={!isDirty ? undefined : errors.credit ? 'true' : 'false'}
              register={{
                ...register('credit', {
                  required: '개인신용점수를 입력해주세요.',
                  pattern: {
                    value: /^(0|[1-9]|[1-9][0-9]|[1-9][1-9][1-9])$/,
                    message: '신용점수는 0 이상 999 미만의 숫자로 입력해주세요.',
                  },
                }),
              }}
            />
            {errors.credit && (
              <small css={ErrStyle} role="alert">
                {errors.credit.message}
              </small>
            )}

            <select
              css={SelectStyle}
              {...register('sex', {
                required: '성별을 선택해주세요.',
                validate: validateSelectOption,
              })}
            >
              <option value="">성별</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
            {errors.sex && (
              <small css={ErrStyle} role="alert">
                {errors.sex.message}
              </small>
            )}

            <select
              css={SelectStyle}
              {...register('bank', {
                required: '은행을 선택해주세요.',
                validate: validateSelectOption,
              })}
            >
              <option value="">선호 은행</option>
              <option value="bank1">공무원</option>
              <option value="bank2">개인사업자</option>
              <option value="bank3">무직</option>
            </select>
            {errors.bank && (
              <small css={ErrStyle} role="alert">
                {errors.bank.message}
              </small>
            )}

            <select
              css={SelectStyle}
              {...register('loan', {
                required: '선호하는 대출 종류를 선택해주세요.',
                validate: validateSelectOption,
              })}
            >
              <option value="">선호 대출 종류</option>
              <option value="">중장기 신용 대출</option>
              <option value="">단기 신용 대출</option>
              <option value="">소액 신용 대출</option>
            </select>
            {errors.loan && (
              <small css={ErrStyle} style={{ color: 'red' }} role="alert">
                {errors.loan.message}
              </small>
            )}

            <select
              css={SelectStyle}
              {...register('interest', {
                required: '선호하는 금리 종류를 선택해주세요.',
                validate: validateSelectOption,
              })}
            >
              <option value="">선호 금리 종류</option>
              <option value="interest1">고정 금리</option>
              <option value="interest2">변동 금리</option>
            </select>
            {errors.interest && (
              <small css={ErrStyle} style={{ color: 'red' }} role="alert">
                {errors.interest.message}
              </small>
            )}
            <Button type="submit" isDisabled={isSubmitting} height="50px" width="100%">
              Submit
            </Button>
          </SignupFormStyle>
        </SignupStyle>
      </FormContainer>

      <ModalBox
        isOpen={isBackModalOpen}
        text={'메인 화면으로 이동하시겠습니까?\n입력하신 정보는 삭제됩니다.'}
        onClickOk={goBack}
        onClickCancel={setIsBackModalOpen}
      />
      <ModalBox
        isOpen={isSubmitModalOpen}
        text={'회원가입을 완료하시겠습니까?'}
        onClickOk={modalSubmitHandler}
        onClickCancel={setIsSubmitModalOpen}
      />
    </SignForm>
  );
};

Modal.setAppElement('#root');

export default Signup;

export const SignForm = styled.div`
  background-color: ${COLORS.textInput};
`;

const SignupStyle = styled.div`
  padding: 5vh 20px 20px;
  position: relative;
  display: flex;
  flex-direction: column;

  #lottie {
    width: 100px;
  }
`;

const H1Style = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '5vh',
});

const LogoStyle = css({
  width: '80%',
});

const SelectStyle = css`
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  padding: 10px 15px;
  outline: none;

  option {
    background-color: white;
  }
`;

const SignupFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 15px;
`;

const FormContainer = styled.div`
  display: flex;
  padding: 20px 40px;
`;
