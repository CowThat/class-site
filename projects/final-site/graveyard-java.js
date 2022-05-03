var graveyardTable =[
  {img: 'pablo',
  squishName: 'Babs',
  name: 'Pablo',
  animal: 'Blue Jay',
  sizeWanted: '8"',
  sizeRank: '08',
  st: 'sold on Mercari'},

  {img: 'beaver',
  squishName: 'Maisha',
  name: '~',
  animal: 'Beaver',
  sizeWanted: '12"',
  sizeRank: '12',
  st: 'traded for <a href="catalogue.html">Tangerine</a>'},

  {img: 'frank',
  squishName: 'Cam',
  name: 'Frank',
  animal: 'Cat',
  sizeWanted: '5" (headphones)',
  sizeRank: '05',
  st: 'gave to my partner'},

  {img: 'patch',
  squishName: 'Hans',
  name: 'Patch',
  animal: 'Hedgehog',
  sizeWanted: '5" (headphones)',
  sizeRank: '05',
  st: 'traded with my partner'},

  {img: 'gary',
  squishName: 'Gary',
  name: '~',
  animal: 'Giraffe',
  sizeWanted: '8"',
  sizeRank: '08',
  st: 'sold on Mercari'},

  {img: 'deep-blue',
  squishName: 'Dominic',
  name: 'Deep Blue',
  animal: 'Dragon',
  sizeWanted: '5" (headphones)',
  sizeRank: '05',
  st: 'traded at a squish meet'},

  {img: 'can',
  squishName: 'Walker',
  name: 'Can',
  animal: 'Goat',
  sizeWanted: '2" (squishville)',
  sizeRank: '02',
  st: 'traded at a squish meet'},

  {img: 'poncho',
  squishName: 'Petra',
  name: 'Poncho',
  animal: 'Pig',
  sizeWanted: '2" (squishville)',
  sizeRank: '02',
  st: 'traded at a squish meet'},

  {img: 'livvy',
  squishName: 'Livvy',
  name: '~',
  animal: 'starfish',
  sizeWanted: '5"',
  sizeRank: '05',
  st: 'traded at a squish meet'},

  {img: 'nabila',
  squishName: 'Nabila',
  name: '~',
  animal: 'narwhal',
  sizeWanted: '5"',
  sizeRank: '05',
  st: 'traded at a squish meet'},


]

buildTable(graveyardTable)

function buildTable(data){
  var table = document.getElementById('graveyardTable')

  table.innerHTML = ''

  for (var i = 0; i < data.length; i++){
    var row = `<tr id="${data[i].img}">
                <td><img src=\"photos/graveyard/${data[i].img}.jpeg\"></img></td>
                <td>${data[i].squishName}</td>
                <td>${data[i].name}</td>
                <td>${data[i].animal}</td>
                <td>${data[i].sizeWanted}</td>
                <td>${data[i].st}</td>
              </tr>`
    table.innerHTML += row
  }
}

$('th').on('click', function(){
var column = $(this).data('column')
var order = $(this).data('order')
var text = $(this).html()
text = text.substring(0, text.length - 1)

if(order == 'desc'){
  $(this).data('order', "asc")
  graveyardTable = graveyardTable.sort((a,b) => a[column] > b[column] ? 1 : -1)
  text += '&#9660'

}else{
  $(this).data('order', "desc")
  graveyardTable = graveyardTable.sort((a,b) => a[column] < b[column] ? 1 : -1)
  text += '&#9650'

}

$(this).html(text)
buildTable(graveyardTable)

})
