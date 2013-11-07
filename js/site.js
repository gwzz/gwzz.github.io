$(document).ready(function () {
  /* Apply fancybox to multiple items */
  if (document.title.search('dlimiter') != -1) {
    $("a.folio-image-wrapper").fancybox({
     'transitionIn'   : 'elastic',
     'transitionOut'  : 'elastic',
     'titleShow'      : true,
     'titlePosition' 	: 'inside',
     'cyclic'         : true,
     'showCloseButton': false,
     'showNavArrows'  : true,
     'titleFormat'    : formatTitle
    });
  }
    
  $('.error').hide();      
  // Hide any validation error elements
  
  $("input#submit-btn").click(function() {
    // Rehide error messages
    $('.error').hide();  
    var name = $("input#name").val();  
    if (name == "") {  
      $("#name-error").show();  
      $("input#name").focus();  
      return false;  
    }  
    var email = $("input#email").val();  
    if (!isValidEmail(email)) {  
      $("#email-error").show();  
      $("input#email").focus();  
      return false;  
    }  
    var message = $("textarea#message").val();  
    if (message == "") {  
      $("#message-error").show();  
      $("input#message").focus();  
      return false;  
    }
    
    // Send
    var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
    //alert (dataString);return false;
    $.ajax({
      type: "POST",
      url: "/bin/mail.php",
      data: dataString,
      success: function() {
        $('#contact-form').html("<div id='success-message'></div>");
        $('#success-message').html("<p>Hey, thanks for the message!</p>").append("<p>I'll be in touch soon.</p>").hide().fadeIn(1500, function() {
          $('#message').append("Zark");
        });
      } 
    });
    return false;
  });    
    
});