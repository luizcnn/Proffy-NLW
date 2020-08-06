import React, { SelectHTMLAttributes }from 'react';

import './styles.css'

// Existe uma forma de dizermos ao TypeScript, que o nosso componente poderá receber
// todas as propriedades padrões que uma tag html possui, da seguinte forma:
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    name: string,
    options: Array<{
        value: string,
        label: string,
    }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest} defaultValue="">
                <option value="" disabled hidden >Seleciona uma opção</option>

                {options.map((subject) => {
                   return <option key={subject.value} value={subject.value}>{subject.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select;