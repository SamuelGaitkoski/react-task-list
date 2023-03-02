import { useState, KeyboardEvent } from 'react';

import * as C from './styles';

// onEnter (função que não retorna nada e recebe o parametro taskName)
type Props = {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState("");

    // onKeyUp (evento de quando uma tecla for soltada, logo, uma tecla foi clicada).
    const handleKeyUp = (event: KeyboardEvent) => {
        if(event.code === "Enter" && inputText !== "") {
            // aqui executamos a função criada la no App.tsx, passando o que foi digitado no input, que está na state inputText.
            onEnter(inputText);
            setInputText("");
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input 
                type="text"
                placeholder="Add a task"
                value={inputText}
                onChange={event => setInputText(event.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}