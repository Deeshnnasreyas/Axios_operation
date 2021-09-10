import React from "react";
import "./App.css";
import axios from "axios";
const App=()=> {
  axios.defaults.headers.common["authorization"]=12345;
  const instance= axios.create({baseURL:"https://reqres.in/api",timeout:1000,header:{"X-Custom-Header":"footbar"}})
  const getData =()=>{
    axios.get("https://reqres.in/api/users")
    .then(res=>console.log(res.data.data));

  }
  const config={
    data:{name:"deeshnna",
    job:"software devlpr"},
    header:{
      "content-type":"application/json"
    }
  }
  const postData=()=>{
    axios.post("https://reqres.in/api/users",config)
    .then((res)=>console.log(res.data))
    .catch((res)=>console.log(res));
  }
  const updateData= async ()=>{
    try {
      const res=await axios.put("https://reqres.in/api/2",{
        name:"sreyas",
        job:"admin"
      })
      console.log(res.data)
    }catch (err){
      console.log(err)
    }
  }
  const deleteData=()=>{
    axios.delete("https://reqres.in/api/2").then((res)=>console.log(res.status))
  }
  const instanceData=()=>{
    instance.get("/users").then(res => console.log(res))

  }
  const MultipleData=()=>{
    Promise.all([axios.get("https://reqres.in/api/users"),
    axios.get("https://reqres.in/api/users")]).then((res)=>{console.log(res[0],res[1])})
  }
  
  return (<div>
     <h1>Axios Operations</h1>
    <div className="grid">
     
    <button onClick={getData}>Get</button>
    <button onClick={postData}>Post</button>
    <button onClick={updateData}>Update</button>
    <button onClick={deleteData}>Delete</button>
    <button onClick={instanceData}>Instance</button>
    <button onClick={MultipleData}>Multiple</button>
    </div>
  </div>
   
  );
}

export default App;
