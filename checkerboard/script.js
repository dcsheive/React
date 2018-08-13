const reactContainer = document.getElementById("react");
const App = (props) => {
  return React.createElement('div', null, 
    React.createElement(Board,{rows: 12, columns: 12}),
    // React.createElement(Inputs)
  )
}
// const Inputs = (props) => {
//   return React.createElement('div',null,  
//     React.createElement('input',{name:'rows'}),
//     React.createElement('input',{name:'columns'})
//   )
// }
const Board = (props) => {
  const {columns} = props
  const {rows} = props
  let arr = []
  for (let i = 0; i< columns; i++){
    if(i% 2 == 1){
      arr.push(React.createElement(Row,{number:rows, status: 1}))
    } 
    else {
      arr.push(React.createElement(Row,{number:rows, status: 0}))
    }
  }
  return React.createElement('div', null, arr)  
}
function Row (props) {
  const { status } = props
  const { number } = props
  let arr = []
  for (let j = 0; j< number; j++){
    if((j+status) % 2 == 1){
      arr.push(React.createElement(Cell, {color:'red'}))
    } 
    else {
      arr.push(React.createElement(Cell, {color:'black'}))
    }
  }
  return React.createElement('div', null, arr)
}
function Cell (props) {
  const { color } = props
  return React.createElement('div', {style:{ backgroundColor: color, height: '20px', width: '20px', display:'inline-block'}}, "")
}
ReactDOM.render(
  React.createElement(App),
  reactContainer
);