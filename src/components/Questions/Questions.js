import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
      
    <div className='questions'>
        
        <h2>How does react works?</h2>
        <p>React is aJavaScript-based UI development library. Although React is a rather than a language library. React basically maintains a tree. This tree is able to do efficient diff computations on the nodes. Think HTML code as a tree. It has a declarative UI structure. The syntax used by React components is called JSX(javaScript XML). We can write javaScript code easily using React. It is divided into two major APIs. First, there's the React DOM. This is the API that's used to perform the actual rendering on a web page. Second, there's the React component API. These are the parts of the page that are actually rendered by react DOM. Within a React Component,
      we have the following areas to think about.
     
          Data: This is data that comes from somewhere(the component doesn't care where) and is rendered by the component.
          Lifecycle: This are methods that we implement that respond to changes in the lifecycle of the component is about to be rendered.
           JSX: This is syntax of React components used to describe UI structures.
         
    
     
</p>
      
        <h2>How useState works?</h2>
        <p>useState is the first basic React Hook. useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
        It declares a “state variable”. useState is a new way to use the exact same capabilities that this.state provides in a class. Basically, variables “disappear” when the function exits but state variables are preserved by React. It returns a pair of values: the current state and a function that updates it. For that, we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class.
        </p>
       

    </div>


       
    );
};

export default Questions;