import React from 'react';

export default function JQuery() {
    return (
        <div className="para">
            <p>jQuery is a fast, small, and feature-rich JavaScript library. Let’s explore more about jQuery:</p>
            <p>Released in 2006 by John Resig, jQuery simplifies the process of traversing HTML documents, handling events, animating elements, and AJAX interactions. It provides a concise and efficient way to manipulate the DOM and create dynamic web content. jQuery's popularity stems from its ease of use, extensive documentation, and vast ecosystem of plugins and extensions.</p>
            <p>Whether you're a beginner or an experienced developer, jQuery offers a powerful toolkit for enhancing the interactivity and responsiveness of your web applications.</p><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        // Change the text color of all paragraphs to red<br/>
                        $("p").css("color", "red");<br/><br/>

                        // Fade out all elements with class "fade" over 2 seconds<br/>
                        $(".fade").fadeOut(2000);<br/><br/>

                        // Send an AJAX request to fetch data from the server<br/>
                        $.ajax("https://api.example.com/data", &#123;<br/>
                            &nbsp;&nbsp;success: function(data) &#123;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);<br/>
                            &nbsp;&nbsp;&#125;<br/>
                        &#125;);<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Hello, jQuery!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>jQuery offers numerous advantages for web development. It simplifies common tasks like DOM manipulation, event handling, and AJAX requests, reducing the amount of code required to achieve complex functionality. jQuery's cross-browser compatibility ensures consistent behavior across different web browsers, making it suitable for developing cross-platform web applications. Additionally, jQuery's plugin architecture allows developers to extend its functionality with custom plugins or utilize existing plugins available in the jQuery plugin registry. Despite the rise of modern JavaScript frameworks and libraries, jQuery remains a valuable tool in the web developer's toolkit, especially for projects requiring broad browser support and rapid development.</p>
                jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers. Let's explore more about jQuery:

<ul>
    <li>
        Developed by John Resig in 2006, jQuery has become one of the most widely used JavaScript libraries. It is:
        <ul>
            <li>Fast and lightweight: jQuery's small file size and efficient performance make it ideal for web development.</li>
            <li>Compatible with CSS3 selectors: jQuery simplifies DOM manipulation and traversal with its powerful selectors.</li>
            <li>Used for DOM manipulation, event handling, AJAX requests, animations, and much more.</li>
        </ul>
    </li>
</ul>
Whether you're a beginner or an experienced developer, jQuery's simplicity and versatility make it a valuable tool for creating dynamic and interactive web applications.

            </div>
        </div>
    );
}
