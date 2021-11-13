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

function dodadiblog(){
    var naslov=document.getElementById("naslov").value;
    var ime=document.getElementById("ime").value;
    var prezime=document.getElementById("prezime").value;
    var tekst=document.getElementById("txt").value;
    var datum=document.getElementById("datum").value;
    var tema=document.getElementById("tema").value;
    if(naslov !== "" && ime !== "" && prezime !== "" && tekst !== "" && datum !== "" && tema !== ""){
        var hr=document.createElement("hr");
        var hed1=document.createElement("h1");
        hed1.innerHTML=naslov;
        hed1.style.marginLeft = "4%";
        hed1.style.fontFamily = "'Ariel', cursive"
        var hed2=document.createElement("h2");
        hed2.innerHTML=tema;
        hed2.style.color = "white";
        hed2.style.fontFamily = "'Ariel', cursive"
        hed2.style.marginLeft = "4%";
        var par=document.createElement("P");
        par.innerHTML=ime+" "+prezime+"&nbsp&nbsp&nbsp&nbsp"+datum;
        var txt=document.createElement("P");
        txt.innerHTML=tekst;
        var div=document.createElement("div");
        div.appendChild(hr);
        div.appendChild(hed1);
        div.appendChild(par);
        div.appendChild(hed2);
        div.appendChild(txt);
        document.getElementById("blogovi").appendChild(div);
        document.getElementById("naslov").value="";
        document.getElementById("ime").value="";
        document.getElementById("prezime").value="";
        document.getElementById("txt").value="";
        document.getElementById("datum").value="";
        document.getElementById("tema").value="";
    }
}