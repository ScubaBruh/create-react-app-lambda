import firebase from "firebase"

// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler(event, context, callback) {
  const config = {
    apiKey: "AIzaSyAt1MSXaGBrohqIYvhE2sYgOckdeT2pDBw",
    authDomain: "netlify-react-graphql.firebaseapp.com",
    databaseURL: "https://netlify-react-graphql-default-rtdb.firebaseio.com",
    projectId: "netlify-react-graphql",
    storageBucket: "netlify-react-graphql.appspot.com",
    messagingSenderId: "209577949029",
    appId: "1:209577949029:web:288ac01876ddc03330938c",
    measurementId: "G-LFMPGLYNWX"
  }
  firebase.initializeApp(config);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Firebase Connected' }),
  })
}
