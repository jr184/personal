//**********************************DDToDMS**********************************//
function DDToDMS()                                             
{
	var LongElement = document.getElementById("Longitude");                             // Gets the id of "Longitude" from input
	var LatElement = document.getElementById("Latitude");                               // Gets the id of "Latitude" from input					
	var Longitude = parseFloat(LongElement.value);                                      // Converts string to a floating input for variable Longitude
	var Latitude = parseFloat(LatElement.value);                                        // Converts string to a floating input for variable Latitude
	
		if (Longitude >= -180 && Longitude <=180)                                       // If the user input is within the acceptable range, then proceed to the next step
		{
			if (Longitude >= -180 && Longitude < 0)                                     // If the Longitude is within -180 to 0, then proceed to the next step
			{						
				var Degrees1=Math.floor(Longitude);                                     // Rounds down to the nearest integer 
				var RemainderInMinutes1=(Longitude-Degrees1)*60;                        // Subtracts the Degrees from the Decimal Degree value and multiplies by 60 minutes, for remainder of minutes 
				var Minutes1=Math.floor(RemainderInMinutes1);                           // Rounds down to the nearest integer of minutes
				var Seconds1=Math.floor((RemainderInMinutes1-Minutes1)*60);             // Subtracts the Minutes from remainder of minutes, and multiply by 60 seconds
				var West = " W"
				var LongText=(-1*Degrees1)+"°"+" "+Minutes1+"' "+Seconds1+"\""+West;    // Concatenates Degrees, Minutes, and Seconds to format	
			}
			if (Longitude > 0 && Longitude <= 180)                                      // If the latitude is within 0 to 180, then proceed to the next step
			{						
				var Degrees1=Math.floor(Longitude);                                     // Rounds down to the nearest integer 
				var RemainderInMinutes1=(Longitude-Degrees1)*60;                        // Subtracts the Degrees from the Decimal Degree value and multiplies by 60 minutes, for remainder of minutes 
				var Minutes1=Math.floor(RemainderInMinutes1);                           // Rounds down to the nearest integer of minutes
				var Seconds1=Math.floor((RemainderInMinutes1-Minutes1)*60);             // Subtracts the Minutes from remainder of minutes, and multiply by 60 seconds
				var East = " E"
				var LongText=Degrees1+"°"+" "+Minutes1+"' "+Seconds1+"\""+East;         // Concatenates Degrees, Minutes, and Seconds to format	
			}
			if (Longitude == 0)                                                         // If the value of the longitude is 0, proceed to the next step
			{
				var Degrees1=0;                                                         // Degrees is 0
				var Minutes1=0;                                                         // Minutes is 0
				var Seconds1=0;                                                         // Seconds is 0
				var LongText=Degrees1+"°"+" "+Minutes1+"' "+Seconds1+"\"";              // Concatenates Degrees, Minutes, and Seconds to format								
			}
		}
		else 
		{
			alert("Please enter a longitude value within the range of -180 to 180.");   // Alerts the user to place a value within the range of -180 to 180
		}	
		
		if (Latitude >= -90 && Latitude <= 90)                                          // If the user input is within the acceptable range, then proceed to the next step
		{
			if (Latitude >= -90 && Latitude < 0)                                        // If the latitude is within -90 to 0, then proceed to the next step
			{
				var Degrees2=Math.floor(Latitude);                                      // Rounds down to the nearest integer 
				var RemainderInMinutes2=(Latitude-Degrees2)*60;                         // Subtracts the Degrees from the Decimal Degree value and multiplies by 60 minutes, for remainder of minutes 
				var Minutes2=Math.floor(RemainderInMinutes2);                           // Rounds down to the nearest integer of minutes
				var Seconds2=Math.floor((RemainderInMinutes2-Minutes2)*60);             // Subtracts the Minutes from remainder of minutes, and multiply by 60 seconds
				var South = " S"
				var LatText=(-1*Degrees2)+"°"+" "+Minutes2+"' "+Seconds2+"\""+South;    // Concatenates Degrees, Minutes, and Seconds to format	
			}
			if (Latitude > 0 && Latitude <= 90)                                         // If the latitude is within 0 to 90, then proceed to the next step
			{
				var Degrees2=Math.floor(Latitude);                                      // Rounds down to the nearest integer 
				var RemainderInMinutes2=(Latitude-Degrees2)*60;                         // Subtracts the Degrees from the Decimal Degree value and multiplies by 60 minutes, for remainder of minutes 
				var Minutes2=Math.floor(RemainderInMinutes2);                           // Rounds down to the nearest integer of minutes
				var Seconds2=Math.floor((RemainderInMinutes2-Minutes2)*60);             // Subtracts the Minutes from remainder of minutes, and multiply by 60 seconds
				var North = " N"
				var LatText=Degrees2+"°"+" "+Minutes2+"' "+Seconds2+"\""+North;         // Concatenates Degrees, Minutes, and Seconds to format	
			}
			if (Latitude == 0)                                                         // If the value of the Latitude is 0, proceed to the next step
			{
				var Degrees2=0;                                                         // Degrees is 0
				var Minutes2=0;                                                         // Minutes is 0
				var Seconds2=0;                                                         // Seconds is 0
				var LongText=Degrees2+"°"+" "+Minutes2+"' "+Seconds2+"\"";              // Concatenates Degrees, Minutes, and Seconds to format								
			}							
		}
		else 
		{
			alert("Please enter a latitude value within the range of -90 to 90.");      // Alerts the user to place a value within the range of -90 to 90
		}						
	
	var TheDMSElement=document.getElementById("result1");                                // Gets the "result" id to place in the "result"
	TheDMSElement.style.background="#e6e6e6";                                           // Changes the background color
	TheDMSElement.style.color="black";                                                  // Changes the color of the text 	
	TheDMSElement.style.opacity = "0.6";                                                // Changes the opacity of the result box
	TheDMSElement.innerHTML="("+LongText+", "+LatText+")";                              // Places the output into the result section of the div tag
}
//**********************************DMSToDD**********************************//	
function DMSToDD()                                             
{
var TheDegreesElement = document.getElementById("Degrees");                      // Gets the id of "Degrees" from input
var TheMinutesElement  = document.getElementById("Minutes");                     // Gets the id of "Minutes" from input
var TheSecondsElement  = document.getElementById("Seconds");                     // Gets the id of "Seconds" from input

var TheDegrees=parseFloat(TheDegreesElement.value);                              // Converts string to a floating input for variable TheDegreesElement
var TheMinutes=parseFloat(TheMinutesElement.value);                              // Converts string to a floating input for variable TheMinutesElement
var TheSeconds=parseFloat(TheSecondsElement.value);                              // Converts string to a floating input for variable TheSecondsElement

	if (TheDegrees >= -180 && TheMinutes <= 180)                                 // If the user input is within the acceptable range, then proceed to the next step
	{
		if (TheMinutes >= 0 && TheMinutes <= 60)                                 // If the user input is within the acceptable range, then proceed to the next step
		{
			if (TheSeconds >= 0 && TheSeconds <= 60)                             // If the user input is within the acceptable range, then proceed to the next step
			{
				var DD=(TheDegrees+(TheMinutes/60)+(TheSeconds/3600)).toFixed(5);// Uses inputs to calculate the output in Decimal Degrees
			}
			else 
			{
				alert("Please provide a second value between zero and sixty.")   // Alerts the user to place a value within the range of 0 to 60
			}
		}
		else 
		{
			alert("Please provide a minute value between zero and sixty.")       // Alerts the user to place a value within the range of 0 to 60
		}
	}
	else {
		alert("Please provide a degree value between -180 and 180.")             // Alerts the user to place a value within the range of -180 to 180
	}
var TheDDElement=document.getElementById("result2");                              // Gets the "result" id to place in the "result"
TheDDElement.style.background="#e6e6e6";                                         // Changes the background color
TheDDElement.style.color="black";                                                // Changes the color of the text 
TheDDElement.style.opacity = "0.6";                                              // Changes the opacity of the result box
TheDDElement.innerHTML=DD;                                                       // Places the output into the result section of the div tag
}				
				
//**********************************Meters_To_Feet**********************************//	
function Meters_To_Feet()                                             
{
var TheMetersElement = document.getElementById("Meters");            // Gets the id of "Meters" from input				
var Meters = parseFloat(TheMetersElement.value);                     // Converts string to a floating input for variable TheMetersElement
	if (Meters > 0)                                                  // If the input is greater than 0, then proceed to the next step
	{
		var Feet=(3.2808*Meters).toFixed(5);                         // Converts meters to feet from the user input
		var unit=" feet";                                            // Denotes the unit that is converted to feet
	}
	else {
		alert("Please enter a positive numeric value.")              // Alerts the user to place a value that's greater than zero
	}	
					
var MeterElement=document.getElementById("result3");                  // Gets the "result" id to place in the "result"
MeterElement.style.background="#e6e6e6";                             // Changes the background color
MeterElement.style.color="black";                                    // Changes the color of the text 	
MeterElement.style.opacity = "0.6";                                  // Changes the opacity of the result box
MeterElement.innerHTML=Feet+unit;                                    // Places the output into the result section of the div tag
}
//**********************************Coordinate_Comp**********************************//
function Coordinate_Comp()                  //Coordinate_Comp(x1,y1,Angle,Distance)
{

var LongElement = document.getElementById("Longitude1");                            //Gets the id of "Longitude1" from input
var LatElement = document.getElementById("Latitude1");                              //Gets the id of "Latitude1" from input
var AngleElement = document.getElementById("Angle");                                //Gets the id of "Angle" from input
var DistancesElement = document.getElementById("Distance");                         //Gets the id of "Distance" from input

var x1 = parseFloat(LongElement.value);                                             //Converts string to a floating input
var y1 = parseFloat(LatElement.value);                                              //Converts string to a floating input
var Angle = parseFloat(AngleElement.value);	                                        //Converts string to a floating input
var Distance = parseFloat(DistancesElement.value);                                  //Converts string to a floating input

if (Distance >= 0)                                                                  //If the distance is greater than zero, proceed to the following steps
{ 
	var Radians = Angle*(Math.PI/180);                                              //Converts Angles to Radians 
	x2 = x1 + Math.cos(Radians)*Distance;                                           //Calculates the latitude of the new coordinate
	y2 = y1 + Math.sin(Radians)*Distance;						                    //Calculates the longitude of the new coordinate					
	var Text = "The second coordinate is ("+x2.toFixed(5)+","+y2.toFixed(5)+").";   //Texts the new coordinate point from the given parameters, as well as restricting the decimal 
	
	var CoordinOutput=document.getElementById("result4");                            //Gets the "result" id to place in the result section
	CoordinOutput.style.background="#e6e6e6";                                       //Changes the background color
	CoordinOutput.style.color="black";                                              //Changes the color of the text
	CoordinOutput.style.opacity = "0.6";                                            // Changes the opacity of the result box
	CoordinOutput.innerHTML=Text;				                                    //Places the text into the result section of the div tag
}
else 
{
	alert("Please enter a positive distance value.");                               //Alerts the user to enter a positive value
}
}				
//**********************************TripleProduct**********************************//
function TripleProduct()   
{			
var a1Element = document.getElementById("a1");                             //Gets the id of "a1" from input
var a2Element = document.getElementById("a2");                             //Gets the id of "a2" from input
var a3Element = document.getElementById("a3");                             //Gets the id of "a3" from input
var b1Element = document.getElementById("b1");                             //Gets the id of "b1" from input
var b2Element = document.getElementById("b2");                             //Gets the id of "b2" from input
var b3Element = document.getElementById("b3");				               //Gets the id of "b3" from input
var c1Element = document.getElementById("c1");                             //Gets the id of "c1" from input
var c2Element = document.getElementById("c2");                             //Gets the id of "c2" from input
var c3Element = document.getElementById("c3");                             //Gets the id of "c3" from input

var a1 = parseFloat(a1Element.value);                                      //Converts string to a floating input for variable 1 of "a" vector
var a2 = parseFloat(a2Element.value);                                      //Converts string to a floating input for variable 2 of "a" vector
var a3 = parseFloat(a3Element.value);                                      //Converts string to a floating input for variable 3 of "a" vector
var b1 = parseFloat(b1Element.value);                                      //Converts string to a floating input for variable 1 of "b" vector
var b2 = parseFloat(b2Element.value);                                      //Converts string to a floating input for variable 2 of "b" vector
var b3 = parseFloat(b3Element.value);                                      //Converts string to a floating input for variable 3 of "b" vector
var c1 = parseFloat(c1Element.value);                                      //Converts string to a floating input for variable 1 of "c" vector
var c2 = parseFloat(c2Element.value);                                      //Converts string to a floating input for variable 2 of "c" vector
var c3 = parseFloat(c3Element.value);                                      //Converts string to a floating input for variable 3 of "c" vector

var SubDeter1 = ((b2*c3)-(b3*c2));                                         //Determinant 1 of Scalar Triple Product 
var SubDeter2 = ((b3*c1)-(b1*c3));                                         //Determinant 2 of Scalar Triple Product
var SubDeter3 = ((b1*c2)-(b2*c1));                                         //Determinant 3 of Scalar Triple Product
var Order3_Determinant = (a1*SubDeter1)+(a2*SubDeter2)+(a3*SubDeter3);     //Executes Scalar Triple Determinant 
var Text = "The scaler triple product value is "+Order3_Determinant+".";   //Produces the text inside the alert box when computed

var TripleOutput=document.getElementById("result5");                        //Gets the "result" id to place in the result section
TripleOutput.style.background="#e6e6e6";                                   //Changes the background color
TripleOutput.style.color="black";                                          //Changes the color of the text 
TripleOutput.style.opacity = "0.6";                                        // Changes the opacity of the result box
TripleOutput.innerHTML=Text;				                               //Places the text into the result section of the div tag
}			