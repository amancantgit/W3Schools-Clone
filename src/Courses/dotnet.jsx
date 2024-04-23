import React from 'react';

export default function DotNet() {
    return (
        <div className="para">
            <p>.NET is a free, cross-platform, open-source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, and IoT.
            Developed by Microsoft, .NET has become a highly popular platform.<br/>
            It is:
            <ul>
                <li>Platform-independent: .NET applications can run on various platforms with the help of .NET Core.</li>
                <li>Used for web development, desktop applications, mobile apps, cloud applications, and more.</li>
                <li>Known for its performance, security, and extensive libraries and frameworks.</li>
            </ul>
            <p>.NET is a free, cross-platform, open-source developer platform for building many different types of applications. It includes a runtime, libraries for building applications in various programming languages such as C#, F#, and Visual Basic, and development tools for building, deploying, and managing applications. .NET supports a variety of application types, including web applications, desktop applications, mobile applications, cloud-based applications, and microservices.</p>
                <p>One of the key components of .NET is the Common Language Runtime (CLR), which provides features such as automatic memory management (garbage collection), exception handling, and type safety. .NET also includes a large class library, known as the .NET Framework (or .NET Core/.NET 5+ in newer versions), which provides reusable code for common programming tasks.
                </p>
            Whether you're building web applications, desktop applications, or mobile apps, .NET remains a versatile and powerful choice for developers.</p>
            <br/>

        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        using System;<br/><br/>

                        class Program<br/>
                        &#123;<br/>
                            &nbsp;&nbsp;static void Main(string[] args)<br/>
                            &nbsp;&nbsp;&#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Hello World!");<br/>
                            &nbsp;&nbsp;&#125;<br/>
                        &#125;
                    </code>
                </pre>
            </div> <br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello World")}>Run</button>
            </div>
            <br />
            <div >
                
                    <p>Additionally, .NET supports multiple programming languages, allowing developers to choose the language that best suits their needs while still being able to leverage the full power of the .NET platform. This flexibility makes .NET a versatile and powerful framework for building a wide range of applications, from small utilities to large enterprise systems.</p>
                    <p>One of the key components of .NET is the Common Language Runtime (CLR), which provides features such as memory management, exception handling, and type safety. The CLR enables developers to write code in multiple languages, such as C#, F#, Visual Basic, and more, while still being able to compile and run on the same runtime environment.

.NET also includes a rich class library, known as the .NET Framework (or .NET Core/.NET 5+ in newer versions), which provides a wide range of pre-built functionality for common programming tasks, such as file I/O, networking, database access, and cryptography. This extensive class library helps developers to build applications more quickly and efficiently by leveraging existing functionality rather than writing everything from scratch.</p>
<p>Furthermore, .NET supports a variety of development tools, including Visual Studio, Visual Studio Code, and the .NET CLI (Command Line Interface), which provide powerful features for coding, debugging, testing, and deploying .NET applications. These tools offer a rich development experience and help developers to be more productive and efficient in their day-to-day work.</p>
<p>Additionally, .NET emphasizes performance and scalability, with features such as just-in-time (JIT) compilation, native interoperability, and support for asynchronous programming patterns. This makes .NET suitable for building high-performance, scalable applications that can handle heavy workloads and concurrent users.</p>
<p>
.NET is a free, open-source, cross-platform developer platform developed by Microsoft. It provides a comprehensive framework and runtime environment for building a wide variety of applications, including web applications, desktop applications, mobile apps, cloud-based services, and more.

One of the key components of .NET is the Common Language Runtime (CLR), which provides features such as memory management, exception handling, and type safety. The CLR enables developers to write code in multiple languages, such as C#, F#, Visual Basic, and more, while still being able to compile and run on the same runtime environment.

.NET also includes a rich class library, known as the .NET Framework (or .NET Core/.NET 5+ in newer versions), which provides a wide range of pre-built functionality for common programming tasks, such as file I/O, networking, database access, and cryptography. This extensive class library helps developers to build applications more quickly and efficiently by leveraging existing functionality rather than writing everything from scratch.Additionally, .NET emphasizes performance and scalability, with features such as just-in-time (JIT) compilation, native interoperability, and support for asynchronous programming patterns. This makes .NET suitable for building high-performance, scalable applications that can handle heavy workloads and concurrent users.

Overall, .NET is a versatile and powerful developer platform that offers a comprehensive set of tools, libraries, and runtime environments for building a wide range of applications. Its cross-platform support, rich ecosystem, and strong community make it a popular choice for developers and organizations around the world.</p>
            </div>
        </div>
    );
}
