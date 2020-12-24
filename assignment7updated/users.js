
fetch('https://reqres.in/api/users').then(Response => Response.json()).then(ResponseJSON => createUsersList (ResponseJSON.data)).catch(err => console.log(err));

console.log("hadar");

function createUsersList(users){
    console.log(users);
    
    const curr_main = document.querySelector("main");
    
    for (let user of users) {
        const section =document.createElement("section");
        section.innerHTML=
 
        `
        <img src="${user.avatar}" alt="profile picture"/>

        <div>
            <span>${user.first_name}${user.last_name}</span>
            <br>
            <a href="mailto: ${user.email}">Send an email</a>
            

        </div>
        
    
        
        `;

        
       
    
    curr_main.appendChild(section);
    
    } 
    
    }








 