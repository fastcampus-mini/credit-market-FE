import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import React, { useRef, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router';
import COLORS from '@/styles/colors';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import ModalBox from '@/components/template/ModalBox';
import { ErrStyle, InputBox } from './Login';
import { useDispatch } from 'react-redux';
import { setPasswordModal } from '@/store/passModalSlice';
import { SelectLabel } from './Signup';

const MyInfo = () => {
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
  const navigate = useNavigate();
  const location1 = useLocation();
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
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

  const dispatch = useDispatch();

  dispatch(
    setPasswordModal({
      isOpen: true,
    }),
  );

  return (
    <MypageContainer>
      <MypageHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="개인정보 수정" />
      </MypageHeader>
      <MyInfoWrap>
        <SignupFormStyle onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
          <InputBox className={errors.password ? 'active' : dirtyFields.password ? 'active' : ''}>
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
            {errors.password && <ErrStyle role="alert">{errors.password.message}</ErrStyle>}
          </InputBox>

          <InputBox
            className={
              errors.passwordConfirm ? 'active' : dirtyFields.passwordConfirm ? 'active' : ''
            }
          >
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
              <ErrStyle role="alert">비밀번호가 일치하지 않습니다.</ErrStyle>
            )}
          </InputBox>

          <InputBox className={errors.credit ? 'active' : dirtyFields.credit ? 'active' : ''}>
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
              <option value="male">남성</option>
              <option value="female">여성</option>
            </SelectStyle>
            {errors.sex && <ErrStyle role="alert">{errors.sex.message}</ErrStyle>}
          </InputBox>

          <InputBox className={errors.bank ? 'active' : dirtyFields.bank ? 'active' : ''}>
            <SelectLabel>Bank</SelectLabel>
            <SelectStyle
              {...register('bank', {
                required: '은행을 선택해주세요.',
                validate: validateSelectOption,
              })}
            >
              <option value="">선호 은행</option>
              <option value="bank1">공무원</option>
              <option value="bank2">개인사업자</option>
              <option value="bank3">무직</option>
            </SelectStyle>
            {errors.bank && <ErrStyle role="alert">{errors.bank.message}</ErrStyle>}
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
              <option value="">중장기 신용 대출</option>
              <option value="">단기 신용 대출</option>
              <option value="">소액 신용 대출</option>
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
              <option value="interest1">고정 금리</option>
              <option value="interest2">변동 금리</option>
            </SelectStyle>
            {errors.interest && <ErrStyle role="alert">{errors.interest.message}</ErrStyle>}
          </InputBox>
          <Button type="submit" isDisabled={isSubmitting} height="50px" width="100%">
            Submit
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
