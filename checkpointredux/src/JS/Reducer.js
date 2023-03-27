import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionTypes"




const initalstate = {
    listTasks : [
    {id: Math.random(), text: 'task 1', isDone:false},
    {id: Math.random(), text: 'task 2', isDone:true},
    {id: Math.random(), text: 'task 3', isDone:false},

]

}
const todoReducer = (state= initalstate, {type, payload}) =>{
    switch(type){
        case DONE_TASK :
            return {
               ...state, listTasks: state.listTasks.map((el)=> 
               el.id === payload ? {...el, isDone : !el.isDone} : el)
            }
            case DELETE_TASK :
                return {
                    ...state, listTasks: state.listTasks.filter((el)=>
                    el.id !== payload)
                }
                case EDIT_TASK :
                    return {
                        ...state, listTasks: state.listTasks.map((el)=>
                        el.id === payload.id? {...el, text: payload.newTask} : el)
                    }
                    case ADD_TASK :
                        return {
                        ...state, listTasks: [...state.listTasks, payload]
                        }
             default : 
        return state

           
    }
}
export default todoReducer