import React from 'react'
import {Text} from 'react-native';

const Cliente = ({cliente}) => {
    return (
        <Text>
            {cliente.name}
        </Text>
        
    );
}

export default Cliente;