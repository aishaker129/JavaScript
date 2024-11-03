let d = new Date();
let weakDays = d.getDay() ;
// if(weakDays==0) console.log('Sunday');
// else if(weakDays==1) console.log('Monday');
// else if(weakDays==2) console.log('Tuesday');
// else if(weakDays==3) console.log('Wednesday');
// else if(weakDays==4) console.log('Thursday');
// else if(weakDays==5) console.log('Friday');
// else console.log('Saturday');
switch (weakDays) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    default:
        console.log('Saturday');
        break;
}