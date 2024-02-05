window.addEventListener("load", function(){
    this.setTimeout (
        function open(event) {
            document.querySelector(".popup").style.display = "block"
        },
        500
    )
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
})

function toggleP() {
    let a = document.getElementById("tombol");
    if (a.style.display === "none") {
        a.style.display === "block";
    } else {
        a.style.display = "block";
    }
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('mySearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myMenu');
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
}