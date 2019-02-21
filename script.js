const ipsum = [{"These are the voyages of the Starship Enterprise. Its continuing mission, to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before. We need to neutralize the homing signal. Each unit has total environmental control, gravity, temperature, atmosphere, light, in a protective field. Sensors show energy readings in your area. We had a forced chamber explosion in the resonator coil. Field strength has increased by 3,000 percent."},{"We're acquainted with the wormhole phenomenon, but this... Is a remarkable piece of bio-electronic engineering by which I see much of the EM spectrum ranging from heat and infrared through radio waves, et cetera, and forgive me if I've said and listened to this a thousand times. This planet's interior heat provides an abundance of geothermal energy. We need to neutralize the homing signal."},{"Unidentified vessel travelling at sub warp speed, bearing 235.7. Fluctuations in energy readings from it, Captain. All transporters off. A strange set-up, but I'd say the graviton generator is depolarized. The dark colourings of the scrapes are the leavings of natural rubber, a type of non-conductive sole used by researchers experimenting with electricity. The molecules must have been partly de-phased by the anyon beam."}];

function lookInScriptJsLine3() {
	let renderedIpsum = ipsum.map((index) => {
		return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${index.title}</h5>
        <p class="card-text">${index.body}</p>
      </div>
  </div>
    `
	});

	let target = document.getElementById('target');
	console.log(target);
	target.innerHTML = renderedIpsum.join("\r\n");
}



