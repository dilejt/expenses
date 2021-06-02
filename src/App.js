import { useState } from 'react'
import Input from './Input'
import './App.css'
import List from './List'
import Filter from './Filter'
import uniqid from 'uniqid'

function App() {

  const [list, setList] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterStartAmount, setFilterStartAmount] = useState("")
  const [filterEndAmount, setFilterEndAmount] = useState("")
  const [filterStartDate, setFilterStartDate] = useState("")
  const [filterEndDate, setFilterEndDate] = useState("")
  const [filterOption, setFilterOption] = useState("Date")

  const addExpense = (name, date, amount) => {
    if(name && date && amount){
      const newExpense = {
        id: uniqid(),
        name,
        date,
        amount
      }
      const myList = [...list, newExpense]
      setList(myList)
    }
  }

  const changeFilterName = (filterName) => {
    setFilterName(filterName)
  }

  const changeFilterStartAmount = (filterStartAmount) => {
    setFilterStartAmount(filterStartAmount)
  }

  const changeFilterEndAmount = (filterEndAmount) => {
    setFilterEndAmount(filterEndAmount)
  }

  const changeFilterStartDate = (filterStartDate) => {
    setFilterStartDate(filterStartDate)
  }

  const changeFilterEndDate = (filterEndDate) => {
    setFilterEndDate(filterEndDate)
  }

  const changeFilterOption = (filterOption) => {
    setFilterOption(filterOption)
  }

  return (
    <div className="App">
      <Input addExpense={addExpense} />
      <Filter changeFilterName={changeFilterName} changeFilterStartAmount={changeFilterStartAmount} changeFilterEndAmount={changeFilterEndAmount} changeFilterStartDate={changeFilterStartDate} changeFilterEndDate={changeFilterEndDate} changeFilterOption={changeFilterOption}/>
      <List list={list} filterName={filterName} filterStartAmount={filterStartAmount} filterEndAmount={filterEndAmount} filterStartDate={filterStartDate} filterEndDate={filterEndDate} filterOption={filterOption}/>
    </div>
  );
}

export default App;
