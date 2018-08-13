const reactContainer = document.getElementById("react");
setInterval(function(){
    var event = new Date().toString();
    ReactDOM.render(
        React.createElement(
            "div",
            { className: "demo" },
            "The time is: "+event,
            React.createElement("input")
        ),
        reactContainer
    );
},1000)

// const jsContainer = document.getElementById("js");
// const reactContainer = document.getElementById("react");
// const render = () => {
//   jsContainer.innerHTML = `
//     <div class="demo">
//       Hello JS
//       <input />
//       <p>${new Date()}</p>
//     </div>
//   `;
//   ReactDOM.render(
//     React.createElement(
//       "div",
//       { className: "demo" },
//       "Hello React ",
//       React.createElement("input"),
//       React.createElement(
//         "p",
//         null,
//         new Date().toString()
//       )
//     ),
//     reactContainer
//   );
// }
// setInterval(render, 1000);