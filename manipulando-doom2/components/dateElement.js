export default (date)=>{

const dateElement = document.createElement('li');

    //se aplican los estilos definidos para date
    dateElement.classList.add('date');
    //define el contenido del html de date
    dateElement.innerHTML = date;
    return dateElement


}