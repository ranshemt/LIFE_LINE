var UserName ;
function getUserId(){
  var aKeyValue = window.location.search.substring(1).split('&'),
      UserId = aKeyValue[ 0 ].split("=")[ 1 ];
  
  return UserId;
}

$(document).ready(function(){
  $.getJSON('includes/JSON/users.json', function(data){
    var UserId=getUserId();

    $.each(data.Users, function(i, obj){
      if(obj.id == UserId){
        UserName='<img src="'+obj.image+'"  alt="'+obj.name+'" class="logoMenu">';
        UserName+=obj.name;

      }

    });
    $('#un-side').html(UserName);
    
  })

})

//un-side



