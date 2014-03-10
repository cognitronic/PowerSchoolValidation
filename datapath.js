/// <reference path="web_root/scripts/jquery.maskedinput-1.1.4.js" />
/// <reference path="web_root/scripts/jquery-1.2.6.js" />
/// <reference path="web_root/scripts/jquery-1.2.6-vsdoc.js" />
/// <reference path="jquery.selectboxes.js" />


function setLastFirst() {
    $("#lastfirst").val($("#lastname").val() + ", " + $("#firstname").val());
    alert($("#lastfirst").val());
}

function setMotherLastFirst() {
    $("#mother").val($("#motherlastname").val() + ", " + $("#motherfirstname").val());
    alert($("#mother").val());
}

function setFatherLastFirst() {
    $("#father").val($("#fatherlastname").val() + ", " + $("#fatherfirstname").val());
}


$(document).ready(
        function() {

            //default the fte to the first option
            var fte = document.getElementById("fteid");
            if (fte) {
                if (fte.selectedIndex != null) {
                    fte.selectedIndex = 1;
                }
            }
            //sets the style of the grid to alternating colors
            $(".maincontent tr:even").css("background-color", "#EDF3FE");
            $(".maincontent#waitlist").addClass("waitlist");
            //Masked input rules
            $("#dob").mask("99/99/9999");
            $("#enrollmentdate").mask("99/99/9999");
            $("#dateofapplication").mask("99/99/9999");
            $("#zip").mask("99999");
            $("#motherworkphone").mask("(999)999-9999");
            $("#motherworkphoneext").mask("99999");
            $("#motherhomephone").mask("(999)999-9999");
            $("#fatherworkphone").mask("(999)999-9999");
            $("#fatherworkphoneext").mask("99999");
            $("#fatherhomephone").mask("(999)999-9999");
            $("#guardianworkphone").mask("(999)999-9999");
            $("#ssn").mask("999-99-9999");
            $("#lastname").change(function() {
                $("#lastfirst").val($("#lastname").val() + ', ' + $("#firstname").val());
            });


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
                    //$("#motherlastfirst").val($("#motherlastname").val() + ', ' + $("#motherfirstname").val());
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
            //Validates that either a mother or father has been entered
            jQuery.validator.addMethod("parentInfo", function(value, element) {
                return !($("#motherlastname").val().length < 1 && $("#fatherlastname").val().length < 1)
            }, "You must fill out either Parent1/Mother or Parent2/Father fields."
            );
            //Main validate function
            jQuery("#newstudentForm").validate(
	        {
	            rules:
	            {
	                lastname: "required",
	                ethnicity: "required",
	                firstname: "required",
	                gender: "required",
	                currentgrade: "required",
	                gradeapplyingfor: "required",
	                currentschool: "required",
	                currentschooldistrict: "required",
	                street: "required",
	                city: "required",
	                state: "required",
	                zip: "required",
	                alertguardianexpires: "date",
	                alertotherexpires: "date",
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
	                    }
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
	                    }
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
	                    }
	                },
	                //	                guardianworkphoneext:
	                //	                {
	                //	                    digits: true
	                //	                },
	                campusappliedto: "required",
	                street: "required",
	                dob:
	                {
	                    required: true,
	                    date: true
	                },
	                dateofapplication:
	                {
	                    required: true,
	                    date: true
	                },
	                enrollmentdate:
	                {
	                    required: true,
	                    date: true
	                },
	                gradelevel: "required",
	                entrycode: "required",
	                districtofresidence: "required",
	                waitlistregion: "required",
	                feeexemptionstatus: "required",
	                applicationprioritystatus: "required",
	                dobverification: "required",
	                primarylanguage: "required",
	                countryofbirth: "required",
	                cityofbirth: "required",
	                stateofbirth: "required"
	            },
	            messages:
	            {
	                firstname: "Enter first name.",
	                ethnicity: "Select ethnicity.",
	                lastname: "Enter last name.",
	                gender: "Select gender.",
	                currentgrade: "Enter current grade.",
	                gradeapplyingfor: "Enter grade applying for.",
	                currentschool: "Enter current school.",
	                currentschooldistrict: "Enter current school district.",
	                street: "Enter street.",
	                city: "Enter city.",
	                state: "Select state.",
	                zip: "Enter zip.",
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
	                campusappliedto: "Select campus applied to.",
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
	                gradelevel: "Select grade level.",
	                entrycode: "Select entry code.",
	                districtofresidence: "Select district of residence.",
	                waitlistregion: "Select waitlist region.",
	                feeexemptionstatus: "Select fee exemption status.",
	                applicationprioritystatus: "Select application priority status.",
	                dobverification: "Select verification method.",
	                primarylanguage: "Select primary language.",
	                countryofbirth: "Select country of birth.",
	                cityofbirth: "Enter city of birth.",
	                stateofbirth: "Select state of birth."
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

            // The following commented code gives a watermark effect on a textbox.
            //	        $(".defaultText").focus(function(srcc) {
            //	            if ($(this).val() == $(this)[0].title) {
            //	                $(this).removeClass("defaultTextActive");
            //	                $(this).val("");
            //	            }
            //	        });

            //	        $(".defaultText").blur(function() {
            //	            if ($(this).val() == "") {
            //	                $(this).addClass("defaultTextActive");
            //	                $(this).val($(this)[0].title);
            //	            }
            //	        });

            //	        $(".defaultText").blur();
        }
	    );

        function updatecheckbox() {
            var putnamehere = document.getElementById("insertlastnamehere");
            if (putnamehere !== null) {
                var lastname = document.getElementById('last').value;
                var newval = "";
                if (lastname !== "") {
                    newval = "(" + lastname + ")";
                }

                putnamehere.innerHTML = newval;
            }
        }

        function setLastFirst() {
            document.getElementById("lastfirst").value = document.getElementById("lastname").Text + ", " + document.getElementById("firstname").text;
        }

        function setMotherLastFirst() {
            document.getElementById("motherlastfirst").value = document.getElementById("lastname").Text + ", " + document.getElementById("firstname").text;
        }

        function setFatherLastFirst() {
            document.getElementById("fatherlastfirst").value = document.getElementById("fatherlastname").Text + ", " + document.getElementById("fatherfirstname").text;
        }