var url = 'https://corona.lmao.ninja/v2/countries/israel';
var date = document.getElementById('dateID');
var infoDiv = document.getElementById('infoID');
function getDate(){
	var  today 		= new Date();
	var  dd 		= String(today.getDate()).padStart(2, '0');
	var  mm 		= String(today.getMonth() + 1).padStart(2, '0'); //janvier = 0
	var  yyyy 		= today.getFullYear();

	return dd + '/' + mm + '/' + yyyy;

}

async function httpGet()
{
    var request = new Request(url);
    var res = await fetch(request);
    var info = await res.json();
    console.log(info)
    // div.innerText = info[info.length -1]["Deaths"]
    date.innerText = "Date: " + getDate();
    var format = `Cases: \n${info["cases"].toLocaleString()}\n Recovered: \n${info["recovered"].toLocaleString()}\n Deaths: \n${info["deaths"].toLocaleString()}`
    infoDiv.innerText = format;
    infoDiv.style.fontWeight = 'bold';
}
// 2022-01-21