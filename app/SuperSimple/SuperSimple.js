//declarations




(function(){

    

    var className = 'light'
    let placeholder;

    //function execution
    
    // loadJson()
    //     .then( function( response ){
    //         document.querySelector('.title').innerHTML = setTitle( response.title );
    //         changeThemeByClassName(className);
    //         setButtonsActions();
    //     })

    loadJson()
         .then( response => { 
            document.querySelector('.title').innerHTML = setTitle( response.title );
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
              reverseButton.addEventListener('click', function(){ reverseInPlace()} );
              
    }

    function buildButtons(){}

    //Function expression
    let changeThemeByClassName = function( className ) {
        try{
            //document.getElementById('mainWrapper').setAttribute( 'class' , className );
            document.querySelector('#mainWrapper').setAttribute( 'class' , className );
        }
        catch(error){
            console.error(error)
        }
    }

    function showTime(){
        getTime()
           .then( response =>{
            document.querySelector('#console').innerHTML = JSON.stringify(response);
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
             console.log(data)
             return data;
         } catch (err) {
             console.log('Client error: ', err);
         }
     }

     //
     function reverseInPlace() {

        let title = document.querySelector('.title').innerHTML;
        console.log(title)
        var words = [];
        words = title.match(/\S+/g);
        var result = "";
        for (var i = 0; i < words.length; i++) {
           result += words[i].split('').reverse().join('') + " ";
        }
        document.querySelector('.title').innerHTML = result;
      }

})()



function canvasDraw(){

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}


