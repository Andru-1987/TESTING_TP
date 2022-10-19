/*trigger module

si se requiere una busqueda:
    solo ser requiere userEmail

*/



function displaySelector(value){
    clearMethod();

    let signUp = document.getElementById('signup'),
        logIn=document.getElementById('login');
        
    if (value !='GET'){
        signUp.classList.remove('hidden');
        logIn.classList.add('hidden')
        
    }else{
        signUp.classList.add('hidden');
        logIn.classList.remove('hidden') 
    }
}
    

let choice = document.querySelectorAll('input[name=method]');

    choice.forEach( e => e
    .addEventListener('click',(e) => displaySelector(e.target.value) ));


/*GET ELEMENTS with de userEmail*/

const URL = 'http://localhost:3000/usuario' ; 

async function getUser(URL, userEmail, password){
    
    try{

        let res = await fetch(URL);
        let data = await res.json();
        let user = await data
        
        let dataSearch = user.filter(e => e.userEmail === userEmail && e.password == password)

        if(dataSearch.length != 0){
            renderInjector(dataSearch[0]);
        }else{
            renderInjector()
        }
     
    }
    catch(e){
        console.log('algo salio mal')
    }
    
}


function emptyReject(userEmail,password){
    let nombre=null,
        pass=null;

        nombre= userEmail.trim().toLowerCase();
        pass= password.trim();
    
    
    return {nombre , pass};
}


function getUserByFront(method){
    let userData = document.querySelectorAll(`#${method} > div > input`);
    let returnedData ;

    if (method == 'get'){
        let data = [];
        userData.forEach(e => data.push(e.value));

        returnedData = emptyReject(data[0],data[1]);
        
    }else{
        let data = [];
        userData.forEach(e => data.push(e.value));

        if(data.every(e => e != '')){
            let user = {
                id:crypto.randomUUID(),
                nombre:data[0],
                apellido:data[1],
                userEmail:data[2],
                dni:data[3],
                edad:data[4],
                date:new Date(Date.now()).toISOString(),
                password: data[5]
            }

            returnedData=user;

        }else{
            returnedData = null;
        }
        
    }

    return returnedData
}

function renderInjector(user = null){
    let modal=document.getElementById('modal');
    document.querySelectorAll('#modal > *').forEach(e => e.remove())
    
    let frg = document.createDocumentFragment();
    
    if (user!=null){

        let img = document.createElement('img');
        img.src = "./assets/pngegg.png";
        img.style.width ='100px';
        img.style.height ='100px';
        
        let welcome = document.createElement('h1');
        welcome.innerHTML='Bienvenido';


        let h1 = document.createElement('h1');
        h1.innerHTML= user.nombre;
        
        
        
        frg.appendChild(img);
        frg.appendChild(welcome);
        frg.appendChild(h1);
        
    }else{
        let h1 = document.createElement('h1');
        h1.innerHTML= 'Algún dato no es correcto o faltan datos'
        frg.appendChild(h1);
    }

        modal.appendChild(frg);
}


function clearMethod(){
    document.querySelectorAll('#modal > *').forEach(e => e.remove())
}
    

const   btn = document.getElementById('login');

btn.addEventListener('submit', (e)=>{
    
    e.preventDefault();


    let  { nombre , pass} = getUserByFront('get') ;

    if(nombre == null || pass == null){
        alert('usuario encontrado o no válido');
    }else{
        getUser(URL, nombre,pass);
    }
})




/*Creacion de USUARIO*/


async function postData(url,user){
    
try{

    let objData={
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: user
    }
    const rawResponse = await fetch(url,objData);
    const content = await rawResponse.json()

    return true
}
catch(e){
    console.log(e);
    return false
}


}




let   signUp = document.getElementById('sign');

signUp.addEventListener('click', (event) =>{
    
    event.preventDefault();

    let resFront = getUserByFront('post');

    if(resFront==null){
        renderInjector()
    }else{
        
        userToJson = JSON.stringify(resFront);
        
        if(postData(URL,userToJson)){
            alert(`Usuario ${resFront.userEmail} ha sido creado satisfactoriamente`)
        }
    }

})

