import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Filter({changeFilterName, changeFilterStartAmount, changeFilterEndAmount, changeFilterStartDate, changeFilterEndDate, changeFilterOption}) {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [filterOption, setFilterOption] = useState("Date")
    if(filterOption=="Date"){
        return (
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search expenses" 
                            onChange={(e) => changeFilterName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                        className="form-control" 
                        value={filterOption} 
                        onChange={e => {setFilterOption(e.target.value); changeFilterOption(e.target.value)}} >
                            <option value="Date">Date</option>
                            <option value="Amount">Amount</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                    <DatePicker
                        selected={startDate}
                        className="form-control" 
                        onChange={date => {setStartDate(date); changeFilterStartDate(date)}}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    </div>
                    <div className="col-md-3">
                    <DatePicker
                        selected={endDate}
                        className="form-control" 
                        onChange={date => {setEndDate(date); changeFilterEndDate(date)}}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search expenses" 
                            onChange={(e) => changeFilterName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                        className="form-control" 
                        value={filterOption} 
                        onChange={e => {setFilterOption(e.target.value); changeFilterOption(e.target.value)}} >
                            <option value="Date">Date</option>
                            <option value="Amount">Amount</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="$" 
                            min="1"
                            onChange={(e) => changeFilterStartAmount(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                    <input 
                            type="number" 
                            className="form-control" 
                            placeholder="$" 
                            min="1"
                            onChange={(e) => changeFilterEndAmount(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
