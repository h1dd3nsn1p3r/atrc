export default function AtrcIsNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
