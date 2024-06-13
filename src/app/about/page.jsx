import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <section className='min-h-[calc(100vh-200px)]'>
            <h1 className=''>This is About page</h1>
            <Link className='bg-green-500 px-6 py-2 rounded-md text-white ml-4' href={`/about/history`}>History</Link>
            <Link className='bg-green-500 px-6 py-2 rounded-md text-white ml-4' href={`/about/mission`}>Mission</Link>
        </section>
    );
};

export default AboutPage;