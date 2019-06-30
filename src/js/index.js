import 'babel-polyfill';
import _ from 'lodash';


import './../sass/styles.scss';
function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    //По надобности условие ниже повторить с minutes и hours
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(getDate, 0);

// const getHeader = () => {
//   const helloWebpack = _.join(['Hello', 'webpack!'], ' ');
//   console.log(helloWebpack);
//   const element = document.createElement('h1');
//
//   element.innerHTML = helloWebpack;
//
//   return element;
// };
//
// document.body.appendChild(getHeader());
//
// const o = {
//   foo: {
//     bar: null
//   }
// };
//
// console.log(o?.foo?.bar?.baz ?? 'default');
