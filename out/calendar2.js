const today = new Date();
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

window.onload = function (){
  showProcess(today);
};

function last(){
  showDate.setMonth(showDate.getMonth() - 1);
  showProcess(showDate);
}

function next(){
  showDate.setMonth(showDate.getMonth() + 1);
  showProcess(showDate);
}

function showProcess(date){
  var year = date.getFullYear();
  var month = date.getMonth();
  document.querySelector('#header').innerHTML = year + "年" + (month + 1) + "月";

  var calendar = create(year, month);
  document.querySelector('#calendar').innerHTML = calendar;
}

function create(year, month){
  var table = "<table><tr>";
  table += "<th><font color=#ff9090>日<font></th>" +
           "<th>月</th>" +
           "<th>火</th>" +
           "<th>水</th>" +
           "<th>木</th>" +
           "<th>金</th>" +
           "<th><font color=#7ed5d4>土<font></th></tr>";

  var cnt = 0;
  var showMonth = new Date(year, month, 1);
  var lastDate = new Date(year, month + 1, 0);

  table += "<tr>";
  for(i = 0; i < showMonth.getDay(); i++){
    table += "<th></th>";
    cnt += 1;
  }

  for(i = 1; i <= lastDate.getDate();i++){
    cnt ++;
    if (cnt % 7 == 1){
      table += "<th><font color=#ff9090>" + i + "</font></th>";
    }else if (cnt % 7 == 0) {
      table += "<th><font color=#7rd5d4>" + i + "</font></th></tr><tr>";
    }else {
      table += "<th>" + i + "</th>";
    }
  }
  table  += "</tr>"
  return table;
}
