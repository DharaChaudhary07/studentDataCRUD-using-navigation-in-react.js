const getRec = () => {

    let data = JSON.parse(localStorage.getItem('storage'));

    if (!data) {
        return [];
    } else {
        return data ;
    }
    
}
export default getRec;