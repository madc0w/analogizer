const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const a2 = document.getElementById("a2");
const b2 = document.getElementById("b2");
const multiplier = document.getElementById("multiplier");
const detailsTitle = document.getElementById("details_title");
const detailsMeasure = document.getElementById("details_measure");
const detailsLongDesc = document.getElementById("details_longDesc");
const detailsSource = document.getElementById("details_source");
const detailsImage = document.getElementById("details_image");
var selectedDomain;

const numFromat = new NumberFormat();
numFromat.setInputDecimal(".");
numFromat.setPlaces("-1", false);
numFromat.setCurrencyValue("$");
numFromat.setCurrency(false);
numFromat.setCurrencyPosition(numFromat.LEFT_OUTSIDE);
numFromat.setNegativeFormat(numFromat.LEFT_DASH);
numFromat.setNegativeRed(false);
numFromat.setSeparators(true, ",", ",");

var isIE = window.ActiveXObject ? true : false;

function onLoad() {
	//	defaults
	selectedDomain = "domain-size";
	var a1Index = defaults[selectedDomain].a1;
	var a2Index = defaults[selectedDomain].a2;
	var b1Index = defaults[selectedDomain].b1;

	var url = document.URL.replace("#", "");
	if (url.indexOf("?") > 0) {
		urlDataStr = url.split("?")[1].split("&");
		var urlData = {};
		for (var i in urlDataStr) {
			var keyVal = urlDataStr[i].split("=");
			urlData[keyVal[0]] = keyVal[1];
		}
		a1Index = parseInt(urlData.a1);
		a2Index = parseInt(urlData.a2);
		b1Index = parseInt(urlData.b1);
		if (urlData.domain) {
			selectedDomain = urlData.domain;
		}
	}

	var opt;
	for (var i in data[selectedDomain]) {
		var includes = data[selectedDomain][i].include;
		if (includes.includes("a1")) {
			opt = new Option(data[selectedDomain][i].description, i);
			a1.add(opt, isIE ? 0 : null);
		}
		if (includes.includes("b1")) {
			opt = new Option(data[selectedDomain][i].description, i);
			b1.add(opt, isIE ? 0 : null);
		}
		if (includes.includes("a2")) {
			opt = new Option(data[selectedDomain][i].description, i);
			a2.add(opt, isIE ? 0 : null);
		}
	}
	document.getElementById(selectedDomain).className = "selected";
	document.getElementById("domain-descriptor").innerHTML = descriptors[selectedDomain];

	a1.selectedIndex = a1Index;
	b1.selectedIndex = b1Index;
	a2.selectedIndex = a2Index;

	a1.onchange = update;
	b1.onchange = update;
	a2.onchange = update;

	compute();

	show("a1");
//	a2a_linkurl = window.location.href;
}

function compute() {
	var b2Data = getB2Data();
	a1Selection = data[selectedDomain][a1.options[a1.selectedIndex].value];
	b1Selection = data[selectedDomain][b1.options[b1.selectedIndex].value];
	a2Selection = data[selectedDomain][a2.options[a2.selectedIndex].value];
	var result = a2Selection.measure * (b1Selection.measure / a1Selection.measure);

	var i = 0;
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

	a2a.init("Analogizer", {
		target : ".share-this",
		linkname : getFactText(),
	});

//	a2a_linkname = getFactText();
//	a2a_linkurl = window.location.href;
//	var fbDesc = document.getElementById("facebook-description");
//	fbDesc.setAttribute("content", "kakaka");
}

function getFactText() {
	var descriptor = descriptors[selectedDomain] ? (descriptors[selectedDomain] + " ") : "";
	var text = "If " + a1Selection.description + " were " + descriptor + b1Selection.description + ", then " + a2Selection.description + " would be "
		+ multiplier.innerHTML + " times " + descriptor + b2.innerHTML + ".";
	return text;
}

function facebookA2aClick() {
	alert("To share this fact to Facebook, please use the 'Copy fact to clipboard' button under it, and then paste it to your post.");
}

function copyFact() {
	var textArea = document.createElement("textarea");

	// *** This styling is an extra step which is likely not required. ***
	//
	// Why is it here? To ensure:
	// 1. the element is able to have focus and selection.
	// 2. if element was to flash render it has minimal visual impact.
	// 3. less flakyness with selection and copying which **might** occur if the textarea element is not visible.
	//
	// The likelihood is the element won't even render, not even a flash, so some of these are just precautions. However in IE the element
	// is visible whilst the popup box asking the user for permission for the web page to copy to the clipboard.

	// Place in top-left corner of screen regardless of scroll position.
	textArea.style.position = "fixed";
	textArea.style.top = 0;
	textArea.style.left = 0;

	// Ensure it has a small width and height. Setting to 1px / 1em doesn't work as this gives a negative w/h on some browsers.
	textArea.style.width = "2em";
	textArea.style.height = "2em";

	// We don't need padding, reducing the size if it does flash render.
	textArea.style.padding = 0;

	// Clean up any borders.
	textArea.style.border = "none";
	textArea.style.outline = "none";
	textArea.style.boxShadow = "none";

	// Avoid flash of white box if rendered for any reason.
	textArea.style.background = "transparent";
	textArea.value = getFactText() + "\nprovided by Analogizer: " + updateUrl();

	document.body.appendChild(textArea);

	textArea.select();

	try {
		document.execCommand("copy");
	} catch (err) {
		alert("Huh, that did not work out.\n" + err);
	}

	document.body.removeChild(textArea);

	var copyConf = document.getElementById("copy-confirmation");
	copyConf.style.visibility = "visible";
	setTimeout(function() {
		copyConf.style.visibility = "hidden";
	}, 1500);
}

function show(id) {
	var i;
	var _data = data[selectedDomain];
	if (id) {
		var el = document.getElementById(id);
		i = el.options[el.selectedIndex].value;
	} else {
		_data = getB2Data();
		i = b2.index;
	}
	var selection = _data[i];
	updateDetails(selection);
}

function update(e) {
	compute();
	// evt evaluates to window.event or inexplicit e object, depending on which one is defined
	var evt = window.event || e;
	if (!evt.target) {
		// if event obj doesn't support e.target, presume it does e.srcElement
		evt.target = evt.srcElement; // extend obj with custom e.target prop
	}
	var selection = data[selectedDomain][evt.target.options[evt.target.selectedIndex].value];
	updateDetails(selection);
	updateUrl();
}

function updateUrl(isDefaults) {
	var url = document.URL;
	if (url.indexOf("?") > 0) {
		url = url.split("?")[0];
	}

	var a1Index = a1.selectedIndex;
	var a2Index = a2.selectedIndex;
	var b1Index = b1.selectedIndex;
	if (isDefaults) {
		a1Index = defaults[selectedDomain].a1;
		a2Index = defaults[selectedDomain].a2;
		b1Index = defaults[selectedDomain].b1;
	}

	url += "?a1=" + a1Index + "&b1=" + b1Index + "&a2=" + a2Index + "&domain=" + selectedDomain;
	window.history.pushState(null, null, url);
	return url;
}

function updateDetails(selection) {
	detailsTitle.innerHTML = selection.description.substr(0, 1).toUpperCase() + selection.description.substr(1);
	detailsMeasure.innerHTML = formatNum(selection.measure / conversions[selectedDomain][selection.alternateUnit], 3) + " " + selection.alternateUnit;
	detailsLongDesc.innerHTML = selection.longDesc;
	detailsImage.innerHTML = selection.imageUrl ? '<a href="' + selection.imageUrl + '"><img src="' + selection.imageUrl + '"/></a>' : "";
	detailsSource.innerHTML = selection.source ? '<a href="' + selection.source + '">Source</a>' : "";
}

function formatNum(num, precision) {
	numFromat.setNumber(num.toPrecision(precision));
	return numFromat.toFormatted();
}

function selectDomain(el) {
	if (selectedDomain != el.id) {
		selectedDomain = el.id;
		window.location.href = updateUrl(true);
	}
}

function getB2Data() {
	var b2Data = [];
	for (var i in data[selectedDomain]) {
		if (data[selectedDomain][i].include.includes("b2")) {
			b2Data.push(data[selectedDomain][i]);
		}
	}
	return b2Data;
}

function randomFact() {
	a1.selectedIndex = Math.floor(Math.random() * a1.options.length);
	do {
		b1.selectedIndex = Math.floor(Math.random() * b1.options.length);
	} while (a1.options[a1.selectedIndex].value == b1.options[b1.selectedIndex].value);
	do {
		a2.selectedIndex = Math.floor(Math.random() * a2.options.length);
	} while (a1.options[a1.selectedIndex].value == a2.options[a2.selectedIndex].value);

	compute();
	var selection = data[selectedDomain][a1.options[a1.selectedIndex].value];
	updateDetails(selection);
	updateUrl();
}
