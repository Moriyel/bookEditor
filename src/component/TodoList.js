import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit, sorting} = this.props
    return (
      <ul className= 'list-group my-5'>
        <h3 className='text-capitalized text-center'>Список книг</h3>
        <div>Сортировка <button type='button' className='btn btn-primary text-capitalized  mt-2' onClick ={()=>sorting('heading')}>По заголовку</button> {' '}
        <button type='button' className='btn btn-primary text-capitalized mt-2' onClick ={()=>sorting('year')}>По году публикации</button></div>
        {items.map(item => {
          return (
            <TodoItem 
              key={item.id} 
              //title={item.title}
              state = {item}
              handleDelete ={() => handleDelete(item.id)}
              handleEdit ={() => handleEdit(item.id)}  
            />
          )    
        })}
        
        <button type='button' className='btn btn-danger btn-block text-capitalized mt-5' onClick ={clearList}>clear list</button>
      </ul>
    )
  }
}
