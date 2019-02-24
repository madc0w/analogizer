defaults = {
	"domain-size" : {
		a1 : 12,
		b1 : 22,
		a2 : 4,
	},
	"domain-distance" : {
		a1 : 4,
		b1 : 2,
		a2 : 9,
	},
	"domain-time" : {
		a1 : 1,
		b1 : 12,
		a2 : 8,
	}
};

conversions = {
	"domain-size" : {
		"billion light-years" : 9460730472580800.0e+9,
		"million light-years" : 9460730472580800.0e+6,
		"light-years" : 9460730472580800.0,
		"kilometers" : 1e+3,
		"meters" : 1,
		"centimeters" : 1e-2,
		"millimeters" : 1e-3,
		"microns" : 1e-6,
		"nanometers" : 1e-9,
		"angstroms" : 1e-10
	},

	"domain-distance" : {
		"billion light-years" : 9460730472580800.0e+9,
		"million light-years" : 9460730472580800.0e+6,
		"light-years" : 9460730472580800.0,
		"kilometers" : 1e+3,
		"meters" : 1,
		"centimeters" : 1e-2,
		"microns" : 1e-6,
		"nanometers" : 1e-9,
		"angstroms" : 1e-10
	},

	"domain-time" : {
		"billion years" : 3.1536e+16,
		"million years" : 3.1536e+13,
		"thousand years" : 3.1536e+10,
		"years" : 3.1536e+7,
		"days" : 86400,
		"hours" : 3600,
		"minutes" : 60,
		"seconds" : 1,
		"milliseconds" : 1e-3,
	}
};

descriptors = {
	"domain-size" : "the size of",
	"domain-distance" : null,
	"domain-time" : null,
};

// data must occur in descending order of measure
data = {
	"domain-size" : [
		{
			description : "Donald Trump's ego",
			measure : 1e+30,
			alternateUnit : "billion light-years",
			source : "https://www.youtube.com/watch?v=1R42mFx3_ss",
			longDesc : "Until recently, scientists believed that the universe was the largest thing in existence.  Recently, thanks to the huge genius of Mr. Trump, we understand things more bigly.",
			imageUrl : "images/Donald-Trump-1.jpg",
			include : [ "a1" ]
		},
		{
			description : "the visible universe",
			measure : 8.8e+26,
			alternateUnit : "billion light-years",
			source : "http://en.wikipedia.org/wiki/Observable_universe",
			longDesc : "The age of the Universe is about 13.7 billion years, but due to the expansion of space we are now observing objects that are now considerably farther away than a static 13.7 billion light-years distance.  The visible universe is thus a sphere with a measure of about 28 billion parsecs (about 93 billion light-years).",
			imageUrl : "images/universe.gif",
			include : [ "a1", "a2", "b1" ]
		},
		{
			description : "the Local Supercluster",
			measure : 1e+24,
			alternateUnit : "million light-years",
			source : "http://en.wikipedia.org/wiki/Virgo_Supercluster",
			longDesc : "Superclusters are large groups of smaller galaxy groups and clusters and are among the largest structures of the cosmos.  The Local Supercluster (also known as the  Virgo Supercluster) is the irregular supercluster that contains the Local Group, which in turn contains the Milky Way, our own galaxy.  At least 100 galaxy groups and clusters are located within its measure of 33 megaparsecs (110 million light-years). It is one of millions of superclusters in the observable Universe.",
			imageUrl : "images/virgocls.gif",
			include : [ "a1", "a2" ]
		},
		{
			description : "the Local Group",
			measure : 9.46e+22,
			alternateUnit : "million light-years",
			source : "http://en.wikipedia.org/wiki/Local_Group",
			longDesc : "The Local Group is the group of galaxies that includes our galaxy, the Milky Way. The group comprises about 30 galaxies (including dwarf galaxies), with its gravitational center located somewhere between the Milky Way and the Andromeda Galaxy.",
			imageUrl : "images/Local_Group.JPG",
			include : [ "a1", "a2" ]
		},
		{
			description : "the Milky Way Galaxy",
			measure : 9.5e+20,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Milky_Way",
			longDesc : "The Milky Way is our own galaxy, in which reside some 200 to 400 billion stars, including our sun.  It is one of billions of galaxies in the observable universe.",
			imageUrl : "images/Milky_Way_Galaxy.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "the Orion Nebula",
			measure : 2.27e+17,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Orion_Nebula",
			longDesc : "The Orion Nebula is one of the brightest nebulae, and is visible to the naked eye in the night sky.  It is located at a distance of about 1,344 light-years from Earth and is the closest region of massive star formation to Earth.",
			imageUrl : "images/orion-nebula.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the Oort Cloud",
			measure : 1.5e+16,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Oort_cloud",
			longDesc : "The Oort cloud is a spherical cloud of comets obriting the Sun at a distance of nearly one light-year.  This distance places the cloud at nearly a quarter of the distance to Proxima Centauri, the nearest star to the Sun.",
			imageUrl : "images/what-is-the-oort-cloud-sun.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the Solar System",
			measure : 4.5e+12,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/Solar_System",
			longDesc : "The Solar System consists of the Sun and those celestial objects bound to it by gravity, which include our planet Earth.  The size of the Solar System depends on how its boundaries are defined.  The measure given here is the size of the orbit of farthest planet from the Sun, Neptune (with all apologies to Pluto).  It takes light from the Sun about 4.2 hours to reach Neptune.",
			imageUrl : "images/outer_solar_system.gif",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "Canis Majoris",
			measure : 2.7e+12,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/VY_Canis_Majoris",
			longDesc : "VY Canis Majoris is a red hypergiant star located in the constellation Canis Major. This is the largest known star, having a measure some 2000 larger than that of the Sun, and it is also one of the brightest known stars. It is located about 4900 light years away from Earth.",
			imageUrl : "images/800px-Sun_and_VY_Canis_Majoris.svg.png",
			include : [ "a1", "a2" ]
		},
		{
			description : "Earth's orbit",
			measure : 3e+11,
			alternateUnit : "kilometers",
			source : "http://hypertextbook.com/facts/2004/CherisseBarnes.shtml",
			longDesc : "Despite appearances to the contrary, the Sun does not actually <a href=\"http://en.wikipedia.org/wiki/Modern_geocentrism#Biblical_references\">orbit the Earth</a>.  It takes our planet one year (365.242 days) to complete one orbit around the Sun.  The orbital speed of the Earth around the Sun averages about 30 km/s (108,000 km/h).<br/>"
				+ "This famous image is called the Pale Blue Dot.  It is a photograph of planet Earth taken in 1990 by Voyager 1 from a distance of over 6 billion kilometers, showing it against the vastness of space.",
			imageUrl : "images/Pale_Blue_Dot.png",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "the Sun",
			measure : 1.391e+9,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/Sun",
			longDesc : "The Sun is the star at the center of the Solar System. By itself, it accounts for about 99.86% of the Solar System's mass.",
			imageUrl : "images/756752main_20130620-m2.9flare-orig_full.jpg",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "Jupiter",
			measure : 1.43e+8,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/Jupiter",
			longDesc : "Jupiter is the largest planet within the Solar System.  It is a gas giant with a mass slightly less than one-thousandth that of the Sun, but 2.5 times the mass of all of the other planets in our Solar System combined.",
			imageUrl : "images/Jupiter.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "Earth",
			measure : 1.2756e+7,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/Earth",
			longDesc : "Earth is a small blue planet where we all live.  So far, Earth is the only place in the universe where life is known to exist. The planet formed about 4.54 billion years ago, and <a href=http://en.wikipedia.org/wiki/Abiogenesis>life appeared</a> on its surface about a billion years later.",
			imageUrl : "images/earthafr.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "Texas",
			measure : 1.289e+6,
			alternateUnit : "kilometers",
			source : "http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=texas&sll=29.651634,-82.324826&sspn=0.466641,0.819168&ie=UTF8&hq=&hnear=Texas&ll=31.090574,-96.240234&spn=29.221517,52.426758&t=h&z=5&iwloc=A",
			longDesc : "The biggest state in the USA (south of Alaska, anyway), and home to all things large.",
			imageUrl : "images/texas_map.gif",
			include : [ "b1", "b2" ]
		},
		{
			description : "Manhattan",
			measure : 2.3e+4,
			alternateUnit : "kilometers",
			source : "http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Manhattan&sll=31.090574,-96.240234&sspn=29.221517,52.426758&g=texas&ie=UTF8&hq=&hnear=Manhattan,+New+York&ll=40.78782,-73.907089&spn=0.406548,0.819168&t=k&z=11&iwloc=A",
			longDesc : null,
			imageUrl : "images/Manhattan Island.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the Eiffel Tower",
			measure : 3.24e+2,
			alternateUnit : "meters",
			source : "http://en.wikipedia.org/wiki/Eiffel_Tower",
			longDesc : "The Eiffel Tower is a 19th century iron lattice tower located in Paris (although Eiffel has originally planned to build it in Barcelona). It is the tallest building in Paris, and was the tallest structure in the world at the time of its completion. The tower was built as the entrance arch for the 1889 World's Fair.",
			imageUrl : "images/324px-Tour_Eiffel_Wikimedia_Commons.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "a human being",
			measure : 1.7e+0,
			alternateUnit : "meters",
			source : "http://www.ambrosebierce.org/dictionary.htm",
			longDesc : "An animal so lost in rapturous contemplation of what he thinks he is as to overlook what he indubitably ought to be. His chief occupation is extermination of other animals and his own species, which, however, multiplies with such insistent rapidity as to infest the whole habitable earth and Canada.",
			imageUrl : "images/homo_michelangelo.jpeg",
			include : [ "a1", "b1", "b2" ]
		},
		{
			description : "a beachball",
			measure : 0.4e+0,
			alternateUnit : "centimeters",
			source : "http://en.wikipedia.org/wiki/Beach_ball",
			longDesc : "An inflatable ball for beach and water games, whose large size and light weight make it easy to propel through the air.",
			imageUrl : "images/600px-BeachBall.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "an orange",
			measure : 1e-1,
			alternateUnit : "centimeters",
			source : "http://en.wikipedia.org/wiki/Orange_%28fruit%29",
			longDesc : "An edible fruit that is orange.",
			imageUrl : "images/annoying-orange.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "a marble",
			measure : 1.5e-2,
			alternateUnit : "centimeters",
			source : "http://en.wikipedia.org/wiki/Marble_%28toy%29",
			longDesc : "A small device used here on Earth to win valuable cash prizes.",
			imageUrl : "images/8001115.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the head of a pin",
			measure : 2e-3,
			alternateUnit : "microns",
			source : null,
			longDesc : "Despite centuries of progress, science has yet to determine <a href=\"http://en.wikipedia.org/wiki/How_many_angels_can_dance_on_the_head_of_a_pin%3F\">how many angels can dance of the head of a pin.</a>",
			imageUrl : "images/pinhead.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "a dust mite",
			measure : 4e-4,
			alternateUnit : "microns",
			source : "http://en.wikipedia.org/wiki/House_dust_mite",
			longDesc : "Dust mites feed on organic detritus such as flakes of shed human skin and flourish in the stable environment of dwellings. House dust mites are a common cause of asthma and allergic symptoms worldwide.  The body of a house dust mite is just visible against a dark background in normal light. ",
			imageUrl : "images/House_Dust_Mite.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "a grain of sand",
			measure : 1e-4,
			alternateUnit : "millimeters",
			source : "https://en.wikipedia.org/wiki/Sand",
			longDesc : "The most common constituent of sand in inland continental settings and non-tropical coastal settings is silica (silicon dioxide, or SiO<sub>2</sub>), usually in the form of quartz. The second most common type of sand is calcium carbonate, for example, aragonite, which has mostly been created, over the past half billion years, by various forms of life, like coral and shellfish. ",
			imageUrl : "images/Sand_from_Gobi_Desert.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the width of a human hair",
			measure : 1e-4,
			alternateUnit : "microns",
			source : "http://en.wikipedia.org/wiki/Orders_of_magnitude_(length)",
			longDesc : "Humans actually have the same number of hair follicles per unit area as other primates. Human hair is barely visible as it is thinner, shorter and more transparent than the hair of other mammals.",
			imageUrl : "images/Menschenhaar_200_fach.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "a human red blood cell",
			measure : 7e-6,
			alternateUnit : "nanometers",
			source : "http://en.wikipedia.org/wiki/Red_blood_cell_distribution_width",
			longDesc : "Red blood cells are the most common type of blood cell and the vertebrate body's principal means of delivering oxygen to the body tissues via the blood. They take up oxygen in the lungs and release it while squeezing through the body's capillaries.",
			imageUrl : "images/red_blood_cells.jpg",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "a Mimivirus",
			measure : 6e-7,
			alternateUnit : "nanometers",
			source : "http://en.wikipedia.org/wiki/Mimivirus#Structure",
			longDesc : "Mimivirus is a viral genus containing a single identified species named <i>Acanthamoeba polyphaga mimivirus</i>.  It has the largest capsid measure of all known viruses, as well as a large and complex genome compared with other viruses. The discovery of the virus excited many people due to the implications of its complex nature, with people hailing it as everything from a new domain of life to a missing link between viruses and bacteria.",
			imageUrl : "images/close-up-mimivirus_copy.1190020737.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "a Parvoviridae virus",
			measure : 2e-8,
			alternateUnit : "nanometers",
			source : "http://wildlife1.wildlifeinformation.org/s/virus/parvoviridae/parvoviridae.htm",
			longDesc : "The Parvoviridae family includes the smallest known viruses, and some of the most environmentally resistant. They were discovered during the 1960s and affect vertebrates and insects. Parvoviridae have a genome consisting of single-stranded DNA and an icosahedral capsid.",
			imageUrl : "images/cpv-canine-parvovirus-ictv8.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "microprocessor feature size",
			measure : 1e-8,
			alternateUnit : "nanometers",
			source : "https://en.wikipedia.org/wiki/International_Technology_Roadmap_for_Semiconductors",
			longDesc : "In semiconductor fabrication, the International Technology Roadmap for Semiconductors (ITRS) defines the 10 nanometer (10 nm) node as the technology node following the 14 nm node. \"10 nm class\" denotes chips made using process technologies between 10 and 20 nanometers.  As of 2017, 10 nm devices are the current state of the art.",
			imageUrl : "images/T3700663-F-col_SEM_of_microprocessor_circuit_tracks-SPL.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "a caesium atom",
			measure : 5.5e-10,
			alternateUnit : "angstroms",
			source : "http://en.wikipedia.org/wiki/Atom#Size",
			longDesc : "The largest atom.  Caesium is a soft, silvery-gold alkali metal which is one of only five metals that are liquid at or near room temperature.",
			imageUrl : "images/stmg7.jpg",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "a helium atom",
			measure : 6.4e-11,
			alternateUnit : "angstroms",
			source : "http://en.wikipedia.org/wiki/Atom#Size",
			longDesc : "The smallest atom.  Helium is a colorless, odorless, tasteless, non-toxic, inert monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among the elements, and it exists only as a gas except in extreme conditions.",
			imageUrl : "images/helium.jpg",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "a uranium nucleus",
			measure : 1.4e-14,
			alternateUnit : "angstroms",
			source : "http://www.coral-lab.org/~marc/libro/insignificance_full.html",
			longDesc : "A large and heavy atom nucleus.  Uranium has the highest atomic weight of the naturally occurring elements.",
			imageUrl : "images/U_nucleus.jpg",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "a proton (hydrogen nucleus)",
			measure : 1.6e-15,
			alternateUnit : "nanometers",
			source : "http://hypertextbook.com/facts/1999/YelenaMeskina.shtml",
			longDesc : "Admittedly, the concept of size starts to break down at this scale, as the wave/particle duality of matter begins to manifest itself.  The measure given here is based on the charge radius of the proton.<br/>"
				+ "The proton is a subatomic particle with an electric charge of +1 elementary charge. It is found in the nucleus of each atom.",
			imageUrl : "images/2000px-Quark_structure_proton.svg.png",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "the Planck length",
			measure : 1.616e-35,
			alternateUnit : "angstroms",
			source : "http://en.wikipedia.org/wiki/Planck_length",
			longDesc : "Current theory suggests that one Planck length is the smallest distance or size about which anything can be known.  The Planck length can be defined from three fundamental physical constants: the speed of light in a vacuum, Planck's constant, and the gravitational constant.",
			imageUrl : "images/pt4.gif",
			include : [ "a1", "a2" ]
		}, ],

	//////////////////////////////////////////////////////////////////////////////////////////////

	"domain-distance" : [
		{
			description : "the distance to edge of Observable Universe",
			measure : 4.3e+26,
			alternateUnit : "billion light-years",
			source : "http://en.wikipedia.org/wiki/Observable_universe",
			longDesc : "The age of the Universe is about 13.7 billion years, but due to the expansion of space we are now observing objects that are now considerably farther away than a static 13.7 billion light-years distance.  The visible universe is thus a sphere with a measure of about 28 billion parsecs (about 93 billion light-years).",
			imageUrl : "images/universe.gif",
			include : [ "a1", "a2" ]
		},
		{
			description : "the distance to Virgo Supercluster",
			measure : 6.1495e+23,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Virgo_Supercluster",
			longDesc : "The Virgo Supercluster (Virgo SC) or the Local Supercluster (LSC or LS) is a mass concentration of galaxies which contains the Virgo Cluster in addition to the Local Group, which in turn contains the Milky Way and Andromeda galaxies. At least 100 galaxy groups and clusters are located within its measure of 33 megaparsecs (110 million light-years). It is one of millions of superclusters in the observable universe.",
			imageUrl : "images/Local_supercluster-ly.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the distance to Andromeda Galaxy",
			measure : 2.4011e+22,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Andromeda_Galaxy",
			longDesc : "The Andromeda Galaxy is the nearest spiral galaxy to our Milky Way galaxy, but not the nearest galaxy overall.  It contains at least twice the number of stars in the Milky Way galaxy, which is estimated to be 200�400 billion.",
			imageUrl : "images/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the distance to Canis Major Dwarf Galaxy",
			measure : 2.3652e+20,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Canis_Major_Overdensity",
			longDesc : "The Canis Major Dwarf Galaxy is a disputed dwarf irregular galaxy in the Local Group, located in the same part of the sky as the constellation Canis Major.  It is now thought to be the closest neighbouring galaxy to our location in the Milky Way, being located about 25,000 light-years away from our Solar System.",
			imageUrl : "images/canismajordwarf1.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the distance to center of the Milky Way",
			measure : 2.47e+20,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Galactic_Center",
			longDesc : "Our galaxy, the Milky Way, is a spiral galaxy.  There is strong evidence consistent with the existence of a supermassive black hole at the Galactic Center of the Milky Way.",
			imageUrl : "images/Milky_Way_Galaxy.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the distance to Orion Nebula",
			measure : 1.2715e+19,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Orion_Nebula",
			longDesc : "The Orion Nebula is one of the brightest nebulae, and is visible to the naked eye in the night sky.  It is located at a distance of about 1,344 light-years from Earth and is the closest region of massive star formation to Earth.",
			imageUrl : "images/orion-nebula.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the distance to Alpha Centauri system",
			measure : 4.1315e+16,
			alternateUnit : "light-years",
			source : "http://en.wikipedia.org/wiki/Alpha_Centauri",
			longDesc : "The Alpha Centauri star system contains three stars.  These are the closest stars to our sun.",
			imageUrl : "images/superhabitable-exoplanet-18.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "one light-year",
			measure : 9.4607e+15,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/Light-year",
			longDesc : "The distance the light tavels in one year.  It is <i>not</i> a unit of time.",
			imageUrl : "images/buzz-lightyear-1.jpg",
			include : [ "a1", "a2", "b2" ]
		},
		{
			description : "the distance to Neptune",
			measure : 4.7e+12,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/Neptune",
			longDesc : "Neptune is the farthest planet from the Sun in our Solar System (with apologies to Pluto).",
			imageUrl : "images/Neptune.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "the distance to the Sun",
			measure : 149600000e+3,
			alternateUnit : "kilometers",
			source : "http://hypertextbook.com/facts/2004/CherisseBarnes.shtml",
			longDesc : 'Despite appearances to the contrary, the Sun does not actually <a href="http://en.wikipedia.org/wiki/Modern_geocentrism#Biblical_references">orbit the Earth</a>.  It takes our planet one year (365.242 days) to complete one orbit around the Sun.  The orbital speed of the Earth around the Sun averages about 30 km/s (108,000 km/h).',
			imageUrl : "images/706436main_20121114-304-193Blend_M6-orig_full.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "the distance to the Moon",
			measure : 384400e+3,
			alternateUnit : "kilometers",
			source : "http://en.wikipedia.org/wiki/Moon",
			longDesc : "The Moon is thought to have formed nearly 4.5 billion years ago, not long after Earth. It formed from the debris left over after a giant impact between Earth and a Mars-sized body.",
			imageUrl : "images/moon-through-trees.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "the distance from New York to Sydney",
			measure : 16000e+3,
			alternateUnit : "kilometers",
			source : null,
			longDesc : null,
			imageUrl : "images/Sydney.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the distance from New York City to Chicago",
			measure : 1250e+3,
			alternateUnit : "kilometers",
			source : null,
			longDesc : null,
			imageUrl : "images/skyline-architecture-blog-smurfit-building-04.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the length of Manhattan Island",
			measure : 21.6e+3,
			alternateUnit : "kilometers",
			source : "http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Manhattan&sll=31.090574,-96.240234&sspn=29.221517,52.426758&g=texas&ie=UTF8&hq=&hnear=Manhattan,+New+York&ll=40.78782,-73.907089&spn=0.406548,0.819168&t=k&z=11&iwloc=A",
			longDesc : null,
			imageUrl : "images/Manhattan-3d-map.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the height of Eiffel Tower",
			measure : 301,
			alternateUnit : "meters",
			source : "http://en.wikipedia.org/wiki/Eiffel_Tower",
			longDesc : "The Eiffel Tower is a 19th century iron lattice tower located in Paris (although Eiffel has originally planned to build it in Barcelona). It is the tallest building in Paris, and was the tallest structure in the world at the time of its completion. The tower was built as the entrance arch for the 1889 World's Fair.",
			imageUrl : "images/324px-Tour_Eiffel_Wikimedia_Commons.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the width of an average living room",
			measure : 8,
			alternateUnit : "meters",
			source : null,
			longDesc : null,
			imageUrl : "images/brady bunch living room.JPG",
			include : [ "b1", "b2" ]
		},
		{
			description : "height of a typical human",
			measure : 1.7,
			alternateUnit : "meters",
			source : "http://en.wikipedia.org/wiki/Human_height#Average_height_around_the_world",
			longDesc : "An animal so lost in rapturous contemplation of what he thinks he is as to overlook what he indubitably ought to be. His chief occupation is extermination of other animals and his own species, which, however, multiplies with such insistent rapidity as to infest the whole habitable earth and Canada.",
			imageUrl : "images/homo_michelangelo.jpeg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the length of a human hand",
			measure : 16e-2,
			alternateUnit : "centimeters",
			source : null,
			longDesc : null,
			imageUrl : "images/hand.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the width of a pinky finger",
			measure : 1e-2,
			alternateUnit : "centimeters",
			source : null,
			longDesc : null,
			imageUrl : "images/pinky.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the width of the head of a pin",
			measure : 2e-3,
			alternateUnit : "microns",
			source : null,
			longDesc : 'Despite centuries of progress, science has yet to determine <a href="http://en.wikipedia.org/wiki/How_many_angels_can_dance_on_the_head_of_a_pin%3F">how many angels can dance of the head of a pin.</a>',
			imageUrl : "images/pinhead.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "the width of a human hair",
			measure : 1e-4,
			alternateUnit : "microns",
			source : "http://en.wikipedia.org/wiki/Orders_of_magnitude_(length)",
			longDesc : "Humans actually have the same number of hair follicles per unit area as other primates. Human hair is barely visible as it is thinner, shorter and more transparent than the hair of other mammals.",
			imageUrl : "images/Menschenhaar_200_fach.jpg",
			include : [ "b1", "b2" ]
		}, ],

	//////////////////////////////////////////////////////////////////////////////////////////////

	"domain-time" : [
		{
			description : "age of the Universe",
			measure : 4.320432e+17,
			alternateUnit : "billion years",
			source : "http://en.wikipedia.org/wiki/Observable_universe",
			longDesc : null,
			imageUrl : "images/universe.gif",
			include : [ "a1", "a2" ]
		},
		{
			description : "age of the Earth",
			measure : 1.4317344e+17,
			alternateUnit : "billion years",
			source : "http://en.wikipedia.org/wiki/Earth",
			longDesc : "Earth is a small blue planet where we all live.  So far, Earth is the only place in the universe where life is known to exist. The planet formed about 4.54 billion years ago, and <a href=http://en.wikipedia.org/wiki/Abiogenesis>life appeared</a> on its surface about a billion years later.",
			imageUrl : "images/earthafr.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "since life appeared on Earth",
			measure : 1.3497408e+17,
			alternateUnit : "billion years",
			source : "https://en.wikipedia.org/wiki/Earliest_known_life_forms",
			longDesc : "The earliest known life forms on Earth are putative fossilized microorganisms found in hydrothermal vent precipitates. The earliest time that life forms first appeared on Earth is unknown. They may have lived earlier than 3.77 billion years ago, possibly as early as 4.28 billion years ago, not long after the oceans formed 4.41 billion years ago, and not long after the formation of the Earth 4.54 billion years ago.",
			imageUrl : "images/first-life-on-earth.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "since multi-cellular life appeared on land",
			measure : 1.3970448e+16,
			alternateUnit : "million years",
			source : "https://en.wikipedia.org/wiki/Silurian",
			longDesc : "During the Silurian period, multi-cellular life also began to appear on land in the form of small, bryophyte-like and vascular plants that grew beside lakes, streams, and coastlines, and terrestrial arthropods are also first found on land during the Silurian. However, terrestrial life would not greatly diversify and affect the landscape until the Devonian.",
			imageUrl : "images/silurian.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "since the dinosaurs first appeared",
			measure : 8.577792e+15,
			alternateUnit : "million years",
			source : "https://en.wikipedia.org/wiki/Dinosaur#Origins_and_early_evolution",
			longDesc : "Dinosaurs diverged from their archosaur ancestors during the middle to late Triassic period, roughly 20 million years after the Permian–Triassic extinction event wiped out an estimated 95% of all life on Earth.",
			imageUrl : "images/Lagerpeton_NT_small.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "since dinosaur extinction",
			measure : 2.04984e+15,
			alternateUnit : "million years",
			source : "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event",
			longDesc : "The Cretaceous–Paleogene extinction event was a mass extinction of some three-quarters of the plant and animal species on Earth.  With the exception of some ectothermic species such as the leatherback sea turtle and crocodiles, no tetrapods weighing more than 25 kilograms survived.",
			imageUrl : "images/asteroid.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "since our genus Homo first appeared",
			measure : 8.83008e+13,
			alternateUnit : "million years",
			source : "https://en.wikipedia.org/wiki/Human_evolution#Evolution_of_genus_Homo",
			longDesc : "The earliest documented representative of the genus Homo is Homo habilis, which is arguably the earliest species for which there is positive evidence of the use of stone tools. The brains of these early hominins were about the same size as that of a chimpanzee, although it has been suggested that this was the time in which the human SRGAP2 gene doubled, producing a more rapid wiring of the frontal cortex.",
			imageUrl : "images/homo habilis 3.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "since modern humans first appeared",
			measure : 8.83008e+13,
			alternateUnit : "thousand years",
			source : "https://en.wikipedia.org/wiki/Homo_sapiens",
			longDesc : "Study of human evolution is concerned primarily with the development of the genus Homo (extant and extinct human species), but usually involves studying other hominids as well, i.e. other great apes; these include Australopithecus, an important ancestor of humans, and our current as well as extinct relatives among the Homininae subfamily: chimpanzees, bonobos, gorillas, and the related extinct hominins.",
			imageUrl : "images/homo_sapiens.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "history of human civilization",
			measure : 4.41504e+11,
			alternateUnit : "thousand years",
			source : "https://en.wikipedia.org/wiki/Cradle_of_civilization#Rise_of_civilization",
			longDesc : "The earliest signs of a process leading to sedentary culture can be seen in the Levant, where the Natufian culture became sedentary.  It evolved into an agricultural society by 10,000 BC.  The importance of water to safeguard an abundant and stable food supply, due to favourable conditions for hunting, fishing and gathering resources including cereals, provided an initial wide spectrum economy that triggered the creation of permanent villages.",
			imageUrl : "images/NatufianSpread.png",
			include : [ "a1", "a2" ]
		},
		{
			description : "length of recorded history",
			measure : 1.8922e+11,
			alternateUnit : "thousand years",
			source : "https://en.wikipedia.org/wiki/Recorded_history",
			longDesc : "Recorded history begins with the accounts of the ancient world around the 4th millennium BC, and coincides with the invention of writing.",
			imageUrl : "images/Tableta_con_trillo.png",
			include : [ "a1", "a2" ]
		},
		{
			description : "time since Industrial Revolution",
			measure : 7.884e+9,
			alternateUnit : "years",
			source : "https://en.wikipedia.org/wiki/Industrial_Revolution",
			longDesc : "The Industrial Revolution was the transition to new manufacturing processes in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power, the development of machine tools and the rise of the factory system.",
			imageUrl : "images/industrial_revolution.jpg",
			include : [ "a1", "a2" ]
		},
		{
			description : "a typical human lifespan",
			measure : 2.523e+9,
			alternateUnit : "years",
			source : "https://en.wikipedia.org/wiki/Maximum_life_span",
			longDesc : "The longest-living person whose dates of birth and death were verified to the modern norms of Guinness World Records and the Gerontology Research Group was Jeanne Calment (1875-1997), a French woman who lived to 122. Reduction of infant mortality has accounted for most of the increased average life span longevity, but since the 1960s mortality rates among those over 80 years have decreased by about 1.5% per year.",
			imageUrl : "images/skull.jpg",
			include : [ "a1", "a2", "b1", "b2" ]
		},
		{
			description : "one year on Earth",
			measure : 3.154e+7,
			alternateUnit : "years",
			source : "https://en.wikipedia.org/wiki/Year",
			longDesc : "A year is the orbital period of the Earth moving in its orbit around the Sun.",
			imageUrl : "images/Orbital_Seasons1.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "one day on Earth",
			measure : 86400,
			alternateUnit : "days",
			source : "https://en.wikipedia.org/wiki/Day",
			longDesc : "A civil day is usually 86,400 seconds, plus or minus a possible leap second in Coordinated Universal Time (UTC).",
			imageUrl : "images/sunrise.jpg",
			include : [ "b1", "b2" ]
		},
		{
			description : "one hour",
			measure : 3600,
			alternateUnit : "hours",
			source : "https://en.wikipedia.org/wiki/Hour",
			longDesc : "An hour is a unit of time conventionally reckoned as one 24<sup>th</sup> of a day and scientifically reckoned as between 3,599 and 3,601 seconds, depending on conditions.",
			imageUrl : "images/clock-on-the-hour.png",
			include : [ "b1", "b2" ]
		}, {
			description : "one minute",
			measure : 60,
			alternateUnit : "hours",
			source : "https://en.wikipedia.org/wiki/Minute",
			longDesc : null,
			imageUrl : null,
			include : [ "b1", "b2" ]
		}, {
			description : "one second",
			measure : 1,
			alternateUnit : "seconds",
			source : "https://en.wikipedia.org/wiki/Second",
			longDesc : null,
			imageUrl : "images/one second.png",
			include : [ "b1", "b2" ]
		}, {
			description : "one millisecond",
			measure : 0.001,
			alternateUnit : "milliseconds",
			source : "https://en.wikipedia.org/wiki/Millisecond",
			longDesc : "1/1000 of a second",
			imageUrl : null,
			include : [ "b1", "b2" ]
		}, ],
};
