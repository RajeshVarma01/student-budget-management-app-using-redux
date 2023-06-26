import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TOTAL_BUDGET } from '../constant'
import { Button, Col, Row, Statistic } from 'antd';

const BudgetCard = () => {

  const expenses = useSelector(state => state)
  // console.log("expenses..",expenses)
  const [balance, setBalance] = useState(0)

  const totalExpense = expenses.reduce((acc, exp) => {
    return acc + exp.amount
  }, 0)

  // console.log(totalExpense)
  useEffect(() => {
    setBalance(TOTAL_BUDGET - totalExpense)
  }, [totalExpense])

  return (
    <div className='budget-total'>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Total Budget🪙" value={TOTAL_BUDGET} />
        </Col>
        <Col span={12}>
          <Statistic title="Balance📈" value={balance} precision={2} />
        </Col>
      </Row>
    </div>
  )
}

export default BudgetCard
