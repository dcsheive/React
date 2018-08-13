// const buttonProps = {
//   onClick() { alert('You clicked me!'); } // ES6 method definition! See https://developer.mozilla.org/...
//   }
//   ReactDOM.render(
//   React.createElement('button', buttonProps, 'Click me!'),
//   document.getElementById('react')
// );
function Header(props) {
  const {title} = props; // Destructuring assignment.
  
  return React.createElement(Title, {title});
}
function Title({title}) { // Destructuring done in the parameter. This is a standard React pattern
  return React.createElement('h3', null, `${title}`);
}
Header({title: 'Hello World'}); // Will always return a Header with a 'Hello World' Title
Header({title: 'Goodbye World'});