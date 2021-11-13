function Like(br){
    var vkupno=document.getElementById("like"+br).innerHTML;
    vkupno++;
    document.getElementById("like"+br).innerHTML=vkupno;
}

function Komentiraj(br){
    var ime=document.getElementById("ime"+br).value;
    var prezime=document.getElementById("prezime"+br).value;
    var tekst=document.getElementById("vlezNaKom"+br).value;
    var dosegasniKom=document.getElementById("labSkila" + br).value;

    if(ime!=="" && prezime!=="") {
        if(dosegasniKom!=="") {
            document.getElementById("labSkila" + br).innerHTML = dosegasniKom + ("\n" + ime + " " + prezime + ": " + tekst);
        }else{
            document.getElementById("labSkila" + br).innerHTML = (ime + " " + prezime + ": " + tekst);
        }
    }

    document.getElementById("ime"+br).value="";
    document.getElementById("prezime"+br).value="";
    document.getElementById("vlezNaKom"+br).value="";
}

