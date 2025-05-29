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
import barbg from './assets/barbg.png';
import barmg1 from './assets/barmg1.png';
import barmg2 from './assets/barmg2.png';
import barfg from './assets/barfg.png';
import barstick from './assets/barstick.png';
import mdrbg from './assets/mdrbg.png';
import mdrmg1 from './assets/mdrmg1.png';
import mdrmg2 from './assets/mdrmg2.png';
import mdrmg3 from './assets/mdrmg3.png';
import mdrstick1 from './assets/mdrstick1.png';
import mdrstick2 from './assets/mdrstick2.png';
import parbg from './assets/parbg.png'; 
import parmg1 from './assets/parmg1.png'; 
import parmg2 from './assets/parmg2.png'; 
import parmg3 from './assets/parmg3.png'; 
import parmg4 from './assets/parmg4.png'; 
import parfg1 from './assets/parfg1.png'; 
import parstick1 from './assets/parstick1.png'; 
import parstick2 from './assets/parstick2.png'; 



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
        //barcelona
        {
            layers: [
                { src: barbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: barmg1, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: barmg2, speed: -0.6, mouseSpeed: 0.01, objectFit: 'cover', position: 'bottom center', z: 10, size: '100% auto' },
                { src: barfg, speed: -0.6, mouseSpeed: 0.03, objectFit: 'cover', position: 'bottom center', z: 11, size: '100% auto' },
                {
                    src: barstick,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: -350,
                    offsetY: 175,
                }
            ]
        },
        //madrid
        {
            layers: [
                { src: mdrbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: mdrmg1, speed: -0.6, mouseSpeed: -0.06, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: mdrmg2, speed: -0.6, mouseSpeed: -0.04, objectFit: 'cover', position: 'bottom center', z: 1, size: '100% auto' },
                { src: mdrmg3, speed: -0.6, mouseSpeed: 0.04, objectFit: 'cover', position: 'bottom center', z: 2, size: '100% auto' },
                {
                    src: mdrstick1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: true,
                    size: '85% auto',
                    brightness: 1.0,
                    offsetX: -350,
                    offsetY: 325,
                },
                {
                    src: mdrstick2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: 350,
                    offsetY: 325,
                }
            ]
        },
        //paris
        {
            layers: [
                { src: parbg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'bottom center', z: -5, size: '200% auto'},
                { src: parmg1, speed: -0.6, mouseSpeed: -0.06, objectFit: 'cover', position: 'center', z: -4, size: '100% auto' },
                { src: parmg2, speed: -0.6, mouseSpeed: 0.05, objectFit: 'cover', position: 'bottom center', z: 1, size: '100% auto' },
                { src: parmg3, speed: -0.6, mouseSpeed: -0.03, objectFit: 'cover', position: 'bottom center', z: 2, size: '100% auto' },
                { src: parmg4, speed: -0.6, mouseSpeed: 0.02, objectFit: 'cover', position: 'bottom center', z: 2, size: '100% auto' },
                { src: parfg1, speed: -0.6, mouseSpeed: 0.03, objectFit: 'cover', position: 'bottom center', z: 2, size: '100% auto' },
                {
                    src: parstick1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'left',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: -325,
                    offsetY: 315,
                },
                {
                    src: parstick2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'right',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0,
                    offsetX: 350,
                    offsetY: 225,
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
                        text={section.text}
                        layers={section.layers}
                    />
                ))}
            </div>
        </>
    );
};

export default App;