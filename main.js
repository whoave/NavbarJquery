$(function(){
    let hidden_menu = $("#mobile_menu");
    let mobile_logo = $(".logo").html();
    let mobile_search = $(".search").html();
    let mobile_menu = $(".menu").html();
    let mobile_social = $(".social").html();
    hidden_menu.html(`
    <div class="logo">${mobile_logo}</div>
    <div class="menu_open" id="menu_close"><i class="fa fa-times"></i></div>
    <div class="search">${mobile_search}</div>
    <div class="menu">${mobile_menu}</div>
    <div class="social">${mobile_social}</div>
    `);

    $("#menu_open").click(function(){
       $("#mobile_menu").addClass("active");
    });
    $("#menu_close").click(function () {
        $("#mobile_menu").removeClass("active");
    });
});