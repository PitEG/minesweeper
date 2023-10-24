import {useState} from 'react';

const initialBoard = [false,false,false,false,false]; 

export default function Game() {
  let [board,setBoard] : [Array<boolean>,any] = useState(initialBoard);
  
  function setCell(id : number, value : boolean) {
    const newBoard = board.map((x,i) => {
        if (i === id) {
          return value;
        }
        else {
         return x;
        }
    });
    setBoard(newBoard);
    console.log('set board value');
  }

  const displayBoard = board.map((entry,i) => 
      (<button key={i} onClick={()=>{setCell(i,true);}}>{entry ? 'true' : 'false'}</button>))
  
  return (
      <div>
        <h1> GAME </h1>
        {displayBoard}
      </div>
  );
}
