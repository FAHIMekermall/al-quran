const loadData = (url) => {
	return fetch(url)
		.then((res) => res.json())
		.then((data) => getSura(data))
}
const getSura = ({ data }) => {
	displaySuraList(data)
}
const displaySura = (id) => {
	const url = `http://api.alquran.cloud/v1/surah/${id}`
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const root = document.getElementById("root")
			root.textContent = ``
			const ayats = data.data.ayahs
			console.log(ayats)
			const header = document.querySelector(".header")
			header.style.display = "block"
			const p = document.createElement("p")
			p.className = "home"
			p.innerText = data.data.englishName
			const a = document.createElement("a")
			a.innerHTML = `Home`
			header.addEventListener("click", function () {
				location.reload()
			})
			a.className = "home"
			header.appendChild(a)
			header.appendChild(p)
			const ul = document.createElement("ul")
			ayats.forEach(({ numberInSurah, text }) => {
				const li = document.createElement("li")
				li.innerHTML = `<p class="number">${numberInSurah}:---</p><p class="ayat">$${text} </p>`
				ul.appendChild(li)
			})
			root.appendChild(ul)
		})
}
const displaySuraList = (surahs) => {
	const root = document.getElementById("root")
	root.classList = "row row-cols-1 row-cols-md-3 g-4 container mx-auto"
	surahs.forEach(({ number, englishName }) => {
		const card = document.createElement("div")
		card.classList = "col"
		card.innerHTML = `
            <div onclick = "displaySura(${number})" class="card">
            <div class="card-body">
            <h6 class="card-title"> Sura number:${number} </h6>
            <h4 class="card-title"> Sura:${englishName}</h4>
            <p class="card-text">click here for read full sura.</p>
            </div>
            </div>
    `
		root.appendChild(card)
	})
}
const data = loadData("http://api.alquran.cloud/v1/surah")
