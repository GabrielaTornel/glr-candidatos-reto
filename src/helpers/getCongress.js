
export const filterByBancada = function(data, bancadaData){
const filterData= data.filter(element => element.bancada === bancadaData);
return filterData;
};

// export const filterRegion = (dataCongressmen) => {
//   const filterData= dataCongressmen.filter(element => element.region === "Lima");
// return filterData;
// }