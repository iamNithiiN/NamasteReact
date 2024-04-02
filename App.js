import React from 'react';
import ReactDOM from 'react-dom/client';
//react element
const heading  = React.createElement(
  "h1",
  {id:"heading"},
  "Namste react using React.createElement 🚀"
)

console.log(heading);
//jsx - html like syntax babel transpiles this into react element 
const jsxHeading = (
    <h1 id="heading" className='head'>
      {heading}

      Namste react using jsx 🚀
    </h1>
);
/*
react component
there are 2 types of components:
class based component - old
functional component - new
*/ 
// react functional component is a function that returns a jsx code
const TitleComponent =()=>(
  <div className='container'>
    <h1 className='headingComponent'>Namste react Title component</h1>
  </div>
);
// component composition puting one component in another component
const HeadingComponent =()=>(
  <div className='container'>
    {heading/*  {inside brackets you can write react element or any js code}*/ }
    <TitleComponent />
    {TitleComponent()}
    <TitleComponent></TitleComponent>
    <h1 className='headingComponent'>Namste react functional component</h1>
  </div>
);

console.log(jsxHeading);

const root =  ReactDOM.createRoot(document.getElementById("root"));
//react element rendering
//root.render(jsxHeading);
// react component rendering
root.render(<HeadingComponent />)
