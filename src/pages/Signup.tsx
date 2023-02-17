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
  const onSubmit = (data: FormValues) => {
    setFormData(data);
    setModal2IsOpen(true);
  };

  const validateSelectOption = (value: string) => {
    if (value === '') {
      return 'Please select an option';
    } else {
      return true;
    }
  };

  // 비밀번호와 비밀번호 확인이 일치하는지 검증하기 위해 "password" input 의 value 를 추적함
  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('password');

  const modalSubmitHandler = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(FormData));
    goWelcome();
  };

  const navigate = useNavigate();
  const location1 = useLocation();
  const goBack = () => {
    navigate(location1.state?.from || '/', { replace: true });
  };

  const goWelcome = () => {
    navigate('/signup/welcome', { state: '/signup' });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const handleEvent = () => {
    history.pushState(null, '', location.href);
    setModal1IsOpen(true);
  };

  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', handleEvent);
    return () => {
      window.removeEventListener('popstate', handleEvent);
    };
  }, []);

  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  return (
    <SignForm>
      <BackButton onClick={() => setModal1IsOpen(true)} size={25} />
      <Modal css={ModalStyle} isOpen={modal1IsOpen} onRequestClose={() => setModal1IsOpen(false)}>
        <h2 style={{ color: 'red' }}>주의!</h2>
        <br />
        <p>정말 회원가입을 중단하고 홈으로 이동하실 건가요?</p>
        <br />
        <p>데이터는 보존되지 않습니다.</p>
        <br />
        <ButtonSpace>
          <ButtonWrapper>
            <button onClick={goBack}>네</button>
            <button onClick={() => setModal1IsOpen(false)}>아니요</button>
          </ButtonWrapper>
        </ButtonSpace>
      </Modal>
      <Global
        styles={css`
          .ReactModalPortal {
            z-index: 999;
          }
          .ReactModal__Overlay {
            z-index: 999;
          }
        `}
      />
      <FormContainer>
        <SignupStyle>
          <div className="title">
            <h1 css={H1Style}>
              <img css={LogoStyle} src="../../images/logo_Main.png" alt="" />
            </h1>
          </div>
          <SignupFormStyle onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
            <label>email</label>
            <Input
              inputType="text"
              classType="text-input"
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
            {errors.email && <small role="alert">{errors.email.message}</small>}

            <label>password</label>
            <Input
              inputType="password"
              classType="text-input"
              placeholder="비밀번호"
              aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
              register={{
                ...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: { value: 8, message: '비밀번호를 8자리 이상 입력해주세요.' },
                }),
              }}
            />
            {errors.password && <small role="alert">{errors.password.message}</small>}

            <label>password confirm</label>
            <Input
              inputType="password"
              classType="text-input"
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
              <small role="alert">비밀번호가 일치하지 않습니다.</small>
            )}

            <label>name</label>
            <Input
              inputType="text"
              classType="text-input"
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
            {errors.name && <small role="alert">{errors.name.message}</small>}

            <label>age</label>
            <Input
              inputType="number"
              classType="text-input"
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
            {errors.age && <small role="alert">{errors.age.message}</small>}

            <label>sex</label>
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
              <small style={{ color: 'red' }} role="alert">
                {errors.sex.message}
              </small>
            )}

            <label>bank</label>
            <select
              css={SelectStyle}
              {...register('bank', {
                required: '성별을 선택해주세요.',
                validate: validateSelectOption,
              })}
            >
              <option value="bank1">선호 은행</option>
              <option value="bank2">공무원</option>
              <option value="bank3">개인사업자</option>
              <option value="bank4">무직</option>
            </select>
            {errors.bank && (
              <small style={{ color: 'red' }} role="alert">
                {errors.bank!.message}
              </small>
            )}

            <label>credit score</label>
            <Input
              inputType="number"
              classType="text-input"
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
            {errors.password && <small role="alert">{errors.password.message}</small>}

            <label>loan</label>
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
              <small style={{ color: 'red' }} role="alert">
                {errors.loan.message}
              </small>
            )}

            <label>interest rate</label>
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
              <small style={{ color: 'red' }} role="alert">
                {errors.interest.message}
              </small>
            )}

            <Button type="submit" isDisabled={isSubmitting} height="40">
              Submit
            </Button>

            <Modal
              css={ModalStyle}
              isOpen={modal2IsOpen}
              onRequestClose={() => setModal2IsOpen(false)}
            >
              <h2 style={{ color: 'red' }}>Submit</h2>
              <br />
              <p>정말 제출하시겠어요?</p>
              <br />
              <ButtonSpace>
                <ButtonWrapper>
                  <button onClick={modalSubmitHandler}>네</button>
                  <button onClick={() => setModal2IsOpen(false)}>아니요</button>
                </ButtonWrapper>
              </ButtonSpace>
            </Modal>
          </SignupFormStyle>
        </SignupStyle>
      </FormContainer>
    </SignForm>
  );
};

Modal.setAppElement('#root');

export default Signup;

export const SignForm = styled.div`
  padding: 35px 5px;
`;

const SignupStyle = styled.div`
  padding: 30px 10px;
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

const ModalStyle = css`
  text-align: center;
  width: 15%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const SelectStyle = css`
  background-color: ${COLORS.textInput};
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  padding: 10px 15px;
  outline: none;
  option {
    background-color: white;
    height: 40px;
    padding: 10px;
  }
`;

const SignupFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 15px;
`;

const ButtonSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FormContainer = styled.div`
  display: flex;
  overflow: scroll;
  height: 87vh;
  padding: 20px 40px;
`;
