firebaseRef.set({
    app: {
        name: "Todo App",
        version: "1.0.0"
    },
    isRunning: true,
    user: {
        name: "Bhavarsh",
        age: 20
    }
})


var todosRef = firebaseRef.child('todos');

todosRef.on("child_added", (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
})



todosRef.push({
    text: 'Todo 1'
})


todosRef.push({
        text: 'Todo 2'
    })
    // var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// })

// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// })
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// })




// var newNoteRef = notesRef.push({
//     text: 'Walk theee dog'
// })


// console.log('Todo id', newNoteRef.key);

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('user ref changed', snapshot.val());

// })


// firebaseRef.child('user').update({
//     name: 'Mike'
// })



// firebaseRef.child('app').update({
//     name: "Demo app"
// })

// // firebaseRef.child('app').once('value').then((snapshot) => {

// //     console.log('Got entire database', snapshot.key, snapshot.val());

// // }, (e) => {
// //     console.log('Unable to fetch value');
// // })



// firebaseRef.on('value', (snapshot) => {

//     console.log('Got value', snapshot.val());
// })

// firebaseRef.off();



// firebaseRef.update({
//     isRunning: false
// })


// // firebaseRef.update({
// //     isRunning: null
// // })


// // firebaseRef.child('user/age').remove();