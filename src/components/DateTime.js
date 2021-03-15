var DateTime = ()=>{
    var showDate = new Date();
    var displayDate=showDate.getDate()+' '+showDate.getMonth()+' '+showDate.getFullYear();
    var dt=showDate.toDateString();
    var displayTime=showDate.getHours()+':'+showDate.getMinutes()+':'+showDate.getSeconds();

    return dt + ' ' + displayTime
}

export default DateTime
