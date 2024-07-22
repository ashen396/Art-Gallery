import './styles/CalendarStyles.css';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"];
var weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


function returnWeeks(){
    return weeks;
}

function returnDays(){
    var rows = [];
    for (let index = 1; index < days.length+1; index++) {
        rows.push(<td width={50} key={days[index-1]}>{days[index-1]}</td>);
        if(index % 7 === 0){
            rows.push(<tr></tr>);
        }
    }
    return rows;
}

export function Calendar(){
    var date = new Date();

    var result = 
        <div id='calendar'>
            <h1>{months[date.getMonth()] + " " +  date.getFullYear()}</h1>
            <table>
                <thead>
                    <tr>
                        {returnWeeks().map((day) => <th width={50} key={day}>{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                 {returnDays().map((val) => val)}
                </tbody>
            </table>
        </div>;
    return result;
}