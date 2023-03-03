import styled from "styled-components";

type ContainerProps = {
    done: boolean;
};

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    button {
        height: 25px;
    }
`));

export const LeftArea = styled.div`
    display: flex;
    align-items: center;
`;

export const RightArea = styled.div`
    display: flex;
    align-items: center;
`;