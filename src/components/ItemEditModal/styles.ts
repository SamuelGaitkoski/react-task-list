import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 200px;
    background-color: #20212C;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 250px;
    left: 500px;
`;

export const Title = styled.h3`
    color: #FFF;
`;

export const Input = styled.input`
    border: 1px solid #555;
    border-radius: 15px;
    background: transparent;
    outline: 0;
    color: #FFF;
    font-size: 17px;
    padding: 12px;
`;

export const ButtonArea = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

interface ButtonProps {
    readonly onClick: any;
}

export const Button = styled.button<ButtonProps>`
    width: 80px;
    height: 25px;
`;


