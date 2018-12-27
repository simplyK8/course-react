const houses = {
	GRYFFINDOR: 'Gryffindor',
	HUFFLEPUFF: 'Hufflepuff',
	RAVENCLAW: 'Ravenclaw',
	SLYTHERIN: 'Slytherin',
	WTF: 'Wtf',
	DONUT: 'Donut',
}

const houseAnimals = {
	[houses.GRYFFINDOR]: 'lion 🦁',
	[houses.HUFFLEPUFF]: 'badger 🦡',
	[houses.RAVENCLAW]: 'raven 🦅',
	[houses.SLYTHERIN]: 'serpent 🐍',
	[houses.WTF]: 'platypus',
	[houses.DONUT]: 'Kitty 🐱',
}

const houseFounders = {
	[houses.GRYFFINDOR]: 'Godric Gryffindor',
	[houses.HUFFLEPUFF]: 'Helga Hufflepuff',
	[houses.RAVENCLAW]: 'Rowena Ravenclaw',
	[houses.SLYTHERIN]: 'Salazar Slytherin',
	[houses.WTF]: 'David Bowie',
	[houses.DONUT]: 'Papa Johns',
}

const houseColors = {
	[houses.GRYFFINDOR]: 'scarlet and gold',
	[houses.HUFFLEPUFF]: 'yellow and black',
	[houses.RAVENCLAW]: 'blue and bronze',
	[houses.SLYTHERIN]: 'emerald green and silve',
	[houses.WTF]: 'black and crimson',
	[houses.DONUT]: 'purple and blue',
}

const houseTypicalTraits = {
	[houses.GRYFFINDOR]: {
		courage: true,
		bravery: true,
		nerve: true,
		chivalry: true,
	},
	[houses.HUFFLEPUFF]: {
		hardWork: true,
		patience: true,
		justice: true,
		loyalty: true,
	},
	[houses.RAVENCLAW]: {
		intelligence: true,
		creativity: true,
		learning: true,
		wit: true,
	},
	[houses.SLYTHERIN]: {
		ambition: true,
		cunning: true,
		leadership: true,
		resourcefulness: true,
	},
	[houses.WTF]: {
		coward: true,
		cruel: true,
		stupid: true,
		communicative: true,
	},
	[houses.DONUT]: {
		soft: true,
		nice: true,
		spontanious: true,
		clever: true,
	},
}

const freshmen = [
	{
		name: 'Harry Potter',
		house: houses.GRYFFINDOR,
	},
	{
		name: 'Newt Scamander',
		house: houses.HUFFLEPUFF,
	},
	{
		name: 'Cedric Diggory',
		house: houses.HUFFLEPUFF,
	},
	{
		name: 'Ron Weasley',
		house: houses.GRYFFINDOR,
	},
	{
		name: 'Draco Malfoy',
		house: houses.SLYTHERIN,
	},
	{
		name: 'Nymphadora Tonks',
		house: houses.HUFFLEPUFF,
	},
	{
		name: 'Gilderoy Lockhart',
		house: houses.RAVENCLAW,
	},
	{
		name: 'Filius Flitwick',
		house: houses.RAVENCLAW,
	},
	{
		name: 'Severus Snape',
		house: houses.SLYTHERIN,
	},
	{
		name: 'Hermione Granger',
		house: houses.GRYFFINDOR,
	},
	{
		name: 'Luna Lovegood',
		house: houses.RAVENCLAW,
	},
	{
		name: 'Lord Voldemort',
		house: houses.SLYTHERIN,
	},
]

const getHouseInfo = house => {
	return `The ${house} house was founded by ${houseFounders[house]}, its symbolic animal is ${
		houseAnimals[house]
	} and its colors are ${houseColors[house]}`
}

const getStudentsByHouse = (students, house) => students.filter(st => st.house === house)

const getGroupedStudents = students => {
	return {
		[houses.GRYFFINDOR]: getStudentsByHouse(students, houses.GRYFFINDOR),
		[houses.HUFFLEPUFF]: getStudentsByHouse(students, houses.HUFFLEPUFF),
		[houses.RAVENCLAW]: getStudentsByHouse(students, houses.RAVENCLAW),
		[houses.SLYTHERIN]: getStudentsByHouse(students, houses.SLYTHERIN),
	}
}

const getMatchingTraits = (stTraits, house) => {
	const houseTraits = houseTypicalTraits[house]
	return Object.keys(stTraits).filter(st => houseTraits[st] === stTraits[st])
}

const student = {
	cunning: true,
	leadership: true,
	patience: true,
	chivalry: true,
	justice: true,
	resourcefulness: true,
}

const determineHouse = stTraits => {
	const houseMatches = Object.values(houses).map(house => {
		return {
			matchingTraits: getMatchingTraits(stTraits, house),
			house: house,
		}
	})

	const bestMatch = houseMatches.find(hm => hm.matchingTraits.length >= 3)

	return bestMatch ? bestMatch.house : null
}

export const determineHouseAndGiveInfo = stTraits => {
	const house = determineHouse(stTraits)

	if (house) {
		return {
			houseInfo: getHouseInfo(house),
			housemates: getStudentsByHouse(freshmen, house),
		}
	} else {
		return 'not enough information to determine house'
	}
}
