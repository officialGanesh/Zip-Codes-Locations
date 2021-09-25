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

};


