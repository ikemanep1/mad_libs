$(document).ready(function() {
    $("#formOne").submit(function(event) {
      var person1Input = $("input#person1").val();
      var weaponInput = $("input#weapon").val();
      var monsterInput= $("input#monster").val();
      var exclamationInput = $("input#exclamation").val();
      var verbInput = $("input#verb").val();
      var adjectiveInput = $("input#adjective").val();
      var nounInput = $("input#noun").val();
  
      $(".person1").text(person1Input);
      $(".weapon").text(weaponInput);
      $(".monster").text(monsterInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".adjective").text(adjectiveInput);
      $(".noun2").text(noun2Input);
  
      $("#story").show();
  
      event.preventDefault();
    });
  });