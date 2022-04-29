var catalogueTable = [
    {img:'bartholomew',
    name:'Bartholomew',
    squishName: 'Wendy',
    animal:'Frog',
    sizeOwned:'12"',
    sizeRank: '12',
    birthday:'March 14, 2022'}
]

$('th').on('click', function(){
	var column = $(this).data('column')
	var order = $(this).data('order')
	var text = $(this).html()
	text = text.substring(0, text.length - 1)

	if(order == 'desc'){
		$(this).data('order', "asc")
		catalogueTable = catalogueTable.sort((a,b) => a[column] > b[column] ? 1 : -1)
		text += '&#9660'

	}else{
		$(this).data('order', "desc")
		catalogueTable = catalogueTable.sort((a,b) => a[column] < b[column] ? 1 : -1)
		text += '&#9650'

	}

	$(this).html(text)
	buildTable(catalogueTable)

})

buildTable(catalogueTable)

function buildTable(data){
  var table = document.getElementById('catalogueTable')

  table.innerHTML = ''

  for (var i = 0; i < data.length; i++){
    var row = `<tr class="view">
                <td><img src=\"photos/${data[i].img}.jpeg\"></img></td>
                <td>${data[i].name}</td>
                <td>${data[i].squishName}</td>
                <td>${data[i].animal}</td>
                <td>${data[i].sizeOwned}</td>
                <td>${data[i].birthday}</td>
              </tr>
              <tr class="fold">
                <td colspan="6">
                  <div class="fold-content">pee pee poo poo</div>
                </td>
              </tr>`
    table.innerHTML += row
  }


}

//folding table
$(function(){
  $(".fold-table tr.view").on("click", function(){
    $(this).toggleClass("open").next(".fold").toggleClass("open");
  });
});


//bounce icons when the page loads
$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 200)
  });
});
