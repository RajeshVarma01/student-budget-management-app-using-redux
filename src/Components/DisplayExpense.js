import { DeleteFilled, EditOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpenseAction } from '../Redux/action'
import { useEffect, useState } from 'react'
import { Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import BudgetCard from './BudgetCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function DisplayExpense(props) {

  const notify = () => toast.success("EXPENSE ADDED SUCCESSFULLY..!!");
  const notifyDel = () => toast.error("EXPENSE DELETED SUCCESSFULLY..!")

  const navigate = useNavigate()

  const { Search } = Input;
  const expenses = useSelector(state => state)
  console.log(expenses)

  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  const filteredData = expenses.filter((val) => {
    return val.category.toLowerCase().includes(search.toLowerCase())
  })

  const deleteExpense = (id) => {
    dispatch(deleteExpenseAction(id))
    return toast.error("expense deleted successfully!")
  }

  useEffect(() => {
    
  },[props.flag])

  return (
    <div className='main-card'>
    <ToastContainer/>
    <BudgetCard/>
      <div className='first-card'>
        <button className='addmore-btn' onClick={() => navigate('/add')}>ADD MORE    <PlusCircleOutlined /></button>
        
        <Search className='search_design'
        placeholder="search for expense..!!"
        allowClear
        enterButton="Search"
        size="large"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />

      </div>
      <br></br>
      <div className='second_card'>
       
        {
          (filteredData.length) ?
            filteredData.map((expense, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{`Expense ${expense.id}`}</h5>
                    <hr></hr>
                    <ul className='design-ul'>
                      <li><h5  className="card-text">NAME:    {expense.name}</h5></li>
                      <li><h5 className="card-text">CATEGORY:    {expense.category}</h5></li>
                      <li><h5 className="card-text">AMOUNT:    {expense.amount}</h5></li>
                      <li><h5 className="card-text">DATE:    {expense.date}</h5></li>
                    </ul>

                    <div className='icons-btn'>
                      <button class="btn btn-danger" onClick={() => deleteExpense(expense.id)}><DeleteFilled /></button>
                      <Link to={`/edit/${expense.id}`}>
                        <button class="btn btn-primary" ><EditOutlined /></button>
                      </Link>
                    </div>

                  </div>
                </div>
              )
            }) : <h1>No Expense</h1>
        }
      </div>
    </div>
  )
}
