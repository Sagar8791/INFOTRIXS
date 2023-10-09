import React, { useContext, useState } from 'react'
import { collection, query, where ,getDocs, setDoc, updateDoc, doc, serverTimestamp, getDoc} from "firebase/firestore";
import {db } from "../firebase"
import { AuthContext } from '../context/AuthContext';
import { userInfo } from 'os';

const Search = () => {
  const [userrname,setUsername]=useState("")
  const [user,setuser]=useState(null)
  const [err,setErr]=useState(false)
const {currentUser}=useContext(AuthContext)

const handleSearch= async()=>{
  const q=query(collection(db,"users"),
  where("displayName","==",userrname)
  );

try{

  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  setuser(doc.data())
});
}catch(err){
  setErr(true);
}

}

const handlekey =e=>{
  e.code==="Enter" && handleSearch();
};

const handleSelect= async()=>{
 
 
  //check whethet thr group (chat in firestrore) exits.if doses not exit create
  const combinedId=
  currentUser.uid > user.uid
   ? currentUser.uid + user.uid 
   : user.uid +currentUser.uid
   try{
  const res =await getDoc(doc(db,"chats",combinedId)); 

     if(!res.exists()){
      //create chat in chat collection
      await setDoc(doc,(db,"chats",combinedId), {messages:[]});


 //   craete user chats

 
       await updateDoc(doc(db,"userChats",currentUser.uid),{
        [combinedId+".userInfo"]:{
          uid:user.uid,
          displayName:user.displayName,
          photoURL:user.photoURL
        },
        [combinedId+".date"]: serverTimestamp()
       });
       await updateDoc(doc(db,"userChats",user.uid),{
        [combinedId+".userInfo"]:{
          uid:currentUser.uid,
          displayName:user.displayName,
          photoURL:user.photoURL
        },
        [combinedId+".date"]: serverTimestamp()
       });


     }
   }catch(err){}


//create user chat

setUser(null);
setUsername("")

};
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'onKeyDown={handlekey} onChange={e=>setUsername(e.target.value)} 
        value={userrname}
        />
      </div>
      {err && <span>User Not Found</span>}
      { user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
         <div className="userChatInfo">
        <span>{user.displayName}</span>
        </div>
      </div>
}
    </div>
  )
}

export default Search
