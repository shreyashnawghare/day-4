var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a connection 
request.send();
//4.once the server responded successfully then we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    for(var i=0;i<250;i++)
    console.log(data[i].name);
    
    for(var i=0;i<250;i++)
    console.log(data[i].region);

    for(var i=0;i<250;i++)
    console.log(data[i].subregion);
    
    for(var i=0;i<250;i++)
    console.log(data[i].population);
    
    
}