import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const StyledWriteActionButtons = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: 0.5rem;
    }
`;

// TagBox에서 사용하는 버튼과 같은 높이로 설정한 후 서로간의 여백 지정
const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: 0.5rem;
    }
`;

const WriteActionButtons = ({onCancel, onPublished, isEdit}) => {
    return (
        <StyledWriteActionButtons>
            <StyledButton cyan onClick={onPublished}>
                포스트 {isEdit ? '수정' : '등록'}
            </StyledButton>
            <StyledButton onClick={onCancel}>
                취소
            </StyledButton>
        </StyledWriteActionButtons>
    )
};

export default React.memo(WriteActionButtons);
