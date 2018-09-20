// Pokem Ipsum, by Lily Chen (hello@pokemipsum.com): http://pokemipsum.com/

var main = function() {

$('#pokem-ipsum-generator').click(function() {

$('#pokem-ipsum-container').empty();

// POKEM IPSUM CONTENT
// Sentence starters
var capital = ["Ash", "Brock", "Misty", "Pikachu", "Pika-pi", "Meowth, that's right", "Gotta catch 'em all", "We're blasting off again", "Team Rocket", "V for victory", "Lorem ipsum dolor sit amet", "Consectetur adipisicing elit", "Sed do eiusmod tempor incididunt", "Ut labore et dolore magna aliqua", "Ut enim ad minim veniam", "Quis nostrud exercitation ullamco laboris nisi", "Ut aliquip ex ea commodo consequat", "Duis aute irure dolor in reprehenderit in voluptate", "Velit esse cillum dolore eu fugiat nulla pariatur", "Excepteur sint occaecat cupidatat non proident", "Sunt in culpa", "Qui officia deserunt mollit", "Anim id est laborum", "Pokemon", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise"];

// Sentence arrays
var latin = ["lorem ipsum dolor sit amet", "consectetur adipisicing elit", "sed do eiusmod tempor", "incididunt ut labore", "et dolore magna aliqua", "ut enim ad minim veniam", "quis nostrud exercitation", "ullamco laboris nisi", "ut aliquip", "ex ea commodo consequat", "duis aute irure dolor in reprehenderit", "in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "excepteur sint occaecat cupidatat non proident", "sunt in culpa qui officia", "deserunt mollit", "anim id est laborum"];

var badges = ["Boulder Badge", "Cascade Badge", "Thunder Badge", "Rainbow Badge", "Soul Badge", "Marsh Badge", "Volcano Badge", "Earth Badge", "Zephyr Badge", "Hive Badge", "Plain Badge", "Fog Badge", "Storm Badge", "Mineral Badge", "Glacier Badge", "Rising Badge"];
var items = ["Potion", "Super Potion", "Pokeball", "Great Ball", "Ultra Ball", "bicycle", "fishing rod", "Pokedex", "Poke Flute", "Running Shoes", "Town Map", "Escape Rope", "gym", "Badge", "Hidden Machine", "Technical Machine", "Soda Pop", "Calcium", "Rare Candy", "Helix Fossil", "Dome Fossil", "Silph Scope", "Mystery Gift", "MysteryBerry", "Mint Berry", "Burnt Berry", "Ice Berry"];
var lyrics = ["I wanna be the very best", "like no one ever was", "to catch them is my real test", "to train them is my cause", "searching far and wide", "the power that's inside", "Pokemon, it's you and me", "I know it's my destiny", "oh, you're my best friend", "in a world we must defend", "our courage will pull us through", "you teach me and I'll teach you", "Pokemon", "I'm on the road to Viridian City", "what kind of Pokemon are you"]
var moves = ["Slash", "Sand-Attack", "Dig", "Vine Whip", "Leech Seed", "Water Gun", "Razor Leaf", "Rage", "Dragon Rage", "Thundershock", "Blizzard", "Flamethrower", "Swift", "Poison Sting", "Harden", "Earthquake", "Sonic Boom", "Leech Life", "Growl", "Tail Whip", "Scratch", "Mirror Move", "Teleport", "Wing Attack", "Body Slam", "Strength", "Bubble", "Hydro Pump", "Splash"];
var movies = ["Mewtwo Strikes Back", "The Power Of One", "Pokemon The Movie 2000", "Pokemon 4Ever", "Pokemon Heroes"]
var people = ["Ash", "Ash Ketchum", "Ash's mother", "Brock", "Misty", "Officer Jenny", "Nurse Joy", "Gary", "Bill", "Pokemon Fan Club Chairman", "grumpy old man who needs coffee", "Professor Oak", "Professor Elm", "Giovanni", "Team Rocket", "Pikachu", "Meowth", "Jesse", "James", "Elite Four", "Satoshi Tajiri", "Junichi Masuda", "Pokemon Master"];
var pokemon = ["Pokemon", "Missingno", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Rotom", "Rotom", "Rotom", "Rotom", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Ciccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Meloetta", "Genesect"];
var regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola"];
var sayings = ["gotta catch 'em all", "we're blasting off again", "prepare for trouble", "make it double", "to protect the world from devastation", "to denounce the evils of truth and love", "to extend our reach to the stars above", "blast off at the speed of light", "surrender now or prepare to fight", "Magikarp used Splash", "but nothing happened", "I like shorts", "you're not wearing shorts", "they're comfy and easy to wear", "Youngster wants to fight", "the enemy Pokemon fainted", "a wild Pokemon appeared"];
var towns = ["Glitch City", "Pallet Town", "Viridian City", "Pewter City", "Cerulean City", "Vermilion City", "S.S. Anne", "Lavender Town", "Celadon City", "Celadon Department Store", "Fuchsia City", ];
var types = ["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Steel", "Fire","Fairy"];
var versions = ["Red", "Blue", "Gold", "Silver", "Crystal", "Yellow", "Fire Red", "Leaf Green", "Ruby", "Sapphire","Emerald","Diamond","Pearl","Platinum","Heart Gold","Soul Siver","Black", "White", "Black 2", "White 2", "X", "Y", "Omega Ruby", "Alpha Sapphire", "Sun", "Moon", "Ultra Sun", "Ultra Moon"]

// Combines the sentence arrays
var combinedTerms = latin.concat(badges, items, lyrics, moves, movies, people, pokemon, regions, sayings, towns, types, versions);
var starter = capital.concat(badges, moves, movies, regions, towns, types, versions);

// RANDOM GENERATION FORMULAE
// Generates a capitalized sentence starter
var randomisedSentenceStarter = function() {
	return starter[Math.floor(Math.random() * starter.length)]
};

// Generates a random sentence term
var randomisedSentenceContent = function() {
	return combinedTerms[Math.floor(Math.random() * combinedTerms.length)]
};

// Generates a sentence starting with "Pokem ipsum"
var pokemIpsumSentenceGeneration = function() {
	// Generates the "Pokem ipsum" introduction
	$('#pokem-ipsum-container').append("Pokem ipsum dolor sit amet ");
	// Generates the content
	for(i = 0; i < 5; i++) {
		$('#pokem-ipsum-container').append(randomisedSentenceContent() + " ")
	};
	// Generates the full stop
	$('#pokem-ipsum-container').append(randomisedSentenceContent() + ". ")
};

// Generates a normal sentence
var normalSentenceGeneration = function() {
	// Generates the capitalized starter
	$('#pokem-ipsum-container').append(randomisedSentenceStarter() + " ");
	// Generates the content
	for(i = 0; i < 5; i++) {
		$('#pokem-ipsum-container').append(randomisedSentenceContent() + " ")
	};
	// Generates the full stop
	$('#pokem-ipsum-container').append(randomisedSentenceContent() + ". ")
};

// Generates a paragraph starting with "Pokem ipsum"
var openingParagraph = function() {
	pokemIpsumSentenceGeneration();
	for(x = 0; x < 4; x++) {
		normalSentenceGeneration();
	};
	$('#pokem-ipsum-container').append('<br/><br/>');
};

// Generates the subsequent paragraphs
var normalParagraph = function() {
	for(y = 0; y < 5; y++) {
		normalSentenceGeneration();
	};
	$('#pokem-ipsum-container').append('<br/><br/>');
};

// POKEM IPSUM OUTPUT
openingParagraph();
normalParagraph();
normalParagraph();
normalParagraph();
normalParagraph();

});

};

$(document).ready(main);