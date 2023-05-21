import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold'>
            What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h1>
            <p>Refresh tokens allow us to balance users' access needs with our organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose our organization to data compromise or other malicious actions if a hacker is able to steal them. <br />
            We can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
            </p> <br />

            <h1 className='text-5xl font-bold'>
            Compare SQL and NoSQL databases?
            </h1>
            <p>
            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON
            </p> <br />
            <h1 className='text-5xl font-bold'>
            What is express js? What is Nest JS
            </h1>
            <p>
            Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
            </p> <br />
            <h1 className='text-5xl font-bold'>
            What is MongoDB aggregate and how does it work
            </h1>
            <p>
            What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>


        </div>
    );
};

export default Blogs;