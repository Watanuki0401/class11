const today = new Date();
const date = new Date();

function build(){
  let nowMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  let lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
  let tbcal = document.getElementById("calendar");

  let row = null;
  row = tbcal.insertRow();
  let cnt = 0;

  for (i = 0;　i < nowMonth.getDay(); i++){
    cell = row.insertCell();
    cnt += 1;
  }

  for (i = 1; i<=lastDate.getDate();i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
    cnt += 1;

    if(cnt % 7 == 1){
      cell.innerHTML = "<font color=#ff9090>" + i;
    }

    if(cnt % 7 == 0){
      cell.innerHTML = "<font color=#7ed5d4>" + i;
      row = calendar.insertRow();
    }

    if(today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && date.getDate() == i){
      cell.bgColor = "#bcf1b1";
    }
  }
}

build();
