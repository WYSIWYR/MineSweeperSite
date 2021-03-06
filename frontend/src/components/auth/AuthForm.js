import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

// 회원가입/로그인 폼 컴포넌트
const StyledAuthForm = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

// 스타일링된 input
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

// 메인 화면, 회원가입/로그인 링크
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        $:hover {
        color: ${palette.gray[9]};
    }
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];

    return (
        <StyledAuthForm>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput
                    autoComplete={"username"}
                    name={"username"}
                    placeholder={"아이디"}
                    onChange={onChange}
                    value={form.username}
                />
                <StyledInput
                    autoComplete={"new-password"}
                    name={"password"}
                    placeholder={"비밀번호"}
                    type={"password"}
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplete={"new-password"}
                        name={"passwordConfirm"}
                        placeholder={"비밀번호 확인"}
                        type={"password"}
                        onChange={onChange}
                        value={form.passwordConfirm}
                    />
                )}

                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button cyan fullWidth marginTop={"1rem"}>
                    {text}
                </Button>
            </form>
            <Footer>
                <Link to={"/"}>
                    메인 화면
                </Link>
                {type === 'login' ? (
                    <Link to={"/register"}>회원가입</Link>
                ) : (
                    <Link to={"/login"}>로그인</Link>
                )}
            </Footer>
        </StyledAuthForm>
    );
};

export default AuthForm;
