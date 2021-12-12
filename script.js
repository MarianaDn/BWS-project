const getSelector = (element) => document.querySelector(element);

const leftRange = getSelector('#slider-left');
const rightRange = getSelector('#slider-right');

const thumbLeft = getSelector('.filters__trumb--left');
const thumbRight = getSelector('.filters__trumb--right');
const range = getSelector('.filters__range');

const maxRange = getSelector('.filters__max-range');
const minRange = getSelector('.filters__min-range');

function setLeftValue() {
	const currVal = leftRange;
	const min = parseInt(currVal.min);
	const max = parseInt(currVal.max);

	currVal.value = Math.min(parseInt(currVal.value), parseInt(rightRange.value) - 1);

	const percent = ((currVal.value - min) / (max - min)) * 100;
    
	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
    minRange.innerHTML = parseInt(3000 / 100 * percent);
}

function setRightValue() {
    const currVal = rightRange;
    const min = parseInt(currVal.min);
    const max = parseInt(currVal.max);

    currVal.value = Math.max(parseInt(currVal.value), parseInt(leftRange.value) + 1);

    const percent = ((currVal.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + '%';
    range.style.right = (100 - percent) + '%';
    maxRange.innerHTML = parseInt(3000 / 100 * percent);
}

leftRange.addEventListener('input', setLeftValue);
rightRange.addEventListener('input', setRightValue);
