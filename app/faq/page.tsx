'use client'
import React, { useEffect, useState } from 'react';
import CollapsibleComponent from '../CollapsibleComponent';
import { Button } from '@radix-ui/themes';
import fetch from 'cross-fetch';
interface faqItem {
  'userId': string,
  'id':string,
  'title':string,
  'body':string
}
const FAQPage = () => {
  const [data, setData] = useState<faqItem[]>([]);
  let [allData, setAllData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
    return res.json();
  })
    .then(res => {
      setAllData(res);
      const renderNum = Math.min(10, res.length);
      setData(res.slice(0, renderNum));
    });
  },[]);
  function loadMore(){
    const len = data.length;
    //render number in range of allData scale
    const renderNum = ((len+10) > allData.length) ? allData.length : (len+10);
    setData(allData.slice(0,renderNum));
  }
  return (
    <div className='flex flex-col items-center h-[85vh] overflow-y-scroll'>
      {
        data.map(el=>
          <div key={el.id} className='flex flex-col w-[40vw] m-2'>
           <CollapsibleComponent title={el.title} body={el.body}></CollapsibleComponent>
          </div>
        )
      }
      { (data.length==0 || data.length<allData.length) && <Button onClick={loadMore}>Load More</Button>}
    </div>
    
  )
}

export default FAQPage