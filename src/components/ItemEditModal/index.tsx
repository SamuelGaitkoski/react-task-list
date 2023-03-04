import * as C from './styles';

import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item;
    onSaveEdit: (id: number, nameEdited: string) => void;
}

export const ItemEditModal = ({ item, onSaveEdit }: Props) => {
    const [nameEdited, setNameEdited] = useState<string>(item.name);
    const [errorSubmit, setErrorSubmit] = useState<string>("");

    const handleSaveEditItem = (id: number, nameEdited: string) => {
        if(nameEdited) {
            onSaveEdit(item.id, nameEdited);
        } else {
            setErrorSubmit("The input can't be empty.");
        }        
    }

    return (
        <C.Container>
            <C.Title>Item Edit</C.Title>
            <C.Input 
                type="text" 
                placeholder="Edit your task"
                value={nameEdited}
                onChange={event => setNameEdited(event.target.value)}
            />
            {errorSubmit &&
                <p>{errorSubmit}</p>
            }
            <C.ButtonArea>
                <C.Button onClick={handleSaveEditItem}>Salvar</C.Button>
            </C.ButtonArea>
        </C.Container>
    );
}