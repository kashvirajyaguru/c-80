student_array = [];

function submit()
{
     var display_student_array=[];
     for(var j=1; j<=4;j++)
     {
         var n=document.getElementById("name"+j).value;
         student_array.push(n);

     }
    var length_student_array=student_array.length;
    for (var k = 0; k < lenght_student_array; k++) 
    { display_student_array.push("NAME- "+ student_array[k] + "</h4>");}

    document.getElementById("display_name_with_commas").innerHTML=student_array;
    var remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{
   student_array.sort();
   console.log(student_array);
  
   var deplay_student_array_sort =[];
   var lenght_student_array = student_array.length;
   for( var k=0 ; k<lenght_student_array ;k++)
   {
    deplay_student_array_sort.push("<h4>NAME-"+student_array[k]+"</h4>")
   }
   var remove_commas=display_student_array_sort.join(" ");
   document.getElementById("display_name_without_commas").innerHTML=remove_commas;
   

}

