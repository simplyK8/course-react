const energies = {
	AIRBENDING: 'airbending',
	WATERBENDING: 'waterbending',
	EARTHBENDING: 'earthbending',
	FIREBENDING: 'firebending',
}

const firstEnergyBenders = {
	[energies.AIRBENDING]: 'flying bisons',
	[energies.WATERBENDING]: 'spirit Koi fishes',
	[energies.EARTHBENDING]: 'giant badgers',
	[energies.FIREBENDING]: 'dragons',
}

const remarkableBenders = {
	[energies.AIRBENDING]: 'Monk Gyatso',
	[energies.WATERBENDING]: 'Yue',
	[energies.EARTHBENDING]: 'Suyin Beifong',
	[energies.FIREBENDING]: 'Roku',
}

const energySources = {
	[energies.AIRBENDING]: 'Air',
	[energies.WATERBENDING]: 'Ocean Spirits and the Moon',
	[energies.EARTHBENDING]: 'Earth',
	[energies.FIREBENDING]: 'Sun',
}

const bendersPersonalTraits = {
	[energies.AIRBENDING]: {
		cheerfullness: true,
		optimism: true,
		curiosity: true,
	},
	[energies.WATERBENDING]: {
		patience: true,
		justice: true,
		calmness: true,
	},
	[energies.EARTHBENDING]: {
		hardWork: true,
		stubbornness: true,
		learning: true,
	},
	[energies.FIREBENDING]: {
		ambition: true,
		leadership: true,
		resourcefulness: true,
	},
}

const benders = [
	{
		name: 'Aang',
		energy: energies.AIRBENDING,
	},
	{
		name: 'Katara',
		energy: energies.WATERBENDING,
	},
	{
		name: 'Toph',
		energy: energies.EARTHBENDING,
	},
	{
		name: 'Zukko',
		energy: energies.FIREBENDING,
	},
	{
		name: 'Iroh',
		energy: energies.FIREBENDING,
	},
	{
		name: 'Izumi',
		energy: energies.WATERBENDING,
	},
	{
		name: 'Azula',
		energy: energies.FIREBENDING,
	},
	{
		name: 'Ozai',
		energy: energies.FIREBENDING,
	},
	{
		name: 'Tenzin',
		energy: energies.AIRBENDING,
	},
	{
		name: 'Korra',
		energy: energies.WATERBENDING,
	},
	{
		name: 'Bumi',
		energy: energies.EARTHBENDING,
	},
]

const getEnergyInfo = energy => {
	return `The ${energy} was originally mastred by ${
		firstEnergyBenders[energy]
	}, one of the most famous element masters is ${remarkableBenders[energy]}. These benders use ${
		energySources[energy]
	} as the energy source`
}

const getBendersByElement = (benders, energy) => benders.filter(bender => bender.energy === energy)

const getBendersNamesByElement = (benders, energy) =>
	getBendersByElement(benders, energy).map(bender => bender.name)
console.log(getBendersNamesByElement(benders, energies.FIREBENDING))
const getGroupedBenders = benders => {
	return {
		[energies.AIRBENDING]: getBendersByElement(benders, energies.AIRBENDING),
		[energies.WATERBENDING]: getBendersByElement(benders, energies.WATERBENDING),
		[energies.EARTHBENDING]: getBendersByElement(benders, energies.EARTHBENDING),
		[energies.FIREBENDING]: getBendersByElement(benders, energies.FIREBENDING),
	}
}

const getMatchingTraits = (bendersTraits, energy) => {
	const benderTraits = bendersPersonalTraits[energy]
	return Object.keys(bendersTraits).filter(bender => benderTraits[bender] === bendersTraits[bender])
}

const determineEnergy = bendersTraits => {
	const energyMatches = Object.values(energies).map(energy => {
		return {
			matchingTraits: getMatchingTraits(bendersTraits, energy),
			energy: energy,
		}
	})

	const bestMatch = energyMatches.find(em => em.matchingTraits.length >= 3)

	return bestMatch ? bestMatch.energy : null
}

const hasAllTraits = bendersTraits => {
	const airBandingMatchings = getMatchingTraits(bendersTraits, energies.AIRBENDING).length
	const waterBandingMatchings = getMatchingTraits(bendersTraits, energies.WATERBENDING).length
	const earthBandingMatchings = getMatchingTraits(bendersTraits, energies.EARTHBENDING).length
	const fireBandingMatchings = getMatchingTraits(bendersTraits, energies.FIREBENDING).length

	const allMatchingNumber =
    airBandingMatchings + waterBandingMatchings + earthBandingMatchings + fireBandingMatchings

	return Object.keys(bendersTraits).length >= allMatchingNumber
}

export const determineEnergyAndGiveInfo = bendersTraits => {
	if (hasAllTraits(bendersTraits)) {
		return 'Congrats! You are a new Avatar - the future master of all elements and humanity last hope. So no pressure! '
	}
	const energy = determineEnergy(bendersTraits)

	if (energy) {
		return { energyInfo: getEnergyInfo(energy), otherBenders: getBendersByElement(benders, energy) }
	} else {
		return 'loser'
	}
}
