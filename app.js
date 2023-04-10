// TODO
const App = () => (
  <div>
    <p>My Grocery List</p>
    <Items list={['apples', 'bananas', 'oranges', 'candy', 'cereal']}/>
  </div>
)

const Items = (props) => {

  // const onListItemClick = (event) => {
  //   console.log('I got clicked');
  // }

  return (

  <ul>
    {props.list.map((item) => (
      <TodoListItem fruit={item}/>
    ))}
  </ul>
  );
};

const {useState} = React;

const TodoListItem = (props) => {

  const [isDone, setIsDone] = useState(false);
  const [isBold, setBold] = useState(false);

  const style = {
    textDecoration: isDone  ? 'line-through' : 'none',
    fontWeight: isBold ? 'Bold' : 'Normal'
  };

  return (
  <li style={style} onClick={() => setIsDone(!isDone)} onMouseOver={() => setBold(!isBold)} >{props.fruit}</li>
  )
}

// const Item2 = () => (
//   <ul>
//     <li>{props.items[1]}</li>
//   </ul>
// )

ReactDOM.render(<App />, document.getElementById('app'))