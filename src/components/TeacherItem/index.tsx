import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemProps {
    imagemSource: string,
    name: string,
    theme: string,
    intro: string,
    description: string,
    price: number,
}

const TeacherItem: React.FC<TeacherItemProps> = ({ 
    imagemSource, name, theme, intro, description, price 
}) => {
    return(
        <article className="teacher-item">
                    <header>
                        <img src={imagemSource} alt="Teacher"/>
                        <div>
                            <strong>{name}</strong>
                            <span>{theme}</span>
                        </div>
                    </header>

                    <p className="teacher-presentation">
                        { intro }
                        <br />
                        <br />
                       { description }

                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong className="price">{`R$ ${price},00`}</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;