export default function(coeurLiked = 0, action) {
  console.log('bienvenue dans le coeur reducer')

  if(action.type === 'PRESS') {
    var coeurLikedIncrem = coeurLiked + 1;
    return coeurLikedIncrem
  } else {
    return coeurLiked
  }
}
