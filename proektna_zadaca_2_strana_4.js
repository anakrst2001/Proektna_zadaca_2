$(document).ready(function(){
    var nov;
    var datum;

    $("#kopce1").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst1").val());
        nov.append($("<br id='br1'>"));  
        $("#dodadi1").attr("class", "komentar");
        $("#dodadi1").append("Posted on: "+datum);   
        $("#dodadi1").append(nov);         
    });

    $("#kopce2").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst2").val());
        nov.append($("<br id='br2'>"));  
        $("#dodadi2").attr("class", "komentar");
        $("#dodadi2").append("Posted on: "+datum);   
        $("#dodadi2").append(nov);         
    });

    $("#kopce3").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst3").val());
        nov.append($("<br id='br3'>"));  
        $("#dodadi3").attr("class", "komentar");
        $("#dodadi3").append("Posted on: "+datum);   
        $("#dodadi3").append(nov);         
    });

    $("#kopce4").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst4").val());
        nov.append($("<br id='br4'>"));  
        $("#dodadi4").attr("class", "komentar");
        $("#dodadi4").append("Posted on: "+datum);   
        $("#dodadi4").append(nov);         
    });

    $("#kopce5").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst5").val());
        nov.append($("<br id='br5'>"));  
        $("#dodadi5").attr("class", "komentar");
        $("#dodadi5").append("Posted on: "+datum);   
        $("#dodadi5").append(nov);         
    });

    $("#kopce6").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst6").val());
        nov.append($("<br id='br6'>"));  
        $("#dodadi6").attr("class", "komentar");
        $("#dodadi6").append("Posted on: "+datum);   
        $("#dodadi6").append(nov);         
    });

    $("#kopce7").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst7").val());
        nov.append($("<br id='br7'>"));  
        $("#dodadi7").attr("class", "komentar");
        $("#dodadi7").append("Posted on: "+datum);   
        $("#dodadi7").append(nov);         
    });

    $("#kopce8").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst8").val());
        nov.append($("<br id='br8'>"));  
        $("#dodadi8").attr("class", "komentar");
        $("#dodadi8").append("Posted on: "+datum);   
        $("#dodadi8").append(nov);         
    });

    $("#kopce9").click(function(){
        datum=new Date($.now());
        nov=$("<p></p>");
        nov.text($("#tekst9").val());
        nov.append($("<br id='br9'>"));  
        $("#dodadi9").attr("class", "komentar");
        $("#dodadi9").append("Posted on: "+datum);   
        $("#dodadi9").append(nov);
    });

});