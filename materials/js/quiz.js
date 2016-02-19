Array.prototype.equals = function (array)
{
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++)
    {
        if (this[i] instanceof Array && array[i] instanceof Array) 
        {
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i])
        { 
            return false;   
        }           
    }       
    return true;
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getCheckedValues(questionNumber)
{
	var vals = [];
	
	for (var y=0; y<alphabet.length; y++)
	{
		var element = document.getElementById(questionNumber + "-" + alphabet[y]);
		if (!element)
			return vals;
		if (element.checked)
            vals.push(alphabet[y]);
	}
}

function getScore()
{
    var score = 0;
    for (var i=1; i<=tot; i++)
        if (getCheckedValues(i).equals(answers[i-1]))
        {
            score += 1;
            document.getElementById("question-"+i).className = "bg-success";
			document.getElementById("result-"+i).className = "text-success glyphicon glyphicon-ok";
        }
        else
        {
			document.getElementById("question-"+i).className = "bg-danger";
            document.getElementById("result-"+i).className = "text-danger glyphicon glyphicon-remove";
        }
    return score;
}

function returnScore()
{
	var score = getScore();
    
    document.getElementById("result-score").innerHTML = score + " / " + tot;
	document.getElementById("progress-ok").style.width = ((score/tot)*100).toFixed(2) + "%";
	document.getElementById("progress-wrong").style.width = (((tot-score)/tot)*100).toFixed(2) + "%";
    document.getElementById("result-msg").hidden = false;
	document.getElementById("result-msg").style.display = "inline";
}