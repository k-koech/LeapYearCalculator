function Calculate() 
{
  var year = document.getElementById("year").value;
  var res = (year/4);
  if((year%100===0) && (year%400===0))
  {
    document.getElementById("ans").innerHTML=year +" is a leap year";
  }
 else
  {
    document.getElementById("ans").innerHTML=year +" is NOT aleap year";
  }
}