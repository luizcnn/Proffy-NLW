import React, { TextareaHTMLAttributes }from 'react';

import './styles.css'

// Existe uma forma de dizermos ao TypeScript, que o nosso componente poderá receber
// todas as propriedades padrões que uma tag html possui, da seguinte forma:
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string,
    name: string,
}

const Textarea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    )
}

export default Textarea;