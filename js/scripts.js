$(function() {
  $('form#quiz').submit(function(event) {
    var q1 = $('input[name=question1]:checked', '#quiz').val();
    var q2 = $('input[name=question2]:checked', '#quiz').val();
    var q3 = $('input[name=question3]:checked', '#quiz').val();
    var q4 = $('input[name=question4]:checked', '#quiz').val();
    var q5 = $('input[name=question5]:checked', '#quiz').val();
    var lukescore = 0;
    var leiascore = 0;
    var hanscore = 0;
    var darthscore = 0;

    if (q1 === 'luke') {
      lukescore += 1;
    }else if (q1 === 'leia') {
      leiascore += 1;
    }else if (q1 === 'han') {
      hanscore += 1;
    }else {
      darthscore += 1;
    }

    if (q2 === 'luke') {
      lukescore += 1;
    }else if (q2 === 'leia') {
      leiascore += 1;
    }else if (q2 === 'han') {
      hanscore += 1;
    }else {
      darthscore += 1;
    }

    if (q3 === 'luke') {
      lukescore += 1;
    }else if (q3 === 'leia') {
      leiascore += 1;
    }else if (q3 === 'han') {
      hanscore += 1;
    }else {
      darthscore += 1;
    }

    if (q4 === 'luke') {
      lukescore += 1;
    }else if (q4 === 'leia') {
      leiascore += 1;
    }else if (q4 === 'han') {
      hanscore += 1;
    }else {
      darthscore += 1;
    }

    if (q5 === 'luke') {
      lukescore += 1;
    }else if (q5 === 'leia') {
      leiascore += 1;
    }else if (q5 === 'han') {
      hanscore += 1;
    }else {
      darthscore += 1;
    }

    if (leiascore > lukescore && leiascore > hanscore && leiascore > darthscore) {
      $('#leia').show();
    }else if (lukescore > leiascore && lukescore > hanscore && lukescore > darthscore) {
      $('#luke').show();
    }else if (hanscore > leiascore && hanscore > lukescore && hanscore > darthscore) {
      $('#han').show();
    }else if (darthscore > leiascore && darthscore > lukescore && darthscore > hanscore) {
      $('#darth').show();
    }

    event.preventDefault();
    $('#quiz').hide();
    $('#intro').hide();
    $('#reset').show();

  });

    $('#reset').click(function(event) {
    $('#quiz').show();
    $('#intro').show();
    $('#luke').hide();
    $('#leia').hide();
    $('#han').hide();
    $('#darth').hide();
    $('#reset').hide();
  });
});
