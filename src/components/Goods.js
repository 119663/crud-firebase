import React from 'react'
import{db} from '../config/firebase-config';
import { useEffect, useState } from 'react';
import{getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore';

const Goods = () => {
    const [goodsList, setGoodsList] = useState([]);

    //create goods
    const[newGoodName, setNewGoodsName] = useState("");
    const[newPrice, setNewPrice] = useState(0);
    const[newNewGoods, setNewNewGoods] = useState(false);
  
    //update goods
    const [updatedGoodName, setUpdatedNewGoodName] = useState("");
  
    const goodsCollectionRef = collection(db, "goods");

    useEffect(() => {
        const getGoodsList = async () =>{
         //ReadData
         //Set goodslist to be equal to the data
         try{
         const data = await getDocs(goodsCollectionRef );
         const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
         // console.log({filteredData});
         setGoodsList(filteredData);
         }catch(err){
           console.error(err);
         }
       };
       getGoodsList();
     }, []);
   
     const addGoods = async () => {
       try{
     await addDoc(goodsCollectionRef, {name: newGoodName, price: newPrice, newgoods: newNewGoods });
     //getGoodsList();
       }catch(err){
        console.error(err);
       }
   };
   
   const updateGoods = async (id) =>{
     const goodsDoc = doc(db, "goods", id);
      await updateDoc(goodsDoc,  {name: updatedGoodName});
   };
   
   const deleteGoods = async (id) =>{
     const goodsDoc = doc(db, "goods", id);
      await deleteDoc(goodsDoc);
   };
   
  return (
    <div className="App">
       <div>
    <input placeholder='Goods name....' onChange={(e) => setNewGoodsName(e.target.value)}/>
      <input placeholder='Price....' type="number" onChange={(e) => setNewPrice(Number(e.target.value))}/>
      <input type="checkbox" checked={newNewGoods} onChange={(e) => setNewNewGoods(e.target.checked)}/>
      <label>New Goods</label>
      <button onClick={addGoods}>Submit Goods</button>
     </div> 

      <div>
      {goodsList.map((goods)=>(
        <div> 
          <h1 style={{color:goods.newgoods? "red" : "yellow"}}>{goods.name}</h1>
          <p>Price:{goods.price}</p>
          <button onClick={() => deleteGoods(goods.id)}>Delete Goods</button>

          <input placeholder='New Goods Name...' onChange={(e) => setUpdatedNewGoodName(e.target.value)} />
          <button onClick={() => updateGoods(goods.id)} >Update Goods Name</button>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Goods
