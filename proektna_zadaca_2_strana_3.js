        var roditel;
        var nov;
        var tekst;
        var komentiraj;
        var liked=[0, 0, 0, 0, 0, 0];
        var name;
        var ime;
        var slika_src;
        var slika_alt;
        var card_title;
        var card_text;
        var brojac=7;
        $(document).ready(function(){
            $("#kopce1").click(function(){
                nov=$("<p id='p1'></p>");
                nov.text(" "+$("#ime1").val()+": ");
                nov.append($("#komentar1").val());
                $("#komentari1").attr("class", "klasa");
                $("#komentari1").append(nov);
            });
            $("#kopce2").click(function(){
                nov=$("<p id='p2'></p>");
                nov.text(" "+$("#ime2").val()+": ");
                nov.append($("#komentar2").val());
                $("#komentari2").attr("class", "klasa");
                $("#komentari2").append(nov);
            });
            $("#kopce3").click(function(){
                nov=$("<p id='p3'></p>");
                nov.text(" "+$("#ime3").val()+": ");
                nov.append($("#komentar3").val());
                $("#komentari3").attr("class", "klasa");
                $("#komentari3").append(nov);
            });
            $("#kopce4").click(function(){
                nov=$("<p id='p4'></p>");
                nov.text(" "+$("#ime4").val()+": ");
                nov.append($("#komentar4").val());
                $("#komentari4").attr("class", "klasa");
                $("#komentari4").append(nov);
            });
            $("#kopce5").click(function(){
                nov=$("<p id='p5'></p>");
                nov.text(" "+$("#ime5").val()+": ");
                nov.append($("#komentar5").val());
                $("#komentari5").attr("class", "klasa");
                $("#komentari5").append(nov);
            });
            $(document).on("click","#kopce7",function(){
                nov=$("<p id='p7'></p>");
                nov.append($("#ime7").val()+": ");
                nov.append($("#komentar7").val());
                $("#komentari7").attr("class", "klasa");
                $("#komentari7").append(nov);
            });
            $("#l1").click(function(){
                liked[0]++;
                nov=$("<span></span>");
                nov.text("Likes: "+liked[0]);
                $("#lajkovi1").attr("class", "badge badge-info zgolemi_badge");
                (liked[0]==0)?$("#lajkovi1").append(nov):$("#lajkovi1").empty().append(nov);
            });
            $("#l2").click(function(){
                liked[1]++;
                nov=$("<span></span>");
                nov.text("Likes: "+liked[1]);
                $("#lajkovi2").attr("class", "badge badge-info zgolemi_badge");
                (liked[1]==0)?$("#lajkovi2").append(nov):$("#lajkovi2").empty().append(nov);
            });
            $("#l3").click(function(){
                liked[2]++;
                nov=$("<span></span>");
                nov.text("Likes: "+liked[2]);
                $("#lajkovi3").attr("class", "badge badge-info zgolemi_badge");
                (liked[2]==0)?$("#lajkovi3").append(nov):$("#lajkovi3").empty().append(nov);
            });
            $("#l4").click(function(){
                liked[3]++;
                nov=$("<span></span>");
                nov.text("Likes: "+liked[3]);
                $("#lajkovi4").attr("class", "badge badge-info zgolemi_badge");
                (liked[3]==0)?$("#lajkovi4").append(nov):$("#lajkovi4").empty().append(nov);
            });
            $("#l5").click(function(){
                liked[4]++;
                nov=$("<span></span>");
                nov.text("Likes: "+liked[4]);
                $("#lajkovi5").attr("class", "badge badge-info zgolemi_badge");
                (liked[4]==0)?$("#lajkovi5").append(nov):$("#lajkovi5").empty().append(nov);
            });
            $(document).on("click","#l7",function(){
                liked[5]++;
                nov=$("<span></span>");
                nov.text("Likes: "+liked[5]);
                $("#lajkovi7").attr("class", "badge badge-info zgolemi_badge");
                (liked[5]==0)?$("#lajkovi7").append(nov):$("#lajkovi7").empty().append(nov);
            });
            $("#kopce6").click(function(){
                slika_src=window.prompt("Vnesi src za slikata!");
                slika_alt=window.prompt("Vnesi alt za slikata!");
                card_title=window.prompt("Vnesi card title!");
                card_text=window.prompt("Vnesi card text!");
                nov=$("<img>");
                nov.attr("class", "card-img-top rounded");
                nov.attr("src", slika_src);
                nov.attr("alt", slika_alt);
                nov.css("width", "100%");

                nov_div=$("<div></div>");
                nov_div.attr("class", "card-body");
                nov_div.attr("id", "div"+brojac);

                var card_title_node=$("<h4></h4>");
                card_title_node.attr("class", "card-title");
                card_title_node.text(card_title);

                var card_text_node=$("<p></p>");
                card_text_node.attr("class", "card-text");
                card_text_node.append(card_text);

                var see_profile=$("<a></a>");
                see_profile.attr("href", "#");
                see_profile.attr("class", "btn btn-primary btn-lg");
                see_profile.css("margin", "20px");
                see_profile.text("See Profile");

                var komentari_nova_slika=$("<div></div>");
                komentari_nova_slika.attr("id", "komentari"+brojac);

                var lajkovi_nova_slika=$("<div></div>");
                lajkovi_nova_slika.attr("id", "lajkovi"+brojac);

                var forma=$("<form></form>");
                forma.attr("name", "forma"+brojac);
                forma.attr("method", "post");
                forma.attr("action", "#");

                var oznaka=$("<label></label>");
                oznaka.text("Name: ");

                var vnesi=$("<input>");
                vnesi.attr("id", "ime"+brojac);
                vnesi.attr("type", "text");
                vnesi.attr("size", "30");
                vnesi.attr("name", "nom"+brojac);

                var oznaka_komentar=$("<label></label>");
                oznaka_komentar.text("Comment: ");
                oznaka_komentar.append("<br>");

                var tekst_area=$("<textarea></textarea>");
                tekst_area.attr("id", "komentar"+brojac);
                tekst_area.attr("name", "pisuvaj"+brojac);
                tekst_area.attr("rows", "4");
                tekst_area.attr("cols", "40");
                tekst_area.append("<br>");

                var kopce_post=$("<button></button>");
                kopce_post.attr("id", "kopce"+brojac);
                kopce_post.attr("type", "button");
                kopce_post.attr("class", "btn btn-primary");
                kopce_post.text("Post");
                kopce_post.append("<br>");

                var kopce_like=$("<button></button>");
                kopce_like.attr("id", "l"+brojac);
                kopce_like.attr("type", "button");
                kopce_like.attr("class", "btn btn-success");
                kopce_like.css("marginLeft", "50px");
                kopce_like.text("Like");

                forma.append(oznaka);
                forma.append(vnesi);
                forma.append("<br>");
                forma.append(oznaka_komentar);
                forma.append(tekst_area);
                forma.append(kopce_post);
                forma.append(kopce_like);

                nov_div.append(card_title_node);
                nov_div.append(card_text_node);
                nov_div.append(see_profile);
                nov_div.append("<br>");
                nov_div.append(komentari_nova_slika);
                nov_div.append("<br>");
                nov_div.append(lajkovi_nova_slika);
                nov_div.append("<br>");
                nov_div.append(forma);

                $("#card").append(nov);
                $("#card").append(nov_div);

                brojac++;
            });
        });