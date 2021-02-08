import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const {state, handleDelete, handleEdit} = this.props
    
    return (
      <li className='list-group-item text-capitalized d-flex justify-content-between my-2'>
        <h6>Заголовок: {state.title}</h6>
          <ul>
            <li><h6>Список авторов:</h6> 
              <ul>
                <li>{state.listOfAuthors}</li>
              </ul> 
            </li>
            <li>Количество страниц: {state.numberOfPages}</li>
            <li>Название издательства: {state.namePublisher}</li>
            <li>Год публикации: {state.yearPublication}</li>
            <li>Дата выхода в тираж: {state.releaseData}</li>
            <li>ISBN: {state.isbn}</li>
            <li>Ваша картинка: <img src = {state.picturePhoto} style ={{width:150}}/> </li>
            <li>Текст: <p>{state.text}</p> </li>
        </ul>
        <div className='todo-icon'>
          <span className='mx-2 text-success' onClick={handleEdit}>
            <i className='fas fa-pen' /></span>
            <span className='mx-2 text-danger' onClick ={handleDelete}
            >
            <i className='fas fa-trash' /></span>
        </div>
      </li>
    )
  }
}
