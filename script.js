

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70f1181307mshdf4a45b95ee4a0fp1630dfjsnc745486cd73b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
function getweather(cityname) {

	fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityname}&days=1`, options)
		.then(response => response.json())
		.then((response) => {
			//  console.log(response);
			lct.innerHTML = response.location.name + ',' + response.location.country;


			temp.innerHTML = response.current.temp_c + '&deg c';

			min_max.innerHTML = parseInt(response.forecast.forecastday[0].day.mintemp_c) + ' / ' + parseInt(response.forecast.forecastday[0].day.maxtemp_c) + '&deg c ';


			Feelslike.innerHTML = 'FeelsLike   ' + response.current.feelslike_c + '&deg c';

			icon.src = response.current.condition.icon

			txt.innerHTML = response.current.condition.text


			//  For the side content

			rain.innerHTML = response.current.cloud + '%';

			humid.innerHTML = response.current.humidity + '%';


			sunrise.innerHTML = response.forecast.forecastday[0].astro.sunrise;
			sunset.innerHTML = response.forecast.forecastday[0].astro.sunset;


			uv.innerHTML = response.current.uv;
			// for the wind 
			wind_speed.innerHTML = response.current.wind_kph + 'KPH'
			wind_dir.innerHTML = 'Direction: ' + response.current.wind_dir;


			// For Real Time


			time.innerHTML = 'Last Updated ' + response.current.last_updated;



		})
		.catch(error => console.log(error));


}

const inpt = document.getElementById('inpt');
inpt.addEventListener('click', (e) => {
	const cityname = inp.value;
	getweather(cityname);
})


document.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		const cityname = inp.value;
		getweather(cityname);
	}
  });


getweather('Delhi,India');