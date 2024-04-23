import React from 'react';

export default function PHP() {
    return (
        <div className="para">
            <p>PHP is a powerful server-side scripting language widely used for web development. Let’s explore more about PHP:</p>
            <p>Originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994, PHP has evolved into one of the most popular programming languages for web development. It is designed for building dynamic and interactive web pages, handling forms, managing databases, and creating web-based applications. PHP is easy to learn and offers seamless integration with HTML, making it a preferred choice for server-side scripting.</p>
            <p>Whether you're developing e-commerce websites, content management systems (CMS), or web applications, PHP provides a robust foundation for building scalable and feature-rich solutions.</p><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        {'<?php\n'}
                            // Define a function to calculate the sum of two numbers<br/>
                            function add($num1, $num2) &#123;<br/>
                                &nbsp;&nbsp;return $num1 + $num2;<br/>
                            &#125;<br/><br/>

                            // Call the function and print the result<br/>
                            echo "The sum is: " . add(5, 3); // Output: The sum is: 8<br/>
                        {'?>\n'}
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("The sum is: 8")}>Run</button>
            </div><br/>

            <div className="para">
                <p>PHP offers numerous advantages for web development. It provides built-in support for database connectivity, session management, and file handling, simplifying common web development tasks. Additionally, PHP is highly customizable and extensible through a vast collection of pre-built libraries and frameworks like Laravel, Symfony, and CodeIgniter. These frameworks offer robust features such as MVC architecture, routing, templating engines, and authentication mechanisms, enabling developers to build scalable and secure web applications efficiently.</p>
                <p>Furthermore, PHP is widely supported by web hosting providers and is compatible with major databases like MySQL, PostgreSQL, and SQLite. Its open-source nature and active community contribute to its continuous improvement and adoption in the web development industry.</p>
                PHP is a popular server-side scripting language widely used for web development. Let's explore more about PHP:

<ul>
    <li>
        Created by Rasmus Lerdorf in 1994, PHP has become one of the most widely used languages for building dynamic web applications. It is:
        <ul>
            <li>Dynamic and flexible: PHP allows developers to embed PHP code directly into HTML, enabling the creation of dynamic web pages with ease.</li>
            <li>Open source: PHP is open-source software, with a large and active community contributing to its development and evolution.</li>
            <li>Used for building websites, web applications, content management systems (CMS), e-commerce platforms, and more.</li>
        </ul>
    </li>
</ul>
Whether you're a beginner learning web development or an experienced developer building complex applications, PHP's simplicity, versatility, and extensive library support make it a valuable tool for web development.
<p>PHP is a widely-used open-source scripting language that is particularly well-suited for web development and server-side scripting. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994 and has since become one of the most popular languages for web development.

One of the key features of PHP is its simplicity and ease of use. PHP syntax is straightforward and easy to understand, making it accessible to developers of all skill levels. PHP scripts can be embedded directly into HTML, allowing developers to mix server-side code with client-side code seamlessly.

PHP is also highly versatile and can be used for a wide range of web development tasks, including generating dynamic web pages, handling form submissions, interacting with databases, and implementing authentication and authorization systems. PHP provides built-in support for working with various databases, such as MySQL, PostgreSQL, and SQLite, making it easy to store and retrieve data from a database within a PHP application.</p>
<p>Furthermore, PHP has a large and active community of developers who contribute to the language's ecosystem by creating libraries, frameworks, and extensions. Popular PHP frameworks, such as Laravel, Symfony, and CodeIgniter, provide developers with powerful tools and features for building robust and scalable web applications more efficiently.

Moreover, PHP is cross-platform and can run on a wide range of operating systems, including Windows, macOS, Linux, and Unix variants. This makes PHP a flexible choice for web development, as developers can deploy PHP applications on a variety of platforms without needing to make significant changes to their code.</p>
<p>Overall, PHP is a versatile and widely-used scripting language that remains a popular choice for web development due to its simplicity, versatility, and strong community support. Its ease of use, extensive ecosystem, and broad compatibility make it an excellent choice for building dynamic and interactive web applications.z</p>
            </div>
        </div>
    );
}
