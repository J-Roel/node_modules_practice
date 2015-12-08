//Write your Constructor Function that will generate a different response for each day of the week


module.exports = {
response : function(day) {
	switch(day)
	{
		case 1:
			return 'It is Monday';
		break;
		case 2:
			return 'It is Tuesday.';
		break;
	case 3:
			return 'It is Wednsday';
		break;
	case 4:
			return 'It is Thursday.';
		break;
	case 5:
			return 'It is Friday. Beer me!';
		break;
	case 6:
		return 'It is Saturday.';
		break;
	case 7:
			return 'It is Sunday, watch a movie and code.';
		break;
	default:
		return "You didn't select a day";
	}//End select

}//end response function


}