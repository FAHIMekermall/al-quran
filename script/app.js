const loadData = (url) => {
	return fetch(url)
		.then((res) => res.json())
		.then((data) => getSura(data))
}
const getSura = ({ data }) => {
	displaySuraList(data)
	
}
/* */
const displaySuraList = (surahs) => {
    const root = document.getElementById("root")
	root.classList = "row row-cols-1 row-cols-md-3 g-4 container mx-auto"
	surahs.forEach(({number, englishName }) => {
		const card = document.createElement("div")
		card.classList = "col"
		card.innerHTML = `
            <div class="card">
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
