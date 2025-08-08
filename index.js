function saveName() {
    let name = document.getElementById('nameInput').value;
    localStorage.setItem('Name' , name);
}
 function getName() {
    const saveData = localStorage.getItem( 'Name' )
    console.log(saveData)
   document.getElementById( 'output' ).textContent=saveData;
}
 function clearStorage() {
    localStorage.removeItem( 'Name' );
    document.getElementById("output").textContent="no detail"
}
