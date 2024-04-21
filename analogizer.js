const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const a2 = document.getElementById('a2');
const b2 = document.getElementById('b2');
const multiplier = document.getElementById('multiplier');
const detailsTitle = document.getElementById('details_title');
const detailsMeasure = document.getElementById('details_measure');
const detailsLongDesc = document.getElementById('details_longDesc');
const detailsSource = document.getElementById('details_source');
const detailsImage = document.getElementById('details_image');
let selectedDomain;

const numFromat = new NumberFormat();
numFromat.setInputDecimal('.');
numFromat.setPlaces('-1', false);
numFromat.setCurrencyValue('$');
numFromat.setCurrency(false);
numFromat.setCurrencyPosition(numFromat.LEFT_OUTSIDE);
numFromat.setNegativeFormat(numFromat.LEFT_DASH);
numFromat.setNegativeRed(false);
numFromat.setSeparators(true, ',', ',');

let isIE = window.ActiveXObject ? true : false;

function onLoad() {
	//	for (let domain of Object.keys(data)) {
	//		selectedDomain = domain;
	//		document.getElementById(domain).href = updateUrl(true); //
	//	}

	//	defaults
	selectedDomain = 'domain-size';
	let a1Index = defaults[selectedDomain].a1;
	let a2Index = defaults[selectedDomain].a2;
	let b1Index = defaults[selectedDomain].b1;

	let url = document.URL.replace('#', '');
	if (url.indexOf('?') > 0) {
		urlDataStr = url.split('?')[1].split('&');
		let urlData = {};
		for (let i in urlDataStr) {
			let keyVal = urlDataStr[i].split('=');
			urlData[keyVal[0]] = keyVal[1];
		}
		a1Index = parseInt(urlData.a1);
		a2Index = parseInt(urlData.a2);
		b1Index = parseInt(urlData.b1);
		if (urlData.domain) {
			selectedDomain = urlData.domain;
		}
	}

	let opt;
	for (let i in data[selectedDomain]) {
		//		const includes = data[selectedDomain][i].include;
		//		if (includes.includes("a1")) {
		opt = new Option(data[selectedDomain][i].description, i);
		a1.add(opt, isIE ? 0 : null);
		//		}
		//		if (includes.includes("b1")) {
		opt = new Option(data[selectedDomain][i].description, i);
		b1.add(opt, isIE ? 0 : null);
		//		}
		//		if (includes.includes("a2")) {
		opt = new Option(data[selectedDomain][i].description, i);
		a2.add(opt, isIE ? 0 : null);
		//		}
	}
	document.getElementById(selectedDomain).className = 'selected';
	document.getElementById('domain-descriptor').innerHTML =
		descriptors[selectedDomain];

	a1.selectedIndex = a1Index;
	b1.selectedIndex = b1Index;
	a2.selectedIndex = a2Index;

	a1.onchange = update;
	b1.onchange = update;
	a2.onchange = update;

	compute();

	show('a1');
	//	a2a_linkurl = window.location.href;
}

function compute() {
	const b2Data = getB2Data();
	a1Selection = data[selectedDomain][a1.options[a1.selectedIndex].value];
	b1Selection = data[selectedDomain][b1.options[b1.selectedIndex].value];
	a2Selection = data[selectedDomain][a2.options[a2.selectedIndex].value];
	let result =
		a2Selection.measure * (b1Selection.measure / a1Selection.measure);

	let i = 0;
	while (b2Data[i++].measure > result && i < b2Data.length);

	if (i > 1) {
		// find the closest match, larger or smaller
		multiplier1 = result / b2Data[i - 1].measure;
		multiplier2 = result / b2Data[i - 2].measure;
		if (multiplier1 > 1 / multiplier2) {
			i--;
		}
	}

	b2.innerHTML = b2Data[i - 1].description;
	b2.index = i - 1;
	multiplier.innerHTML = formatNum(result / b2Data[i - 1].measure, 2);

	//	a2a.init("Analogizer", {
	//		target : ".share-this",
	//		linkname : getFactText(),
	//	});

	//	a2a_linkname = getFactText();
	//	a2a_linkurl = window.location.href;
	//	let fbDesc = document.getElementById("facebook-description");
	//	fbDesc.setAttribute("content", "kakaka");
}

function getFactText() {
	const descriptor = descriptors[selectedDomain]
		? descriptors[selectedDomain] + ' '
		: '';
	const text =
		'If ' +
		a1Selection.description +
		' were ' +
		descriptor +
		b1Selection.description +
		', then ' +
		a2Selection.description +
		' would be ' +
		multiplier.innerHTML +
		' times ' +
		descriptor +
		b2.innerHTML +
		'.';
	return text;
}

//function facebookA2aClick() {
//	alert("To share this fact to Facebook, please use the 'Copy fact to clipboard' button under it, and then paste it to your post.");
//}

async function copyFact() {
	const text = getFactText() + '\nprovided by Analogizer: ' + updateUrl();
	await navigator.clipboard.writeText(text);

	const copyConf = document.getElementById('copy-confirmation');
	copyConf.style.visibility = 'visible';
	setTimeout(function () {
		copyConf.style.visibility = 'hidden';
	}, 2000);
}

function show(id) {
	let i;
	let _data = data[selectedDomain];
	if (id) {
		const el = document.getElementById(id);
		i = el.options[el.selectedIndex].value;
	} else {
		_data = getB2Data();
		i = b2.index;
	}
	const selection = _data[i];
	updateDetails(selection);
}

function update(e) {
	compute();
	// evt evaluates to window.event or inexplicit e object, depending on which one is defined
	const evt = window.event || e;
	if (!evt.target) {
		// if event obj doesn't support e.target, presume it does e.srcElement
		evt.target = evt.srcElement; // extend obj with custom e.target prop
	}
	const selection =
		data[selectedDomain][evt.target.options[evt.target.selectedIndex].value];
	updateDetails(selection);
	updateUrl();
}

function updateUrl(isDefaults) {
	let url = document.URL;
	if (url.indexOf('?') > 0) {
		url = url.split('?')[0];
	}

	let a1Index = a1.selectedIndex;
	let a2Index = a2.selectedIndex;
	let b1Index = b1.selectedIndex;
	if (isDefaults) {
		a1Index = defaults[selectedDomain].a1;
		a2Index = defaults[selectedDomain].a2;
		b1Index = defaults[selectedDomain].b1;
	}

	url +=
		'?a1=' +
		a1Index +
		'&b1=' +
		b1Index +
		'&a2=' +
		a2Index +
		'&domain=' +
		selectedDomain;
	window.history.pushState(null, null, url);
	return url;
}

function updateDetails(selection) {
	detailsTitle.innerHTML =
		selection.description.substr(0, 1).toUpperCase() +
		selection.description.substr(1);
	detailsMeasure.innerHTML =
		formatNum(
			selection.measure / conversions[selectedDomain][selection.alternateUnit],
			3
		) +
		' ' +
		selection.alternateUnit;
	detailsLongDesc.innerHTML = selection.longDesc;
	detailsImage.innerHTML = selection.imageUrl
		? '<a target="analogizer-image" href="' +
		  selection.imageUrl +
		  '"><img src="' +
		  selection.imageUrl +
		  '"/></a>'
		: '';
	detailsSource.innerHTML = selection.source
		? '<a target="analogizer-source" href="' + selection.source + '">Source</a>'
		: '';
}

function formatNum(num, precision) {
	numFromat.setNumber(num.toPrecision(precision));
	return numFromat.toFormatted();
}

function selectDomain(el) {
	if (selectedDomain != el.id) {
		selectedDomain = el.id;
		location = updateUrl(true);
		location.reload();
	}
}

function getB2Data() {
	let b2Data = [];
	for (let i in data[selectedDomain]) {
		//		if (data[selectedDomain][i].include.includes("b2")) {
		b2Data.push(data[selectedDomain][i]);
		//		}
	}
	return b2Data;
}

function randomFact() {
	a1.selectedIndex = Math.floor(Math.random() * a1.options.length);
	do {
		b1.selectedIndex = Math.floor(Math.random() * b1.options.length);
	} while (
		a1.options[a1.selectedIndex].value == b1.options[b1.selectedIndex].value
	);
	do {
		a2.selectedIndex = Math.floor(Math.random() * a2.options.length);
	} while (
		a1.options[a1.selectedIndex].value == a2.options[a2.selectedIndex].value
	);

	compute();
	let selection = data[selectedDomain][a1.options[a1.selectedIndex].value];
	updateDetails(selection);
	updateUrl();
}
