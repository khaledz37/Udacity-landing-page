/*declaring global constants */
const btn = document.getElementById('to-top');
let time_out;
let j = 0;
const p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    p2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
/*scroll to the top button appearing when scrolling down*/
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
function totop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/*when start scrolling and window is not at the top the navigation bar is shown*/
document.addEventListener('scroll', function () { shownavbar() }, true)
function shownavbar() {
    clearTimeout(time_out)
    document.getElementById('sections').style.display = 'flex';
}
/*when stop scrolling navigation bar disappear*/
document.addEventListener('scroll', function () { hidenavbar() }, false)
function hidenavbar() {
    3
    if (document.documentElement.scrollTop > 180) {
        time_out = setTimeout(function () { document.getElementById('sections').style.display = 'none'; }, 3000);
    }
}
/*when hover the mouse to the top of the screen navigation bar is shown */
window.addEventListener('mousemove', function (e) {
    if (e.clientY < 50) { document.getElementById('sections').style.display = 'flex'; }
}, true)
/*when clicking a section it toggles between collapsing and expanding that section */
function collapse(evt) {
    let z = (evt * 2) - 2;
    const x = document.getElementsByTagName('p')[z], x1 = document.getElementsByTagName('p')[z + 1],
        y = document.getElementsByClassName('collapse')[evt - 1];
    if (x.style.display === 'none') {
        x.style.display = 'block';
        x1.style.display = 'block';
        y.textContent = 'Section ' + evt + '  -'
    } else {
        x.style.display = 'none';
        x1.style.display = 'none';
        y.textContent = 'Section ' + evt + ' +'
    }
}
/*clicking on the navigation bar button the dropdown content is shown/hidden */
function showddc() {
    let ddc = document.getElementById('ddc');
    if (ddc.style.display == 'flex') {
        ddc.style.display = 'none';
    } else {
        ddc.style.display = 'flex';
    }
}
/*set section on screen active */
document.addEventListener('scroll', function () { activ() })
function activ(){
    let secc=document.getElementsByClassName('ss');
    for (let i = 0 ; i< secc.length ; i++){
        let sse= 'section' + (i+1)
        let dd=document.getElementById(sse).getBoundingClientRect()
        if(dd.top>=0 && dd.bottom <=window.innerHeight && dd.right <= window.innerWidth){
            activscrolling(i)
        }
    }
}
/*selecting a section from navigation bar*/
function active(t, evt) {
    const z = document.getElementsByClassName("ss"), z1 = document.getElementsByClassName('nav-section');
    /*adding  active class to the selected section in the navigation menu */
    for (let i = 0; i < z1.length; i++) {
        if (z1[i].className == "nav-section act") {
            z1[i].className = "nav-section";
        }
        evt.className = "nav-section act";
    }
    /*adding  active class to the selected section*/
    for (let i = 0; i < z.length; i++) {
        if (z[i].className == "ss your-active-class")
            z[i].className = 'ss';
    }
    z[t - 1].className = 'ss your-active-class'
    /*scrolling to the selected section */
    const sec = 'section' + t;
    let sect = document.getElementById(sec);
    sect.scrollIntoView({ behavior: "smooth" });
}
/*creating new items each item we hit the new section button */
function new_sections() {
    /*declaring variables*/
    const main = document.querySelector('main'), sections_btn = document.getElementById('sections'), btn1 = document.getElementById('btn'), ul = document.querySelector('ul'), new_section = document.createElement('section'), new_div = document.createElement('div'), new_h2 = document.createElement('span'), new_p = document.createElement('p'),
        new_p2 = document.createElement('p'), new_li = document.createElement('li');
    j++;
    new_section.id = 'section' + j;
    if (j == 1) { document.getElementById('btn').style.display = 'flex'};
    /*adding new elements */
    main.insertAdjacentElement("beforeend", new_section);
    /*get element position */
    new_section.appendChild(new_div);
    new_div.insertAdjacentElement("afterbegin", new_h2);
    new_div.insertAdjacentElement("beforeend", new_p);
    new_div.appendChild(new_p2);
    /*adding classnames to the new elements */
    new_section.className = 'ss';
    new_div.className = "landing__container";
    new_h2.className = 'collapse';
    new_li.className = "nav-section";
    ul.insertAdjacentElement("beforeend", new_li);
    /*adding functions to some elements */
    let coll = 'collapse(' + j + ')';
    new_h2.setAttribute('onclick', coll);
    let ac = 'active(' + j + ',this)';
    new_li.setAttribute('onclick', ac);
    /*adding text content to elements*/
    new_h2.textContent = "Section " + j + " -";
    new_p.textContent = p1;
    new_p2.textContent = p2;
    new_li.textContent = 'section ' + j;
    btn1.textContent = j + ' + Sections';
}
function activscrolling(evt){
    const z = document.getElementsByClassName("ss"), z1 = document.getElementsByClassName('nav-section');
    /*adding  active class to the selected section in the navigation menu */
    for (let i = 0; i < z1.length; i++) {
        if (z1[i].className == "nav-section act") {
            z1[i].className = "nav-section";
        }
        z1[evt].className = "nav-section act";
    }
    /*adding  active class to the selected section*/
    for (let i = 0; i < z.length; i++) {
        if (z[i].className == "ss your-active-class")
            z[i].className = 'ss';
    }
    z[evt].className = 'ss your-active-class'
}
