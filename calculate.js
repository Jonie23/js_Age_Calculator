function calculate(){
    let number = document.getElementById('number').value;

    if (number == 0 || number == ''){
           alert('Type your correct age');
           return;
    }
    let date = new Date().getFullYear();
    let age = date - number;

    document.getElementById('text').style.display = 'block';
    document.getElementById('text').innerHTML = 'Your birth year is ' +age;

}





function calculate_Year(){
    calculate();
}








//document.getElementById('text').style.display = 'none';