const darkShade=["#0A0A0A","#121212","#15292B", " #161618","#181818","#192734","#212121",
    "#212124", "#22303C", "#242526","#282828","#3A3B3C","#404040"];
const complementaryColors = ["#E600FF", "#FF00E6", "#FF0099", "#E600B3", "#FF0066", "#E60066", "#FF0066", "#FF007F", "#FF00B3", "#FF00CC", "#FF00E6", "#E600FF", "#E600FF"];
const secondComplementaryColors = ["#00FFEA", "#00FFD4", "#00FFB0", "#00FF99", "#00FF7F", "#00FF66", "#00FF4D", "#00FF33", "#00FF1A", "#00FF00", "#1AFF00", "#33FF00", "#4DFF00"];
const textColors = ["#FFFFFF", "#FFD700", "#FF69B4", "#ADFF2F", "#00FFFF", "#FF4500", "#32CD32", "#00FF7F", "#00BFFF", "#FF6347", "#EE82EE", "#FF1493", "#FFFF00"];

const main=document.querySelector('.mainn');
const btn=document.querySelector('.btn');
const left=document.querySelector('.left');
const bottom=document.querySelector('.bottom');
const text=document.querySelector('.text');
btn.addEventListener('click',()=>{
    main.style.backgroundColor=darkShade[Math.floor(Math.random()*darkShade.length)];
    left.style.backgroundColor=complementaryColors[Math.floor(Math.random()*complementaryColors.length)];
    bottom.style.backgroundColor=secondComplementaryColors[Math.floor(Math.random()*secondComplementaryColors.length)];
    text.style.color=textColors[Math.floor(Math.random()*textColors.length)];
})