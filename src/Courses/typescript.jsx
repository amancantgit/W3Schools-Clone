import React from 'react';

export default function TypeScript() {
    return (
        <div className="para">
            <p>TypeScript is a superset of JavaScript that adds optional static typing and other advanced features to the language. Let’s explore more about TypeScript:</p>
            <p>Developed by Microsoft, TypeScript extends JavaScript by adding features such as static typing, interfaces, and classes. It aims to make JavaScript development more scalable and maintainable, especially for large-scale applications. TypeScript code is transpiled into plain JavaScript, allowing it to run on any JavaScript runtime. It provides developers with powerful tools for catching errors early in the development process and improving code quality.</p>
            <p>Whether you're building web applications, server-side APIs, or mobile apps with frameworks like React Native or Ionic, TypeScript offers significant benefits for developers.</p><br/>
        
            

            <div className="para">
            TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript, designed for building large-scale applications. Let's explore more about TypeScript:

<ul>
    <li>
        Developed by Microsoft, TypeScript extends JavaScript by adding optional static typing, which enhances code maintainability and reliability by catching errors during development. It is:
        <ul>
            <li>Static typing: TypeScript allows developers to define types for variables, parameters, and return values, enabling better code documentation and tooling support.</li>
            <li>Object-oriented: TypeScript supports object-oriented programming features like classes, interfaces, and inheritance, enhancing code organization and reusability.</li>
            <li>Used for building web applications, single-page applications (SPAs), server-side applications, and more.</li>
        </ul>
    </li>
</ul>
<div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        // Define a function to add two numbers<br/>
                        function add(num1: number, num2: number): number &#123;<br/>
                            &nbsp;&nbsp;return num1 + num2;<br/>
                        &#125;<br/><br/>

                        // Call the function and print the result<br/>
                        console.log(add(5, 3)); // Output: 8<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert(8)}>Run</button>
            </div><br/>
Whether you're a frontend developer or a backend engineer, TypeScript's features, tooling support, and familiarity with JavaScript make it a powerful choice for building modern applications.

                <p>TypeScript offers numerous advantages for web development. Its static typing feature helps catch type-related errors during development, reducing runtime errors in production. TypeScript's type annotations improve code readability and maintainability, making it easier for developers to understand and collaborate on projects. Additionally, TypeScript supports modern JavaScript features and integrates seamlessly with existing JavaScript libraries and frameworks. Its adoption continues to grow, with many popular projects and companies migrating to TypeScript for its productivity and reliability.TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript, designed for building large-scale applications. Developed by Microsoft, TypeScript extends JavaScript by adding optional static typing, which enhances code maintainability and reliability by catching errors during development. TypeScript's static type system allows developers to define types for variables, parameters, and return values, enabling better code documentation and tooling support. Additionally, TypeScript introduces features like interfaces, enums, generics, and decorators, enhancing code organization and readability. Despite its additional features, TypeScript code can seamlessly interoperate with existing JavaScript libraries and frameworks. TypeScript's popularity has surged in recent years, particularly in web development, owing to its ability to scale for complex projects while leveraging the familiarity and ubiquity of JavaScript. With strong community support and integration with popular development tools like Visual Studio Code, TypeScript continues to be a preferred choice for building modern web applications.</p>
            </div>
        </div>
    );
}
