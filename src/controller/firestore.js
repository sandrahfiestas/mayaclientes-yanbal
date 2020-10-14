/*import firebase from './firebaseConfig';


// COLECCION EN FIRESTORE - ADD ORDER
const collectionOrder = () => firebase.firestore().collection('Orders');

// AGREGAR DOCS A LA COLECCION
export const addOrder = (order) => {
  collectionOrder().add(order)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
export const addOrderTry = (order) => firebase.firestore().collection('Orders').add(order)
// LEER LOS DOCS DE LA COLECCION
const getOrder = (orderState) => new Promise((resolve, reject) => {
  collectionOrder().where('state', '==', orderState).onSnapshot((query) => {
    const docs = [];
    query.forEach((order) => {
      docs.push({ ...order.data(), id: order.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});

const updateOrderState = (id, status) => {
  const deliveredDate = new Date().toISOString();
  firebase.firestore().collection('Orders').doc(id).update({
    state: status,
    deliveredDate,
  });
};

export default {
  addOrder,
  getOrder,
  updateOrderState,
};*/

import firebase from './firebaseConfig'

export const addOrder = (order) => firebase.firestore().collection('Orders').add(order)

// export  const getOrders =(callback) =>  firebase.firestore().collection('Orders')

// .onSnapshot((snap) => {
//     const data = [];
//     snap.forEach((doc) => {
//         data.push({
//             id: doc.id,
//             ...doc.data(),
//         });
//     });
//     //console.log(data)
//     callback(data);
 
// });

// export const updateStatusInOrder = (id,data)  => firebase.firestore().collection('Orders').doc(id).update(data)
// export const getProducts =(callback) =>firebase.firestore().collection('Products')
// .onSnapshot((snap) => {
//     const intoData = [];
//     snap.forEach((doc) => {
//         intoData.push({
//             id: doc.id,
//             ...doc.data(),
//         });
//     });
// callback(intoData)
// });