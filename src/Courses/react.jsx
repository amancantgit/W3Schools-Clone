import React from 'react';

export default function Reactjs() {
    return (
        <div className="para">
            <p>React.js, commonly known as React, is a JavaScript library for building user interfaces. Let’s explore more about React:</p>
            <p>Developed by Facebook in 2013, React has quickly gained popularity among developers for its declarative and component-based approach to building UIs. It allows developers to create interactive and dynamic web applications with ease. React follows the concept of a virtual DOM (Document Object Model), which efficiently updates the UI by only rendering the components that have changed, resulting in improved performance.Whether you're building a simple web application or a complex single-page application (SPA), React provides a scalable and efficient solution for front-end development.</p><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        // Define a simple React component<br/>
                        import React from 'react';<br/>
                        <br/>
                        function App() &#123;<br/>
                            &nbsp;&nbsp;return (<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, React!&lt;/h1&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                            &nbsp;&nbsp;);<br/>
                        &#125;<br/><br/>

                        export default App;<br/>
                    </code>
                </pre>
            </div>
            <br/>
            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello, React!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>React offers numerous advantages for web development. It promotes a component-based architecture, allowing developers to create reusable UI components and compose them to build complex interfaces. React's one-way data flow and state management features simplify application logic, making it easier to maintain and debug code. Additionally, React's ecosystem includes libraries like Redux for managing application state, React Router for handling routing in SPAs, and React Native for building mobile applications using React syntax.</p>
                React is a popular JavaScript library for building user interfaces, developed by Facebook. It provides a declarative and component-based approach to building interactive UIs. Let's explore more about React:

<ul>
    <li>
        Created by Jordan Walke in 2013, React has quickly become one of the most widely used libraries for front-end development. It is:
        <ul>
            <li>Declarative: React allows developers to describe the UI state and how it should render using a declarative syntax, making it easier to understand and maintain code.</li>
            <li>Component-based: React applications are composed of modular, reusable components that manage their own state and lifecycle.</li>
            <li>Used for building single-page applications (SPAs), mobile apps, and large-scale web applications.</li>
        </ul>
    </li>
</ul>
Whether you're a beginner or an experienced developer, React's simplicity, performance, and extensive ecosystem make it a powerful tool for building modern web applications.

                <br/>
                <br/>
                <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
            <p>Example:</p>
            <pre style={{ scrollbarWidth: 'none' }}>
                <code className='para'>
                    // Define a simple React component<br/>
                    import React from 'react';<br/>
                    <br/>
                    function App() &#123;<br/>
                        &nbsp;&nbsp;return (<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, React!&lt;/h1&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                        &nbsp;&nbsp;);<br/>
                    &#125;<br/><br/>

                    export default App;<br/>
                </code>
            </pre>
        </div> <br/>
        <div className='para'>
        <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello, React!")}>Run</button>
        </div>
        <br/>
                <p>React, with its focus on performance, developer experience, and community support, continues to be a popular choice for front-end development in both small-scale projects and large-scale applications.React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components that efficiently update and render in response to data changes. React's component-based architecture promotes code modularity, making it easier to maintain and scale applications. One of its key features is the Virtual DOM, which enables React to efficiently update only the parts of the UI that have changed, resulting in improved performance.</p>
                <p>Furthermore, React utilizes JSX, a syntax extension that allows developers to write HTML-like code within JavaScript, facilitating the creation of component-based UIs in a more declarative and intuitive manner. React also encourages the use of unidirectional data flow, where data flows in a single direction from parent to child components, making application state management more predictable. With its robust ecosystem and strong community support, React.js continues to be a top choice for building dynamic and interactive web applications.</p>
            </div>
        </div>
    );
}
