function User(id, name, surname, age, isMale, email, isSubscribed) {
	this.id = id
	this.firstName = name
	this.lastName = surname
	this.age = age
	this.isMale = isMale
	this.email = email
	this.isSubscribed = isSubscribed
}

const users = []

for (let i = 0; i < 10; i++) {
	const user = new User(
		i + 1,
		`Username${i}`,
		`Usersurname${i}`,
		Math.floor(Math.random() * 90),
		Math.random() < 0.5,
		`useremail${i}@gmail.com`,
		Math.random() < 0.5
	)
	users.push(user)
}

console.log(users)

//?прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести в прототип
User.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`
}

console.log(users[5].getFullName())

//?Отримати масив користувачів, які не підписані (not subscribed)
const userIsSubscribed = users.filter((user) => !user.isSubscribed)
console.log(userIsSubscribed)

//?Вивести список повних імен користувачів
const fullNames = users.map((user) => user.getFullName())
console.log(fullNames)

//?Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років)
const schoolGirls = users
	.filter((user) => !user.isMale && user.age >= 6 && user.age <= 18)
	.map((user) => user.getFullName())
console.log(schoolGirls)

//?Видалити з масиву користувача з email  useremail5@gmail.com
const deleteUserOfEmail = (users) => {
	const index = users.findIndex((user) => user.email === 'useremail5@gmail.com')
	if (index !== -1) {
		users.splice(index, 1)
	}
}
deleteUserOfEmail(users)
console.log(users)

//?Змінити email користувачу з id 2 (можна спробувати використати find)
const changeEmailById = (user) => {
	const userById = user.find((user) => user.id === 2)
	userById.email = 'newemail@gmail.com'
}
changeEmailById(users)
console.log(users)

//?Визначити, який відсоток користувачів підписані (subscribed)
const percentageOfSubscribed = (users) => {
	const subscribedUsers = users.filter((user) => user.isSubscribed)
	const percentage = (subscribedUsers.length / users.length) * 100
	return percentage.toFixed(2) + '%'
}
console.log(percentageOfSubscribed(users))

//?Знайти середній вік користувачів (спробувати використати reduce)
const averageAge = (users) => {
	const totalAge = users.reduce((acc, user) => acc + user.age, 0)
	const average = totalAge / users.length
	return average.toFixed(2)
}
console.log(averageAge(users))

//?Впорядкувати користувачів за віком (sort)
const sortByAge = (users) => users.sort((a, b) => a.age - b.age)
sortByAge(users)
console.log(users)

//?Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com
const isCheckEmail = (users) => {
	const user = users.find((user) => (user.eamil = 'useremail7@gmail.com'))
	return user ? true : false
}
console.log(isCheckEmail(users))

//?Перевірити, чи всі користувачі підписані (subscribed)
const isAllSubscribed = (users) => users.every((user) => user.isSubscribed)
console.log(isAllSubscribed(users))
