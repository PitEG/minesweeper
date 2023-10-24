import {useState} from 'react';

interface BoardProps {
  dimensions: {x : number, y : number};
  onFinish?: ()=>void;
}

export default function Game(props : BoardProps) {
  // this is the "revealed cells" matrix
  let [board,setBoard] : [Array<boolean>,any] = useState(Array(props.dimensions.x * props.dimensions.y).fill(false));
  
  // macro for change a cell in the board state
  const setCell = (id : number, value : boolean) => {
    const newBoard = board.map((x,i) => {
        if (i === id) {
          return value;
        }
        else {
         return x;
        }
    });
    setBoard(newBoard);
  }

  // the visual we see in the app
  const displayBoard = board.map((entry,i) => 
      (<button key={i} onClick={()=>{setCell(i,true);}}>{entry ? 'true' : 'false'}</button>))
  
  return (
      <div>
        <h1> GAME </h1>
        {displayBoard}
      </div>
  );
}
