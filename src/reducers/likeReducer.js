export default function(pouceLiked = 0, action) {
  console.log('bienvenue dans le like reducer')

  if(action.type === 'LIKE') {
    var pouceLikedIncrem = pouceLiked + 1;
    return pouceLikedIncrem
  } else {
    return pouceLiked
  }
}
