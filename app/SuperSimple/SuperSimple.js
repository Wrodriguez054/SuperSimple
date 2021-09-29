//declarations




(function(){

    

    var className = 'light'
    let placeholder;

    loadJson()
         .then( response => { 
            document.querySelector('.title').textContent = setTitle( response.title );
            changeThemeByClassName(className);
            setButtonsActions();       
         })

    //function declarations

    function setTitle( title ){
        return title.lenght != 0 ? title: "Undefined Title";
    }
    
    //Function to manipulates the DOM 
    function setButtonsActions(){
        const darkButton = document.querySelector('#darkButton');
              darkButton.addEventListener('click', function(){ changeThemeByClassName('dark') })
        const natureButton = document.querySelector('#lightButton');
              natureButton.addEventListener('click', function(){ changeThemeByClassName('light')} );
        const salmonButton = document.querySelector('#salmonButton');
              salmonButton.addEventListener('click', function(){ changeThemeByClassName('salmon')} );
        const timeButton = document.querySelector('#timeButton');
              timeButton.addEventListener('click', function(){ showTime()} );
        const reverseButton = document.querySelector('#reverseButton');
              reverseButton.addEventListener('click', function(){ setTitles(); } );
              
    }

    function buildButtons(){}

    //Function expression
    let changeThemeByClassName = function( className ) {
        try{
            document.querySelector('#mainWrapper')
                    .setAttribute( 'class' , className );
        }
        catch(error){
            console.error(error)
        }
    }

    function showTime(){
        getTime()
           .then( response =>{
            document.querySelector('#console').textContent = JSON.stringify(response);
           }) 
    }

    //example of a function to load local or external data
    async function loadJson(){
       try {
            const response = await fetch('/app/SuperSimple/data/SuperSimple.json');
            const data = await response.json();
            //u can use the response to validate what kind of response that server send it 
            return data;
        } catch (err) {
            console.log('Client error: ', err);
        }
    }

    async function getTime(){
        try {
             const response = await fetch('http://worldtimeapi.org/api/ip');
             const data = await response.json();
             //u can use the response to validate what kind of response that server send it 
             return data;
         } catch (err) {
             console.log('Client error: ', err);
         }
     }

      function revolt( phrase ){
        let superPhrase = phrase.split('');
        return superPhrase.reduce((accomulator, item) => item.concat(accomulator) );
      }

      function setTitles(){
          
        let title = document.querySelector('.title');
        title.textContent = revolt( title.textContent );        
      }

})()



function canvasDraw(){

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}


