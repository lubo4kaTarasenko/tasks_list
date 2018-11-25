var score = 0
$("#main").append("<div id ='game'>");
$("#main").append("<div id='field'> <h3> score: "+score+"</h3></div>");
$("#game").append("<table id='field'>");
//$('#main').append("<button type='button' id='up'><span class='glyphicon glyphicon-arrow-up'></span></button></br>");
//$('#main').append("<button type='button' id='left'><span class='glyphicon glyphicon-arrow-left'></span></button>");
//$('#main').append("<button type='button' id='right'><span class='glyphicon glyphicon-arrow-right'></span></button></br>");
//$('#main').append("<button type='button' id='down'><span class='glyphicon glyphicon-arrow-down'></span></button>");

function field_arr(n) {
    $("#field").append("<tr id='"+n+"'></tr>");
    for (var i = 0; i < 20; i++) {
        var k ="#"+n;
        $(k).append("<td  ></td>");
    }
}

function field_arr2(){
    var n=1;
    for (var i = 0; i < 20; i++) {
        field_arr(n)
        n+=1
    }
}
field_arr2();
var dir  = 0;
function snake_born(){
    var ceils_arr = $("td");
    for(var i = 0; i<3;i++){
        $(ceils_arr[i]).append('<div class="body"  dir="'+dir+'"></div>');
        dir +=1
    }

    $(ceils_arr[3]).append('<div class="body" id ="head" dir="'+dir+'"></div>')
}
snake_born()

function where_is_snake(){
    var place_arr =[];
    var ceils_arr = $("td");
    for(var i = 0; i<ceils_arr.length; i++){
        if($(ceils_arr[i]).find(".body").length > 0){
            place_arr.push(i)
        }
        if($(ceils_arr[i]).find("#head").length > 0){
            var head = i
        }
    }
    return({coords: place_arr, head: head})
}

function snake_move(k) {
    dir = dir+1;
    var ceils_arr = $("td");
    var all_coords = where_is_snake()
    var h_k = all_coords.head + k;
    var h = all_coords.head;
    if($(ceils_arr[h_k]).find(".body").length>0){
        $("#game").append("<h2>Your snake is dead</h2>");
        return
    }
    if($(ceils_arr[h_k]).find("#meal").length <= 0){
        $(ceils_arr[h]).find("#head").remove();
        $(ceils_arr[h_k]).append('<div class="body" id ="head" dir="'+dir+'"></div>');
        var dir_arr = $("[dir]")
        var x = 10000;
        for(var i = 0; i< dir_arr.length;i++) {
            var y = Number($(dir_arr[i]).attr('dir'));
            x = Math.min(x,y)
        }

        $("td").find("[dir = '"+x+"' ]").remove();
        $(ceils_arr[h]).append('<div class="body" dir="'+(dir-1)+'"></div>');
    }
    else{
        $(ceils_arr[h]).find("#head").attr("id", "not_head");
        $(ceils_arr[h_k]).find("#meal").attr("id","head");
        console.log($("#meal").length);
        console.log($("#head").length);
        score +=1;
        $("#main").find("h3").text( "score: "+score);
    }
}

function oops(a, b){
    if(b<a){
        $("#game").append("<h2>Your snake is dead</h2>");
    }
}

$("button").click(function () {
    var id =$(this).attr('id');
    main(id)

});

addEventListener("keydown", function(event) {
        var id = event.keyCode;
        if(id<37||id>40){
            return
        }
        main(id)
});

function main(id) {
    if($("#game").find("h2").length>0){
        return
    }
    var all_coords = where_is_snake()
    var first_arr = all_coords.coords.length;
    var k ;
    if(id=="left"|| id ==37){
        k =-1;
    }
    if(id=="right"|| id ==39){
        k = 1;
    }
    if(id=="down"|| id ==40){
        k = 20;
    }
    if(id=="up"|| id ==38){
        k = -20
    }
    snake_move(k);
    var all_coords = where_is_snake();
    var second_arr = all_coords.coords.length;
    oops(first_arr,second_arr)
}

