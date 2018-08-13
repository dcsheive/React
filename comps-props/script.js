const reactContainer = document.getElementById("react");
const HeadlineComponent = (props) => {
  return React.createElement('h1', null, 'Hello Dojo!');
}
const Title = (props) => {
  const { text } = props;
  return React.createElement('h1', null, text);
}
const App = (props) => {
  return React.createElement('div', null,
      React.createElement(Title, { text: 'Title one!' } ),
      React.createElement(Title, { text: 'Title two!!' } ),
      React.createElement(Title, { text: 'Title three!!!' } )
  )
}
ReactDOM.render(
  React.createElement(App),
  reactContainer
);