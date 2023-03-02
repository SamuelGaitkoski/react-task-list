import { useState } from 'react';

import * as C from './App.styles';

import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Task 1', done: false },
    { id: 2, name: 'Task 2', done: true }
  ]);

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

  return (
    <C.Container>
      <C.Area>
        <C.Header>Task List</C.Header>

        {/* não vamos adicionar nada dentro do componente AddArea, temos que adicionar fora, pois nossa lista está aqui, então nosso componente AddArea tem que receber uma função, que vamos criar, para que quando um item for adicionado dentro do componente AddArea ele execute essa função para executar outra função dentro do nosso componente principal */}
        <AddArea onEnter={handleAddTask} />

        {/* quando o list muda, ele renderiza o list novamente, o React ve o que mudou e modifica o que mudou, jogando um novo item quando o mesmo é adicionado na lista */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} onUpdateDone={handleUpdateDone} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
