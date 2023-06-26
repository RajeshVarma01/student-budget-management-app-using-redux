import { toast } from "react-toastify";
import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from "../constant"
const initialState = []

export const crudReducer = (state = initialState, action) => {
    console.log("reducer...",action);
    if (action.type == ADD_EXPENSE) {
        state.push(action.payload)
        toast.success("EXPENSE ADDED SUCCESSFULLY..!!");
    }else if(action.type==DELETE_EXPENSE){
        const filteredData = state.filter(exp => {
            return exp.id != action.payload
        })
      
        state = [...filteredData]
    }else if(action.type ==EDIT_EXPENSE){
        console.log(action.payload ,"in reducer edit function ")
        const filteredData = state.map(exp => {
            if(exp.id == action.payload.id){
                exp = {...action.payload}
                console.log(exp,"hi")
            }
            
            return exp
        })
        
        state = [...filteredData]
        console.log("data is coming", state)
    }
    return state
}