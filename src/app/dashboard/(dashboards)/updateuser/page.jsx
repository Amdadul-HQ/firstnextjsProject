import Link from 'next/link';
import React from 'react';

const UpdateUserPage = () => {
    return (
        <div>
            <h1>Update User Page</h1>
            <Link href={`/dashboard/nasted`}><button>Nested</button></Link>
        </div>
    );
};

export default UpdateUserPage;