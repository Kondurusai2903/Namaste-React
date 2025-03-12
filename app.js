// const h1 = document.createElement("h1");
// h1.innerHTML = `
//       <div>
//        <h2>I am konduru Sai</h2>
//        <p>I am learing namaste React by Akshay Saini </p>
//       </div>
//       `;

// const root = document.getElementById("root");
// root.appendChild(h1);
{
  /* <div>
  <div>
    <h1>I am Konduru Sai</h1>
    <p>I am Learing ReactJs by Akshay Saini</p>
  </div>
  <div>
    <h1>I am Konduru Sai</h1>
    <p>I am Learing ReactJs by Akshay Saini</p>
  </div>
</div>; */
}
const innerDiv = React.createElement("div", {}, [
  React.createElement(
    "h1",
    {},
    "I am konduru sai working in Pathbeat as a Intern"
  ),
  React.createElement("p", {}, "I am Learning ReactJs by Akshay Saini"),
]);
const outerDiv = React.createElement("div", {}, [innerDiv, innerDiv]);

const h1 = React.createElement(
  "h1",
  { id: "heading" },
  "this is Created by Akshay Saini Learning By Konduru Sai"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(outerDiv);
