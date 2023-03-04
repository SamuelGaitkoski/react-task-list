import { useState } from 'react';

import * as C from './App.styles';

import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { ItemEditModal } from './components/ItemEditModal';  

import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Task 1', done: false },
    { id: 2, name: 'Task 2', done: true }
  ]);
  const [itemToEdit, setItemToEdit] = useState<Item>();

  // criando função que vai ser executada após adicionar uma tarefa nova. Função vai receber o nome da nossa tarefa.
  const handleAddTask = (taskName: string) => {
    // adicionar na nossa lista (clonando a lista e adicionando um item novo na mesma).
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    // pegando clone e atualizando nossa lista.
    setList(newList);
  }

  const handleUpdateDone = (id: number, checked: boolean) => {
    let newList = [...list];
    
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = checked;
      }
    }

    setList(newList);
  }

  const handleDeleteItem = (id: number) => {
    let newList = [...list];

    newList = newList.filter((item) => item.id !== id);

    setList(newList);
  }

  const handleEditItem = (id: number) => {
    for(let i in list) {
      if(list[i].id === id) {
        setItemToEdit(list[i]);
      }
    }
  }

  const handleSaveEditedName = (id: number, nameEdited: string) => {
    let newList = [...list];

    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].name = nameEdited;
      }
    }

    setList(newList);
  }

  return (
    <C.Container style={{ filter: itemToEdit ? 'brightness(1)' : 'brightness(1)' }}>
      <C.Area>
        <C.Header>Task List</C.Header>

        {/* não vamos adicionar nada dentro do componente AddArea, temos que adicionar fora, pois nossa lista está aqui, então nosso componente AddArea tem que receber uma função, que vamos criar, para que quando um item for adicionado dentro do componente AddArea ele execute essa função para executar outra função dentro do nosso componente principal */}
        <AddArea onEnter={handleAddTask} />

        {itemToEdit &&
          <ItemEditModal item={itemToEdit} onSaveEdit={handleSaveEditedName} />
        }

        {/* quando o list muda, ele renderiza o list novamente, o React ve o que mudou e modifica o que mudou, jogando um novo item quando o mesmo é adicionado na lista */}
        {list.map((item, index) => (
          <ListItem 
            key={index} 
            item={item} 
            onUpdateDone={handleUpdateDone} 
            onDeleteItem={handleDeleteItem} 
            onEditItem={handleEditItem}
          />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
