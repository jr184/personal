// Start of onClick functions for Utility links 
function ToDMS() {
	document.getElementById('ToDMS').style.display = 'block';
	document.getElementById('ToDD').style.display = 'none';
	document.getElementById('MToFt').style.display = 'none';
	document.getElementById('CoorComp').style.display = 'none';
	document.getElementById('TripleScalar').style.display = 'none';
	
	document.getElementById('Tool1').style.color = '#FFFFFF';	
	document.getElementById('Tool2').style.color = '#d9c7a5';
	document.getElementById('Tool3').style.color = '#d9c7a5';
	document.getElementById('Tool4').style.color = '#d9c7a5';
	document.getElementById('Tool5').style.color = '#d9c7a5';	
}

function ToDD() {
	document.getElementById('ToDMS').style.display = 'none';
	document.getElementById('ToDD').style.display = 'block';	
	document.getElementById('MToFt').style.display = 'none';
	document.getElementById('CoorComp').style.display = 'none';
	document.getElementById('TripleScalar').style.display = 'none';
	
	document.getElementById('Tool1').style.color = '#d9c7a5';	
	document.getElementById('Tool2').style.color = '#FFFFFF';
	document.getElementById('Tool3').style.color = '#d9c7a5';
	document.getElementById('Tool4').style.color = '#d9c7a5';
	document.getElementById('Tool5').style.color = '#d9c7a5';	
}

function MToFt() {
	document.getElementById('ToDMS').style.display = 'none';
	document.getElementById('ToDD').style.display = 'none';
	document.getElementById('MToFt').style.display = 'block';	
	document.getElementById('CoorComp').style.display = 'none';
	document.getElementById('TripleScalar').style.display = 'none';
	
	document.getElementById('Tool1').style.color = '#d9c7a5';	
	document.getElementById('Tool2').style.color = '#d9c7a5';
	document.getElementById('Tool3').style.color = '#FFFFFF';
	document.getElementById('Tool4').style.color = '#d9c7a5';
	document.getElementById('Tool5').style.color = '#d9c7a5';		
}

function CoorComp() {
	document.getElementById('ToDMS').style.display = 'none';
	document.getElementById('ToDD').style.display = 'none';
	document.getElementById('MToFt').style.display = 'none';
	document.getElementById('CoorComp').style.display = 'block';	
	document.getElementById('TripleScalar').style.display = 'none';
	
	document.getElementById('Tool1').style.color = '#d9c7a5';	
	document.getElementById('Tool2').style.color = '#d9c7a5';
	document.getElementById('Tool3').style.color = '#d9c7a5';
	document.getElementById('Tool4').style.color = '#FFFFFF';
	document.getElementById('Tool5').style.color = '#d9c7a5';		
}

function TSP() {
	document.getElementById('ToDMS').style.display = 'none';
	document.getElementById('ToDD').style.display = 'none';
	document.getElementById('MToFt').style.display = 'none';
	document.getElementById('CoorComp').style.display = 'none';
	document.getElementById('TripleScalar').style.display = 'block';

	document.getElementById('Tool1').style.color = '#d9c7a5';	
	document.getElementById('Tool2').style.color = '#d9c7a5';
	document.getElementById('Tool3').style.color = '#d9c7a5';
	document.getElementById('Tool4').style.color = '#d9c7a5';
	document.getElementById('Tool5').style.color = '#FFFFFF';		
}