$(document).ready(function() {
    $("#formOne").submit(function(event) {
        event.preventDefault();
      var person1Input = $("input#person").val();
      var weaponInput = $("input#weapon").val();
      var monsterInput= $("input#monster").val();
      var exclamationInput = $("input#exclamation").val();
      var verbInput = $("input#verb").val();
      var adjectiveInput = $("input#adjective").val();
      var noun2Input = $("input#noun2").val();
  
      $(".person").text(person1Input);
      $(".weapon").text(weaponInput);
      $(".monster").text(monsterInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".adjective").text(adjectiveInput);
      $(".noun2").text(noun2Input);
  
      $("#story").show();
  
    });
  });