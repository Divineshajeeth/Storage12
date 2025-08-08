function saveName() {
    let name = document.getElementById('nameInput').value;
    localStorage.setItem('Name' , name);
}
 function getName() {
    const saveData = localStorage.getItem( 'Name' )
    console.log(saveData)
    const output = document.getElementById( 'output' );
}
 function clearStorage() {
    localStorage.removeItem( 'Name' );
}
