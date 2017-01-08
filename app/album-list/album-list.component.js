
angular.module("albumList").component('albumList', {
  templateUrl: 'album-list/album-list.template.html',
  controller: ['$http', function albumListController($http) {
        var self = this;
        //self.orderSel = "year";
        $http.get('albums/albums.json').then(function (response) {
            self.albums = response.data;
        });
       }
      ]



    //this adds data to an instance of controller rather than to a scope;
    //this is what's known as an isolate scope
    //put the data in a JSON file
    //don't do this:
  /*  controller: function albumListController() {
        this.albums = [
        { artist: "Upsilon Acrux", title: "Radian Futura", year: 2009, label: "Cuneiform", imgUrl: "images/upsilon_acruxRF.jpg", albumId: "radian-futura" },
        { artist: "Secret Chiefs 3", title: "Book of Horizons", year: 2004, label: "Web of Mimicry", imgUrl: "images/secret_chiefs_3BH.jpg", albumId: "book-of-horizons" },
        { artist: "Kayo Dot", title: "Choirs of the Eye", year: 2003, label: "Tzadik", imgUrl: "images/kayo_dotCE.jpg", albumId: "choirs-of-the-eye" },
        { artist: "Sleepytime Gorilla Museum", title: "In Glorious Times", year: 2007, label: "The End", imgUrl: "images/sleepytime_gorilla_museumIGT.jpg", albumId: "in-glorious-times" },
        { artist: "Magma", title: "Kobaia", year: 1970, label: "Phillips", imgUrl: "images/magmaK.jpg", albumId: "kobaia" },
        { artist: "Hammers of Misfortune", title: "August Engine", year: 2003, label: "Cruz del Sur", imgUrl: "images/hammers_of_misfortuneAE.jpg", albumId: "august-engine" },
        { artist: "Comus", title: "First Utterance", year: 1971, label: "Dawn", imgUrl: "images/comusFU.jpg", albumId: "first-utterance"},
        { artist: "Judas Priest", title: "Sad Wings of Destiny", year: 1976, label: "Gull", imgUrl: "images/judas_priestSWD.jpg", albumId: "sad-wings-of-destiny" },
        { artist: "Weakling", title: "Dead as Dreams", year: 2000, label: "Tumult", imgUrl: "images/weaklingDD.jpg", albumId: "dead-as-dreams" },
        { artist: "Iron Maiden", title: "Killers", year: 1981, label: "Harvest", imgUrl: "images/iron_maidenK.jpg", albumId: "killers" },
        { artist: "Death", title: "Individual Thought Patterns", year: 1993, label: "Relativity", imgUrl: "images/deathITP.jpg", albumId: "individual-thought-patterns" },
        { artist: "Ulver", title: "Nattens Madrigal", year: 1997, label: "Century Black", imgUrl: "images/ulverNM.jpg", albumId: "nattens-madrigal" },
        { artist: "Gorguts", title: "Obscura", year: 1998, label: "Olympic", imgUrl: "images/gorgutsO.jpg", albumId: "obscura"  },
        { artist: "Genesis", title: "Nursery Cryme", year: 1971, label: "Charisma", imgUrl: "images/genesisNC.jpeg", albumId: "nursery-cryme" }
        ];
    }*/
});

//document.getElementById("testMe").innerHTML = "angular";
