import Link from 'next/link';
import React from 'react';

const DashBoardPage = () => {
    return (
        <div>
            <h1>Hello form DashBoard Main</h1>
            <Link href={`/dashboard/createuser`}><button>Create User</button></Link>
            <Link href={`/dashboard/updateuser`}><button>Update User</button></Link>
        </div>
    );
};

export default DashBoardPage;