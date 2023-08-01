import axios from 'axios';
import React,{useState,useEffect} from 'react';
import "./styles.css";
import Books from './Books';



function Home() {
  const [data,setData] = useState([])
    const getData = () => {
        axios.get("http://localhost:8800/api/products/")
        .then(res => {
            console.log(res)
            setData(res.data)
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getData()
    
    }, [])

  return (
    <div class="main">
   
    {data.map((item,index) => (
      <Books key={item} item={item}/>

    ))}
</div>
    
  )
}

export default Home
