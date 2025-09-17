import { firebaseConfig } from "./config";

function deleteMessage(docID){
    try{
        firebase
        .firestore
        .collection('chat')
    } catch (error) {
        console.error("Error deleting message:", error);
    }
}