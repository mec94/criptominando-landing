/*eslint-disable*/

// Section 'Why Us - Benefits'

var listBenefits = document.querySelector('.sectionContent__whyus').querySelectorAll('ol li');

setUnderline()

function setUnderline() {

    // Start function for first line then set interval

    function noDelaySetInterval(func) {
        func();
        return setInterval(func, 3500);
    }

    function startSetInterval() {
        noDelaySetInterval(setItemUnderline);
    }

    let lineNumber = 0;

    startSetInterval();

    function setItemUnderline() {

        // If first line, remove active from last one - in case needed

        if (lineNumber == 0) {
           listBenefits[3].classList.remove('active');
        }

        // If not first line, then remove underline from previous one

        else if (lineNumber != 0) {
            
           listBenefits[lineNumber - 1].classList.remove('active');
        }

        listBenefits[lineNumber].classList.add('active');
        lineNumber += 1;

        // If last line, reset counter

        if (lineNumber == 4) {
            lineNumber = 0;
        }

    }

}

// Section 'First Steps'

const sectionFirstSteps = document.getElementById('operar'); 

const firstStepsBar = sectionFirstSteps.querySelectorAll('.bar-item')

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

// On Mobile, go top of section when clicking an item, to ensure all content is shown

function goToTop(resolution,element) {

    if (window.innerWidth <= resolution) {

        document.querySelector(element).scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}

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

    listItems.push(['El te ayudará en todo el proceso para que puedas invertir con tranquilidad y seguridad.'])
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


// Honeycomb blocks click detection

const honeyComb = document.querySelector('.honeyComb');

const svgHexagon = honeyComb.querySelectorAll('.svgHexagon');
const honeyCombBlock = honeyComb.querySelectorAll('.honeyCombBlock');

    honeyCombBlock.forEach( (el, index) => {

        // Add click event for each honeycomb hexagon

        el.addEventListener('click', () => {

            // Remove previous active classes

            if (honeyComb.querySelector('.active')) {
                honeyComb.querySelector('.active').classList.remove('active');
                honeyComb.querySelector('.selected').classList.remove('selected');
            }

            // Only add class to clicked circle, then showCard

            honeyCombBlock[index].classList.add('selected');
            svgHexagon[index].classList.add('active');

            showCard(index);
        })
    })

// Flip card & replace contents depending on side

const teamCard = document.querySelector('.teamCard');

const teamCardDefault = teamCard.querySelector('.teamCard--default');
const teamCardFront = teamCard.querySelector('.teamCard--front');
const teamCardBack =  teamCard.querySelector('.teamCard--back');

    function showCard(circleIndex) {

        let crewMemberTitle = 
            [
                'Miembro 1',
                'Miembro 2',
                'Miembro 3',
                'Miembro 4',
                'Miembro 5',
                'Miembro 6',
                'Miembro 7',
                'Miembro 8',
                'Miembro 9',
                'Miembro 10',
                'Miembro 11',
                'Miembro 12'
            ];
        
        let crewMemberDescription =
            [
                'Descripción Miembro 1',
                'Descripción Miembro 2',
                'Descripción Miembro 3',
                'Descripción Miembro 4',
                'Descripción Miembro 5',
                'Descripción Miembro 6',
                'Descripción Miembro 7',
                'Descripción Miembro 8',
                'Descripción Miembro 9',
                'Descripción Miembro 10',
                'Descripción Miembro 11',
                'Descripción Miembro 12'
            ];
        
        let imageSource = honeyComb.querySelectorAll('svg g image')[circleIndex].getAttribute('xlink:href');
        
        flipCard()
        replaceCardContent()

    
        function replaceCardContent() {        

            let isTeamCardFlipped = (teamCard.firstElementChild.classList.contains('active'));

            // Determine if card is flipped & replace back or front content

            if (isTeamCardFlipped) {

                teamCardBack.style.display = 'block';

                teamCardBack.children[0].firstElementChild.textContent =
                    crewMemberTitle[circleIndex];
                teamCardBack.children[1].firstElementChild.src =
                    imageSource;
                teamCardBack.querySelector('.teamCard__content').firstElementChild.textContent =
                    crewMemberDescription[circleIndex]
            }

            else {

            // Hide default first impression card & show member card instead
           
            teamCardFront.style.display = 'block';
            teamCardDefault.style.opacity = '0'

            teamCardFront.children[0].firstElementChild.textContent =
                crewMemberTitle[circleIndex];
            teamCardFront.children[1].firstElementChild.src =
                imageSource;
            teamCardFront.querySelector('.teamCard__content').firstElementChild.textContent =
                crewMemberDescription[circleIndex]
            }
        
        }
    
    }

// Flip Card Function

function flipCard() {
    teamCard.firstElementChild.classList.toggle('active');
}

// Add 'go back' button to card (if already flipped)

let resetCardBtn = document.querySelectorAll('.resetCardBtn');

resetCardBtn.forEach( (b,index) => {

    b.addEventListener('click', () => {

        let isTeamCardFlipped = (teamCard.firstElementChild.classList.contains('active'));

        if (isTeamCardFlipped) {
            teamCardDefault.style.opacity = '1';
            teamCardDefault.classList.remove('active');
            teamCardFront.style.display = 'none';
            flipCard();
        }
        else {
            teamCardDefault.style.opacity = '1';
            teamCardDefault.classList.add('active');
            teamCardBack.style.display = 'none';
            flipCard();
        }
    })
})

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