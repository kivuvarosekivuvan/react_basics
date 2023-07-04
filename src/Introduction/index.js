import React from "react";
import './style.css'
import Navbar from "../Navbar";

const Introduction=()=>{
    return(
        <div className="body"
        style={{
          backgroundImage: `url(/images/back.jpg) alt="photo"`
        }}
        >
            <Navbar/>
<header>
    <p>Introduction to ReactJS</p>
    </header>            
            <main className="words"> 
            <section className="section" id="intro">
            <h1>What is reactJS?</h1>
            <p id="this">This is a JavaScript library for building user intefaces.It enables one to develop reuseable UI components and work efficiently.It is used to build-single applications</p>
            <a href="#get"><button id="get-started">GET STARTED</button></a>     

            <h1>What I have Learnt about ReactJS Library</h1>
            <p>It has reusable components</p>
            <p>The writing format is JSX</p>
            <p>It is simple.HTML and JavaScript can be combined to create a special syntax called JSX</p>
            <p>Next.js is a child of React</p>
            <p>It is fast</p>
            <p>It allows imports from other components which makes this work easier</p>
            <p>Before import you should ensure that your component has (export default componentName) call below it</p>
            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
            <img src={process.env.PUBLIC_URL + '/images/react.png'}/>
            <img  src={process.env.PUBLIC_URL + '/images/react.png'}/>
            <img src={process.env.PUBLIC_URL + '/images/react.png'}/>
            </section>



            <section className="section" id="features">
          <h2>Key Features of ReactJS</h2>
            <p>Component-based architecture</p>
            <p>Virtual DOM for efficient rendering</p>
            <p>Declarative syntax for building UIs</p>
            <p>Efficient state management with hooks</p>
            <p>Reusable and composable components</p>
            <p>React Native for building mobile apps</p>
          
          


        </section>
        <section id="get">
          <h1>Setting up a React Environment</h1>
            <p>If you have npx and Node.js installed, you can create a React application by using create-react-app.
            </p>
            <p>If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app.
            </p>
            <p>To uninstall, run this command: npm uninstall -g create-react-app.
            </p>
            <p>Run this command to create a React application named my-react-app:
            </p>
            <p>npx create-react-app my-react-app
            </p>
            <p>The create-react-app will set up everything you need to run a React application.
            </p>
            <p>Run the React Application
            </p>
            <p>Now you are ready to run your first real React application!
            </p>
            <p>Run this command to move to the my-react-app directory:
            </p>
            <p>cd my-react-app
            </p>
            <p>Run this command to run the React application my-react-app:
            </p>
            <p>npm start</p>
            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
            <img src={process.env.PUBLIC_URL + '/images/react.png'}/>
            <img  src={process.env.PUBLIC_URL + '/images/react.png'}/>
            <img src={process.env.PUBLIC_URL + '/images/react.png'}/>
        </section>

<section id="choose">
  <p>
<h1>There are several reasons why developers choose React for building web applications. Here are some key advantages of using React:</h1>
<p id="paragraph">1.Component-Based Architecture: <span className="spanwords">React follows a component-based approach, allowing developers to break down the UI into reusable and independent components. This modular structure promotes code reusability, maintainability, and scalability.</span>
</p>
<p id="paragraph">2.Virtual DOM: <span className="spanwords">React uses a virtual DOM (Document Object Model) to efficiently update and render changes to the user interface. The virtual DOM minimizes the number of direct manipulations to the actual DOM, resulting in improved performance and faster rendering.</span>
</p>
<p id="paragraph">3.Declarative Syntax: <span className="spanwords">React utilizes a declarative syntax, which means developers describe what the UI should look like based on the current state. React takes care of updating the UI to match the desired state, making it easier to understand and reason about the application's behavior.</span>
</p>
<p id="paragraph">4.One-Way Data Flow: <span className="spanwords">React enforces a one-way data flow, making it easier to track and debug data changes. This unidirectional data flow ensures that changes in the parent components are passed down to child components, preventing unexpected side effects and improving application stability.</span>
</p>
<p id="paragraph">5.React Ecosystem and Community: <span className="spanwords">React has a vast and active community, providing a rich ecosystem of libraries, tools, and resources. This ecosystem offers solutions for various needs such as state management (Redux, MobX), routing (React Router), and UI component libraries (Material-UI, Ant Design), making development faster and more efficient.</span>
</p>
<p id="paragraph">6.Cross-Platform Development: <span className="spanwords">React allows developers to build applications for both web and mobile platforms using the same codebase. React Native, a framework built on top of React, enables the development of native mobile applications for iOS and Android, sharing a significant portion of the code with the web version.</span>
</p>
<p id="paragraph">7.Backed by Facebook: <span className="spanwords">React is developed and maintained by Facebook, which ensures a high level of support, regular updates, and ongoing improvements. The backing of a large and reputable company like Facebook instills confidence in the longevity and stability of the framework.</span>
</p>
  </p><br/><br/>
  <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
            <img src={process.env.PUBLIC_URL + '/images/react.png'}/>
            <img  src={process.env.PUBLIC_URL + '/images/react.png'}/>
            <img src={process.env.PUBLIC_URL + '/images/react.png'}/>
</section>
           </main>
      
           
            
        </div>
    )
}

export default Introduction