# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
jQuery ->
    $(".sortThese").sortable axis: 'y'
    $("#boxemail").change ->
        $("#emailpreview").toggle @checked
        return
    $("#boxfirstname").change ->
        $("#firstnamepreview").toggle @checked
        return
    $("#boxlastname").change ->
        $("#lastnamepreview").toggle @checked
        return