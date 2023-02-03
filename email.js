const url = 'http://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist';

                const data = {

                    "name": name,

                    "email": email

                };

 

                fetch(url, {

                    method: "post",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(data)

                })

                .then((response) => {  

                    if(response.status === 200){

                        return response.json();

                    }else if(response.status === 400){

                        throw "Bad data was sent to the server";

                    }else{

                        alert(response.status)

                        throw "Something went wrong";

                    }

                })

                .then((resJson) => {

                    alert(JSON.stringify(resJson));

                })

                .catch((error) => {

                    alert(error);

                })