//view-source:magnetiq.com/exports/toc.htm
autoTOC = function () {
	var toc = "";
	var level = 0;
	
	document.body.innerHTML =
		document.body.innerHTML.replace(
			/<h([\d])>([^<]+)<\/h([\d])>/gi,
			function (str, openLevel, titleText, closeLevel) {
				if (openLevel != closeLevel) {
					return str;
				}

				if (openLevel > level) {
					toc += (new Array(openLevel - level + 1)).join("<ol>");
				} else if (openLevel < level) {
					toc += (new Array(level - openLevel + 1)).join("</ol>");
				}

				level = parseInt(openLevel);

				var anchor = titleText.replace(/ /g, "_");
				toc += "<li><a href=\"#" + anchor + "\">" + titleText
					+ "</a></li>";
				
				return "<h" + openLevel + " id=\"" + anchor + "\">"
					+ titleText + "</h" + closeLevel + ">";
			}
		);

	if (level) {
		toc += (new Array(level + 1)).join("</ul>");
	}

	document.getElementById("toc").innerHTML += toc;
};

autoTOC();