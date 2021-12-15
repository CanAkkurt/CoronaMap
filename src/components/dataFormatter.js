

function dataFormatter(dataMap,dataTest,dataCase){
  const data = [];
  if(dataMap.length === 0){
    dataTest.forEach(element => {
     var id = element.id-1;
      if(typeof dataCase[id] === 'undefined') {
        
      }else {
        var casesValue = dataCase[id].new_cases;
        data.push({country:element.code,value:casesValue})
      }
     
   });
 
  }
  return (data);


}







export default dataFormatter;