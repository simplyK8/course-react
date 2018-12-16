const defaultEnemy = {
	type: 'Drowner',
	health: 100,
	level: 1,
	isVigilant: false,
	canFly: false,
	canSwim: true,
	canRun: true,
	attackPower: 10,
	magicPower: 0,
	isMiniBoss: false,
}

const createEnemy = data => {
	return { ...defaultEnemy, ...data }
}

const enemy1 = createEnemy({ level: 3 })
const enemy2 = createEnemy({ health: 50 })
const enemy3 = createEnemy({ isMiniBoss: true })

const createStrongEnemy = data => {
	const enemy = createEnemy(data)
	return { ...enemy, level: 50, health: 200, isMiniBoss: true }
}
const enemy4 = createStrongEnemy({ color: 'red' })

const attack = (enemy, damage) => {
	return { ...enemy, health: enemy.health - damage }
}
const enemies = [enemy1, enemy2, enemy3, enemy4]

console.log('beaten enemies', enemies.map(enemy => attack(enemy, 50)))

console.log('hello')

const people = [
	{
		name: 'John',
		sex: 'male',
		hobbies: ['Cryptography', 'Dance', 'Digital arts', 'Drama', 'Drawing', 'Electronics'],
	},
	{
		name: 'Sam',
		sex: 'male',
		hobbies: [],
	},
	{
		name: 'Sarah',
		sex: 'female',
		hobbies: ['Drawing'],
	},
	{
		name: 'Mary',
		sex: 'female',
		hobbies: ['Drawing', 'Drama'],
	},
]

const feminaze = anyArray => {
	return anyArray.map(person => {
		return { ...person, sex: 'female' }
	})
}

console.log(feminaze(people))
