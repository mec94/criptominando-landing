/*eslint-disable*/

const sectionFirstSteps = document.getElementById('operar'); 

const teamTree = document.querySelector('.teamTree');
const teamCard = document.querySelector('.teamCard');

const firstStepsBar = sectionFirstSteps.querySelectorAll('.bar-item')

// Section 'First Steps'

firstStepsBar.forEach( (item,index) => {

    item.addEventListener('click', () => {

        //Remove previous existing active classes

        if (sectionFirstSteps.querySelector('.active')) {
            sectionFirstSteps.querySelector('.active').classList.remove('active')
        }

        //Add active class to bar item

        firstStepsBar[index].lastElementChild.classList.add('active');

        setBarItemContent(index);
    })
})

// Set bar item title, image, list items

function setBarItemContent(itemIndex) {

    let barItemTitle = 
        ['Chat Disponible',
        'Pedir Cotización',
        'Invertir en Pools',
        'Recomiendanos'];
    let barItemImage = 
        ['./img/iconChat.svg',
        './img/iconHashpower.svg',
        './img/iconGPUMining.svg',
        './img/iconRewards.svg'];

    // Replace content w/ array's one

    sectionFirstSteps.children[2].firstElementChild.children[0].src = barItemImage[itemIndex];
    sectionFirstSteps.children[2].firstElementChild.children[1].textContent = barItemTitle[itemIndex];

    let listItems = new Array();

    listItems.push(['Inicia un chat con nosotros', 'Aclara tus dudas y consulta sobre el servicio'])
    listItems.push(['Informate de la cotización diaria', 'Asesoramiento personalizado sobre opciones de inversión'])
    listItems.push(['Acercate a las oficinas de CriptoSpot', 'Invierte con una empresa de confianza']);
    listItems.push(['Sumate al programa de afiliados', 'Recibe comisiones por hasta 5 niveles de referido']);

    createListItems(itemIndex)

    function createListItems(item) {

        let ul = sectionFirstSteps.children[2].lastElementChild;

        // Remove previous existing LI childs from UL
            
        while (ul.lastElementChild) {
            ul.removeChild(ul.lastElementChild);
        }

        // & append selection
        
            for (i=0; i < listItems[item].length; i++) {
    
                let listItem = document.createElement('li');
                listItem.textContent = listItems[item][i];
    
                ul.appendChild(listItem);
    
            }
    
    }
}


// Section Partners & Team


// Interactive circle click detection

const teamCircleImage = teamTree.querySelector('svg').querySelectorAll('image');

    teamCircleImage.forEach( (el, index) => {

        // Add click event for each circle

        el.addEventListener('click', () => {

            let teamItemCircle = teamTree.querySelector('svg').querySelectorAll('circle');

            // Remove previous active classes

            if (teamTree.querySelector('.active')) {
                teamTree.querySelector('.active').classList.remove('active');
            }

            // Only add class to clicked circle, then showCard

            teamItemCircle[index].classList.add('active');

            showCard(index);
        })
    })

// Flip card & replace contents depending on side

function showCard(circleIndex) {

    let imageSource = teamCircleImage[circleIndex].getAttribute('xlink:href');

    let crewMemberTitle = 
        ['Facundo', 'Mijail', 'Matias',
        'Lucia', 'Lucas L', 'Lucas R'];

    flipCard()
    replaceCardContent()

    function flipCard() {
        teamCard.firstElementChild.classList.toggle('active');
    }
    
    function replaceCardContent() {

        let teamCardFront = teamCard.querySelector('.teamCard--front');
        let teamCardBack =  teamCard.querySelector('.teamCard--back');

        // Determine if card is flipped & replace back or front content

        if (teamCard.firstElementChild.classList.contains('active')) {

        teamCardBack.children[0].firstElementChild.textContent =
            crewMemberTitle[circleIndex];
        teamCardBack.children[1].firstElementChild.src =
            imageSource

        }

        else {

        teamCardFront.children[0].firstElementChild.textContent =
            crewMemberTitle[circleIndex];
        teamCardFront.children[1].firstElementChild.src =
            imageSource

        }
        
    }
    
}

// Get Current Year value with WordClockApi 

var footerCopy = document.getElementById('footerCopyright');

var currentYear =
    fetch('http://worldclockapi.com/api/json/utc/now')
    .then(data => data.json())
    .then(d => footerCopy.textContent = `${(new Date(d.currentDateTime).getFullYear())} © Criptominando`)


// Dark Mode Toggle

const darkModeToggle = document.getElementById('darkModeCheckbox');

if (localStorage.getItem('darkMode') == 'on') {
    document.body.classList.toggle('darkMode')
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('click', () => {

    document.body.classList.toggle('darkMode')

    if (document.body.classList.contains('darkMode')) {
        localStorage.setItem('darkMode', 'on')
    }
    else {
        localStorage.setItem('darkMode', 'off')
    }

})