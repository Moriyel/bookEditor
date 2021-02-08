import React, { Component } from 'react'
import s from './TodoInput.module.css'


export default class TodoInput extends Component {
   photo = this.photo
  render() {
    const { handleChange, handleSubmit, editItem, uploadingImage,allAuthorsChange, allAuthorsDelete} = this.props
    const {heading,listOfAuthors,nameAuthors, surnameAuthors,
      namePublisher,yearPublication, releaseData,
      numberOfPages, isbn, text} = this.props.state
    return (
      <div className = 'card card-body my-3' >
        <form onSubmit = {handleSubmit} className={s.input} >
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
               <i className='fas fa-book' />
              </div>
            </div>
          <input type = "text" className='form-control text-capitalized' placeholder ='Заголовок' 
          value = {heading} onChange = {(e) => handleChange(e,'heading')} required maxLength="30" />
          </div>
          <div>
            <input type = "text" className='form-control text-capitalized' placeholder ='Список авторов'
            value = {listOfAuthors} onChange = {() => {}}
            required />
              <button className={'btn btn-primary'} 
              type='button' onClick = {()=>{allAuthorsChange()}}>Добавить автора</button> {' '}
              <button className={'btn btn-primary'}
              type='button' onClick = {()=>{allAuthorsDelete()}}>Удалить автора</button>
          </div>
          <div>
            <input type = "text" className='form-control text-capitalized' placeholder ='Имя автора'
            value = {nameAuthors} onChange = {(e) => handleChange(e,'nameAuthors')} maxLength="20"/>
          </div>
          <div>
            <input type = "text" className='form-control text-capitalized' placeholder ='Фамилия автора'
            value = {surnameAuthors} onChange = {(e) => handleChange(e,'surnameAuthors')} maxLength="20" />
          </div>
          <div>
            <input type = "number" className='form-control text-capitalized' placeholder ='Количество страниц не более 10000'
            value = {numberOfPages} onChange = {(e) => handleChange(e,'numberOfPages')} required min="1" max="10000"/>
          </div>
          <div>
            <input type = "text" className='form-control text-capitalized' placeholder ='название издательсва'
            value = {namePublisher} onChange = {(e) => handleChange(e,'namePublisher')} maxLength="30"/>
          </div>
          <div>
            <input type = "number" className='form-control text-capitalized' placeholder ='год публикации Используйте числовой формат не ранее 1800 года'
            value = {yearPublication} onChange = {(e) => handleChange(e,'yearPublication')} min = '1800'/>
          </div>
          <div>
            <input type = "date" className='form-control text-capitalized' placeholder ='дата выхода в тираж'
            value = {releaseData} onChange = {(e) => handleChange(e,'releaseData')} min = '1800-01-01' />
          </div>
          <div>
              <input type = "text" className='form-control text-capitalized' placeholder ='ISBN в формате 000-0-00-000000-0'
              value = {isbn} onChange = {(e) => handleChange(e,'isbn')} />
          </div>
          <div>
              <textarea type = "text" className='form-control text-capitalized' placeholder ='введите текст/редактируйте текст'
              value = {text} onChange = {(e) => handleChange(e,'text')} />
          </div>
          <div>
              <input type = "file" className='photo' placeholder ='Изображение' onChange = {() => {uploadingImage()}} />       
          </div>
          <button type='submit'
           className={
             editItem ?
             'btn btn-block btn-success mt-3':
             'btn btn-block btn-primary mt-3'
           } >{editItem ? 'Редактировать' : 'Добавить'}</button>
        </form>
      </div>

    )
  }
}
