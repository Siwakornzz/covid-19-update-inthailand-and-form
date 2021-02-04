show_table = () => {
    let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        let objs = JSON.parse(this.responseText);
        let UpdateDate = objs.UpdateDate
        let Confirmed = objs.Confirmed
        let Newconfirmed = objs.NewConfirmed
        let Recovered = objs.Recovered
        let NewRecovered = objs.NewRecovered
        let Hospitalized = objs.Hospitalized
        let newhospitalized = objs.NewHospitalized
        let Deaths = objs.Deaths
        let NewDeaths = objs.NewDeaths

        document.getElementById('date').innerHTML = UpdateDate
        document.getElementById('infections').innerHTML = Confirmed + " ราย "
        document.getElementById('newconfirm').innerHTML = Newconfirmed  + " ราย "
        document.getElementById('recovereds').innerHTML = Recovered + " ราย "
        document.getElementById('newrecovered').innerHTML = NewRecovered + " ราย "
        document.getElementById('hospitalizeds').innerHTML = Hospitalized + " ราย "
        document.getElementById('newhospitalized').innerHTML = newhospitalized + " ราย "
        document.getElementById('deaths').innerHTML = Deaths + " ราย "
        document.getElementById('newdeath').innerHTML = NewDeaths + " ราย "
    }
};
xmlhttp.open("GET", "https://covid19.th-stat.com/api/open/today", true);
xmlhttp.send();
}