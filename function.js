export function getMsg() {
    firebase
    .firestore()
    .collection('chat')
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                console.log('New message: ', change.doc.data().message);
                let pTag = document.createElement('p');
                let editButtonTag = document.createElement('button');
                editButtonTag.innerText = "edit"; 

                let deleteButtonTag = document.createElement('button');
                deleteButtonTag.innerText = "delete";
                
                

                console.log(pTag);
                
                console.log(`here message:${change.doc.id}`);
                pTag.innerText = `Message : ${change.doc.data().message}`;

                let chatcontainer = document.getElementById('chat');
                chatcontainer.appendChild(pTag);
                chatcontainer.appendChild(editButtonTag);
                chatcontainer.appendChild(deleteButtonTag);
                deleteButtonTag.addEventListener("click", () => {
                    alert("Buttonclicked!!")
                });
            }
        });
    });
}