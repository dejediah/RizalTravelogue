import React, { useState, useEffect, useRef, useCallback } from 'react';
import Section from './components/section';
import './styles/main.css';

// Import your NEW assets
import mapBackground from './assets/map.jpg';
import libertyPlaneMountain from './assets/liberty.png';
import stBasilPisa from './assets/piza.png';
import airshipBalloon from './assets/red air balloon.png';
import bookbg from './assets/bookbg.png';
import bookmg from './assets/bookmg.png';
import bookfg1 from './assets/bookfg1.png';
import bookstick1 from './assets/bookstick1.png';
import bookstick2 from './assets/bookstick2.png';
import bgp3 from './assets/bgp3.png';
import mgp3 from './assets/mgp3.png';
import mg2p3 from './assets/mg2p3.png';
import p3fg1 from './assets/p3fg1.png';
import p3fg2 from './assets/p3fg2.png';
import ateneobg from './assets/ateneobg.png';
import ateneomg1 from './assets/ateneomg1.png';
import ateneomg2 from './assets/ateneomg2.png';
import ateneomg3 from './assets/ateneomg3.png';
import ateneosticky1 from './assets/ateneosticky1.png';
import ateneosticky2 from './assets/ateneosticky2.png';
import ustbg from './assets/ustbg.png';
import ustfg1 from './assets/ustfg1.png';
import ustfg2 from './assets/ustfg2.png';
import ustmg1 from './assets/ustmg1.png';
import ustmg2 from './assets/ustmg2.png';
import lakbaybg from './assets/lakbaybg.png';
import lakbaymg1 from './assets/lakbaymg1.png';
import lakbaysticky1 from './assets/lakbaysticky1.png';
import lakbaysticky2 from './assets/lakbaysticky2.png';
import lakbayfg from './assets/lakbayfg.png';
import sgbg from './assets/sgbg.png';
import sgmg1 from './assets/sgmg1.png';
import sgmg2 from './assets/sgmg2.png';
import sgsticky1 from './assets/sgsticky1.png';
import sgsticky2 from './assets/sgsticky2.png';
import sribg from './assets/sribg.png';
import srimg1 from './assets/srimg1.png';
import srimg2 from './assets/srimg2.png';
import sristicky1 from './assets/sristicky1.png';
import sristicky2 from './assets/sristicky2.png';
import egpbg from './assets/egpbg.png';
import egpmg1 from './assets/egpmg1.png';
import egpmg2 from './assets/egpmg2.png';
import egpfg from './assets/egpfg.png';
import egpstick from './assets/egpstick.png';
import itlbg from './assets/itlbg.png';
import itlmg1 from './assets/itlmg1.png';
import itlmg2 from './assets/itlmg2.png';
import itlstick1 from './assets/itlstick1.png';
import itlstick2 from './assets/itlstick2.png';
import frbg from './assets/frbg.png';
import frmg from './assets/frmg.png';
import frfg from './assets/frfg.png';
import frstick from './assets/frstick.png';


const App = () => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const sectionsContainerRef = useRef(null);
    const isAnimatingScrollRef = useRef(false); // Flag for programmatic scroll animation
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sections = [
        {
            title: "Jose Rizal: Lakbay-Buhay",
            text: "Tuklasin ang buhay ni Rizal gamit ang aming interactive na travelogue.",
            layers: [
                { src: mapBackground, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'center', z: -3},
                { src: stBasilPisa, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -2, size: '200% auto' },
                { src: libertyPlaneMountain, speed: -1.8, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: 10, size: '70% auto'},
                {
                    src: airshipBalloon,
                    speed: -0.2,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'center',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0
                }
            ]
        },
    {
        title: "Maagang Buhay at Edukasyon (1861-1882)",
            layers: [
                { src: bookmg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'top center', z: 10},
                { src: bookbg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -2, size: '100% auto' },
                { src: bookfg1, speed: -1.8, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: 11, size: '100% auto', offsetY: -50},
                {
                    src: bookstick1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom left',
                    z: 91,
                    isBleeding: true,
                    size: '50% auto',
                    brightness: 1.0,
                    offsetX: -100,
                    offsetY: 150
                },
                {
                    src: bookstick2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom right',
                    z: 91,
                    isBleeding: true,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetX: 350,
                    offsetY: 270
                }
        ]
    },
        {
            title: "Calamba, Laguna (1861-1872): 1. Ang pagkabata at maagang edukasyon ni Rizal.",
            text: "Si Jose Protacio Rizal Mercado y Alonzo Realonda o mas kilalang Jose Rizal ay isinilang noong ika-19 ng Hunyo 1861 sa Calamba Laguna. Galing si Jose Rizal sa isang edukado at maykayang pamilya na pinangungunahan ng kanyang ama na si Don Francisco Mercado at ina niyang si Doña Teodora Alonzo. Sa murang edad pa lamang ay ipinakita na ni Rizal ang kanyang katalinuhan, pagiging mapagmasid, at pagkahilig sa pagbabasa at pagsusulat. Tinuruan siya ng kanyang ina sa pagbasa at pagdarasal. Sa tulong ng mga pribadong guro at ng kanyang sariling determinsayon, natutunana ni Rizal ang mga batayang asignatura tulad na lamang ng Latin, Kastila, at Matematika.",
            layers: [
                { src: bgp3, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'top center', z: -2},
                { src: mg2p3, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -1, size: '100% auto' },
                { src: mgp3, speed: -0.6, mouseSpeed: -0.04, objectFit: 'cover', position: 'center', z: 10, size: '100% auto' },
                {
                    src: p3fg1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom left',
                    z: 91,
                    isBleeding: true,
                    size: '70% auto',
                    brightness: 1.0,
                    offsetX: -70,
                    offsetY: 150
                },
                {
                    src: p3fg2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom right',
                    z: 91,
                    isBleeding: true,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetX: 275,
                    offsetY: 225
                }
            ]
        },
        {
          title: "Ateneo de Manila (1872-1877): Ang sekondaryang edukasyon ni Rizal.",
            text: "Matapos ang pagkamatay ni Gomburza noong 1872, ipinasok si Rizal sa Ateneo Municapal de Manila. Bagama’t noong una ay hindi siya tinanggap dahil sa kanyang pagiging “Indio”, natanggap siya dahil sa rekomendasyon ng isang pamilyar sa kanyang ina. Sa Ateneo, si Rizal ay naging “interno” at di-naglaon ay naging isa sa mga pinakamasigasig na mag-aaral. Natapos siya ng Batsilyer ng Sining at may pinakamataas na karangalan. Dito rin nahasa si Rizal sa larangan ng literatura, sining, agham, at relihiyon. Sumulat siya ng mga tula gaya ng “Sa Aking Mga Kabata” at iba pang akdang nagpapakita ng kanyang pambihirang pag-iisip sa murang edad. Kasabay nito, natutunan niya ang kahalagahan ng disiplina, pagiging makatao, at pagmamahal sa inang bayan.",
            layers: [
                { src: ateneobg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'top center', z: -5},
                { src: ateneomg1, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: ateneomg2, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: -3, size: '100% auto' },
                {
                    src: ateneosticky1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom left',
                    z: 91,
                    isBleeding: true,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetX: -100,
                    offsetY: 150
                },
                {
                    src: ateneosticky2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom right',
                    z: 91,
                    isBleeding: true,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetX: 350,
                    offsetY: 270
                },
                {
                    src: ateneomg3,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'center',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetY: -100
                }

            ]
        },
        {
            title: "University of Santo Tomas (1877-1882): Ang edukasyon ni Rizal sa unibersidad.",
            text: "Nagpatuloy si Rizal sa Unibersidad ng Santo Tomas kung saan una niyang kinuha ang kursong Filosofía y Letras bago nagpasya na ipagpatuloy ang medisina upang matulungan ang kanyang inang unti-unting nawawalan ng paningin. Sa UST, naranasan niya ang diskriminasyon ng mga prayle at opisyal sa mga katutubong mag-aaral. Dahil dito, mas tumibay ang kanyang damdaming makabayan at pagkadismaya sa umiiral na sistema. Kasabay ng kanyang pag-aaral, aktibo rin si Rizal sa pagsusulat, pagpapadala ng tula at sanaysay sa pahayagan, at pag-oobserba sa mga hindi makatarungang kalakaran sa lipunan.",
            layers: [
                { src: ustbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'top center', z: -5},
                { src: ustmg1, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: ustmg2, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: -3, size: '100% auto' },
                {
                    src: ustfg1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: false,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: -700,
                    offsetY: 200,
                },
                {
                    src: ustfg2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'center',
                    z: 91,
                    isBleeding: false,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetY: 0
                }
            ]
        },
        {
            title: "Paglalakbay at Pagkadestiyero  (1882-1896)",
            layers: [
                { src: lakbaybg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'top center', z: -5},
                { src: lakbaymg1, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: lakbayfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: 11, size: '100% auto' },
                {
                    src: lakbaysticky1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: -450,
                    offsetY: 350,
                },
                {
                    src: lakbaysticky2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: 450,
                    offsetY: 175,
                }
            ]
        },
        {
            title: "Singapore (1882): Ang unang banyagang lupaing napuntahan ni Rizal (Bapor Salvador)",
            text: "Sa paglalakbay, maingat na pinagmasdan ni Rizal ang labing-anim na pasahero ng bapor Salvadora, siya lamang ang Pilipino habang ang iba ay Kastila, Briton, at Itim na Indiyano. Nakipagkaibigan siya sa kapitan, Donato Lecha, at nilaro ang ahedres para maibsan ang pagkabagot, kung saan madalas niyang talunin ang iba. Noong Mayo 1882 ang naging unang tapak ni Jose Rizal sa dayuhang lupa. Dumaong ang bapor Savadora sa Singapore kung saan siya ay nagkaroon ng dalawang araw na panandaliang hintuan. Siya ay nanatili sa Hotel de la Paz at nilibot niya ang lugar sakay ng karwahe, binisita ang mga pook gaya ng isang paaralan, ang mga magagandang templo ng Buddhismo, ang sikat na Botanical Garden, mga mataong distrito ng pamilihan at ang  rebulto ni Sir Thomas Stamford Raffles na siyang tagapagtatag ng Singapore. Sa kanyang maikling pananatili, napagmasdan ni Rizal ang kaayusan, kalinisan, at episyenteng pamahalaan sa ilalim ng mga Briton. Bagama’t panandalian lamang ang pananatili, ito ang kanyang unang karanasan sa isang kolonyal na pamahalaang hindi Espanyol—na nagbigay sa kanya ng paghahambing sa katiwalian at kabulukan ng sistemang kolonyal sa Pilipinas.",
            layers: [
                { src: sgbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '75% auto'},
                { src: sgmg1, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: sgmg2, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 10, size: '100% auto' },
                {
                    src: sgsticky1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: -200,
                    offsetY: 180,
                },
                {
                    src: sgsticky2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: 300,
                    offsetY: 175,
                }
            ]
        },

        {
            title: "Sri Lanka (Ceylon) (1882): Pagdaan ni Rizal sa Timog Asya (Bapor Djemnah)",
            text: "Lumipat sa isang mas malaki at mas malinis na barko, ang bapor Prances Djemnah, ang mga pasaherong pasasa-Europa. Habang sakay sa bapor Prances Djemnah ay nahasa niya ang kanyang kaalaman sa wikang Pranses dahil ang mga pasahero ay nagsasalita ng Pranses. Kung kaya’t araw-araw siyang nakipag-usap sa kanila gamit ang halo-halong Espanyol at Latin, pati na rin ng pagguhit sa papel upang magkaintindihan. Bilang bahagi ng rutang pandagat patungong Europa, dumaan si Rizal sa Ceylon (kasalukuyang Sri Lanka). Noong Mayo 17, dumating ang bapor Djemnah sa Point Galle, isang baybaying bayan sa timog ng Ceylon, ngunit hindi ito nagustuhan ni Rizal. Kinabukasan, ipinagpatuloy ang paglalakbay patungong Colombo, ang kabisera ng Ceylon. Pagkalipas ng ilang oras ng paglalayag, narating niya ang lungsod at namangha siya sa magagandang tanawin at magagarbong mga gusali nito. Nakita niya sa Ceylon ang mga kakaibang kalinangan at kultura ng mga tao na taga-roon na lubhang naiiba sa mga kolonyang Espanyol. Sa kanyang Travel Diary, inilalarawan ni Rizal ang init ng klima at ang tanawin ng mga estrukturang Asyano na may impluwensyang Hindu at Islamiko. Bagama’t hindi siya nanatili nang matagal sa Ceylon, ang kanyang obserbasyon sa kanilang pamumuhay ay nagbukas ng kanyang kaisipan sa posibilidad na maunlad at maayos ang pamumuhay ng mga Asyano sa labas ng kolonyal na pamahalaang Espanyol.",
            layers: [
                { src: sribg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '75% auto'},
                { src: srimg1, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: srimg2, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 10, size: '100% auto' },
                {
                    src: sristicky1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: true,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetX: -100,
                    offsetY: 275,
                },
                {
                    src: sristicky2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 300,
                    offsetY: 305,
                }
            ]
        },

        {
            title: "Egypt - 1882: (Bapor Djemnah)",
            text: "Mula sa Colombo, ipinagpatuloy ng bapor Djemnah ang paglalakbay patatawid sa Karagatang Indian hanggang sa baybayin ng Cape sa Africa. Unang nasilayan ni Rizal ang di-masukal na baybayin ng Africa, na tinawag niyang ‘isang di-kaaya-ayang lupain ngunit kilala.’ Sa lungsod ng Aden, napansin niyang mas mainit ang klima kaysa sa Maynila, at natuwa siyang makita ang mga kamelyo na unang pagkakataon din niyang nakita. Nagpatuloy ang barko patungo sa Lungsod ng Suez, ang Red Sea terminal ng Suez Canal. Pagdating doon, bumaba ng barko si Rizal upang mamasyal. Pinakanamangha siya sa kagandahan ng liwanag ng buwan, na nagpaalala sa kanya sa Calamba at sa kanyang  pamilya. Tumagal ng limang araw ang paglalakbay ng Djemnah sa Suez Canal, na isang bagong karanasan para sa kanya. Pagdating sa Port Said, bumaba siya upang mamasyal at humanga sa tanawin. Namangha rin si Rizal sa pagkakaroon ng mga taong mula sa iba't ibang lahi na nagsasalita ng iba't ibang mga wika. Ang mga karanasang ito ay nagbigay kay Rizal ng mas malawak na pag-unawa sa pagkakaiba-iba ng tao, kultura, at wika sa labas ng Pilipinas. Nakita niya na maraming paraan ng pamumuhay at pananaw sa mundo na naiiba sa karanasan niya sa ilalim ng kolonyalismong Espanyol.",
            layers: [
                { src: egpbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '75% auto'},
                { src: egpmg1, speed: -0.6, mouseSpeed: -0.04, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: egpmg2, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'bottom center', z: 10, size: '100% auto' },
                { src: egpfg, speed: -0.6, mouseSpeed: 0.04, objectFit: 'cover', position: 'bottom center', z: 10, size: '100% auto' },
                {
                    src: egpstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'center',
                    z: 91,
                    isBleeding: false,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetY: 500,
                }
            ]
        },

        {
            title: "Italy - 1882: (Bapor Djemnah)",
            text: "Noong Hunyo 11, 1882, bumaba si Rizal sa barko at, kasama ang isang gabay, naglibot sa Lungsod ng Naples nang isang oras. Ito ang unang lupaing Europeo na kanyang tinahak. Natuwa si Rizal sa lungsod ng Italya dahil sa masiglang kalakalan, buhay na buhay na mga tao, at kahanga-hangang tanawin. Labis siyang namangha sa Mount Vesuvius at sa Castle of St. Telmo.",
            layers: [
                { src: itlbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: itlmg1, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: itlmg2, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: itlstick1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: -350,
                    offsetY: 350,
                },
                {
                    src: itlstick2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },

        {
            title: "France - 1882: (Bapor Djemnah)",
            text: "Dumaong ang barko sa Marseilles, France, kung saan nanirahan si Rizal sa Noalles Hotel nang dalawang araw at kalahati. Sa kanyang pananatili, binisita niya ang tanyag na Chateau d’If. Pagkatapos ng kanyang paglagi sa Marseilles, sumakay siya ng tren patungong Barcelona, Espanya.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },
        {
            title: "Espanya o Spain: Karanasan at pamumuhay sa Barcelona at Madrid",
            subtitle: "Barcelona",
            text:"Sa paglalakbay sa tren, kanyang natawid ang mga bundok ng Pyrenees at siya tumigil ng isang araw sa hangganang bayan ng Portbou. Pagkatapos ng inspeksyon sa pasaporte sa Portbou ayy nakarating siya sa Barcelona. Isang salo-salong inihandog sa kanya ng mga Pilipino sa Barcelona sa Plaza de Cataluña, kung saan kabilang ang ilang naging kamag-aral niya sa Ateneo. Sa Barcelona niya isinulat ang kanyang unang sanaysay sa ibang bansa, ang El Amor Patria (Love of Country / Pag-ibig sa Tinubuang Lupa), na naglalaman ng malalim na pagmamahal sa Inang Bayan. Ang akdang ito, na ginamitan niya ng sagisag-panulat na Laong-laan, ay nagdulot ng malaking pansin mula sa mga Kastila at mga Pilipino. Nagdulot ito ng paghari ng galit sa panig, at ang mga Pilipino ay nagkaroon ng kaliwanagan sa isip at nagising ang kanilang damdaming makabayan. Habang nasa Barcelona ay pinaunlakan ni Rizal ang kahilingan ni Francisco Calvo na sumulat siyang muli. Ipinadala niya rito ang artikulong may pamagat na Los Viajes (Travels / Mga Paglalakbay) at Revista de Madrid (Review of Madrid / Pagbabalik Pananaw a Madrid) na sumasalamin sa kanyang mga karanasan sa paglalakbay at mas malawak na pananaw sa mundo. Sa kabuuan, ang kanyang mga karanasan sa Barcelona, mula sa pakikipag-ugnayan sa mga kapwa Pilipino hanggang sa paglalathala ng mga makabayang sulatin, ay nagpayaman sa kanyang pag-iisip at nagpatibay sa kanyang pagmamahal at dedikasyon sa Pilipinas.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },

        {
            title: "Espanya o Spain: Karanasan at pamumuhay sa Barcelona at Madrid",
            subtitle: "Madrid",
            text:"Nang magtatapos na ang taong 1882 ay nagtungo si Rizal sa Madrid upang doon ipagpatuloy ang pag-aaral. Panahon ng taglagas nang dumating siya sa Madrid.  Noong Nobyemre 3, 1882 ay napatala si Rizal sa Universidad Central de Madrid sa kursong Medisina at 'Filosofia y Letra' (Philosophy and Letters). Bukod dito, siya ay nag-aaral din ng pagpipinta at eskulptura sa Academia de San Fernando. Siya rin pumapasok pa sa ibang mga paaralan ng wika at kumukuha ng leksyon sa Pranses, Ingles, at Aleman sa Madrid Ateneo (Ateneo de Madrid). Nagsasanay rin siya ng arnis at pagdula sa Hall of Arms of Sanz y Carbonell. Malimit din dumalaw si Rizal sa tahanan ni Don Pablo Ortega y Rey, isang Kastilang liberal na naging gobernador-sibil noong panahon ni Gobernador Heneral Dela Torre. Dito ay lalong nahubog ang kanyang kaisipan ukol sa kalayaan, reporma, at makataong pamamahala. Isa rin sa naging libangan niya sa Madrid ay ang pagbabasa ng mga aklat tulad ng “The Wandering Jaw” at ang “Uncle Tom’s Cabin” ni Harriet Beecher Stowe na siyang gumising sa kanyang damdamin para sa mga naaapi. Ang temang ito ay kanyang dinala sa pagsusulat ng 'Noli Me Tangere,' isang nobelang sinumulan niyang isulat habang siya ay nag-aaral pa sa Madrid. Ang kanyang pagsali sa Masoneriya bilang si 'Dimasalang' ay bunga ng kanyang damdaming makabayan at pagkabigo sa sistemang panrelihiyon sa Pilipinas. Habang nasa Madrid ay nakatanggap si Rizal ng mga liham mula sa kanyang pamilya sa Calamba. Lubos ang pag-aalala ng kanyang ina, na nagkasakit dahil sa labis na pag-aalala sa panganib na kinakaharap ni Rizal sa kamay ng mga kaaway, pati na rin sa kadahilanang napapansin niya ang panlalamig ng anak sa kanilang relihiyon. Sa mga liham ni Rizal ay kanyang isinalarawan ni Rizal ang paghanga niya sa mga malayang kaisipan at repormang panlipunan ng mga Europeo, at ang paniniwalang hindi sa dahas kundi sa edukasyon at mapayapang reporma makakamit ang tunay na kalayaan. Noong Enero 2, 1884 ay muling nagtipon-tipon ang mga Pilipino sa bahay ni Pedro Paterno sa Madrid, at iminungkahi ni Rizal ang pagsulat ng isang nobela tungkol sa lipunang Pilipino. Ngunit sa kadahilanang ang ibig na sulatin ng kanyang mga kasamahan ay tungkol sa mga babae, sinarili na lamang ni Rizal ang pagsulat ng nobela tungkol sa Pilipinas. Noong Hunyo 21, 1884 ay natapos niya ang kursong Medisina at iginawad sa kanya ang titulong 'Licenciado en Medicina.' Ipinagpatuloy niya ang pag-aaral para maging ganap na Doktor ng Medisina, ngunit hindi niya natanggap ang diploma dahil sa kakulangan sa presentasyon ng tesis at bayad sa kinakailangang halaga. Sa kanyang kaarawan noong Hunyo 19, 1885, natamo niya ang titulong 'Licenciado en Filosofia y Letras' na may markang 'Sobresaliente.' Ang pananatili ni Rizal sa Madrid ay nagsilbing mahalagang yugto sa paghubog ng kanyang damdaming makabayan at intelektwal. Sa pamamagitan ng mga karanasang gaya ng pag-aaral, pagbabasa, pagsali sa mga samahan, at pakikisalamuha sa mga liberal na Europeo, nabuo ang pundasyon ng kanyang mga ideya ukol sa reporma, karapatang pantao, at pagkamakabayan ",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },
        
        {
            title: "Paris, Pransiya o France (1885-1886): Nagpatuloy si Rizal sa kanyang pag-aaral at naging bahagi ng Kilusang Propaganda",
            text:"Matapos ang kanyang pag-aaral sa Madrid noong 1885, nagtungo si Rizal sa Paris upang higit pang mapalawak at mapino ang kanyang kaalaman at kasanayan sa agham pangmedikal, lalo na sa optalmolohiya. Layunin niyang matutunan ito upang siya mismo ang makagamot at maka-opera sa mata ng kanyang ina. Sa pagtungo sa Paris ay dumaan siya sa Barcelona upang dalawin si Maximo Viola na isang kaibigan niyang estudyante ng Medisina. Namalagi siya roon ng isang lingo na kung saan ay nakilala at naging kaibigan niya ang patnugot at ang may-ari ng pahayagang 'La Publicidad.' Nanirahan si Rizal sa Paris humigit-kumulang sa apat na buwan. Sa panahong ito, naglingkod siya bilang katulong sa klinika ng bantog na optalmolohistang si Dr. Louis de Weckert, na tumulong sa pagpapahusay ng kanyang kasanayan. Madalas din siyang tumuloy sa tahanan ng mga Pardo de Tavera at sa studio ni Juan Luna, kung saan siya'y naging modelo ng ilang likhang-sining. Bukod sa pag-aaral habang nasa Paris, mas naging aktibo si Rizal sa Kilusang Propaganda na isang samahan ng mga ilustrado na naglalayong isulong ang mga reporma para sa Pilipinas. Sa piling ng mga edukado at progresibong Pilipino sa Europa, lalo pang tumibay ang kanyang paninindigang isulong ang karapatan ng mga kababayan.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },
        
        {
            title: "Alemanya o Germany (1886-1887): Nag-aral si Rizal ng ophthalmolohiya at sumulat ng nobelang 'Noli Me Tangere'",
            text:"Noong sumunod na taon (1886), nagtungo naman si Rizal sa Heidelberg sa Alemanya. Dito ay tumulong din siya sa klinika ng tanyang na okulistang si Dr. Javier Galezowsky, at nag-aral sa ilalim ng pagtuturo ni Dr. Otto Becker. Sa isang lungsod sa Alemanya na tinatawag na Heidelberg, llabis naakit si Rizal sa magagandang tanawin sa kanyang pamamasyal, lalong-lalo na ng pamumukadkad ng mga bulaklak. Dahil sa halimuyak ng mga bulaklak ay nakapagpagunita kay Rizal ang kanyang bayan at nadama niya ang labis na pangungulila, kung kaya't isinulat niya ang isang tulang may pinamagatang 'A las Flores de Heidelberg' (To the Flowers of Heidelberg). Sa isang liham sa kanyang kapatid na si Trinidad, ipinahayag niya ang paghanga sa mga babaeng taga-Alemanya dahil sa kanilang pagiging tahimik, masisipag, at palakaibigan. Napansin din niya na hindi sila partikular sa magagarang damit o mamahaling alahas. Labis na ikinalungkot ni Rizal na higit na pinag-uukulan daw ng pansin ng mga babae sa Pilipinas ang kanilang pananamit kaysa karunungan. Gayunpaman ay pinuri niya ang kahinhinan, kagandahang-asal, katapatan at pagiging magalang ng mga Pilipina. Habang nasa Berlin naman, pinahusay niya ang kanyang kasanayan sa wikang Aleman, nagsulat ng papel na 'Tagalische Verkunst.'  Isinalin din niya sa Tagalog mula sa Aleman ang 'William Tell' ni Schiller upang maaaring malaman ng mga Pilipino ang storya ng pagkakuha ng kalayaan ng Switzerland. Bukod sa pag-aaral, napalawak din ni Rizal ang kanyang mga ugnayan sa mga siyentipiko at iskolar sa Alemanya. Napansin niya ang mga kaugalian ng mga taga-Alemanya, tulad ng kahalagahan ng pagpapakilala sa mga sosyal na pagtitipon at ang pagiging magalang. Naglibot din si Rizal sa mga makasaysayang lugar tulad ng Palacio Japonais sa Dresden, Alemanya, na nagdagdag ng lalim sa kanyang mga karanasan. Ang kanyang karanasan sa Alemanya, partikular ang pagdalo sa mga lektura at ang pakikipag-ugnayan sa mga doktor at manunulat, ay nagbigay-inspirasyon at nagpatibay sa kanyang layunin na gisingin ang kamalayan ng mga Pilipino laban sa pang-aapi. Sa pamamagitan ng pag-aaral at pagsulat, naipakita ni Rizal ang kanyang matinding pagmamahal sa bayan at hangarin para sa pagbabago. Ika-21 ng Marso 1887 sa Berlin, Germany, natapos at nailathala ni Rizal ang kanyang nobelang Noli Me Tangere sa tulong pinansyal ng kanyang kaibigang si Maximo Viola. Pagkatapos ng limang taon sa Europa, umuwi si Rizal sa Calamba noong Agosto 8, 1887.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },    

                {
            title: "Europe Tour (1887): Matapos ang pagpublika ng Noli Me Tangere, bumisita si Rizal sa iba't ibang importanteng lugar sa Europa",
            text:"Matapos mailathala ang Noli Me Tangere, nagpasya si Dr. José Rizal na maglakbay sa iba’t ibang bahagi ng Europa upang palawakin ang kanyang kaalaman at karanasan. Kasama niya sa paglalakbay si Dr. Maximo Viola, na tumulong din sa pagpapalimbag ng kanyang nobela. Mula Berlin, unang tinungo nina Rizal at Viola ang Potsdam, isang lugar na kilala sa kasaysayan at kultura. Sumunod silang pumunta sa Dresden kung saan sila ay dumating kasabay ng isang eksposisyon ng mga bulaklak. Dito, binisita nila si Dr. Adolph B. Meyer at hinangaan ni Rizal ang obra maestrang Prometheus Bound sa museo ng sining. Noong Mayo 13, 1887, nagtungo sila sa Leitmeritz (Litomerice, Czech Republic) at doon unang nagkita sina Rizal at ang kanyang kaibigang si Propesor Ferdinand Blumentritt. Nanatili sila roon hanggang Mayo 16 at naranasan nila ang mainit na pagtanggap ng pamilya Blumentritt. Pagkatapos, binisita nila ang Prague at nakilala si Dr. Willkomm, isang propesor mula sa Unibersidad ng Prague. Sa Vienna, dumating sila noong Mayo 20, 1887, kung saan nakilala ni Rizal ang nobelistang si Norfenfals, at dito rin naibalik sa kanya ang nawawala niyang stickpin. Nagpatuloy ang kanilang paglalakbay sa pamamagitan ng Danubian voyage, na nagdala sa kanila sa Linz, Salzburg, Munich, at Nuremberg. Sa Munich, natikman nila ang sikat na beer ng lungsod. Pagsapit ng Hunyo 2, 1887, dumating sila sa Geneva, Switzerland, at nanatili roon ng 15 araw. Sa Hunyo 19, kaarawan ni Rizal, ginunita nila ito sa isang salu-salo. Noong Hunyo 23, naghiwalay ng landas sina Rizal at Viola, bumalik si Viola sa Barcelona samantalang nagpatuloy si Rizal sa Italy. Sa huli, nagtungo si Rizal sa Roma at bumisita sa Vatican, kung saan labis siyang namangha sa ganda ng tanawin at arkitektura. Sa kabuuan ng paglalakbay, hindi lamang niya nakita ang kagandahan ng Europa kundi lalo rin niyang napalalim ang kanyang kaalaman sa agham, sining, at kultura, mga karanasang nagpatibay sa kanyang paninindigan at lalong naghanda sa kanyang pagbabalik sa Pilipinas upang ipagpatuloy ang kanyang adhikain para sa bayan.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        }, 
        
        {
            title: "Philippines (Agosto 1887)",
            subtitle: "Manila",
            text:"Insert later for",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },
       
        {
            title: "Philippines (Agosto 1887)",
            subtitle: "Calamba",
            text:"Insert later for Calamba",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },         

        {
            title: "Hong Kong (1888): Bumisita si Rizal sa Hong Kong at nakipagkita sa mga Pilipinong ekspatriyado",
            text:"Noong 1888, bumisita si Jose Rizal sa Hong Kong, kung saan nakipagkita siya sa mga Pilipinong ekspatriyado. Sa kanyang maikling pananatili, napalalim niya ang ugnayan sa kapwa makabayan at nagkaroon ng mas malawak na pag-unawa sa kalagayan ng mga Pilipino sa ibang bansa. Noong Pebrero 7, 1888, naglayag si José Rizal patungong Hong Kong sakay ng bapor na Zafiro, ngunit dahil sa hindi magandang pakiramdam at nakatagpo ng malakas na ulan, nagkaroon siya ng emergency stopover sa Amoy, Macau, kung saan napansin niyang marumi ang lungsod. Nang sumunod na araw, Pebrero 8, dumating siya sa mainland Hong Kong at nanatili sa Victoria Hotel, kung saan siya ay tinanggap ng mga kaibigang Pilipino. Noong Pebrero 18, bumisita si Rizal sa Macau kasama si Jose Ma. Basa sa pamamagitan ng ferry steamer na KiuKiang at nanatili sa bahay ni Don Juan Francisco Lecaros. Sa kanilang dalawang araw na pamamalagi, bumisita sila sa mga casino, simbahan, botanical garden, at nasaksihan ang isang Katolikong prusisyon bago bumalik sa Hong Kong noong Pebrero 20. Sa wakas, noong Pebrero 22, 1888, umalis si Rizal sa Hong Kong sakay ng American steamer na Oceanic, patungo sa Japan.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },   

        {
            title: "Hapon o Japan (1888): Bumisita si Rizal sa Hapon at nakipagkita sa mga opisyal ng Hapon",
            text:"Dumating si Rizal sa Yokohama at pansamantalang nanirahan sa Grand Hotel bago nagtungo sa Tokyo, kung saan siya tumuloy sa Tokyo Hotel. Kalaunan ay tinanggap niya ang alok na libreng tirahan at pagkain sa Spanish Legation. Habang nasa Japan, masigasig niyang pinag-aralan ang kultura ng mga Hapon, kabilang ang kanilang mga kaugalian, wika, teatro, at kalakalan. Sumulat siya sa kanyang kaibigang si Ferdinand Blumentritt upang ipahayag ang kanyang paghanga sa katapatan, paggalang, kalinisan, at kasipagan ng mga Hapon, bagamat ipinahayag din niya ang pagkadismaya sa paggamit ng mandrawn jinrikisha. Habang naninirahan sa Spanish Legation, nakilala niya si O-Sei-san, isang Haponesa na tumatak sa kanyang alaala. Sumulat din siya sa kanyang pamilya at inilahad ang kanyang pangitain na balang araw ay magkakaroon ng mas malapit na ugnayan ang Pilipinas at Japan. Sa kanyang paglalakbay sa Japan, si Rizal ay humanga sa kaayusan, disiplina, at kagandahang-asal ng mga Hapones. Nakipagkita rin siya sa mga opisyal ng Hapon, na nagbukas ng kanyang pananaw sa isang maunlad at maayos na bansang Asyano.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        }, 

        {
            title: "Estados Unidos o United States (1888): Bumisita si Rizal sa Estados Unidos at napagmasdan ang lipunang Amerikano",
            text:"Sa Estados Unidos, naranasan ni Rizal ang mabilis na pag-unlad ng lipunang Amerikano. Napagmasdan niya ang mga kabuhayan at industriya, ngunit napansin din niya ang hindi pagkakapantay-pantay, partikular sa diskriminasyon laban sa mga lahing may kulay.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        }, 

        {
            title: "Europa o Europe (1889-1891): Nagpatuloy si Rizal sa kanyang pagkakasangkot sa Kilusang Propaganda at sumulat ng mga artikulo at nobela",
            text:"Nagpatuloy si Rizal sa kanyang pakikipag-ugnay sa Kilusang Propaganda habang nasa Europa. Dito, isinulat niya ang El Filibusterismo at iba pang mga artikulo para sa La Solidaridad, pinalalim ang kanyang paninindigan para sa reporma at kalayaan ng Pilipinas.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        }, 
       
        {
            title: "Hong Kong (1891-1892): Nagtrabaho si Rizal bilang doktor at naging bahagi ng lokal na politika ng mga Pilipino",
            text:"Bumalik si Rizal sa Hong Kong kung saan siya nagtrabaho bilang isang doktor. Naging aktibo siya sa lokal na pamayanan ng mga Pilipino, na tumutulong sa kanilang mga suliranin at nagbibigay ng payo, na nagpatibay sa kanyang pagkatao bilang isang lider at tagapayo.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },
        
        {
            title: "Dapitan, Philippines (1892-1896): Si Rizal ay ipinatapon sa Dapitan ng mga awtoridad ng Espanya",
            text:"Ipinatapon si Rizal sa Dapitan ng mga awtoridad ng Espanya, ngunit hindi ito naging hadlang upang magpatuloy siya sa pagtuturo, pagsusulat, at paglilingkod sa komunidad. Sa Dapitan, nagpatayo siya ng mga paaralan, ospital, at proyekto para sa kabutihan ng mga residente, patuloy na isinusulong ang kaalaman at kabutihan para sa kanyang mga kababayan.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },  
        
        {
            title: "Pagbitay (1896)",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },  
        
        {
            title: "Manila (1896): Si Rizal ay naaresto, nilitis, at pinatay sa pamamagitan ng firing squad noong Disyembre 30, 1896",
            text:"Insert Text Later for Final part",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        }, 
        
        {
            title: "Timeline or Map (Change Name)",
            text:"Ang timeline na ito ay naglalarawan sa mga paglalakbay at karanasan ni Rizal na humubog sa kanyang buhay at mga isinulat.",
            layers: [
                { src: frbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: frmg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: frfg, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: frstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: 250,
                    offsetY: 285,
                }
            ]
        },         

    ];

    // Mouse movement listener
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Custom smooth scroll animation function
    const animateScroll = useCallback((targetScrollTop, duration = 800) => {
        const container = sectionsContainerRef.current;
        if (!container) {
            console.error('animateScroll: Container ref is null.');
            isAnimatingScrollRef.current = false; // Ensure flag is false if container is missing
            return;
        }

        if (isAnimatingScrollRef.current) {
            console.log('animateScroll: Animation already in progress, skipping new one.');
            return;
        }

        isAnimatingScrollRef.current = true; // Set flag to true
        const startScrollTop = container.scrollTop;
        const startTime = performance.now();

        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);

            container.scrollTop = startScrollTop + (targetScrollTop - startScrollTop) * easedProgress;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                isAnimatingScrollRef.current = false; // Reset flag
                container.scrollTop = targetScrollTop; // Ensure final position is exact
                console.log('Scroll animation finished. Final scroll top:', container.scrollTop);
            }
        };

        requestAnimationFrame(step);
    }, []); // No dependencies for this function

    // Function to scroll to a specific section by its index
    const scrollToSection = useCallback((index) => {
        if (sectionsContainerRef.current && index >= 0 && index < sections.length) {
            const targetSection = sectionsContainerRef.current.children[index];
            if (targetSection) {
                const targetOffsetTop = targetSection.offsetTop;
                console.log(`scrollToSection: Initiating scroll to section ${index} (target: ${targetOffsetTop})`);
                animateScroll(targetOffsetTop);
                // The activeSectionIndex will be updated by IntersectionObserver when scroll finishes.
                // Or you could set it immediately here if you prefer immediate dot feedback:
                // setActiveSectionIndex(index);
            } else {
                console.warn(`scrollToSection: Target section ${index} not found.`);
            }
        }
    }, [sections.length, animateScroll]); // Dependencies for useCallback: sections.length for bounds, animateScroll function

    // Parallax effect logic
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const applyParallax = () => {
            const scrollY = sectionsContainer.scrollTop;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const mouseOffsetX = (mousePos.x - viewportWidth / 2);
            const mouseOffsetY = (mousePos.y - viewportHeight / 2);

            sections.forEach((sectionData, sectionIndex) => {
                const sectionElement = sectionsContainer.children[sectionIndex];
                if (!sectionElement) return;

                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.offsetHeight; // Used in your preferred formula

                const sectionScrollProgress = (scrollY - sectionTop + viewportHeight) / (viewportHeight + sectionHeight);

                const layers = sectionElement.querySelectorAll('.parallax-layer');

                layers.forEach(layer => {
                    const speed = parseFloat(layer.dataset.speed);
                    const mouseSpeed = parseFloat(layer.dataset.mouseSpeed);

                    const initialOffsetX = parseFloat(layer.dataset.offsetX) || 0;
                    const initialOffsetY = parseFloat(layer.dataset.offsetY) || 0;

                    const scrollYTranslate = (sectionScrollProgress * speed * viewportHeight) - (speed * viewportHeight / 2);

                    const mouseTranslateX = mouseOffsetX * mouseSpeed;
                    const mouseTranslateY = mouseOffsetY * mouseSpeed;

                    layer.style.transform = `translate3d(${mouseTranslateX + initialOffsetX}px, ${scrollYTranslate + mouseTranslateY + initialOffsetY}px, 0)`;
                });
            });
        };

        sectionsContainer.addEventListener('scroll', applyParallax);
        window.addEventListener('mousemove', applyParallax);

        applyParallax(); // Initial call

        return () => {
            sectionsContainer.removeEventListener('scroll', applyParallax);
            window.removeEventListener('mousemove', applyParallax);
        };
    }, [sections, mousePos]);

    // Wheel event listener for custom smooth snapping (now handles throttle and direct scroll)
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const SCROLL_THROTTLE_DELAY = 900; // Milliseconds to wait before allowing another wheel scroll

        const handleWheel = (event) => {
            event.preventDefault(); // Crucial: Prevent default browser scroll

            const currentTime = performance.now();
            // This throttle prevents rapid-fire wheel events from causing multiple animations
            if (isAnimatingScrollRef.current || (currentTime - sectionsContainerRef.current.__lastWheelScrollTime < SCROLL_THROTTLE_DELAY)) {
                console.log('handleWheel: Throttled or animation in progress, ignoring wheel event.');
                return;
            }

            // Store the last time a valid wheel scroll was processed
            sectionsContainerRef.current.__lastWheelScrollTime = currentTime;

            let targetIndex = activeSectionIndex;
            if (event.deltaY > 0) { // Scrolling down
                targetIndex = Math.min(sections.length - 1, activeSectionIndex + 1);
            } else { // Scrolling up
                targetIndex = Math.max(0, activeSectionIndex - 1);
            }

            if (targetIndex !== activeSectionIndex) {
                console.log(`handleWheel: Scrolling from ${activeSectionIndex} to ${targetIndex}`);
                // Update active index immediately for dot feedback
                setActiveSectionIndex(targetIndex);
                // Directly trigger the scroll
                scrollToSection(targetIndex);
            } else {
                console.log(`handleWheel: Staying on section ${activeSectionIndex}.`);
            }
        };

        // Initialize lastWheelScrollTime on the ref object itself
        sectionsContainerRef.current.__lastWheelScrollTime = 0; // Or better, put it in a separate ref like lastScrollTimeRef

        sectionsContainer.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            sectionsContainer.removeEventListener('wheel', handleWheel);
        };
    }, [activeSectionIndex, sections.length, scrollToSection, isAnimatingScrollRef]); // Added isAnimatingScrollRef to dependencies

    // IntersectionObserver to update activeSectionIndex on manual drag scroll
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const observerOptions = {
            root: sectionsContainer,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const index = parseInt(id.replace('section-', ''));
                    // Only update if not currently animating (programmatic scroll)
                    // This allows manual drags to update the active dot.
                    if (!isAnimatingScrollRef.current && index !== activeSectionIndex) {
                        setActiveSectionIndex(index);
                        console.log('IntersectionObserver: Updated activeSectionIndex to:', index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((_, index) => {
            const sectionElement = sectionsContainer.children[index];
            if (sectionElement) {
                observer.observe(sectionElement);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sections, activeSectionIndex, isAnimatingScrollRef]); // Added isAnimatingScrollRef to dependencies

    // Handle navigation dot clicks
    const handleDotClick = useCallback((index) => {
        if (!isAnimatingScrollRef.current) { // Prevent clicks during an ongoing animation
            console.log(`Dot click: Scrolling to section ${index}`);
            setActiveSectionIndex(index); // Update state for dot to become active
            scrollToSection(index); // Directly initiate the scroll
        } else {
            console.log('Dot click ignored: Animation in progress.');
        }
    }, [isAnimatingScrollRef, scrollToSection]); // Dependencies: isAnimatingScrollRef and scrollToSection

    return (
        <>
            {/* Navigation Dots */}
            <div className="nav-dots">
                {sections.map((_, index) => (
                    <div
                        key={index}
                        className={`nav-dot ${activeSectionIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to section ${index + 1}`}
                    ></div>
                ))}
            </div>

            {/* Travelogue Sections Container */}
            <div
                ref={sectionsContainerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    overflowY: 'scroll',
                    // scrollBehavior: 'smooth', // Handled by JS now
                    // scrollSnapType: 'y mandatory', // Handled by JS now
                    WebkitOverflowScrolling: 'touch' // For smoother scrolling on iOS devices
                }}
            >
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        id={`section-${index}`}
                        title={section.title}
                        subtitle={section.subtitle}
                        text={section.text}
                        layers={section.layers}
                    />
                ))}
            </div>
        </>
    );
};

export default App;