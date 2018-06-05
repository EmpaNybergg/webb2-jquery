$(function () {
    var colorText = "h1";
    var color = randomColor();
    setColorAndText(colorText, color);
  
    console.log(color);
    $('.new').click(function(){
    color = randomColor();
    setColorAndText(colorText, color);
    });

    $('.copy').click(function(){
      copyToClipboard(colorText);
      message();
    })
  });
  
  function randomColor() {
    // Kod in här
    var colors = [];
        colors[0] = Math.floor((Math.random() * 256));
        colors[1] = Math.floor((Math.random() * 256));
        colors[2] = Math.floor((Math.random() * 256));
    
        return colors;
  }

  function setColorAndText(element, color) {
    // Koda här
        $('body').css({
        'background-color' : 'rgb('+color[0]+','+color[1]+','+color[2]+')'
    }) 
    $('.content').children().text('rgb(' +color+')').css({
        'color' : 'rgb('+color[0]+','+color[1]+','+color[2]+')',
        'filter' : 'invert(100%)'
    });
    
  }
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
  function message() {
      // Koda här...
      $('.new').css({
        'display': 'none'
      })
      $('.copy').css({
        'display': 'none'
      })
      $('.copied').css({
        'display': 'block'
      })
  
      setTimeout(function() {
        // ... och här
        $('.new').css({
          'display': 'block'
        })
        $('.copy').css({
          'display': 'block'
        })
        $('.copied').css({
          'display': 'none'
        })
        
      }, 750);
  }