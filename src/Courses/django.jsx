import React from 'react';

export default function Django() {
    return (
        <div className="para">
            <p>Django is a high-level Python web framework known for its simplicity, flexibility, and scalability. Let’s explore more about Django:</p>
            <p>Developed by the Django Software Foundation, Django follows the "batteries-included" philosophy, providing developers with a comprehensive toolkit for building web applications. It emphasizes rapid development, clean and pragmatic design, and the principle of DRY (Don't Repeat Yourself).</p>
            <p>Django's key features include an ORM (Object-Relational Mapping) system for interacting with databases, a built-in admin interface for managing application data, and a robust authentication and authorization system for handling user authentication and permissions.</p>
            <p>One of Django's key features is its powerful ORM (Object-Relational Mapping) system, which abstracts away the complexities of database management and allows developers to interact with the database using Python objects. This simplifies database operations such as querying, inserting, updating, and deleting records, making it easier to work with relational databases.

Django also includes a robust authentication and authorization system, making it easy to implement user authentication, permissions, and access control in web applications. Additionally, Django provides built-in security features such as protection against common web vulnerabilities like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF), helping developers build secure web applications by default.</p>
                <p>Furthermore, Django follows the Model-View-Template (MVT) architecture, which is a variation of the Model-View-Controller (MVC) pattern. In Django, models define the data structure, views handle the business logic and user interaction, and templates render the HTML markup for the user interface. This separation of concerns promotes code organization and maintainability, making it easier to manage and extend complex web applications.</p>
                <p>Django also includes a built-in admin interface that allows developers to quickly create and customize administrative interfaces for managing database records. This can save a significant amount of development time, especially for applications that require a back-end administrative interface.

Moreover, Django's extensive ecosystem of third-party packages and libraries, along with its active community, provides developers with additional tools and resources to enhance and extend their Django projects.</p>
            <br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        # Define a model to represent a blog post<br/>
                        from django.db import models<br/><br/>

                        class Post(models.Model):<br/>
                            &nbsp;&nbsp;title = models.CharField(max_length=100)<br/>
                            &nbsp;&nbsp;content = models.TextField()<br/>
                            &nbsp;&nbsp;author = models.ForeignKey(User, on_delete=models.CASCADE)<br/>
                            &nbsp;&nbsp;created_at = models.DateTimeField(auto_now_add=True)<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Model created successfully!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>Django offers numerous advantages for web development. Its built-in components and conventions streamline the development process, allowing developers to focus on building application logic rather than repetitive tasks.</p>
                <p>With features like URL routing, form handling, template engine, and internationalization support, Django provides a solid foundation for building web applications of any scale. Its vibrant community, extensive documentation, and ecosystem of third-party packages further contribute to its popularity and usability.</p>
                <p>Django is a high-level Python web framework that enables rapid development of secure and scalable web applications. It follows the "Don't Repeat Yourself" (DRY) principle and emphasizes the concept of "batteries-included," providing developers with a wide range of built-in features and tools to streamline the development process.</p>
                
                <p>Overall, Django is a versatile and powerful web framework that empowers developers to build complex, data-driven web applications quickly and efficiently, while adhering to best practices in web development and security. Its comprehensive feature set, robust documentation, and thriving community make it a top choice for web development in Python.</p>
            </div>
        </div>
    );
}
