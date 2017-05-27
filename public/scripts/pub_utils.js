

//takes array of arrays shape (nx2) lat long vals
//returns google maps coords configuration object
function configCoords ( coords ) {
  let googleCoords = coords.map( (coord) => {
      return { "lat" : Number(coord[0]) , "lng" : Number(coord[1]) };
      } )
  return googleCoords
}

