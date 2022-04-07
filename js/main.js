
const sectionFirstSteps = document.getElementById('operar'); 

const teamTree = document.querySelector('.teamTree');
const teamCard = document.querySelector('.teamCard');


const firstStepsBar = sectionFirstSteps.querySelectorAll('.bar-item')

firstStepsBar.forEach( (item,index) => {

    item.addEventListener('click', () => {

        if (sectionFirstSteps.querySelector('.active')) {
            sectionFirstSteps.querySelector('.active').classList.remove('active')
        }
        
        firstStepsBar[index].classList.add('active');

        showBarItem(index);
    })
})

var listItems = []
var ul = sectionFirstSteps.children[2].lastElementChild;

function showBarItem(itemIndex) {
    let barItemTitle = 
        ['Chat Disponible',
        'Pedir Cotización',
        'Invertir en Pools',
        'Recomiendanos'];
    let barItemImage = 
        ['../img/iconChat.svg',
        '../img/iconHashpower.svg',
        '../img/iconGPUMining.svg',
        '../img/iconRewards.svg'];

    listItems.push(['Inicia un chat con nosotros', 'Aclara tus dudas y consulta sobre el servicio'])
    listItems.push(['Informate de la cotización diaria', 'Asesoramiento personalizado sobre opciones de inversión'])
    listItems.push(['Acercate a las oficinas de CriptoSpot', 'Invierte con una empresa de confianza']);
    listItems.push(['Sumate al programa de afiliados', 'Recibe comisiones por hasta 5 niveles de referido']);
    


    createListItems(itemIndex)

    function createListItems(item) {
            
        while (ul.lastElementChild) {
            ul.removeChild(ul.lastElementChild);
        }
        
            for (i=0; i < listItems[item].length; i++) {

                let listItem = document.createElement('li');
                listItem.textContent = listItems[item][i];

                ul.appendChild(listItem);

            }

    }

    sectionFirstSteps.children[2].firstElementChild.children[0].src = barItemImage[itemIndex];

    sectionFirstSteps.children[2].firstElementChild.children[1].textContent = barItemTitle[itemIndex];

    //sectionFirstSteps.children[2].lastElementChild.children[0].textContent
}

const teamCircleImage = teamTree.querySelector('svg').querySelectorAll('image');

    teamCircleImage.forEach( (el, index) => {

        el.addEventListener('click', () => {

            let teamItemCircle = teamTree.querySelector('svg').querySelectorAll('circle');

            if (teamTree.querySelector('.active')) {
                teamTree.querySelector('.active').classList.remove('active');
            }

            teamItemCircle[index].classList.add('active');
            showCard(index);
        })
    })

function showCard(circleIndex) {
    let imageSource = teamCircleImage[circleIndex].getAttribute('xlink:href');

    let crewMemberTitle = 
        ['Sobre Partner 1', 'Sobre Partner 2', 'Sobre Partner 3',
        'Sobre Partner 4', 'Sobre Partner 5', 'Sobre Partner 6'];

    teamCard.children[0].firstElementChild.textContent = crewMemberTitle[circleIndex];
    teamCard.children[1].firstElementChild.src = imageSource;
}