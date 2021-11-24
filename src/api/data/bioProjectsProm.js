import axios from 'axios';
import firebaseConfig from '../../api/apikeys';

const baseURL = firebaseConfig.databaseURL;

const getProject = () => new Promise((resolve, reject) => {
    axios
        .get(`${baseURL}/gitHubProjects.json`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject);
});

const createProject = (obj) => new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/gitHubProjects.json`, obj)
      .then((response) => {
        const firebaseKey = response.data.name;
        axios
          .patch(`${baseURL}/gitHubProjects/${firebaseKey}.json`, { firebaseKey })
          .then(() => {
            getProject().then(resolve);
          });
    })
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
    axios
        .delete(`${baseURL}/gitHubProjects/${firebaseKey}.json`)
        .then(() => getProject().then(resolve))
        .catch(reject);
});

export {
    getProject,
    createProject,
    deleteProject,
};