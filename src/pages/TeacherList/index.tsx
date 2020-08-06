import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css'

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        { value: 'Artes', label:'Artes' },
                        { value: 'Biologia', label:'Biologia' },
                        { value: 'Física', label:'Física' },
                        { value: 'Geografia', label:'Geografia' },
                        { value: 'Inglês', label:'Inglês' },
                        { value: 'História', label:'História' },
                        { value: 'Matemática', label:'Matemática' },
                        { value: 'Português', label:'Português' },
                        { value: 'Química', label:'Química' },
                    ]}
                />
                <Select 
                    name="week_day" 
                    label="Dia da Semana"
                    options={[
                        { value: '0', label:'Domingo' },
                        { value: '1', label:'Segunda-feira' },
                        { value: '2', label:'Terça-feira' },
                        { value: '3', label:'Quarta-feira' },
                        { value: '4', label:'Quinta-feira' },
                        { value: '5', label:'Sexta-feira' },
                        { value: '6', label:'Sábado' },
                    ]}
                />
                    <Input label="Hora" name="time" type="time"/>
                </form>            
            </PageHeader>
            <main>
                <TeacherItem 
                    name="Walter White"
                    theme="Química"
                    imagemSource="https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg/revision/latest?cb=20200709060012&path-prefix=pt-br"
                    intro=""
                    description=""
                    price={150}
                />
                <TeacherItem 
                    name="Professor X"
                    theme="Controle da Mente"
                    imagemSource="https://imgix.bustle.com/inverse/d4/30/16/07/0e3b/4c81/8dfe/bd72e5b66a3e/professor-x-intense2-1024x768jpeg.jpeg"
                    intro=""
                    description=""
                    price={100}
                />
                <TeacherItem 
                    name="Severo Snape"
                    theme="Poções"
                    imagemSource="https://upload.wikimedia.org/wikipedia/pt/4/45/Severo_Snape.jpg"
                    intro=""
                    description=""
                    price={90}
                />
                <TeacherItem 
                    name="Mestre Miyagi"
                    theme="Karatê e Kung-Fu"
                    imagemSource="https://infantv.com.br/infantv/wp-content/uploads/2016/10/karatekid_miagy.jpg"
                    intro=""
                    description=""
                    price={80}
                />
            </main>
        </div>
    )
}

export default TeacherList;