const reactContainer = document.getElementById("react");
const HeadlineComponent = (props) => {
  return React.createElement('h1', null, 'Hello Dojo!');
}
const Title = (props) => {
  const { back } = props;
  const { text } = props;
  const { color } = props;
  return React.createElement('h1', {style:{ backgroundColor: back, color:color}}, text);
}
const App = (props) => {
  return React.createElement('div', null,
      React.createElement(Title, { text: 'white on blue' , color: "white", back: "blue"} ),
      React.createElement(Title, { text: 'blue on red' , color: "blue", back: "red"} ),
      React.createElement(Title, { text: 'green on pink' , color: "green", back: "pink"} ),
  )
}
ReactDOM.render(
  React.createElement(App),
  reactContainer
);