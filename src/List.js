import React from "react";

export default function List({ list, filterName, filterStartAmount, filterEndAmount, filterStartDate, filterEndDate, filterOption }) {
    list = list.filter(function(item){
        if((item.name.toLowerCase()).indexOf(filterName.toLowerCase()) !== -1){ //znaleziono lub pusty
            if(filterOption=="Amount"){
                if(filterStartAmount=="") filterStartAmount=0;
                if(filterEndAmount=="") filterEndAmount=0;
                filterStartAmount = parseInt(filterStartAmount,10)
                filterEndAmount = parseInt(filterEndAmount,10)
                item.amount = parseInt(item.amount,10)

                if(filterStartAmount!=0 && filterEndAmount!=0 && item.amount>=filterStartAmount && item.amount<=filterEndAmount)
                    return item
                else if(filterStartAmount!=0 && filterEndAmount==0 && item.amount>=filterStartAmount)
                    return item
                else if(item.amount<=filterEndAmount && filterStartAmount==0 && filterEndAmount!=0)
                    return item
                else if(filterStartAmount==0 && filterEndAmount==0)
                    return item
            }
            else if(filterOption=="Date"){
                if(filterStartDate || filterEndDate){
                    if(!filterStartDate && new Date(convert(item.date))<=new Date(convert(filterEndDate)))
                        return item
                    else if(!filterEndDate && new Date(convert(item.date))>=new Date(convert(filterStartDate)))
                        return item
                    else if(new Date(convert(item.date))>=new Date(convert(filterStartDate)) && new Date(convert(item.date))<=new Date(convert(filterEndDate)))
                        return item
                }
                else if(!filterStartDate && !filterEndDate)
                    return item
            }

        }
    });
    const htmlList = list.map(({ id, name, date, amount  }) => {
        return (
            <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
              <span><span className="font-weight-bold clearfix">{name}</span>{" "}<small>{dateConv(date)}</small></span>
              <span className="badge badge-primary badge-pill">{"$ "}{new Intl.NumberFormat(['ban', 'id']).format(amount)}</span>
            </li>
        );  
    });

    return (
        <div className="container text-left">
            <h4 className="mt-3">Viewing <span className="text-primary">{list.length}</span> expenses totalling <span className="font-weight-bold">$ {new Intl.NumberFormat(['ban', 'id']).format(list.reduce((a,v) => a + +v.amount , 0 ))}</span></h4>
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                    Expense<span>Amount</span>
                </li>
                {htmlList}
            </ul>
        </div>
    );
}

function dateConv(dateString){
    let date = Date.parse(dateString)
    let y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let m = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    let d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${m} ${d}, ${y}`
}

function convert(str) {
    var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}