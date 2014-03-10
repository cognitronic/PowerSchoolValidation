/// <reference path="web_root/scripts/jquery.maskedinput-1.1.4.js" />
/// <reference path="web_root/scripts/jquery-1.2.6.js" />
/// <reference path="web_root/scripts/jquery-1.2.6-vsdoc.js" />
function getQueryStringParm(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return "";
    else return results[1];
}

function copyAddress() {
    document.getElementById("mailingaddress").value = document.getElementById("address").value;
    document.getElementById("mailingcity").value = document.getElementById("city").value;
    document.getElementById("mailingstate").value = document.getElementById("state").value;
    document.getElementById("mailingzip").value = document.getElementById("zip").value;
}

function setNames() {
    var momName = $("#mother").val();
    var aMomName = momName.split(",");
    $("#motherlastname").val(jQuery.trim(aMomName[0]));
    $("#motherfirstname").val(jQuery.trim(aMomName[1]));

    var dadName = $("#father").val();
    var aDadName = dadName.split(",");
    $("#fatherlastname").val(jQuery.trim(aDadName[0]));
    $("#fatherfirstname").val(jQuery.trim(aDadName[1]));
}

function setFather() {
    var dadName = $("#father").val();
    var aDadName = dadName.split(",");
    $("#fatherlastname").val(aDadName[0]);
    $("#fatherfirstname").val(aDadName[1]);
}

function setGuardians() {
    setMother();
    setFather();
}

function setContacts() {
    setContact1();
    setContact2();
    setContact3();
}

$(document).ready(
	    function() {
	        setNames();
	        $(".maincontent tr:even").css("background-color", "#EDF3FE");

	        $(".maincontent tr td:nth-child(odd)").width(130).css("text-align", "right");

	        $(".maincontent tr td:nth-child(even) ").width(260);

	        //Masked input rules
	        //$("#dob").mask("9/99/9999");
	        $("#ssn").mask("999-99-9999");
	        //$("#firstenrollment").mask("99-aaa-99");
	        //$("#homephone").mask("(999)999-9999");
	        $("#zip").mask("99999");
	        $("#mailingzip").mask("99999");
	        //$("#motherhomephone").mask("(999)999-9999");
	        //$("#fatherhomephone").mask("(999)999-9999");
	        //$("#motherworkphone").mask("(999)999-9999");
	        //$("#fatherworkphone").mask("(999)999-9999");
	        //$("#guardianhomephone").mask("(999)999-9999");
	        //$("#guardianworkphone").mask("(999)999-9999");
	        $("#guardiancell").mask("(999)999-9999");
	        $("#mothercell").mask("(999)999-9999");
	        $("#fathercell").mask("(999)999-9999");
	        //$("#doctorphone").mask("(999)999-9999");
	        //$("#dentistphone").mask("(999)999-9999");
	        //$("#econtact1phone").mask("(999)999-9999");
	        //$("#econtact2phone").mask("(999)999-9999");
	        // $("#econtact3phone").mask("(999)999-9999");


	        //Checks to see if a last name was entered for the mother, and if so, adds the error class to the work phone number textboxes and changes the label to bold.
	        $("#motherlastname").change(function() {
	            if ($('#motherlastname').val().length > 0 || $("#motherfirstname").val().length > 0) {
	                if ($("#motherfirstname").val().length < 1) {
	                    $("#motherfirstname").addClass("error");
	                }
	                if ($("#motherlastname").val().length < 1) {
	                    $("#motherlastname").addClass("error");
	                }
	                $("#motherhomephone").addClass("error");
	                $("#motherhomephone").parent().prev("td").addClass("bold");
	            }
	            else {

	                $("#motherhomephone").removeClass("error");
	                $("#motherfirstname").removeClass("error");
	                $("#motherlastname").removeClass("error");
	                $("#motherhomephone").parent().prev("td").removeClass("bold");
	            }
	        });
	        //Checks to see if a first name was entered for the mother, and if so, adds the error class to the work phone number textboxes and changes the label to bold.
	        $("#motherfirstname").change(function() {
	            if ($('#motherlastname').val().length > 0 || $("#motherfirstname").val().length > 0) {
	                if ($("#motherlastname").val().length < 1) {
	                    $("#motherlastname").addClass("error");
	                }
	                if ($("#motherfirstname").val().length < 1) {
	                    $("#motherfirstname").addClass("error");
	                }
	                $("#mother").val($("#motherlastname").val() + ", " + $("#motherfirstname").val());
	                $("#motherhomephone").addClass("error");
	                $("#motherhomephone").parent().prev("td").addClass("bold");
	            }
	            else {
	                $("#motherhomephone").removeClass("error");
	                $("#motherfirstname").removeClass("error");
	                $("#motherlastname").removeClass("error");
	                $("#motherhomephone").parent().prev("td").removeClass("bold");
	            }
	        });
	        //Checks to see if a last name was entered for the father, and if so, adds the error class to the work phone number textboxes and changes the label to bold.
	        $("#fatherlastname").change(function() {
	            if ($('#fatherlastname').val().length > 0 || $("#fatherfirstname").val().length > 0) {
	                if ($("#fatherfirstname").val().length < 1) {
	                    $("#fatherfirstname").addClass("error");
	                }
	                if ($("#fatherlastname").val().length < 1) {
	                    $("#fatherlastname").addClass("error");
	                }
	                $("#fatherhomephone").addClass("error");
	                $("#fatherhomephone").parent().prev("td").addClass("bold");
	            }
	            else {
	                $("#fatherhomephone").removeClass("error");
	                $("#fatherfirstname").removeClass("error");
	                $("#fatherlastname").removeClass("error");
	                $("#fatherhomephone").parent().prev("td").removeClass("bold");
	            }
	        });
	        //Checks to see if a first name was entered for the father, and if so, adds the error class to the work phone number textboxes and changes the label to bold.
	        $("#fatherfirstname").change(function() {
	            if ($('#fatherlastname').val().length > 0 || $("#fatherfirstname").val().length > 0) {
	                if ($("#fatherlastname").val().length < 1) {
	                    $("#fatherlastname").addClass("error");
	                }
	                if ($("#fatherfirstname").val().length < 1) {
	                    $("#fatherfirstname").addClass("error");
	                }
	                $("#father").val($("#fatherlastname").val() + ", " + $("#fatherfirstname").val());
	                $("#fatherhomephone").addClass("error");
	                $("#fatherhomephone").parent().prev("td").addClass("bold");
	            }
	            else {
	                $("#fatherhomephone").removeClass("error");
	                $("#fatherfirstname").removeClass("error");
	                $("#fatherlastname").removeClass("error");
	                $("#fatherhomephone").parent().prev("td").removeClass("bold");
	            }
	        });

	        //Checks to see if a last name was entered for the guardian, and if so, adds the error class to the work phone number textboxes and changes the label to bold.
	        $("#guardianlastname").change(function() {
	            if ($('#guardianlastname').val().length > 0 || $("#guardianfirstname").val().length > 0) {
	                if ($("#guardianfirstname").val().length < 1) {
	                    $("#guardianfirstname").addClass("error");
	                }
	                if ($("#guardianlastname").val().length < 1) {
	                    $("#guardianlastname").addClass("error");
	                }
	                $("#guardianworkphone").addClass("error");
	                $("#guardianworkphone").parent().prev("td").addClass("bold");
	            }
	            else {
	                $("#guardianworkphone").removeClass("error");
	                $("#guardianfirstname").removeClass("error");
	                $("#guardianlastname").removeClass("error");
	                $("#guardianworkphone").parent().prev("td").removeClass("bold");
	            }
	        });
	        //Checks to see if a first name was entered for the guardian, and if so, adds the error class to the work phone number textboxes and changes the label to bold.
	        $("#guardianfirstname").change(function() {
	            if ($('#guardianlastname').val().length > 0 || $("#guardianfirstname").val().length > 0) {
	                if ($("#guardianlastname").val().length < 1) {
	                    $("#guardianlastname").addClass("error");
	                }
	                if ($("#guardianfirstname").val().length < 1) {
	                    $("#guardianfirstname").addClass("error");
	                }
	                $("#guardianworkphone").addClass("error");
	                $("#guardianfirstname").parent().prev("td").addClass("bold");
	                $("#guardianlastname").parent().prev("td").addClass("bold");
	                $("#guardianworkphone").parent().prev("td").addClass("bold");
	            }
	            else {
	                $("#guardianworkphone").removeClass("error");
	                $("#guardianfirstname").removeClass("error");
	                $("#guardianlastname").removeClass("error");
	                $("#guardianworkphone").parent().prev("td").removeClass("bold");
	            }
	        });

	        //creates father full name string and assigns it father field
	        $("#continuebtn").click(function() {
	            $("#father").val($("#fatherlastname").val() + ", " + $("#fatherfirstname").val());
	            $("#mother").val($("#motherlastname").val() + ", " + $("#motherfirstname").val());
	        });


	        //creates contacts full name strings and assigns it corresponding fields
	        //	        $("#submitbtn").click(function() {
	        //	            $("#emerg_contact_1").val($("#econtactln1").val() + ", " + $("#econtactfn1").val());
	        //	            $("#emerg_contact_2").val($("#econtactln2").val() + ", " + $("#econtactfn2").val());
	        //	            $("#emerg_contact_3").val($("#econtact3_ln").val() + ", " + $("#econtact3_fn").val());
	        //	        });

	        //Validates that either a mother or father has been entered
	        jQuery.validator.addMethod("parentInfo", function(value, element) {
	            return !($("#motherlastname").val().length < 1 && $("#fatherlastname").val().length < 1)
	        }, "You must fill out either Parent1/Mother or Parent2/Father fields."
            );

	        jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
	            phone_number = phone_number.replace(/\s+/g, "");
	            return this.optional(element) || phone_number.length > 9 &&
		        phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
	        }, "Please specify a valid phone number");

	        $("#demographicsForm").validate(
	        {
	            rules:
	            {
	                lastname: "required",
	                ethnicity: "required",
	                firstname: "required",
	                gender: "required",
	                dob:
	                {
	                    required: true,
	                    date: true
	                },
	                dobverification: "required",
	                primarylanguage: "required",
	                countryofbirth: "required",
	                cityofbirth: "required",
	                firstenrollment:
	                {
	                    date: true
	                },
	                motherlastname:
	                {
	                    required: function(element) {
	                        if (jQuery("#motherlastname").val().length > 0 || jQuery("#motherfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    },
	                    parentInfo: true
	                },
	                motherfirstname:
	                {
	                    required: function(element) {
	                        if (jQuery("#motherlastname").val().length > 0 || jQuery("#motherfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    }
	                },
	                motherhomephone:
	                {
	                    required: function(element) {
	                        if (jQuery("#motherlastname").val().length > 0 || jQuery("#motherfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    },
	                    phoneUS: true
	                },
	                //	                motherworkphone:
	                //	                {
	                //	                    phoneUS: true
	                //	                },
	                //	                motherworkphoneext:
	                //	                {
	                //	                    digits: true
	                //	                },
	                fatherlastname:
	                {
	                    required: function(element) {
	                        if (jQuery("#fatherlastname").val().length > 0 || jQuery("#fatherfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    }
	                },
	                fatherfirstname:
	                {
	                    required: function(element) {
	                        if (jQuery("#fatherlastname").val().length > 0 || jQuery("#fatherfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    }
	                },
	                fatherhomephone:
	                {
	                    required: function(element) {
	                        if (jQuery("#fatherlastname").val().length > 0 || jQuery("#fatherfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    },
	                    phoneUS: true
	                },
	                //	                fatherworkphone:
	                //	                {
	                //	                    phoneUS: true
	                //	                },
	                //	                fatherworkphoneext:
	                //	                {
	                //	                    digits: true
	                //	                },
	                guardianlastname:
	                {
	                    required: function(element) {
	                        if (jQuery("#guardianlastname").val().length > 0 || jQuery("#guardianfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    }
	                },
	                guardianfirstname:
	                {
	                    required: function(element) {
	                        if (jQuery("#guardianlastname").val().length > 0 || jQuery("#guardianfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    }
	                },
	                guardianworkphone:
	                {
	                    required: function(element) {
	                        if (jQuery("#guardianlastname").val().length > 0 || jQuery("#guardianfirstname").val().length > 0) {
	                            return true;
	                        }
	                        return false;
	                    },
	                    phoneUS: true
	                },
	                stateofbirth: "required",
	                homeaddress: "required",
	                city: "required",
	                state: "required",
	                zip: "required",
	                addressmov: "required",
	                mailingaddress: "required",
	                mailingcity: "required",
	                mailingstate: "required",
	                mailingzip: "required",
	                homephone:
	                {
	                    required: true,
	                    phoneUS: true
	                },
	                fatherhomephone: "phoneUS",
	                fatherworkphone: "phoneUS",
	                motherworkphone: "phoneUS",
	                motherhomephone: "phoneUS",
	                guardianhomephone: "phoneUS",
	                fathercellphone: "phoneUS",
	                mothercellphone: "phoneUS",
	                guardiancellphone: "phoneUS",
	                fatherworkphoneext: "digits",
	                motherworkphoneext: "digits",
	                guardianworkphoneext: "digits",
	                polio1: "date",
	                polio2: "date",
	                polio3: "date",
	                polio4: "date",
	                polio5: "date",
	                dtp1: "date",
	                dtp2: "date",
	                dtp3: "date",
	                dtp4: "date",
	                dtp5: "date",
	                dtpbooster: "date",
	                mmr1: "date",
	                mmr2: "date",
	                hib1: "date",
	                hib2: "date",
	                hib3: "date",
	                hib4: "date",
	                hepatitisb1: "date",
	                hepatitisb2: "date",
	                hepatitisb3: "date",
	                hepatitisa1: "date",
	                hepatitisa2: "date",
	                varicella1: "date",
	                varicella2: "date",
	                graduationyear:
	                {
	                    digits: true,
	                    rangelength: [4, 4]
	                },
	                yearofgraduation:
	                {
	                    digits: true,
	                    rangelength: [4, 4]
	                }

	            },
	            messages:
	            {
	                firstname: "Enter first name.",
	                ethnicity: "Select ethnicity.",
	                lastname: "Enter last name.",
	                gender: "Select gender.",
	                dobverification: "Select verification method.",
	                primarylanguage: "Select primary language.",
	                countryofbirth: "Select country of birth.",
	                cityofbirth: "Enter city of birth.",
	                stateofbirth: "Select state of birth.",
	                homeaddress: "Enter home address.",
	                city: "Enter city.",
	                state: "Select state.",
	                zip: "Enter zip.",
	                addressmov: "Select method of verification.",
	                mailingaddress: "Enter mailing address.",
	                mailingcity: "Enter city.",
	                mailingstate: "Select state.",
	                mailingzip: "Enter zip.",
	                motherlastname:
	                {
	                    required: "Enter mother's last name.",
	                    parentInfo: "You must enter information for at least one parent (Mother or Father)."
	                },
	                motherfirstname: "Enter mother's first name.",
	                fatherlastname: "Enter father's last name.",
	                fatherfirstname: "Enter father's first name.",
	                guardianlastname: "Enter legal guardian's last name.",
	                guardianfirstname: "Enter legal guardian's first name.",
	                dob:
	                {
	                    required: "Enter date of birth.",
	                    date: "Please enter a valid date."
	                },
	                dateofapplication:
	                {
	                    required: "Enter date of application",
	                    date: "Please enter a valid date."
	                },
	                enrollmentdate:
	                {
	                    required: "Enter enrollment date.",
	                    date: "Please enter a valid date."
	                },
	                motherhomephone:
	                {
	                    required: "Enter mother's home phone."
	                },
	                fatherhomephone:
	                {
	                    required: "Enter father's home phone."
	                },
	                guardianworkphone:
	                {
	                    required: "Enter guardian's work phone."
	                },
	                homephone: "Enter home phone.",
	                fatherworkphoneext: "Phone ext must be a digit.",
	                motherworkphoneext: "Phone ext must be a digit.",
	                guardianworkphoneext: "Phone ext must be a digit.",
	                graduationyear:
	                {
	                    digits: "Graduation year must be 4 digits.",
	                    rangelength: "Graduation year must be 4 digits"
	                },
	                yearofgraduation:
	                {
	                    digits: "YOG must be 4 digits",
	                    rangelength: "YOG must be 4 digits"
	                }
	            },
	            // the errorPlacement has to take the table layout into account
	            errorPlacement: function(error, element) {
	                if (element.is(":radio"))
	                    error.appendTo(element.parent().next().next());
	                else if (element.is(":checkbox"))
	                    error.appendTo(element.next());
	                else
	                    error.appendTo(element.parent());
	            },

	            // set this class to error-labels to indicate valid fields
	            success: function(label) {
	                // set &nbsp; as text for IE
	                label.html("&nbsp;").addClass("checked");
	            }
	        }
	        );
	    }
	    );


	    
	   