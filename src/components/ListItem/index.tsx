import { ChangeEvent, useState } from 'react';

import * as C from './styles';

import { Item } from '../../types/Item';

type Props = {
    item: Item;
    onUpdateDone: (id: number, checked: boolean) => void;
}

export const ListItem = ({ item, onUpdateDone }: Props) => {
    return (
        <C.Container done={item.done}>
            <input 
                type="checkbox" 
                checked={item.done} 
                onChange={event => onUpdateDone(item.id, event.target.checked)}
            />
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    )
}