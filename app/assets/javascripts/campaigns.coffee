# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
jQuery ->
    document.addEventListener('page:load', Bootsy.init);
    #document.addEventListener('turbolinks:load', Bootsy.init);
    #For Campaign Checkbox's
    elem = document.querySelector('.js-switch1')
    init = new Switchery(elem, { color: '#58b2ff' })
    elem = document.querySelector('.js-switch2')
    init = new Switchery(elem, { color: '#58b2ff' })
    elem = document.querySelector('.js-switch3')
    init = new Switchery(elem, { color: '#58b2ff' })
    #For sorting order of fields
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