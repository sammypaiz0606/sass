let names = ['sam']; 


function myFunction1() {
    
    document.getElementById('demo1').innerHTML = names;
    document.getElementById('demo1').style.opacity = 1;
    console.log('demo 1 working!');
}

function myFunction2() {
    names.push('Glenda');
    document.getElementById('demo2').innerHTML = names;
    document.getElementById('demo2').style.opacity = 1;
    console.log('demo 2 working!');

}
function myFunction3() {
    names.push('Ariana');
    document.getElementById('demo3').innerHTML = names;
    document.getElementById('demo3').style.opacity = 1;
    console.log('demo 3 working!');

}
function myFunction4() {
    names.pop();
    document.getElementById('demo4').innerHTML = names;
    document.getElementById('demo4').style.opacity = 1;
    console.log('demo 4 working!');

}