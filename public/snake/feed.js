function lets_eat() {
    var ceils_arr = $("td");
    var free_ceils_arr =[]
    for (var i = 0; i < ceils_arr.length; i++) {
        if ($(ceils_arr[i]).find("div").length <= 0) {
            free_ceils_arr.push(ceils_arr[i])
        }
    }
    var rand = Math.floor(Math.random() * free_ceils_arr.length);
    $(free_ceils_arr[rand]).append("<div id ='meal'>");

}


function is_hungry(){
    if($("#meal").length <=0 ) {
        setTimeout(lets_eat(), 3000);
    }
}


setInterval(function () {
    is_hungry();
}, 100);
