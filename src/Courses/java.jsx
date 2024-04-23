import React from 'react';

export default function Java({ darkMode }) {
    return (
        <>
        <div className="para" style={{ background: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
            Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It allows application developers to write code once and run it anywhere (WORA). This means that compiled Java code can run on all platforms that support Java without the need for recompilation1. Let’s explore more about Java:
            <ul>
                <li>
                    Developed by Sun Microsystems in 1995, Java has become a highly popular language. It is:
                    <ul>
                        <li>Platform-independent: Java code can run on various platforms without modification.</li>
                        <li>Used for Android development, web development, artificial intelligence, cloud applications.</li>
                        <li>Known for its robustness, security, and object-oriented.</li>
                    </ul>
                </li>
            </ul>
            Whether you're building mobile apps, web apps, or desktop applications, Java remains a versatile and powerful choice for developers.
            <br/><br/>
        
            <div className="para" style={{backgroundColor:'#D9EEE1', borderRadius: '5px'}}>
                <p >Example:</p>
                <pre style={{scrollbarWidth: 'none'}}>
                    <code className='para' >
                        public class Main &#123;<br/>
                        &nbsp;&nbsp;public static void main(String[] args) &#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br/>
                        &nbsp;&nbsp;&#125;<br/>
                        &#125;
                    </code>
                </pre>
            </div> <br/>

            <div className="para" >
                <button style={{border:'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D'}} onClick={() => alert("Hello World")}>Run</button>
            </div>
            <br/>
    <p>
        Java, a versatile and robust programming language, has become a cornerstone in the world of software development due to its portability, reliability, and extensive ecosystem. Initially developed by Sun Microsystems and later acquired by Oracle, Java features an object-oriented paradigm, drawing influences from C and C++, while incorporating innovations such as automatic memory management through garbage collection and multithreading support. One of Java's defining characteristics is its platform independence, achieved through the compilation of Java source code into bytecode, which can then be executed on any platform with a Java Virtual Machine (JVM). This "Write Once, Run Anywhere" (WORA) capability has made Java a preferred choice for building cross-platform applications. </p>
        <p>Java stands out in the programming landscape due to its platform independence, robust standard library, and object-oriented design. Its "Write Once, Run Anywhere" principle allows Java code to run on any device with a Java Virtual Machine, fostering cross-platform compatibility. Java's comprehensive standard library simplifies development with a vast collection of classes and methods for common tasks. Its object-oriented nature promotes modular and scalable software design, facilitating code reuse and maintainability. With built-in features for memory management, multithreading, and security, Java enables developers to create efficient, concurrent, and secure applications. Furthermore, Java's rich ecosystem of tools, frameworks, and libraries empowers developers to build a wide range of software solutions, making it a preferred choice for enterprise-grade applications, web services, and more.</p>
    <div className="para" style={{backgroundColor:'#D9EEE1', borderRadius: '5px'}}>
            <p>Example:</p>
            <pre style={{scrollbarWidth: 'none'}}>
                <code className='para'>
                    public class FibonacciSeries &#123;<br/>
                        &nbsp;&nbsp;public static void main(String[] args) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;int n = 10, t1 = 0, t2 = 1;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;System.out.print("First " + n + " terms: ");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;for (int i = 1; i &lt;= n; ++i) &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(t1 + " + ");<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int sum = t1 + t2;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t1 = t2;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t2 = sum;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                        &nbsp;&nbsp;&#125;<br/>
                    &#125;
                </code>
            </pre>
        </div> <br/>
        <div className='para'>
        <button style={{border:'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D'}} onClick={() => alert("Program executed successfully!")}>Run</button>
        </div>
        <br/>

        Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It allows application developers to write code once and run it anywhere (WORA). Let's explore more about Java:

Whether you're building mobile apps, web apps, or desktop applications, Java remains a versatile and powerful choice for developers.

    <p>
        Beyond its core language features, Java boasts a vast standard library and a rich ecosystem of third-party frameworks and tools that streamline development processes. Popular frameworks like Spring and Hibernate facilitate enterprise application development, while the Android SDK empowers developers to create mobile applications for the ubiquitous Android platform. Additionally, Java finds application in diverse domains ranging from web development to scientific computing, owing to its scalability, performance, and community support. Despite the emergence of newer languages and technologies, Java remains a prominent force in the software industry, continually evolving to meet the demands of modern development practices.
    </p>
        </div>

        
        </>

    );
}
