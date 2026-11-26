import { useState, useEffect } from 'react';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')

            .then(response => response.json())

            .then(data => {
                setUsers(data);
            });

    }, []);

    return (
        <div>
            <h2>User Details</h2>

            {users.map(user => (
                <h3 key={user.id}>
                    {user.name}
                </h3>
            ))}

        </div>
    );
}

export default Users;