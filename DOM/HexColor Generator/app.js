function generator() {
    let hexcode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * 15);
        let randomvalue = hexcode[rand];
        color += randomvalue;
    }

    document.getElementById('container').style.backgroundColor = color;
    document.getElementById('output').style.color = color;
    document.getElementById('output').textContent = color;
    document.getElementById('output').style.fontSize = '30px';
}