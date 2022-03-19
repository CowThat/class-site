var wishlistTable = [
    {img:'halton.jpeg', animal:'Stringray', name:'Halton', sizeWanted:'16"', iso:'♥♥♥♥', color:'orange with orange and blue spots'},
    {img:'aziza.png', animal:'Stringray', name:'Aziza', sizeWanted:'16"', iso:'♥♥♥', color:'pink and purple with pink spots'},
    {img:'aziza-king.jpeg', animal:'Stingray', name:'Aziza', sizeWanted:'7"', iso:'♥♥♥', color:'blue with dark blue spots'},
    {img:'king-solid.jpeg', animal:'Stringray', name:'King', sizeWanted:'4" (Capsule)', iso:'♥♥♥♥', color:'gray'},
    {img:'king-spotted.jpeg', animal:'Stringray', name:'King', sizeWanted:'Any', iso:'♥♥♥♥', color:'gray with dark gray spots'},
    {img:'maggie.jpeg', animal:'Stringray', name:'Maggie', sizeWanted:'Any except 8"', iso:'♥♥♥♥', color:'teal'},
    {img:'rocket.jpeg', animal:'Hammerhead Shark', name:'Rocket', sizeWanted:'8"', iso:'♥♥♥', color:'blue'},
    {img:'gordon.jpeg', animal:'Shark', name:'Gordon', sizeWanted:'8"', iso:'♥♥♥', color:'gray'},
    {img:'eric.jpeg', animal:'Blob Fish', name:'Eric', sizeWanted:'8"', iso:'♥♥', color:'pink'},
    {img:'ricky.jpeg', animal:'Clownfish', name:'Ricky', sizeWanted:'8"', iso:'♥♥', color:'orange, white, and black'},
    {img:'samir.png', animal:'Whale', name:'Samir', sizeWanted:'Any (prefer 8")', iso:'♥♥', color:'blue'},
    {img:'perry.jpeg', animal:'Dolphin', name:'Perry', sizeWanted:'8"', iso:'♥♥', color:'seafoam'},
    {img:'jarin.jpeg', animal:'Jellyfish', name:'Jarin', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'baby blue'},
    {img:'jayda.png', animal:'Jellyfish', name:'Jayda', sizeWanted:'Any (prefer 8")', iso:'♥♥♥♥', color:'baby pink'},
    {img:'jessie.png', animal:'Jellyfish', name:'Jessie', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'light blue'},
    {img:'janet.jpeg', animal:'Jellyfish', name:'Janet', sizeWanted:'Any (prefer clip/3.5")', iso:'♥♥', color:'rainbow tie dye'},
    {img:'violet.jpeg', animal:'Octopus', name:'Violet', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'purple'},
    {img:'abby.png', animal:'Octopus', name:'Abby', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'hot pink'},
    {img:'zobey.jpeg', animal:'Octopus', name:'Zobey', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'aqua'},
    {img:'veronica-AUS.png', animal:'Octopus', name:'Veronica<br>(AUS)', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'orange'},
    {img:'mary.jpeg', animal:'Octopus', name:'Mary', sizeWanted:'Any (prefer 8")', iso:'♥', color:'purple and blue tie dye'},
    {img:'norbu.jpg', animal:'Deep Sea Dumbo Octopus', name:'Norbu', sizeWanted:'8"', iso:'♥♥♥', color:'orange'},
    {img:'kai.jpeg', animal:'Orca', name:'Kai', sizeWanted:'12"', iso:'♥♥♥', color:'black and white'},
    {img:'joanne.png', animal:'Sea Otter', name:'Joanne', sizeWanted:'Any except 2"', iso:'♥♥', color:'brown'},
    {img:'sheldon.jpeg', animal:'Seahorse', name:'Sheldon', sizeWanted:'8"', iso:'♥♥', color:'light pink'},
    {img:'sheldon-blue.jpeg', animal:'Seahorse', name:'Sheldon', sizeWanted:'8"', iso:'♥♥♥', color:'light blue'},
    {img:'henry.jpeg', animal:'Turle', name:'Henry', sizeWanted:'Any except 2"', iso:'♥♥♥', color:'green and dark green'},
    {img:'caedyn.jpg', animal:'Cow', name:'Caedyn', sizeWanted:'Any except 8"', iso:'♥♥♥♥', color:'white and pink'},
    {img:'caedyn-stack.jpg', animal:'Cow', name:'Caedyn (Stackable)', sizeWanted:'Any', iso:'♥♥♥♥', color:'white and pink'},
    {img:'connor.jpeg', animal:'Cow', name:'Connor', sizeWanted:'clip, 5", 12", 16"', iso:'♥♥♥', color:'white and black'},
    {img:'belana.jpeg', animal:'Cow', name:'Belana<br>(No bandana)', sizeWanted:'Any except clip', iso:'♥♥♥', color:'white and aqua'},
    {img:'ronnie.jpeg', animal:'Cow', name:'Ronnie', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'white and brown'},
    {img:'patty.jpeg', animal:'Cow', name:'Patty', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'pink and purple'},
    {img:'bubba.png', animal:'Cow', name:'Bubba', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'purple and white'},
    {img:'belozi.jpeg', animal:'Cow', name:'Belozi', sizeWanted:'Any (prefer 8")', iso:'♥♥', color:'white and rainbow'},
    {img:'colin.jpg', animal:'Cow', name:'Colin', sizeWanted:'Any (prefer 8" or 12")', iso:'♥♥♥♥', color:'white with black spots'},
    {img:'reshma.jpeg', animal:'Cow', name:'Reshma', sizeWanted:'Any (prefer 8")', iso:'♥♥', color:'pink and magenta'},
    {img:'nightingale.png', animal:'Cow', name:'Nightingale', sizeWanted:'Any (prefer 8")', iso:'♥♥♥', color:'tan with brown spots'},
    {img:'armie.jpeg', animal:'Cow', name:'Armie', sizeWanted:'A16"', iso:'♥♥', color:'blue and white'},
    {img:'calton.jpeg', animal:'Cow', name:'Calton', sizeWanted:'Any', iso:'♥', color:'brown and white'},
    {img:'avery.jpeg', animal:'Mallard duck', name:'Avery', sizeWanted:'3.5", 7", 12"', iso:'♥♥♥♥', color:'green and brown'},
    {img:'avery-stack.jpeg', animal:'Mallard duck', name:'Avery (Stackable)', sizeWanted:'Any', iso:'♥♥♥♥', color:'green and brown'},
    {img:'avery-inverted.jpeg', animal:'Mallard duck', name:'Avery (Inverted)', sizeWanted:'Any (prefer 8")', iso:'♥♥♥♥', color:'green and brown'},
    {img:'avery-fuzzy-belly.jpeg', animal:'Mallard duck', name:'Avery (Fuzzy belly)', sizeWanted:'Any (prefer 8")', iso:'♥♥♥♥', color:'green and brown'},
]

buildTable(wishlistTable)

function buildTable(data){
  var table = document.getElementById('wishlistTable')

  for (var i = 0; i < data.length; i++){
    var row = `<tr>
                <td><img src=\"photos/wishlist/${data[i].img}\"></img></td>
                <td>${data[i].name}</td>
                <td>${data[i].animal}</td>
                <td>${data[i].sizeWanted}</td>
                <td>${data[i].color}</td>
                <td>${data[i].iso}</td>
              </tr>`
    table.innerHTML += row
  }
}
