import {firebase} from '../firebase'


// agrega un objeto a la colección orders con las siguientes propiedades client,products,total,fecha ,status y timer
export const addOrder = (order) => firebase.firestore().collection('Orders').add(order)

// result de la petición a firebase de la data almacenada
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

// modifica el valor asignado inicialmente en "pendiente" a listo al ejecutarse el evento checkListOrder
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
 