import React, { useState } from "react";

export default function Input({ addExpense }) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
  
    return (
      <div className="container-fluid jumbotron">
        <h1 className="text-dark text-left mb-3">Add expense</h1>
        <div className="row no-gutters">
            <div className="col-md-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Expense name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className="col-md-3">
                <input 
                    type="number" 
                    min="0" 
                    className="form-control" 
                    placeholder="Amount" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
            </div>
            <div className="col-md-3">
                <input 
                    type="date" 
                    className="form-control" 
                    aria-label="Date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                />
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary" type="button" onClick={() => addExpense(name, date, amount)}>
                    Add Expense
                </button>
            </div>
        </div>
    </div>
    );
}