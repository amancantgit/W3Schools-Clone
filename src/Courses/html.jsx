import React from 'react'

const HTML = () => {
  return (
    <>
        <div className="para">
            <p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. Let’s explore more about HTML:</p>
            <p>HTML provides the structure and content of a web page, defining the various elements such as headings, paragraphs, images, links, and forms. It is a key component of the web development stack, serving as the backbone for creating accessible and semantic web content. HTML documents are composed of nested elements, organized in a tree-like structure known as the Document Object Model (DOM), which browsers render into visually appealing web pages.</p>
            <p>Whether you're creating a simple personal website, an e-commerce platform, or a complex web application, HTML forms the foundation upon which the entire web is built.</p>
            <ul>
                <li>
                    HTML was first introduced by Tim Berners-Lee in 1991. It is:
                    <ul>
                        <li>Based on a markup syntax: HTML uses tags to define elements and their attributes, allowing developers to structure and style web content.</li>
                        <li>Platform-independent: HTML is supported by all major web browsers and can be used across different operating systems and devices.</li>
                        <li>Extensible: HTML can be extended and enhanced with technologies like CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing web experiences.</li>
                    </ul>
                </li>
            </ul><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        &lt;!-- Define a simple HTML structure --&gt; <br/>
                        &lt;div id="main"&gt;<br/>
                        &nbsp;&nbsp;&lt;h1&gt;Hello, HTML!&lt;/h1&gt;<br/>
                        &nbsp;&nbsp;&lt;p&gt;This is a paragraph&lt;/p&gt;<br/>
                        &lt;/div&gt;<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello, HTML!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>HTML offers numerous advantages for web development. It provides a simple yet powerful way to structure web content, making it accessible to users and search engines alike. HTML's semantic elements and accessibility features enable developers to create inclusive and user-friendly web experiences. Additionally, HTML's compatibility with other web technologies and its extensive documentation make it a versatile and widely adopted language for building websites and applications.</p>
            </div>
        </div>

    </>
  )
}

export default HTML;