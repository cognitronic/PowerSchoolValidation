/// <reference path="web_root/scripts/jquery.maskedinput-1.1.4.js" />
/// <reference path="web_root/scripts/jquery-1.2.6.js" />
/// <reference path="web_root/scripts/jquery-1.2.6-vsdoc.js" />



function setContacts() {
    var contact1Name = $("#emerg_contact_1").val();
    var aContact1Name = contact1Name.split(",");
    $("#econtactln1").val(jQuery.trim(aContact1Name[0]));
    $("#econtactfn1").val(jQuery.trim(aContact1Name[1]));

	var contact2Name = $("#emerg_contact_2").val();
    var aContact2Name = contact2Name.split(",");
    $("#econtactln2").val(jQuery.trim(aContact2Name[0]));
    $("#econtactfn2").val(jQuery.trim(aContact2Name[1]));

	var contact3Name = $("#emerg_contact_3").val();
    var aContact3Name = contact3Name.split(",");
    $("#econtact3_ln").val(jQuery.trim(aContact3Name[0]));
    $("#econtact3_fn").val(jQuery.trim(aContact3Name[1]));
}
$(document).ready(
	function() {
    setContacts();
});