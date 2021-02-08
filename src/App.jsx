import React, {Component} from 'react'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v1 as uuid} from "uuid"


class App extends Component {
  state ={
    items: [],
    id: uuid(),
    heading: '',
    editItem: false,
    listOfAuthors: [],
    nameAuthors: '',
    surnameAuthors: '',
    numberOfPages: '',
    namePublisher: '',
    yearPublication: '',
    releaseData: '',
    isbn: '',
    text: '',
    picturePhoto: ''
  }

  componentDidMount() {
    const refundItems = JSON.parse(localStorage.getItem('items'))
    if(refundItems){this.setState({...this.state, items: refundItems})}
  }
  componentDidUpdate() {
    this.handleFormSubmit()
  }

  handleFormSubmit = () => {
    const {items} = this.state
    localStorage.setItem('items', JSON.stringify(items))
  }

  uploadingImage =()=> {
    const inputPhoto = document.querySelector('.photo')
    const file = inputPhoto.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = ()=> {
    const image = reader.result
    this.setState({...this.state, picturePhoto: image})
    }

  }

  sorting =(param)=> {
    let sortItems = []
    if(param === 'heading'){   
      sortItems = this.state.items.sort((a,b) => a.title[0]<b.title[0] ? -1 : (a.title[0]>b.title[0]) ? 1: 0)
    } else {
      sortItems = this.state.items.sort((a,b) => a.yearPublication-b.yearPublication)
    }
    this.setState({...this.state, items: sortItems})
  }

  handleChange =(e, param)=>{
    this.setState({...this.state,[param]: e.target.value
    });
  }

  allAuthorsChange =() => {
    const allAuthors = this.state.listOfAuthors
    allAuthors.push(' ' + this.state.nameAuthors + ' ' + this.state.surnameAuthors)
    this.setState({...this.state, 
      listOfAuthors: allAuthors,
      nameAuthors: '',
      surnameAuthors: ''
    })

    
  }

  allAuthorsDelete =() => {
    const allAuthors = this.state.listOfAuthors
    allAuthors.length = allAuthors.length -1
    this.setState({...this.state, listOfAuthors: allAuthors})

  }


  handleSubmit =(e)=>{
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.heading,
      listOfAuthors: this.state.listOfAuthors,
      nameAuthors: this.state.nameAuthors,
      surnameAuthors: this.state.surnameAuthors,
      numberOfPages: this.state.numberOfPages,
      namePublisher: this.state.namePublisher,
      yearPublication: this.state.yearPublication,
      releaseData: this.state.releaseData,
      isbn: this.state.isbn,
      text: this.state.text,
      picturePhoto: this.state.picturePhoto
    }

    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      heading: '',
      id: uuid(),
      editItem: false,
      listOfAuthors: [],
      nameAuthors: '',
      surnameAuthors: '',
      numberOfPages: '',
      namePublisher: '',
      yearPublication: '',
      releaseData: '',
      isbn: '',
      text: '',
      picturePhoto: ''
    })
  }

  clearList = () =>{
    this.setState({
      items: []
    })
  }
  handleDelete =(id) =>{
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = id=>{
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    })
    const selectedItems = this.state.items.find(item => {
      return item.id === id
    })
    this.setState({
      items: filteredItems,
      heading: selectedItems.title,
      listOfAuthors: selectedItems.listOfAuthors,
      nameAuthors: selectedItems.nameAuthors,
      surnameAuthors: selectedItems.surnameAuthors,
      numberOfPages: selectedItems.numberOfPages,
      namePublisher: selectedItems.namePublisher,
      yearPublication: selectedItems.yearPublication,
      releaseData: selectedItems.releaseData,
      isbn: selectedItems.isbn,
      picturePhoto: selectedItems.picturePhoto,
      text: selectedItems.text,
      editItem: true,
      id: id
    })

  }
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className='text-capitalize text-center'>
              Редактор книг v-1.0
            </h3>
          <TodoInput 
            state={this.state} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
            uploadingImage={this.uploadingImage}
            allAuthorsChange = {this.allAuthorsChange}
            allAuthorsDelete = {this.allAuthorsDelete} />
          <TodoList 
            items={this.state.items} 
            clearList={this.clearList} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            sorting = {this.sorting}
           />
          </div>
        </div>
      </div>
    );
  }
}

export default App;



