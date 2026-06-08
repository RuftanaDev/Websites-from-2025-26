//den här delen av koden hämtar information från input värde och visar det i ny rad med lite mer specfication
$("#submit").click(function(evt){
    evt.preventDefault();

    let inputemail= $("#epost").val();
    $("#svarpåmejl").text("Din epost är "+inputemail);
    
    let inputförnamn= $("#yourfirstname").val();
    $("#svarpåförnamn").text("Din förnamn är "+inputförnamn);

    let inputpåefternamn= $("#yoursecondname").val();
    $("#svarpåefternamn").text("Din efternamn är "+inputpåefternamn);

    let inputpåålder= $("#yourage").val();
    $("#svarpåålder").text("Du är "+inputpåålder+" gammal år");

    
    //Jobb sektor
    if(document.getElementById('Privat').checked){
        let inputomjobbet= document.getElementById('Privat').value;

        document.getElementById('svaromprivatjobb').innerHTML="Ditt jobb sektor är "+inputomjobbet;
}
    else if(document.getElementById('Offentlig').checked){
        let inputomhobby= document.getElementById('Offentlig').value;
        document.getElementById('svaromoffentilgtjobb').innerHTML="Ditt jobb sektor är "+inputomhobby;
}
    //Hobby

    if(document.getElementById('Bilar').checked){
        let hobby1 = document.getElementById('Bilar').value;
        document.getElementById('svaromhobby1').innerHTML="Vilken rolig hobby du har! Att tycka om " +hobby1+ " är verkligen spännande";
    }
    if(document.getElementById('Fotboll').checked){
        let hobby2 = document.getElementById('Fotboll').value;
        document.getElementById('svaromhobby2').innerHTML="Vilken rolig hobby du har! Att gilla "+ hobby2+" är fantastiskt.";
    }
    if(document.getElementById('Gymnastik').checked){
        let hobby3 = document.getElementById('Gymnastik').value;
        document.getElementById('svaromhobby3').innerHTML="Vilken rolig hobby du har! Att tycka om "+ hobby3+" är verkligen imponerande.";
    }
    if(document.getElementById('Hästsport').checked){
        console.log("test"); 
        let hobby4 = document.getElementById('Hästsport').value;
        document.getElementById('svaromhobby4').innerHTML="Vilken rolig hobby du har! Att gilla "+ hobby4+" är riktigt kul.";
    }
    if(document.getElementById('Handboll').checked){
        let hobby5 = document.getElementById('Handboll').value;
        document.getElementById('svaromhobby5').innerHTML="Vilken rolig hobby du har! Att tycka om "+ hobby5+" är toppen";
    }


});
//det hantära colorväljare
const colorpicker = document.getElementById('color');
//kollare om det finns redan vald color i localstorage 
const savedColor = localStorage.getItem('selectedColor');
//om det finns redan vald färg det byter backgroundfärgen till vald färg
if(savedColor){
    colorpicker.value = savedColor;
    document.body.style.backgroundColor= savedColor;

}
//om det finns inte det väntar inför färg blir vald och byter färgen
colorpicker.addEventListener('input',() => {
    const colorpi = colorpicker.value;
    localStorage.setItem('selectedColor', colorpi);
    document.body.style.backgroundColor=colorpi;
});
document.getElementById('Container').style.display='block';
