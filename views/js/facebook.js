$(document).ready(function(){
    //setTimeout(checkLoginState, 1000);
});
function checkLoginState() {
  FB.getLoginStatus(function(response) {
     if(response.status === "connected")
     {
         $(".disconnec-fb").removeClass("hidden");
         getInfosUser();
     }
     else
         {
             $(".connec-fb").removeClass("hidden");
         }
  });
}
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1649784375319271',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

var data=
  [
    {
      "permission":"public_profile",
      "status":"granted"
    },
    {
      "permission":"email",
      "status":"granted"
    }
  ];
function fb_login(){
    FB.login(function(response) {
    console.log(response);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        if (response.authResponse) {
            $(".connec-fb").addClass("hidden");
            $(".disconnec-fb").removeClass("hidden");
            console.log('Welcome!  Fetching your information.... ');
            //console.log(response); // dump complete info
            var access_token = response.authResponse.accessToken; //get access token
            var user_id = response.authResponse.userID; //get FB UID

            getInfosUser(response);

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'public_profile,email'
    });
}

function fb_logout()
{
  FB.logout(function(response) {
   console.log(response);
});
}


function getInfosUser()
{
    
   
    FB.api('/me',function(response)
    {
       console.log(response);
       if(typeof response.name !== undefined)
       {
           $("#name").val(response.name);
       }
       if(typeof response.email !== undefined)
       {
           $("#email").val(response.email);
       }
    })
    .fail(function(response){
        alert("ERROR");
    });
}
