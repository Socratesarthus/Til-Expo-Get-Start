import React from 'react'
import Cliente from './Cliente';

const Clientes = ({users}) => {
    return (
        <>
            {users.map(user => < Cliente cliente={Cliente} />)}
        </>
        
    );
    
};

export default Clientes;