
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

function checkLoginState() {
  FB.getLoginStatus(function(response) {
     getInfosUser(response);
  });
}

function getInfosUser(response)
{
    
    var url  = "https://graph.facebook.com/me?access_token=";
    url += response.authResponse.accessToken ;
    $.get(url)
    .done(function(response)
    {
       console.log(response);
       if(typeof response.name !== undefined)
       {
           $("#name").val(response.name);
       }
    })
    .fail(function(response){
        alert("ERROR");
    });
}