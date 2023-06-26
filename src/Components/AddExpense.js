import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function AddExpense(props) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [datee, setDatee] = useState()
    const [name, setName] = useState()



    const submitExpense = () => {
        const expense = {
            category: category,
            amount: parseInt(amount),
            date: datee,
            name: name,
            id: nanoid()
        }
        dispatch(addExpenseAction(expense))
        setName('')
        setCategory('')
        setAmount(0)
        setDatee()
        props.flagMethod(true)
        navigate('/')
        console.log("Amount...", amount);
    }
    return (
        <div className='fields-design d-flex'>

            <div className='col-12 shadow-sm'>
                <TextField
                    className='fields-design-one'
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    sx={{ marginTop: '20px', width: '300px' }}
                    // color="secondary" focused
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: 300, margin: 2 }}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            className='fields-design-one'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            // color="secondary" focused
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
                            className='fields-design-one'
                            sx={{ marginTop: '20px' }}
                            label="Amount"
                            value={amount}
                            // color="secondary" focused
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <TextField
                            className='fields-design-one'
                            sx={{ marginTop: '20px' }}
                            label="Date"
                            InputLabelProps={{ shrink: true, required: true }}
                            type="date"
                            defaultValue={datee}
                            // color="secondary" focused
                            onChange={(e) => setDatee(e.target.value)}
                        />
                    </FormControl>
                </Box>

                <Button variant="contained" onClick={() => submitExpense()} >ADD Expense</Button>
            </div>


        </div>
    )
}
