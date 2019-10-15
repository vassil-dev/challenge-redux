export default function(alertLiked = 0, action) {
  console.log("bienvenue dans l'alert reducer")
  console.log("action.type ==>", action.type)

  if(action.type === 'CLICK') {
    var alertLikedIncrem = alertLiked + 1;
    return alertLikedIncrem
  }
  else if (action.type === 'BOOM') {
    var alertLikedIncrem = alertLiked + 666;
    return alertLikedIncrem
  }
   else
    return alertLiked
  }
