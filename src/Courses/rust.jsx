import React from 'react';

export default function Rust() {
    return (
        <div className="para">
            <p>Rust is a systems programming language designed for safety and performance. Let’s explore more about Rust:</p>
            <p>Developed by Mozilla Research and released in 2010, Rust aims to provide a safer alternative to languages like C and C++. It combines modern language features with low-level control, making it suitable for building performance-critical applications, system utilities, and embedded systems.</p>
            <p>Rust's key features include strong static typing, zero-cost abstractions, and memory safety guarantees enforced by its ownership system. These features enable developers to write efficient and reliable code without sacrificing performance or control.</p><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        // Define a function to calculate the nth Fibonacci number<br/>
                        fn fib(n: u32) -&gt; u32 &#123;<br/>
                            &nbsp;&nbsp;if n &lt;= 1 &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;n<br/>
                            &nbsp;&nbsp;&#125; else &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;fib(n - 1) + fib(n - 2)<br/>
                            &nbsp;&nbsp;&#125;<br/>
                        &#125;<br/>
                        <br/>
                        fn main() &#123;<br/>
                            &nbsp;&nbsp;let n = 10;<br/>
                            &nbsp;&nbsp;let result = fib(n);<br/>
                            &nbsp;&nbsp;println!("The {}th Fibonacci number is {}", n, result);<br/>
                        &#125;<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("The 10th Fibonacci number is 55")}>Run</button>
            </div><br/>

            <div className="para">
                <p>Rust offers several advantages for systems programming. Its ownership model eliminates many common pitfalls such as null pointer dereferencing, data races, and memory leaks. Rust's compiler provides helpful error messages and ensures correctness at compile-time, leading to more reliable software.</p>
                <p>With its focus on safety, performance, and concurrency, Rust has gained popularity in fields such as systems programming, game development, and cloud infrastructure.</p>
                <p>Rust is a systems programming language developed by Mozilla that focuses on safety, performance, and concurrency. It was designed to offer modern programming language features while addressing common pitfalls such as memory safety issues, data races, and undefined behavior.

One of Rust's key features is its ownership system, which enforces strict rules about how memory is accessed and managed at compile time. This system eliminates many common bugs and vulnerabilities, such as null pointer dereferences and use-after-free errors, without the need for a garbage collector. Additionally, Rust's ownership system enables safe concurrency by preventing data races at compile time, making it easier to write multi-threaded code.</p>
<p>Rust also emphasizes zero-cost abstractions, meaning that high-level abstractions in the language come with little to no runtime overhead. This allows developers to write code that is both high-level and efficient, without sacrificing performance.</p>
<p>Furthermore, Rust has a powerful package manager called Cargo, which simplifies the process of managing dependencies, building projects, and publishing libraries. Cargo, combined with Rust's strong type system and expressive syntax, makes it easy to write safe and reliable code while maintaining productivity.

Overall, Rust is a modern and innovative programming language that offers a unique combination of safety, performance, and expressiveness. It has gained popularity in various domains, including systems programming, web development, game development, and more, and continues to attract developers looking for a language that prioritizes both safety and speed.</p>
            </div>
        </div>
    );
}
