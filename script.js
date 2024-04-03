const input_box=document.getElementById("input_box");
const search=document.getElementById("search");
const Title=document.getElementById("Title");
const type=document.getElementById("type");
const meaning=document.getElementById("meaning");
const type2=document.getElementById("type2");
const meaning2=document.getElementById("meaning2");
const type3=document.getElementById("type3");
const meaning3=document.getElementById("meaning3");
const line=document.getElementById("line");
const mydiv=document.getElementById("mydiv");
const audio=document.getElementById("audio");
const listen=document.getElementById("listen");


search.addEventListener("click",()=>{
    let input_box_value=input_box.value;
    let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${input_box_value}`;
    async function a(){
        try{
            let data=await fetch(api);
            let actual_data=await data.json();
            let inside_data=actual_data[0];
            let reaced_data=inside_data.meanings;
            let inside_reached_data=reaced_data[0].definitions;
            let inside_reached_data_form=reaced_data[0].partOfSpeech;
            let inside_reached_data_example=reaced_data[0].definitions[0].example;
            let def=inside_reached_data[0];
            let inside_def=def.definition;
            mydiv.style.visibility="visible";
            audio.style.visibility="visible";
            Title.innerText=input_box_value;
            type.innerText=inside_reached_data_form;
            meaning.innerText=inside_def;
            line.innerText=inside_reached_data_example||"No Example Found";
            let data_entry_level=actual_data[0].phonetics[1].audio;
            listen.src=data_entry_level;
            
        }catch(err){
            mydiv.style.visibility="visible";
            audio.style.visibility="hidden";
            Title.innerText="Please Check The Entered Value";
            type.innerText=""
            meaning.innerText=""
            line.innerText=""
        }
    };
    a();
    
    
})
audio.addEventListener("click",()=>{
    listen.play();
})







