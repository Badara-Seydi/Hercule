//Etape 1.
const perso = {
    personnage: {
        name: "Hercule",
        job: "Demi-dieu",
        age: 35,
        department: 75,
        inRelationship: true,
        arm: 60.5,
    },
    herculeFriends: ["Jupiter", "Junon", "Alcmène", "Déjanire"],

    creerTitre: () => {

        var title = document.createElement('h1');
        title.classList.add('banner__title');
        var titre = document.getElementById('header-banner');
        title.textContent = ("Vous consultez le profil d'Hercule.");
        titre.appendChild(title);

    },

    lanceurDeFonction: () => {
        base.fillProfil(perso.personnage);
        base.printFriends(perso.herculeFriends);
        base.setBestFriend(perso.herculeFriends[0]);
        perso.creerTitre();
        perso.evenement();
        perso.disponibilite();
        perso.displayPseudo();
        perso.menuStyle();
        perso.Submit();
        perso.pourcentage();
        perso.listeEvent();
    },

    evenement: () => {
        for (var repeat = 0; repeat < 12; repeat++) {
            base.displayWork(repeat);
        };
    },

    disponibilite: () => {
        if (base.getHour() > 08 && base.getHour() < 20) {
            var disponible = document.getElementById('availability');
            disponible.textContent = 'Disponible';

        } else {
            var disponible = document.getElementById('availability');
            disponible.textContent = 'Non disponible , revenez dés 8h'
            disponible.classList.add('off')
        };
    },
    pseudo: (name, department) => {

        return name + " du " + department

    },
    displayPseudo: () => {
        var phrase = document.getElementById('profil-name');
        phrase.textContent = perso.pseudo(perso.personnage.name, perso.personnage.department);
    },
    menuStyle: () => {
        let target = document.getElementById('header-banner');
        target.addEventListener('click', function () {

            if (target.classList.contains('banner--open')) { // le .contains vérifie si la valeur est bien contenue par classList
                target.classList.remove('banner--open');

            } else {
                target.classList.add('banner--open');
            }

        });
    },
    Submit: () => {
        var form = document.getElementById('contact');

        function formulaire(event) {

            event.preventDefault();
            alert('Hercule ne souhaite pas être dérangé.')
        };

        form.addEventListener('submit', formulaire);
    },

    pourcentage: () => {

        const herculeBuzz = document.getElementById("#trends-hercule");
        const cesarBuzz = document.getElementById("trends-cesar");

        const totalVote = base.vote.hercule + base.vote.cesar;

        function perCent(a, b) {
            return (a / b) * 100;

        };

        const scoreHercule = perCent(base.vote.hercule, totalVote);

        const scoreCesar = perCent(base.vote.cesar, totalVote);

        HerculeRound = Math.round(scoreHercule);

        CesarRound = Math.round(scoreCesar);

        const cesarPercent = document.getElementById('trends-cesar');
        const herculePercent = document.getElementById('trends-hercule');
        cesarPercent.textContent = CesarRound + " %";
        herculePercent.textContent = HerculeRound + " %";

        const herculeBar = document.getElementsByClassName('people__bar');;
        const cesarBar = document.getElementsByClassName('people--bar');

        cesarPercent.style.width = "31%";
        herculePercent.style.width = "69%";
        cesarPercent.style.backgroundColor = "orange";
        herculePercent.style.backgroundColor = "orange";

    },
    listeEvent : ()=> {
        const activities = document.getElementById('activities');
        const ul = activities.querySelector('.tasks');
        activities.classList.remove('hidden');
        for (const evenement of base.activities){
            if (evenement.finished === true && evenement.author ==='Hercule')
            {   
                const activity = document.createElement('li');
                activity.textContent = evenement.title;
                ul.appendChild(activity);
            
        };
        
    
        }

    }
}




perso.lanceurDeFonction();

