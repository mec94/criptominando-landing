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
    [
        'Hablá con un asesor',
        'Crea tu cuenta',
        'Carga cripto en tu cuenta',
        'Elige donde minar',
        'Comprar',
        'Recibir ganancias',
    ];
    let barItemImage = 
    [
        './img/iconChat.svg',
        './img/iconHashpower.svg',
        './img/iconGPUMining.svg',
        './img/iconRewards.svg',
        './img/iconRewards.svg',
        './img/iconRewards.svg'
    ];

    // Replace content w/ array's one

    sectionFirstSteps.children[2].firstElementChild.children[0].src = barItemImage[itemIndex];
    sectionFirstSteps.children[2].firstElementChild.children[1].textContent = barItemTitle[itemIndex];

    let listItems = new Array();

    listItems.push(['El te ayudará en todo el proceso para que puedas invertir con tranquilidad y seguridad.','Inicia un chat ahora para resolver tus dudas'])
    listItems.push(['Para hacerlo tendrás una capacitación previa que te explicará como funciona la minería y como vas a generar ganancias con esa inversión.'])
    listItems.push(['Deposita Criptomonedas a tu cuenta o podes cargar en efectivo con nosotros.']);
    listItems.push(['Podrás elegir que moneda queres minar y ver las ganancias estimadas de cada pool.']);
    listItems.push(['Con tu saldo de billetera vas a poder comprar tu participación a partir de 10 dólares en cripto.']);
    listItems.push(['Empeza a recibir los beneficios en tu billetera dentro de la plataforma.']);

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
        [
            'Facundo',
            'Mijail',
            'Matias',
            'Lucia',
            'Lucas L',
            'Lucas R'
        ];

    let crewMemberDescription =
        [
            'Descripción Facundo',
            'Descripción Mijail',
            'Descripción Matias',
            'Descripción Lucia',
            'Descripción Lucas L',
            'Descripción Lucas R',
        ];

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
        teamCardBack.children[2].firstElementChild.textContent =
            crewMemberDescription[circleIndex]

        }

        else {

        teamCardFront.children[0].firstElementChild.textContent =
            crewMemberTitle[circleIndex];
        teamCardFront.children[1].firstElementChild.src =
            imageSource
        teamCardFront.children[2].firstElementChild.textContent =
            crewMemberDescription[circleIndex]

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
const mainHTML = document.querySelector('main');
const backgroundLocation = "url('./img/backgroundcrypto2.jpeg')";

if (localStorage.getItem('darkMode') == 'on') {
    document.body.classList.toggle('darkMode')
    darkModeToggle.checked = true;
    setBackground(backgroundLocation,200);
}

darkModeToggle.addEventListener('click', () => {

    document.body.classList.toggle('darkMode')

    if (document.body.classList.contains('darkMode')) {
        localStorage.setItem('darkMode', 'on');
        setBackground(backgroundLocation,200);
    }
    else {
        localStorage.setItem('darkMode', 'off')
        setBackground('none',0);
    }

})

function setBackground(location,timing) {
    setTimeout(() => {
    mainHTML.style.backgroundImage = location;
    },timing)
}

// Hamburguer Menu - Mobile Only

const hamburguerMenu = document.querySelector('.hamburguerMenu');

const leftNavUl = document.querySelector('.leftNav ul');

hamburguerMenu.addEventListener('click', () => {
    leftNavUl.classList.toggle('active')
})