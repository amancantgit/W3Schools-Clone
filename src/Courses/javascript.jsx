import React from 'react';

export default function JavaScript() {
    return (
        <div className="para">
            <p>JavaScript is a versatile programming language commonly used for building interactive and dynamic web applications. Let’s explore more about JavaScript:</p>
            <p>Developed by Brendan Eich in 1995, JavaScript has become one of the most popular programming languages in the world. It is a client-side scripting language that runs on the client's browser, allowing for dynamic interaction with web pages. JavaScript is highly flexible and supports object-oriented programming paradigms, enabling developers to create reusable and modular code. It is supported by all modern web browsers like Chrome, Firefox, Safari, and Edge.</p>
            <p>Whether you're creating interactive user interfaces, implementing server-side logic with Node.js, or building mobile apps with frameworks like React Native, JavaScript remains a fundamental language for web development.</p><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        // Define a function to greet the user<br/>
                        function greet(name) &#123;<br/>
                            &nbsp;&nbsp;return "Hello, " + name + "!";<br/>
                        &#125;<br/><br/>

                        // Call the function<br/>
                        console.log(greet("World")); // Output: Hello, World!<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello, World!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>JavaScript offers numerous advantages for web development. It has a rich ecosystem of libraries, frameworks, and tools like React, Angular, and Vue.js, making it easy to build powerful web applications. JavaScript allows for client-side interactivity, dynamic updates, and interactions, enhancing user experience. Additionally, JavaScript can also be used for server-side programming with platforms like Node.js. It benefits from a large and active community of developers who contribute to its growth and provide support through forums, documentation, and open-source projects.
                <ul>
    <li>
        JavaScript, a versatile programming language, encompasses several key concepts essential for web development. Its core features include:
        <ul>
            <li>Dynamic Typing: Variables in JavaScript are not bound to specific data types, allowing for flexible variable usage.</li>
            <li>Prototype-based Inheritance: JavaScript objects inherit properties and methods from prototypes, enabling code reuse and organization.</li>
            <li>Functions as First-Class Objects: Functions in JavaScript are treated as objects, facilitating higher-order functions and functional programming paradigms.</li>
            <li>Event-Driven Programming: JavaScript applications respond to user or system events, creating interactive and responsive web experiences.</li>
            <li>Asynchronous Programming: JavaScript supports asynchronous programming, managing non-blocking operations through features like callbacks, promises, and async/await, crucial for handling I/O operations efficiently.</li>
        </ul>
    </li>
</ul>
<div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
            <p>Example:</p>
            <pre style={{ scrollbarWidth: 'none' }}>
                <code className='para'>
                    // Define a function to calculate the factorial of a number<br/>
                    function factorial(n) &#123;<br/>
                        &nbsp;&nbsp;if (n === 0 || n === 1)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;return 1;<br/>
                        &nbsp;&nbsp;for (let i = n - 1; i &gt;= 1; i--) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;n *= i;<br/>
                        &nbsp;&nbsp;&#125;<br/>
                        &nbsp;&nbsp;return n;<br/>
                    &#125;<br/><br/>

                    // Define a function to calculate the sum of the factorials of the digits of a number<br/>
                    function sumOfFactorialDigits(num) &#123;<br/>
                        &nbsp;&nbsp;let sum = 0;<br/>
                        &nbsp;&nbsp;let digits = num.toString().split('');<br/>
                        &nbsp;&nbsp;digits.forEach(digit =&gt; &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;sum += factorial(parseInt(digit));<br/>
                        &nbsp;&nbsp;&#125;);<br/>
                        &nbsp;&nbsp;return sum;<br/>
                    &#125;<br/><br/>

                    // Example usage of the above functions<br/>
                    const num = 145;<br/>
                    const sum = sumOfFactorialDigits(num);<br/>
                    console.log(`Sum of factorials of digits of $&#123;num&#125;: $&#123;sum&#125;`);<br/>
                </code>
            </pre>
        </div> <br/>
        <div className='para'>
        <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert(`Sum of factorials of digits of $&#123; num&#125;: $&#123; sum&#125;`)}>Run</button>
        <br />
        </div>

ES6, or ECMAScript 6, represents a significant advancement in JavaScript's evolution, introducing new syntax and features aimed at enhancing developer productivity and code maintainability. Key additions include block-scoped variables with let and const, concise arrow functions, template literals for improved string interpolation, destructuring syntax for extracting values from arrays or objects, and class syntax for object-oriented programming. Additionally, ES6 introduces promises for streamlined asynchronous programming and modules for better code organization and dependency management. These enhancements have made ES6 a fundamental milestone in JavaScript's ongoing development, fostering cleaner, more expressive code across a wide range of applications.
                </p>
            </div>
        </div>
    );
}
