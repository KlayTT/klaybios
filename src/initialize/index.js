import React, { useEffect, useState }  from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Navbar from '../components/Navbar';
import RoutePaths from '../routes/Routes';
import firebaseConfig from '../api/apikeys';

function Initialize() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
        console.warn(authed.uid);
        if (authed) {
          const userInfo = {
            uid: authed.uid,
            name: authed.displayName,
          };
          setUser(userInfo);
          if (userInfo.uid === firebaseConfig.adminUid) {
            console.warn('Authed');
            setAdmin(userInfo);
          }
        } else if (user || user === null) {
          setUser(null);
          setAdmin(null);
        }
      });
  }, []);
    
  return (
    <div>
      <>
      <Navbar admin={admin} />
      <RoutePaths admin={admin} />
      </>
    </div>
  );
}

export default Initialize;
