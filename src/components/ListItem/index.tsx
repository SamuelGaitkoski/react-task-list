import { ChangeEvent, useState } from 'react';

import * as C from './styles';

import { Item } from '../../types/Item';

type Props = {
    item: Item;
    onUpdateDone: (id: number, checked: boolean) => void;
    onDeleteItem: (id: number) => void;
    onEditItem: (id: number) => void;
}

export const ListItem = ({ item, onUpdateDone, onDeleteItem, onEditItem }: Props) => {
    return (
        <C.Container done={item.done}>
            <C.LeftArea>
                <input 
                    type="checkbox" 
                    checked={item.done} 
                    onChange={event => onUpdateDone(item.id, event.target.checked)}
                />
                <label>{item.name}</label>
            </C.LeftArea>
            <C.RightArea>
                <button onClick={() => onEditItem(item.id)}>Edit</button>
                <button onClick={() => onDeleteItem(item.id)}>Delete</button>
            </C.RightArea>
        </C.Container>
    )
}