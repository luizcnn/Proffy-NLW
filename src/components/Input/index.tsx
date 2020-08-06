import React, { InputHTMLAttributes }from 'react';

import './styles.css'

// Existe uma forma de dizermos ao TypeScript, que o nosso componente poderá receber
// todas as propriedades padrões que uma tag html possui, da seguinte forma:
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    )
}

export default Input;