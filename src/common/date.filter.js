import { default as format } from "date-fns/format";

export default date => {
	console.log(date)
	if (date != undefined){
		return format(new Date(date), "MMMM d, yyyy");
	}
};
	