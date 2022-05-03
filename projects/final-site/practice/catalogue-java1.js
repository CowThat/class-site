var othersTable =[
  {img:'cornwallace',
  name:'Cornwallace',
  animal:'Umbreon (Pokemon)',
  birthday:'',
  ufsuft:'&#10007',
  bio: 'this squish doesn\'t have a bio yet!'},

  {img:'everett',
  name:'Everett (Evie)',
  animal:'Evie (Pokemon)',
  birthday:'',
  ufsuft:'&#10007',
  bio: 'this squish doesn\'t have a bio yet!'},

  {img:'gerald',
  name:'Gerald',
  animal:'Pikachu (Pokemon)',
  birthday:'',
  ufsuft:'&#10007',
  bio: 'this squish doesn\'t have a bio yet!'},

  {img:'green-bean',
  name:'Green Bean',
  animal:'Dog',
  birthday:'',
  ufsuft:'&#10007',
  bio: 'this squish doesn\'t have a bio yet!'}
]


//Create the others table
// $('th').on('click', function(){
// 	var column = $(this).data('column')
// 	var order = $(this).data('order')
// 	var text = $(this).html()
// 	text = text.substring(0, text.length - 1)
//
// 	if(order == 'desc'){
// 		$(this).data('order', "asc")
// 		othersTable = othersTable.sort((a,b) => a[column] > b[column] ? 1 : -1)
// 		text += '&#9660'
// 	}else{
// 		$(this).data('order', "desc")
// 		othersTable = othersTable.sort((a,b) => a[column] < b[column] ? 1 : -1)
// 		text += '&#9650'
// 	}
//
// 	$(this).html(text)
// 	buildTable(othersTable)
//
// })
//
// buildTable(othersTable)
//
// function buildTable(data){
//   var table = document.getElementById('othersTable');
//
//   table.innerHTML = ''
//
//   for (var i = 0; i < data.length; i++){
//     var row = `<tr class="view" onclick="toggle()">
//                 <td><img src=\"photos/non-squish/${data[i].img}.jpeg\"></img></td>
//                 <td>${data[i].name}</td>
//                 <td>${data[i].animal}</td>
//                 <td>${data[i].birthday}</td>
//               </tr>
//               <tr class="fold">
//                 <td></td>
//                 <td colspan="3" class="fold"><div class="fold-content">
//                 <p><span>about ${data[i].name}:</span> ${data[i].bio}</div></td>
//               </tr>`
//
//     table.innerHTML += row
//   }
//
// }
