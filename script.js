//your JS code here. If required.
const removeBtn = document.querySelector('input[type = "button"]');

removeBtn.addEventListener('click', () => {
	const colorSet = document.querySelectorAll('#colorSelect>option');
	const color = document.getElementById('colorSelect').value;

	colorSet.forEach((ele) => {
		if(ele.innerHTML == color) {
			document.getElementById('colorSelect').removeChild(ele);
		}
	});
});