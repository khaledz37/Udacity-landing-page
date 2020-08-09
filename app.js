/*declaring global constants */
const btn = document.getElementById('to-top');
let time_out;
let j = 3;
/*scroll to the top button appearing when scrolling down*/
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
/*when start scrolling and window is not at the top the navigation bar is shown*/
document.addEventListener('scroll', function () { shownavbar() }, true)
function shownavbar() {
    clearTimeout(time_out)
    document.getElementById('sections').style.display = 'flex'
}
/*when stop scrolling navigation bar disappear*/
document.addEventListener('scroll', function () { hidenavbar() }, false)
function hidenavbar() {
    3
    if (document.documentElement.scrollTop > 180) {
        time_out = setTimeout(function () { document.getElementById('sections').style.display = 'none' }, 3000);
    }
}
/*when hover the mouse to the top of the screen navigation bar is shown */
window.addEventListener('mousemove', function (e) {
    if (e.clientY < 50) { document.getElementById('sections').style.display = 'flex' }
}, true)
/*when clicking a section it toggles between collapsing and expanding that section */
function collapse(evt) {
    let z = (evt * 2) - 2;
    const x = document.getElementsByTagName('p')[z], x1 = document.getElementsByTagName('p')[z + 1],
        y = document.getElementsByClassName('collapse')[evt - 1];
    if (x.style.display === 'none') {
        x.style.display = 'block'
        x1.style.display = 'block'
        y.textContent = 'Section ' + evt + '  -'
    } else {
        x.style.display = 'none';
        x1.style.display = 'none'
        y.textContent = 'Section ' + evt + ' +'
    }
}
/*clicking on the navigation bar button the dropdown content is shown/hidden */
function showddc() {
    let ddc = document.getElementById('ddc');
    if (ddc.style.display == 'flex') {
        ddc.style.display = 'none'
    } else {
        ddc.style.display = 'flex'
    }
}
/*selecting a section from navigation bar*/
function active(t, evt) {
    const z = document.getElementsByClassName("ss"), z1 = document.getElementsByClassName('nav-section');
    /*adding  active class to the selected section in the navigation menu */
    for (let i = 0; i < z1.length; i++) {
        if (z1[i].className == "nav-section act") {
            z1[i].className = "nav-section"
        }
        evt.className = "nav-section act";
    }
    /*adding  active class to the selected section*/
    for (let i = 0; i < z.length; i++) {
        if (z[i].className == "ss your-active-class")
            z[i].className = 'ss'
    }
    z[t - 1].className = 'ss your-active-class'
}
/*creating new items each item we hit the new section button */
function new_section() {
    /*declaring variables*/
    let sec = 'section' + j;
    const y = document.getElementById(sec), ph1 = document.getElementById('first-text').innerText, ph2 = document.getElementById('second-text').innerText, sections_btn = document.getElementById('sections'), btn1 = document.getElementById('btn'), ul = document.querySelector('ul'), x = document.createElement('section'), new_div = document.createElement('div'), new_h2 = document.createElement('span'), new_p = document.createElement('p'),
    new_p2 = document.createElement('p'),
    new_a = document.createElement('a'), new_li = document.createElement('li');
    j++;
    x.id = 'section' + j;
    x.className = 'ss'
    y.insertAdjacentElement("afterend", x)/*add a new section element after the last section */
    x.appendChild(new_div)/*add a new div element inside the new section element */
    new_div.insertAdjacentElement("afterbegin", new_h2)/*adding a new h2 element */
    new_div.insertAdjacentElement("beforeend", new_p)/*insert a new paragraph element */
    new_div.appendChild(new_p2) /*adding a second paragraph element */

    new_div.className = "landing__container"/*add a class name to the new div element */
    new_h2.className = 'collapse'/*adding a classname to the new h2 element */
    new_a.className = "nav-section"; /*adding a classname to the new link 'a' element */
    ul.insertAdjacentElement("beforeend", new_li);/* insert a new list item*/
    new_li.insertAdjacentElement("beforeend", new_a)/*create a link inside a list item */

    let coll = 'collapse(' + j + ')';
    new_h2.setAttribute('onclick', coll) /*adding a function when clicking on the h2 element */
    let ac = 'active(' + j + ',this)'
    new_a.setAttribute('onclick', ac)/*adding a function when clicking on the link 'a' element */

    new_h2.textContent = "Section " + j + " -";/*adding a title to the new section */
    new_p.textContent = ph1;/*adding text content to the new paragraph element */
    new_p2.textContent = ph2;/*adding content to he second paragraph element */
    new_a.textContent = 'section ' +j;/*renaming the new section in the navigation menu */
    btn1.textContent = j + ' + Sections'/* updating the number of sections displaying on the nav bar*/

    new_a.href = "#section" + j;/*adding a url to the link to scroll down to he desired section */
}