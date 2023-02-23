/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router';
import COLORS from '@/styles/colors';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import BackButton from '@/components/common/BackButton';
import { ROUTES } from '@/constants/routes';
import { ErrStyle, InputBox, LogoStyle } from './Login';
import { useDispatch } from 'react-redux';
import { setModal } from '@/store/modalSlice';
import { IUser } from '@/interfaces/user';
import { MESSAGES } from '@/constants/messages';
import { showLoading, hideLoading } from '@/store/loadingSlice';
import { setCookie } from '@/utils/cookie';
import { login, signup } from '@/apis/auth';
import { AxiosError } from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
  } = useForm<IUser>();

  const initialFormData = {
    email: '',
    password: '',
    passwordConfirm: '',
    // name: '',
    job: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    sex: '',
    loan: '',
    credit: '',
    interest: '',
  };

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

  let FormData: IUser;

  const onSubmit = async (data: IUser) => {
    FormData = { ...initialFormData, ...data };
    console.log(FormData);
    dispatch(
      setModal({
        isOpen: true,
        onClickOk: modalSubmitHandler,
        onClickCancel: () => dispatch(setModal({ isOpen: false })),
        text: MESSAGES.SIGNUP.SUBMIT_CHECK,
      }),
    );
  };

  const modalSubmitHandler = async (event: any) => {
    // await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(FormData));
    try {
      dispatch(showLoading());
      const response = await signup({
        userEmail: FormData.email,
        userPassword: FormData.password,
        userGender: FormData.sex,
        userBirthDate: FormData.birthYear + FormData.birthMonth + FormData.birthDay,
        userJob: FormData.job,
        userPrefCreditProductTypeName: FormData.loan,
        userPrefInterestType: FormData.interest,
        userCreditScore: FormData.credit,
      });
      dispatch(
        setModal({
          text: MESSAGES.SIGNUP.COMPLETE_SIGNUP,
        }),
      );
      dispatch(
        setModal({
          isOpen: false,
        }),
      );
      dispatch(showLoading());
      const loginResponse = await login({
        userEmail: FormData.email,
        userPassword: FormData.password,
      });
      setCookie('userName', '방문자');
      setCookie('accessToken', loginResponse);
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.LOGIN.AUTO_LOGIN,
          onClickOk: () => {
            dispatch(
              setModal({
                isOpen: false,
              }),
            );
          },
        }),
      );
      goWelcome();
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.SIGNUP.CHECK_EMAIL_DUPLICATE,
          }),
        );
      } else {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.SIGNUP.ERROR_SIGNUP,
          }),
        );
      }
    } finally {
      dispatch(hideLoading());
    }
  };

  const validateSelectOption = (value: string) => {
    return value === '' ? 'Please select an option' : true;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const backModalOpen = () => {
    dispatch(
      setModal({
        isOpen: true,
        onClickOk: goBack,
        onClickCancel: () => dispatch(setModal({ isOpen: false })),
        text: MESSAGES.SIGNUP.BACK_BUTTON_CAUTION,
      }),
    );
  };

  const handleEvent = () => {
    history.pushState(null, '', location.href);
    backModalOpen();
  };

  const goBack = () => {
    navigate(-2);
    dispatch(
      setModal({
        isOpen: false,
      }),
    );
  };

  const goWelcome = () => {
    navigate(ROUTES.WELCOME, { state: ROUTES.SIGNUP });
  };

  return (
    <SignForm>
      <BackButton onClick={backModalOpen} size={25} />
      <SignupStyle>
        <h1 css={mb30}>
          <LogoStyle src="../../images/logo_Main.png" alt="" />
        </h1>
        <SignupFormStyle onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
          <SignupFormPanel>
            <InputBox className={errors.email ? 'active' : dirtyFields.email ? 'active' : ''}>
              <Input
                id="SignupEmail"
                label="Email"
                inputType="text"
                classType="text-input-white"
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
              {errors.email && <ErrStyle role="alert">{errors.email.message}</ErrStyle>}
            </InputBox>
            <InputBox className={errors.password ? 'active' : dirtyFields.password ? 'active' : ''}>
              <Input
                id="SignupPw"
                label="Password"
                inputType="password"
                classType="text-input-white"
                aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
                register={{
                  ...register('password', {
                    required: '비밀번호를 입력해주세요.',
                    minLength: { value: 8, message: '비밀번호를 8자리 이상 입력해주세요.' },
                  }),
                }}
              />
              {errors.password && <ErrStyle role="alert">{errors.password.message}</ErrStyle>}
            </InputBox>

            <InputBox
              className={
                errors.passwordConfirm ? 'active' : dirtyFields.passwordConfirm ? 'active' : ''
              }
            >
              <Input
                id="SignupPwConfirm"
                label="Password Confirm"
                inputType="password"
                classType="text-input-white"
                aria-invalid={!isDirty ? undefined : errors.passwordConfirm ? 'true' : 'false'}
                register={{
                  ...register('passwordConfirm', {
                    required: true,
                    validate: (value) => value === passwordRef.current,
                  }),
                }}
              />
              {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' && (
                <ErrStyle role="alert">비밀번호가 일치하지 않습니다.</ErrStyle>
              )}
            </InputBox>

            <InputBox className={errors.job ? 'active' : dirtyFields.job ? 'active' : ''}>
              <Input
                id="SignupJob"
                label="Job"
                inputType="text"
                classType="text-input-white"
                aria-invalid={!isDirty ? undefined : errors.job ? 'true' : 'false'}
                register={{
                  ...register('job', {
                    required: '직업을 입력해주세요.',
                    pattern: {
                      value: /^[가-힣]{2,4}$/,
                      message: '직업을 한글로 올바르게 작성해주세요.',
                    },
                  }),
                }}
              />
              {errors.job && <ErrStyle role="alert">{errors.job.message}</ErrStyle>}
            </InputBox>

            <InputBox
              css={BirthStyle}
              className={
                errors.birthYear || errors.birthDay || errors.birthMonth
                  ? 'active'
                  : dirtyFields.birthYear || dirtyFields.birthDay || dirtyFields.birthMonth
                  ? 'active'
                  : ''
              }
            >
              <SelectLabel>Birth</SelectLabel>
              <SelectStyle
                {...register('birthYear', {
                  required: '생년월일을 선택해주세요.',
                })}
              >
                <option value="">연도</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </SelectStyle>
              <SelectStyle {...register('birthMonth')}>
                <option value="">월</option>
                <option value="01">1</option>
                <option value="02">2</option>
              </SelectStyle>
              <SelectStyle {...register('birthDay')}>
                <option value="">일</option>
                <option value="01">1</option>
                <option value="02">2</option>
              </SelectStyle>
              {(errors.birthYear || errors.birthDay || errors.birthMonth) && (
                <ErrStyle role="alert">{errors.birthYear!.message}</ErrStyle>
              )}
            </InputBox>

            <InputBox className={errors.credit ? 'active' : dirtyFields.credit ? 'active' : ''}>
              <Input
                id="SignupCreditScore"
                label="Personality Credit Score"
                inputType="text"
                classType="text-input-white"
                aria-invalid={!isDirty ? undefined : errors.credit ? 'true' : 'false'}
                register={{
                  ...register('credit', {
                    required: '개인신용점수를 입력해주세요.',
                    pattern: {
                      value: /^(0|[1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
                      message: '신용점수는 0 이상 999 미만의 숫자로 입력해주세요.',
                    },
                  }),
                }}
              />
              {errors.credit && <ErrStyle role="alert">{errors.credit.message}</ErrStyle>}
            </InputBox>

            <InputBox className={errors.sex ? 'active' : dirtyFields.sex ? 'active' : ''}>
              <SelectLabel>Gender</SelectLabel>
              <SelectStyle
                {...register('sex', {
                  required: '성별을 선택해주세요.',
                  validate: validateSelectOption,
                })}
              >
                <option value="">성별</option>
                <option value="남">남성</option>
                <option value="여">여성</option>
              </SelectStyle>
              {errors.sex && <ErrStyle role="alert">{errors.sex.message}</ErrStyle>}
            </InputBox>

            <InputBox className={errors.loan ? 'active' : dirtyFields.loan ? 'active' : ''}>
              <SelectLabel>Type of Loan</SelectLabel>
              <SelectStyle
                {...register('loan', {
                  required: '선호하는 대출 종류를 선택해주세요.',
                  validate: validateSelectOption,
                })}
              >
                <option value="">선호 대출 종류</option>
                <option value="일반신용대출">일반신용대출</option>
                <option value="마이너스한도대출">마이너스한도대출</option>
                <option value="장기카드대출(카드론)">장기카드대출</option>
              </SelectStyle>
              {errors.loan && <ErrStyle role="alert">{errors.loan.message}</ErrStyle>}
            </InputBox>

            <InputBox className={errors.interest ? 'active' : dirtyFields.interest ? 'active' : ''}>
              <SelectLabel>Type of Rate</SelectLabel>
              <SelectStyle
                {...register('interest', {
                  required: '선호하는 금리 종류를 선택해주세요.',
                  validate: validateSelectOption,
                })}
              >
                <option value="">선호 금리 종류</option>
                <option value="대출금리">대출금리</option>
                <option value="기준금리">기준금리</option>
                <option value="가산금리">가산금리</option>
              </SelectStyle>
              {errors.interest && <ErrStyle role="alert">{errors.interest.message}</ErrStyle>}
            </InputBox>
          </SignupFormPanel>
          <Button type="submit" isDisabled={isSubmitting} height="50px" width="calc(100% - 140px)">
            Submit
          </Button>
        </SignupFormStyle>
      </SignupStyle>
    </SignForm>
  );
};

Modal.setAppElement('#root');

export default Signup;

export const SignForm = styled.div`
  background-color: ${COLORS.textInput};
  height: calc(100% + 115px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  #lottie {
    width: 100px;
  }
`;

const SelectStyle = styled.select`
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  padding: 10px 15px;
  outline: none;
  cursor: pointer;

  option {
    background-color: white;
  }
`;

export const SignupFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupFormPanel = styled.div`
  width: 100%;
  padding: 20px 70px;
  margin-bottom: 30px;
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
`;

const mb30 = css`
  margin-bottom: 30px;
  padding: 0 70px;
`;

const BirthStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectLabel = styled.label`
  position: absolute;
  font-size: 13px;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${COLORS.gray};
  cursor: pointer;
  transition: 0.5s;
  opacity: 0;
  z-index: -1;
`;
