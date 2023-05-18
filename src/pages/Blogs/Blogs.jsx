/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className=' bg-red-200 h-auto p-3'>
            <div className=' w-3/4 mx-auto bg-[#89a293] m-2 p-4'>
                <h1 className='text-3xl'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='mt-1 text-white'>
                    Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.
                </p>

            </div>

            <div className=' w-3/4 mx-auto bg-[#89a293] m-2 p-4'>
                <h1 className='text-3xl'>2.What is express js? What is Nest JS ?</h1>
                <p className='mt-1 text-white'>
                    Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is known for its minimalist design and unopinionated nature, allowing developers to have greater control over the architecture and components of their applications
                </p>
                <p className='mt-1 text-white'>

                    Next.js is a popular open-source framework for building modern web applications using React. It is designed to make it easier to develop production-ready React applications with features like server-side rendering, static site generation, and automatic code splitting.
                </p>
            </div>

            <div className=' w-3/4 mx-auto bg-[#89a293] m-2 p-4'>
                <h1 className='text-3xl'>3.Compare SQL and NoSQL databases?</h1>
                <p className='mt-1 text-white'>
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON
                </p>
            </div>

            <div className=' w-3/4 mx-auto bg-[#89a293] mt-2 p-4'>
                <h1 className='text-3xl'>4.What is MongoDB aggregate and how does it work</h1>
                <p className='mt-1 text-white'>
                    What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>
            </div>



        </div>
    );
};

export default Blogs;