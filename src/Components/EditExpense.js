import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { editExpenseAction } from '../Redux/action';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function EditExpense() {

    const id = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const expenses = useSelector(state => state)
    console.log("id...", id);
    console.log("expenses in edit happened", expenses);

    const editExpense = expenses.filter((expense) => {
        return expense.id == id.id
    })

    const [category, setCategory] = useState(editExpense[0].category)
    const [amount, setAmount] = useState(editExpense[0].amount)
    const [datee, setDatee] = useState(editExpense[0].datee)
    const [name, setName] = useState(editExpense[0].name)



    const submitExpense = () => {
        const expense = {
            category: category,
            amount: parseInt(amount),
            date: datee,
            name: name,
            id: id.id
        }
        console.log(expense ,"in after edit")
        dispatch(editExpenseAction(expense))
    
        navigate('/')

        return toast.success("expense Updated")
        
    }

    

    return (
        <div className='fields-design d-flex'>

            <div className='col-12 shadow-sm'>
                <TextField
                    className='fields-design'
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    sx={{ marginTop: '20px', width: '300px' }}
                    color="secondary" focused
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: 300, margin: 2 }}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            className='fields-design'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            color="secondary" focused
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value={'Food'}>Food</MenuItem>
                            <MenuItem value={'Study'}>Study</MenuItem>
                            <MenuItem value={'Health'}>Health</MenuItem>
                            <MenuItem value={'Rent'}>Rent</MenuItem>
                            <MenuItem value={'Shopping'}>Shopping</MenuItem>
                            <MenuItem value={'Travel'}>Travel</MenuItem>
                        </Select>
                        <TextField
                            className='fields-design'
                            sx={{ marginTop: '20px' }}
                            label="Amount"
                            type="number"
                            value={amount}
                            color="secondary" focused
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <TextField
                            className='fields-design'
                            sx={{ marginTop: '20px' }}
                            label="Date"
                            InputLabelProps={{ shrink: true, required: true }}
                            type="date"
                            defaultValue={datee}
                            color="secondary" focused
                            onChange={(e) => setDatee(e.target.value)}
                        />
                    </FormControl>
                </Box>

                <Button variant="contained" onClick={() => submitExpense()} >Update</Button>
            </div>


        </div>
    )
}

export default EditExpense
