import React from 'react'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none'
    }
}

export default function TodoList ( props ) {

    return (
        <div className='container'>
            <ul style={styles.ul}>
                { props.todos.map((todo, index) => {
                    return <TodoItem todo = { todo } key={ todo.id } index= { index } onChange={props.onToggle}/>
                }) }
            </ul>
        </div>
    )
}