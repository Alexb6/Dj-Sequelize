const { v4: uuidv4 } = require('uuid');
const now = new Date();
const slugify = require("slugify");

module.exports = [
	{
		id: uuidv4(),
		url_name: "https://www.davidlasry.com",
		name: slugify("David Lasry", { lower: true }),
		biography: `Originaire de Paris, David Lasry, est un jeune DJ Producteur/Remixeur. Passionné de musique. Il fait ses débuts dans les clubs parisiens, du Queenie au Cab en passant par le Mixclub. C’est grâce à son influence musicale qu’il a su imposer son style et son univers musical.

		Perfectionniste et passionné, il a su s’imposer en mixant avec des artistes reconnus internationalement comme Michael Canitrot, Tristan Garner, Nikki Belluci, Tony Romera, et dernièrement avec Albin Myer pour l’after Officiel de la Techno Parade Radio FG au Queen Club.
		Il devient rapidement un acteur de la scène « Electro/House » française grâce à son originalité et son style avant-gardiste.`,
		soundcloud: "https://soundcloud.com/david_lasry",
		facebook: "https://fr-fr.facebook.com/IamDavidLasry",
		instagram: null,
		spotify: null,
		beatport: "https://www.beatport.com/artist/david-lasry/450968",
		mixcloud: null,
		youtube: "https://www.youtube.com/watch?v=lBBet8qKcHo",
		club_id: "387416e1-ce3b-4944-85a1-013454a70db7",
		created_at: now,
		updated_at: now
	},
	{
		id: uuidv4(),
		url_name: "https://www.shankmane.net",
		name: slugify("SKANK MANE", { lower: true }),
		biography: "No biography yet",
		soundcloud: "https://soundcloud.com/djskank666",
		facebook: null,
		instagram: "https://www.instagram.com/skankmane86",
		spotify: "https://open.spotify.com/artist/0JMXcrvjKBEQlpIeJFYF69",
		beatport: null,
		mixcloud: null,
		youtube: "https://www.youtube.com/watch?v=G-I6kNe6trY",
		club_id: "47a0e072-1fd8-4429-9bd5-1c26f76f127a",
		created_at: now,
		updated_at: now
	},
	{
		id: uuidv4(),
		url_name: "https://www.sebastienleger.fr",
		name: slugify("Sébastien Léger", { lower: true }),
		biography: `Sébastien commence à apprendre la musique dès l'âge de 5 ans. Il est plus tard influencé par des artistes house tels que Daft Punk ou DJ Sneak. C'est en 1998 qu'il sort son premier EP avec Nicolas De Floriant sous le nom de Deaf'n'Dumb Crew. Il compose par la suite pour les labels Black Jack et Riviera, ce qui lui fait rencontrer beaucoup d'artistes House aux États-Unis.
		
		Son premier album solo 'Atomic Pop' sort en 1999. Il est aujourd'hui un artiste très demandé pour ses remixes par de grands compositeurs de musique électronique comme Eric Prydz ou Armand Van Helden ou bien encore Justin Timberlake. Il a dernièrement sorti, avec l'aide de Chris Lake, le titre à succès Aqualight. Aujourd'hui il a fondé son propre label 'Mistakes Music' sur lequel il développe sa propre musique et signe ses titres.`,
		soundcloud: "https://soundcloud.com/sebastienleger",
		facebook: "https://www.facebook.com/sebastienleger",
		instagram: "https://www.instagram.com/sebastien_leger",
		spotify: null,
		beatport: "https://www.beatport.com/artist/sebastien-leger/4618",
		mixcloud: null,
		youtube: "https://www.youtube.com/c/SebastienLeger",
		club_id: "387416e1-ce3b-4944-85a1-013454a70db7",
		created_at: now,
		updated_at: now
	},
	{
		id: uuidv4(),
		url_name: "https://www.madyface.fr",
		name: slugify("Dj Madyface", { lower: true }),
		biography: `Dj Madyface excelle à la fois en tant que DJ et VJ.
		En intégrant l'organisation Sound da Sound, quelques portes lui ont été ouvertes afin de mixer en discothèque.
		
		Il fut un grand passage dans deux grandes webradio « ZOUKSTATION.COM », « TROPICOA.COM », « SOUND-ISLAND.COM » et plus récemment sur "TROPIQUES FM" pour gagner de l'expérience dans ce milieu, et donner finalement naissance à son propre groupe nommé "BlackStation" qui a duré 2 ans.
		
		Il décide également de faire partager ses mix en les mettant en téléchargement libre sur internet notamment sur les sites Facebook, Davibes, Afromontreal, et essentiellement SoundCloud et Mixcloud.`,
		soundcloud: "https://soundcloud.com/djmadyface",
		facebook: "https://www.facebook.com/DeejayMadyface",
		instagram: "https://www.instagram.com/dj_madyface",
		spotify: null,
		beatport: null,
		mixcloud: "https://www.mixcloud.com/djmadyface/",
		youtube: "https://www.youtube.com/channel/UCmB5i5q0bJFH7G8QT63xLuA",
		club_id: "72731e82-04b9-455f-93cc-f2db664e6254",
		created_at: now,
		updated_at: now
	},
	{
		id: uuidv4(),
		url_name: "https://www.davidguetta.com",
		name: slugify("David Guetta", { lower: true }),
		biography: `Universally accredited with being one of the first DJs to open up the world of electronic music to global chart audiences, transforming the sound of radio and with it, the musical tastes of millions of listeners across the world in the process, David Guetta has established himself as a true, modern day dance icon.

		After first making his presence most notably felt in the US with his production work on the Black Eyed Peas‟ „I Gotta Feeling‟ in 2009, a track that has since gone on to record over 8.3 million sales and establish itself as the biggest selling download in U.S. history, Guetta effectively laid the foundations for what is now a burgeoning, worldwide dance music scene.`,
		soundcloud: "https://soundcloud.com/davidguetta",
		facebook: "https://www.facebook.com/DavidGuetta",
		instagram: "https://www.instagram.com/davidguetta",
		spotify: null,
		beatport: null,
		mixcloud: null,
		youtube: "https://www.youtube.com/davidguetta",
		club_id: "931c88c4-83f1-45fe-946b-33f6bcaf800f",
		created_at: now,
		updated_at: now
	},
	{
		id: uuidv4(),
		url_name: "http://www.joakim.tv",
		name: slugify("Joakim Bouaziz", { lower: true }),
		biography: `Son label Tigersushi est devenu depuis sa création en 2000 une référence sur le plan de l'exigence musicale avec les compilations More GDM, So Young But So Cold, Kill The DJ, Dirty Space Disco, et les artistes Principles of Geometry, Poni Hoax, Panico, Guillaume Teyssier, Krikor, DyE...

		L'univers musical de Joakim englobe aussi bien l'Indie Rock que le Disco le plus obscur, le Heavy Metal, la musique africaine, l'Acid Techno, la House de Chicago ou même la musique classique que Joakim a pratiqué de 6 à 22 ans en suivant une formation de piano au conservatoire de Versailles. Collectionneur de disque invétéré, Joakim a une approche amoureuse et encyclopédique de la musique, qui se transmet dans ses DJ sets éclectiques et dans sa musique syncrétique mêlant éléments synthétiques et organiques, instruments traditionnels, machines analogiques et expérimentations numériques.`,
		soundcloud: "https://soundcloud.com/joakimbouaziz",
		facebook: "https://www.facebook.com/joakimbouaziz",
		instagram: "https://www.instagram.com/joakim_bouaziz",
		spotify: null,
		beatport: null,
		mixcloud: null,
		youtube: "https://www.youtube.com/c/joakimbouaziz",
		club_id: "931c88c4-83f1-45fe-946b-33f6bcaf800f",
		created_at: now,
		updated_at: now
	},
	{
		id: uuidv4(),
		url_name: "https://zimmermusic.com",
		name: slugify("Zimmer", { lower: true }),
		biography: `Zimmer a grandi entre Annecy et la Californie (Los Angeles et Palo Alto). Il déménage en 2010 à Paris pour suivre des études de designer. Il est repéré début 2011 par Moullinex, qui signe son premier single ‘Cruisin’ sur Discotexas. Suivra à l’automne un premier EP de 4 titres, "Horizontal Disco EP". Zimmer fait ses premiers pas sur la scène parisienne, mixant fréquemment dans des clubs comme Chez Moune, le Social Club et la Machine. Il déménage également à Berlin à cette période.

		Début 2012, il s’installe à Guadalajara (Mexique) pendant 6 mois. À son retour à Paris, il commence une résidence mensuelle au Wanderlust, avec les soirées Nouveau Disco.`,
		soundcloud: "https://soundcloud.com/zimmermusic",
		facebook: "https://www.facebook.com/zimmermusic",
		instagram: "https://www.instagram.com/zimmermusic",
		spotify: null,
		beatport: null,
		mixcloud: null,
		youtube: "https://www.youtube.com/c/Zimmermusic",
		club_id: "9d8544d0-f1cd-4ec4-a120-d467d6ca7961",
		created_at: now,
		updated_at: now
	},
];