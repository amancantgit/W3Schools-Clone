import React from 'react';

export default function Node() {
    return (
        <div className="para">
            <p>Node.js is a runtime environment for executing JavaScript code outside of a web browser. Let’s explore more about Node.js:</p>
            <p>Introduced by Ryan Dahl in 2009, Node.js allows developers to build scalable network applications with JavaScript. It utilizes the V8 JavaScript engine from Google Chrome to execute code, making it fast and efficient. Node.js is particularly well-suited for building server-side applications, APIs, real-time web applications, and microservices.</p>
            <p>Whether you're building web servers, handling asynchronous I/O operations, or creating command-line tools, Node.js offers a powerful and versatile platform for JavaScript developers.</p><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        // Define a simple HTTP server using Node.js<br/>
                        const http = require('http');<br/>
                        <br/>
                        const server = http.createServer((req, res) =&gt; &#123;<br/>
                            &nbsp;&nbsp;res.writeHead(200, &#123; 'Content-Type': 'text/plain' &#125;);<br/>
                            &nbsp;&nbsp;res.end('Hello, Node.js!');<br/>
                        &#125;);<br/>
                        <br/>
                        server.listen(3000, () =&gt; &#123;<br/>
                            &nbsp;&nbsp;console.log('Server running on port 3000');<br/>
                        &#125;);<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello, Node.js!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>Node.js offers several advantages for server-side development. Its event-driven, non-blocking I/O model makes it highly efficient for handling concurrent connections and I/O-bound tasks. Node.js has a rich ecosystem of libraries and frameworks, such as Express.js, for building robust web applications and APIs. Additionally, Node.js is supported by a vibrant community and has extensive documentation, tutorials, and resources available for developers.</p>
                <p>With its scalability, performance, and versatility, Node.js has become a popular choice for building modern web applications and backend services.</p>
            </div>

            <p>Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It uses the V8 JavaScript engine, which is the same engine that powers Google Chrome, to execute JavaScript code outside of a web browser. Node.js enables developers to build scalable, efficient, and high-performance network applications, including web servers, APIs, and microservices.

One of the key features of Node.js is its non-blocking, event-driven architecture, which allows it to handle a large number of concurrent connections efficiently. This makes it particularly well-suited for building real-time applications, such as chat applications or streaming services.</p>
<p>Node.js also has a rich ecosystem of packages available through the npm (Node Package Manager) registry, which hosts thousands of open-source libraries and modules that can be easily integrated into Node.js applications. This vast collection of packages covers a wide range of functionalities, from database access to web frameworks to authentication and authorization.

Furthermore, Node.js is cross-platform, meaning it can run on various operating systems such as Windows, macOS, and Linux. This flexibility makes it an attractive choice for developers building applications that need to run on different environments.</p>
<p>Overall, Node.js is a powerful and versatile platform that has revolutionized server-side development with JavaScript, enabling developers to build fast, scalable, and modern applications for the web. Its popularity continues to grow, with many large companies and organizations adopting it for their backend development needs.</p>
            Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable server-side applications using JavaScript. Let's explore more about Node.js:

<ul>
    <li>
        Introduced by Ryan Dahl in 2009, Node.js has revolutionized server-side development. It is:
        <ul>
            <li>Asynchronous and event-driven: Node.js uses non-blocking I/O operations, making it highly efficient for handling concurrent requests.</li>
            <li>JavaScript-based: Node.js allows developers to use JavaScript both on the client and server sides, enabling full-stack development with a single language.</li>
            <li>Used for building web servers, APIs, real-time applications, and microservices.</li>
        </ul>
    </li>
</ul>
Whether you're a beginner or an experienced developer, Node.js's performance, scalability, and rich ecosystem of modules make it a popular choice for building fast and scalable server-side applications.

        </div>
    );
}
