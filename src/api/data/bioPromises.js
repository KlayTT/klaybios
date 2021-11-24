import axios from 'axios';
import firebaseConfig from '../../api/apikeys';

const baseURL = firebaseConfig.databaseURL;

const getMessage = () => new Promise((resolve, reject) => {
    axios
        .get(`${baseURL}/contactMe.json`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject);
})

const createMessage = (obj) => new Promise((resolve, reject) => {
    axios
        .post(`${baseURL}/contactMe.json`, obj)
        .then((response) =>{
            const firebaseKey = response.data.name;
            axios
                .patch(`${baseURL}/contactMe/${firebaseKey}.json` , { firebaseKey })
                .then(() => {
                    getMessage().then(resolve);
                })
        }).catch(reject);
});

const deleteMessage = (firebaseKey) => new Promise((resolve, reject) => {
    axios
        .delete(`${baseURL}/contactMe/${firebaseKey}.json`)
        .then(() => getMessage().then(resolve))
        .catch(reject);
});

export {
    getMessage,
    createMessage,
    deleteMessage,
};
