import React from 'react';
import { Card } from 'flowbite-react';
import { useTitle } from '../../hooks/useTitle';

const Blogs = () => {
    useTitle("Blog's")
    return (
        <div className='container mx-auto my-12'>
            <Card className='mb-8 bg-gray-200'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is the difference between SQL and NoSQL?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </Card>
            <Card className='mb-8 bg-gray-200'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is JWT, and how does it work?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    <br />
                    JWTs differ other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </Card>
            <Card className='mb-8 bg-gray-200'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is the difference between javascript and NodeJS?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                </p>
            </Card>
            <Card className='mb-12 bg-gray-200'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    How does NodeJS handle multiple requests at the same time?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </Card>
        </div>
    );
};

export default Blogs;