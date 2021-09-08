var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a connection 
request.send();
//4.once the server responded successfully then we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

  
   var a= data.filter((data)=>data.region==='Asia')
   console.log(a)

   var b= data.filter((data)=>data.population<200000)
   console.log(b)


  var f=data.reduce((total, thing) => total + thing.population, 0);
console.log(f)

   
   
  
  const result = data.reduce((acc, d) => {
    const found = acc.find(a => a.population === d.population);
    const value = { population: d.population, val: d.value };
    if (found) {
      found.data.push(value);
    }
    else {
      acc.push({ population: d.population, data: [{ value: d.value, count: d.count }] });
    }
    return acc;
  }, []);
  
  console.log(result)

  

  var k=data.filter((ele)=>{
for(let i in ele.currencies){
  if(ele.currencies[i].code==='USD'){
    return true;
  }
}



  }
  
  )
  console.log(k)
}


