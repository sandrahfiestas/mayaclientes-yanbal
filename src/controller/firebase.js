import {firebase} from '../firebase'



export const addOrder = (order) => firebase.firestore().collection('Orders').add(order)


export  const getOrders =(callback) =>  firebase.firestore().collection('Orders')

.onSnapshot((snap) => {
    const data = [];
    snap.forEach((doc) => {
        data.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    //console.log(data)
    callback(data);
 
});


export const updateStatusInOrder = (id,data)  => firebase.firestore().collection('Orders').doc(id).update(data)

export const getProducts =(callback) =>firebase.firestore().collection('Products')

.onSnapshot((snap) => {
    const intoData = [];
    snap.forEach((doc) => {
        intoData.push({
            id: doc.id,
            ...doc.data(),
        });
    });
callback(intoData)
});
 