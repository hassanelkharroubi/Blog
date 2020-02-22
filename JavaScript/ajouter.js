


document.getElementById("save").addEventListener("click",function(event)
{
    var empty=false;
    var elt=document.getElementById("form1");

    for(var i=1;i<elt.length-2;i++)
    {
        if(elt.elements[i].value === "")
        {
            empty=true;
            elt.elements[i].style.border="1px solid red";
            
        }
        else
        {
            elt.elements[i].style.border="1px solid green";

        }
    }
    if(empty)
    {
        alert("veuillez remplir tous les champs");
        event.preventDefault();

    }

});
document.getElementById("reset").addEventListener("click",function(){

    var elt=document.getElementById("form1");

    for(var i=1;i<elt.length-2;i++)
    {
        
            elt.elements[i].style.border="1px solid #63D052";
    }
   


});
