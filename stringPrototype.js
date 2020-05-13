String.prototype.inject = function (values) {
	let text = this.match(/{{(.*?)}}/gi);
	if (!text && !values) return this;

	var result = this;

	text.map((template) => {
		var matched = template;
		if (template.includes("(") && template.includes(")")) {
			let functionName = template.match(/ (.*?)\(/i)[0];
			functionName = functionName.substr(0, functionName.length - 1).trim();

			var parameters = template.match(/(\(.*?)\)/i)[0];

			parameters = parameters.replace("(", "");
			parameters = parameters.replace(")", "");

			var params = [];
			parameters.split(",").map((param) => {
				params.push(values[param.trim()]);
			});
			var func = values[functionName];
			template = template.replace(matched, func(...params));
		} else {
			let words = template.match(/\b(\w*.\w*)\b/gi);
			words.map((word) => {
				template = template.replace(word, values[word]);
			});

			if (
				template.includes("+") ||
				template.includes("-") ||
				template.includes("*") ||
				template.includes("/")
			) {
				template = parse(template).toString();
			}
		}
		result = result.replace(matched, template);
	});

	result = result.replace(/{{/g, "");
	result = result.replace(/}}/g, "");
	return result;
};

function parse(str) {
	str = str.replace(/{{/g, "");
	str = str.replace(/}}/g, "");
	return Function(`{return ${str}}`)();
}
