
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { delete_task, done_task, edit_task } from '../../JS/Action'
import './TodoModel.css'

const TodoModel = ({task}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [newTask, setNewTask] = useState(task.text)
const handleEdit = () =>{
  dispatch(edit_task(task.id, newTask));
  handleClose()
}
  return (
    <div className='todomodel'>
   <span>{task.text}</span>
   <Button onClick={() => dispatch(done_task(task.id))}>{task.isDone? 'unDone' : 'Done'}</Button>
   <Button variant='success' onClick={handleShow} >Edit</Button>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control 
          placeholder= 'Edit task ...'
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
           />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   <Button onClick={() => dispatch(delete_task(task.id))} variant='danger'>Delete</Button>
    </div>
  )
}

export default TodoModel