import React from 'react';

export default function PostgreSQL() {
    return (
        <div className="para">
            <p>PostgreSQL is a powerful open-source relational database management system (RDBMS) known for its advanced features, extensibility, and reliability. Let’s explore more about PostgreSQL:</p>
            <p>Developed by the PostgreSQL Global Development Group, PostgreSQL (often referred to as Postgres) is a feature-rich database solution that adheres to the SQL (Structured Query Language) standard. It offers support for ACID (Atomicity, Consistency, Isolation, Durability) transactions, advanced indexing techniques, and a wide range of data types, including JSON, XML, and geometric types.</p>
            <p>PostgreSQL is highly extensible and allows developers to create custom functions, data types, and extensions using various programming languages such as SQL, PL/pgSQL, Python, and more. It is widely used for building enterprise-level applications, data warehousing, and geospatial applications.</p><br/>
        
            <div className="para" style={{ backgroundColor: '#D9EEE1', borderRadius: '5px' }}>
                <p>Example:</p>
                <pre style={{ scrollbarWidth: 'none' }}>
                    <code className='para'>
                        -- Create a table to store employee information<br/>
                        CREATE TABLE employees (<br/>
                            &nbsp;&nbsp;id SERIAL PRIMARY KEY,<br/>
                            &nbsp;&nbsp;name VARCHAR(100) NOT NULL,<br/>
                            &nbsp;&nbsp;age INT,<br/>
                            &nbsp;&nbsp;department VARCHAR(100)<br/>
                        );<br/>
                    </code>
                </pre>
            </div><br/>

            <div className="para">
                <button style={{ border: 'none', borderRadius: '5px', width: '10%', padding: '1% 0%', backgroundColor: '#04AA6D' }} onClick={() => alert("Table created successfully!")}>Run</button>
            </div><br/>

            <div className="para">
                <p>PostgreSQL offers numerous advantages for database management and application development. It provides excellent performance, scalability, and reliability, making it suitable for handling large volumes of data and high-traffic applications.</p>
                <p>With features like multi-version concurrency control (MVCC), point-in-time recovery, and full-text search capabilities, PostgreSQL offers advanced data management capabilities that meet the demands of modern applications.</p>
                <p>PostgreSQL is a powerful open-source relational database management system (RDBMS) known for its advanced features, reliability, and extensibility. It is widely used in enterprise environments and by developers for building applications that require a robust and scalable database solution.</p>
                <p>One of the key features of PostgreSQL is its support for advanced data types and features. PostgreSQL offers a rich set of data types, including arrays, JSON, XML, and geometric types, allowing developers to store and manipulate complex data structures efficiently. Additionally, PostgreSQL supports advanced SQL features such as common table expressions (CTEs), window functions, and full-text search, enabling developers to write complex queries and perform advanced data analysis.</p>
                <p>PostgreSQL is also known for its extensibility. It provides an extensive ecosystem of extensions and plugins that allow developers to add custom functionality to the database. This includes extensions for adding support for additional data types, indexing methods, and foreign data wrappers for integrating with external data sources.</p>
                <p>Furthermore, PostgreSQL offers strong support for concurrency and transactions. It provides multi-version concurrency control (MVCC), which allows multiple transactions to access and modify data concurrently without blocking each other. PostgreSQL also supports ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring that transactions are executed reliably and consistently even in the event of system failures.</p>
                <p>Additionally, PostgreSQL emphasizes security and compliance. It provides robust authentication and access control mechanisms, allowing administrators to define fine-grained permissions for users and roles. PostgreSQL also supports SSL encryption for securing data in transit and provides features for auditing and monitoring database activity.</p>
                <p>Overall, PostgreSQL is a feature-rich, reliable, and scalable database solution that is suitable for a wide range of applications, from small-scale projects to large-scale enterprise systems. Its advanced features, extensibility, and strong emphasis on security make it a popular choice for developers and organizations looking for a powerful database solution.</p>
            </div>
        </div>
    );
}
