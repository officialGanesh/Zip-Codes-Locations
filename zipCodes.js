console.log("ZipCodes Locations 🚀");

class UI{

    static showAlert(bootstrapColour,msg){
        let element = document.createElement('div');
        element.classList = `alert alert-${bootstrapColour}`;
        element.innerHTML = msg;
        
        let cont = document.querySelector('.container');
        let title = document.querySelector('#title');

        // show alert message
        cont.insertBefore(element,title);

        // Remove alert message
        setTimeout(()=>{document.querySelector('.alert').remove()},1500);

    };

    static variousCountryOptions(){

        let fetchData = fetch('/countries.json').then(res=>{return res.json()}).then(data=>{
            
            let selectCountry = document.querySelector('#selectCountry');

            data.forEach(e => {
                let elem = document.createElement('option');
                elem.value = e.Code;
                elem.innerHTML = e.Country;
                selectCountry.append(elem);
                
            });
        });
        
    }; 

    static clearField(){

        document.querySelector('#zipCode').value='';

        document.querySelector('#selectCountry').value='Select Country';
    };
};

// Main function

window.onload = UI.variousCountryOptions();
let checkBtn = document.querySelector('#check');

checkBtn.addEventListener('click',(e)=>{
   
    let zipCode = document.querySelector('#zipCode');

    let selectCountry = document.querySelector('#selectCountry');

    if(zipCode.value===''||zipCode===null || selectCountry.value==='Select Country'){
        UI.showAlert('danger','Invalid Parameters');
    }else{
        
        let url = `https://api.zippopotam.us/${selectCountry.value}/${zipCode.value}`
        // console.log(url); 
    
        fetch(url).then(res=>{return res.json()}).then(data=>{

            let box = document.querySelector('#box');
            
            box.innerHTML = `<div class="card text-center alert-danger" style="border:2px solid black; border-radius:10px;">
            <div class="card-header">
              ${data['country']}(${data['country abbreviation']})
            </div>
            <div class="card-body">
              <h5 class="card-title">${data.places[0]['place name']},${data.places[0]['state']}(${data.places[0]['state abbreviation']})</h5>
              <p class="card-text">Longitude: ${data.places[0].longitude}  Latitude: ${data.places[0].latitude}</p>
              
            </div>
            
          </div>`

            
        });




        UI.clearField();

    }
});


