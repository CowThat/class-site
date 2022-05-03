var squishmallowTable = [
    {img:'bartholomew',
    name:'Bartholomew',
    squishName: 'Wendy',
    animal:'Frog',
    sizeOwned:'12"',
    sizeRank: '12',
    birthday:'March 14, 2022'},

    {img:'beacon',
    name:'Beacon',
    squishName: 'Archie',
    animal:'Axlotl',
    sizeOwned:'12"',
    sizeRank: '12',
    birthday:'March 14, 2022'},

    {img:'beans',
    name:'Beans',
    squishName: 'Cameron',
    animal:'Cat',
    sizeOwned:'5" (headphones)',
    sizeRank: '05h',
    birthday:'Feb. 6, 2022'},
]




buildTable(squishmallowTable)

function buildTable(data){
  var table = document.getElementById('squishmallowTable');

  table.innerHTML = ''

  for (var i = 0; i < data.length; i++){
    var row = `<tr class="view" id="header-${data[i].name}">
                <td>image</td>
                <td>${data[i].name}</td>
                <td>${data[i].squishName}</td>
                <td>${data[i].animal}</td>
                <td>${data[i].sizeOwned}</td>
                <div class="fold" id="${data[i].name}">${data[i].birthday}</div>
              </tr>`

    table.innerHTML += row
  }

  var data = squishmallowTable

  for (var i=0; i<data.length; i++) {
    console.log('"' + data[i].name +'"');

    var x = document.getElementById('"' + data[i].name +'"');
      if (!x.style.display) {
        x.style.setProperty('display', 'block');
      } else {
        x.style.removeProperty('display');
      }
  }

}


// function clickToShow() {
//   var data = squishmallowTable
//
//   for (var i=0; i<data.length; i++) {
//     console.log('"' + data[i].name +'"');
//
//     var x = document.getElementById('"' + data[i].name +'"');
//       if (!x.style.display) {
//         x.style.setProperty('display', 'block');
//       } else {
//         x.style.removeProperty('display');
//       }
//   }
// }
