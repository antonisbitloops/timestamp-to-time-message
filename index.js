'use strict';

module.exports= function(milisecs){
  
    let d =" days ";
    let h = " hours ";
    let m = " mins ";
    let s = " secs ";
    const d1 = " day ";
    const h1 = " hour ";
    const m1 = " min ";
    const s1 = " sec ";
    
    let mili_sec_num = parseInt(milisecs, 10)
    let sec_num = Math.floor(mili_sec_num / 1000);
    let days = Math.floor(sec_num / 86400) % 360; 
    let hours = Math.floor(sec_num / 3600) % 24;
    let minutes = Math.floor(sec_num / 60) % 60;
    let seconds = sec_num % 60;
    
    if (days===1) d = d1;
    if (hours===1) h = h1;
    if (minutes===1) m = m1;
    if (seconds===1) s = s1;
    const message = (
      (days>0?days:"") + (days>0?d:"") + 
      (hours>0?hours:"") + (hours>0?h:"") +
      (minutes>0?minutes:"") + (minutes>0?m:"") + 
      (seconds>0?seconds:"") + (seconds>0?s:"")
    ).trim();
  
    return message;
  };