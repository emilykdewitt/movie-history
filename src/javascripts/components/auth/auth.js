import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';

import googleButton from './googleButton.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '';
  domString += '<button id="google-auth" class="btn btn-info">';
  domString += `<img src=${googleButton} />`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
