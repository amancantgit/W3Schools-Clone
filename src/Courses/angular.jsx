import React from 'react';

export default function Angular() {
    return (
        <div className="para">
            <p>Angular is a powerful framework for building single-page web applications. Let’s explore more about Angular:</p>
            <p>Developed and maintained by Google, Angular provides developers with a comprehensive toolkit for building dynamic and interactive web applications. It follows the MVC (Model-View-Controller) architecture and offers features such as two-way data binding, dependency injection, and modular component-based development. Angular's declarative templates and powerful CLI (Command Line Interface) streamline the development process, enabling developers to create scalable and maintainable applications with ease.</p>
            <p>Whether you're building enterprise applications, progressive web apps (PWAs), or mobile applications with frameworks like Ionic, Angular offers a robust platform for modern web development.</p>
            <ul>
    <li>
        Developed by Google in 2010, Angular has gained widespread adoption in the web development community. It is:
        <ul>
            <li>Based on TypeScript: Angular leverages TypeScript's static typing and object-oriented features to enhance developer productivity and code maintainability.</li>
            <li>Component-based: Angular applications are composed of modular, reusable components that encapsulate HTML, CSS, and TypeScript logic.</li>
            <li>Used for building single-page applications (SPAs), progressive web apps (PWAs), and enterprise-scale applications.</li>
        </ul>
    </li>
</ul><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        // Define a component to display a message<br/>
                        import &#123; Component &#125; from '@angular/core';<br/><br/>

                        @Component(&#123;<br/>
                            &nbsp;&nbsp;selector: 'app-message',<br/>
                            &nbsp;&nbsp;template: `<div>&#123;&#123; message &#125;&#125;</div>`,<br/>
                        &#125;)<br/>
                        export class MessageComponent &#123;<br/>
                            &nbsp;&nbsp;message = 'Hello, Angular!';<br/>
                        &#125;<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello, Angular!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>Angular offers numerous advantages for web development. It provides a structured and opinionated approach to building applications, ensuring consistency and maintainability across projects. Angular's extensive ecosystem of libraries, tools, and official documentation makes it easy for developers to get started and build complex applications. Additionally, Angular's built-in support for features like routing, forms, HTTP client, and state management simplifies common development tasks, allowing developers to focus on building innovative features and delivering high-quality user experiences.
                Angular is a powerful and popular front-end framework for building dynamic web applications. It simplifies the development process by providing a structured framework for creating reusable components and managing application state. Let's explore more about Angular:

Whether you're building small projects or large-scale applications, Angular's comprehensive features and robust architecture make it a top choice for modern web development.

                </p>
            </div>
        </div>
    );
}
