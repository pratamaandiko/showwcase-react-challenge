export const formatDate = (date: Date) => {
	return date.toLocaleString("en-US", {
		month: "2-digit",
		year: "numeric",
	});
};

export const getMonthYearString = (date: Date) => {
	const monthYearString = date.toLocaleDateString(undefined, {
		month: "long",
		year: "numeric",
	});
	return monthYearString;
};
