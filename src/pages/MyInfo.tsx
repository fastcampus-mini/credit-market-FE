import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import COLORS from '@/styles/colors';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { ErrStyle, InputBox } from './Login';
import { useDispatch } from 'react-redux';
import { SelectLabel } from './Signup';
import { setModal } from '@/store/modalSlice';
import { IPassword, IUser } from '@/interfaces/user';
import { MESSAGES } from '@/constants/messages';
import { css } from '@emotion/react';
import { userInfoUpdate } from '@/apis/auth';
import { showLoading, hideLoading } from '@/store/loadingSlice';

const MyInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
  } = useForm<IUser>();
  const [FormData, setFormData] = useState<IUser>({
    email: '',
    password: '',
    passwordConfirm: '',
    job: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    sex: '',
    loan: '',
    credit: '',
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

  const validateSelectOption = (value: string) => {
    return value === '' ? 'Please select an option' : true;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const onSubmit = (data: IUser) => {
    setFormData(data);
    dispatch(
      setModal({
        isOpen: true,
        text: MESSAGES.MYPAGE.INFO.SUBMIT,
        onClickOk: onClickOk,
        onClickCancel: () => dispatch(setModal({ isOpen: false })),
      }),
    );
  };

  const onClickOk = async () => {
    try {
      dispatch(showLoading());
      const response = await userInfoUpdate({
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
          isOpen: true,
          text: MESSAGES.MYPAGE.INFO.CHECK_SUCCESS,
          onClickOk: () => {
            dispatch(
              setModal({
                isOpen: false,
              }),
            );
          },
        }),
      );
      const goBack = () => {
        navigate(ROUTES.MYPAGE, { state: ROUTES.MYPAGE });
      };
      goBack();
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.MYPAGE.INFO.CHECK_FAIL,
          }),
        );
      } else {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.MYPAGE.INFO.ERROR,
          }),
        );
      }
    } finally {
      dispatch(hideLoading());
    }
  };

  const handleEvent = () => {
    history.pushState(null, '', location.href);
    dispatch(
      setModal({
        isOpen: true,
        text: '모달 내용 작성',
        onClickOk: () => {},
        onClickCancel: () => {},
      }),
    );
  };

  const years = Array.from({ length: 54 }, (_, i) => 2023 - i);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const days = Array.from({ length: 31 }, (_, i) => 1 + i);
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDay());
  const handleChangeDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(parseInt(event.target.value));
  };

  return (
    <MypageContainer>
      <MypageHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="개인정보 수정" />
      </MypageHeader>
      <MyInfoWrap>
        <SignupFormStyle onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
          <InputBox className={errors.email ? 'active' : dirtyFields.email ? 'active' : ''}>
            <Input
              id="SignupEmail"
              label="이메일"
              inputType="text"
              classType="text-input-white"
              autoFocus
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
              label="비밀번호"
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
              label="비밀번호 확인"
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
              label="직업"
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
            <SelectLabel>생일</SelectLabel>
            <SelectStyle
              {...register('birthYear', {
                required: '생년월일을 선택해주세요.',
              })}
              value={selectedYear}
              onChange={handleChange}
            >
              <option value="">연도</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </SelectStyle>
            <SelectStyle {...register('birthMonth')}>
              <option value="">월</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </SelectStyle>
            <SelectStyle {...register('birthDay')} value={selectedDay} onChange={handleChangeDay}>
              <option value="">일</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </SelectStyle>
            {(errors.birthYear || errors.birthDay || errors.birthMonth) && (
              <ErrStyle role="alert">{errors.birthYear!.message}</ErrStyle>
            )}
          </InputBox>

          <InputBox className={errors.credit ? 'active' : dirtyFields.credit ? 'active' : ''}>
            <Input
              id="SignupCreditScore"
              label="개인신용점수"
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
            <SelectLabel>성별</SelectLabel>
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
            <SelectLabel>대출 종류</SelectLabel>
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
            <SelectLabel>금리 종류</SelectLabel>
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

          <Button
            type="submit"
            isDisabled={isSubmitting}
            height="40px"
            width="100%"
            fontWeight={800}
          >
            SUBMIT
          </Button>
        </SignupFormStyle>
      </MyInfoWrap>
    </MypageContainer>
  );
};

Modal.setAppElement('#root');

export default MyInfo;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BirthStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MypageHeader = styled.div`
  display: flex;
`;

const MyInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  height: 100%;
`;

const SelectStyle = styled.select`
  background-color: ${COLORS.textInput};
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
  padding: 20px;
`;
