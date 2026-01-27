export const getApiData1 = async()=>{
    try{
        let res = await fetch('https://dummyjson.com/products');
        return res.json();
    }catch(e){
        console.log("Error", e);   
    }
}
export const getApiData2 = async()=>{
    try{
        let res = await fetch('https://dummyjson.com/products');
        return res.json();
    }catch(e){
        console.log("Error", e);   
    }
}