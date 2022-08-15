password_pattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
email_pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
name_pattern = /^[A-Za-z]+$/
const tel_codes = {
    "BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "+1-246",
    "WF": "681", "BL": "590", "BM": "+1-441", "BN": "673", "BO": "591", "BH": "973", "BI": "257", "BJ": "229", "BT": "975", "JM": "+1-876", "BV": "", "BW": "267", "WS": "685", "BQ": "599", "BR": "55",
    "BS": "+1-242", "JE": "+44-1534", "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381",
    "TL": "670", "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245",
    "GU": "+1-671", "GT": "502", "GS": "", "GR": "30", "GQ": "240", "GP": "590", "JP": "81",
    "GY": "592", "GG": "+44-1481", "GF": "594", "GE": "995", "GD": "+1-473", "GB": "44",
    "GA": "241", "SV": "503", "GN": "224", "GM": "220", "GL": "299", "GI": "350",
    "GH": "233", "OM": "968", "TN": "216", "JO": "962", "HR": "385", "HT": "509",
    "HU": "36", "HK": "852", "HN": "504", "HM": " ", "VE": "58", "PR": "+1-787 and 1-939",
    "PS": "970", "PW": "680", "PT": "351", "SJ": "47", "PY": "595", "IQ": "964",
    "PA": "507", "PF": "689", "PG": "675", "PE": "51", "PK": "92", "PH": "63",
    "PN": "870", "PL": "48", "PM": "508", "ZM": "260", "EH": "212", "EE": "372",
    "EG": "20", "ZA": "27", "EC": "593", "IT": "39", "VN": "84", "SB": "677",
    "ET": "251", "SO": "252", "ZW": "263", "SA": "966", "ES": "34", "ER": "291",
    "ME": "382", "MD": "373", "MG": "261", "MF": "590", "MA": "212", "MC": "377",
    "UZ": "998", "MM": "95", "ML": "223", "MO": "853", "MN": "976", "MH": "692",
    "MK": "389", "MU": "230", "MT": "356", "MW": "265", "MV": "960", "MQ": "596",
    "MP": "+1-670", "MS": "+1-664", "MR": "222", "IM": "+44-1624", "UG": "256",
    "TZ": "255", "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246",
    "SH": "290", "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298",
    "NI": "505", "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687",
    "NE": "227", "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674",
    "NU": "683", "CK": "682", "XK": "", "CI": "225", "CH": "41", "CO": "57",
    "CN": "86", "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242",
    "CF": "236", "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506",
    "CW": "599", "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599",
    "KG": "996", "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855",
    "KN": "+1-869", "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386",
    "KP": "850", "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248",
    "KZ": "7", "KY": "+1-345", "SG": "65", "SE": "46", "SD": "249",
    "DO": "+1-809 and 1-829", "DM": "+1-767", "DJ": "253", "DK": "45",
    "VG": "+1-284", "DE": "49", "YE": "967", "DZ": "213", "US": "1",
    "UY": "598", "YT": "262", "UM": "1", "LB": "961", "LC": "+1-758",
    "LA": "856", "TV": "688", "TW": "886", "TT": "+1-868", "TR": "90",
    "LK": "94", "LI": "423", "LV": "371", "TO": "676", "LT": "370", "LU": "352",
    "LR": "231", "LS": "266", "TH": "66", "TF": "", "TG": "228", "TD": "235",
    "TC": "+1-649", "LY": "218", "VA": "379", "VC": "+1-784", "AE": "971",
    "AD": "376", "AG": "+1-268", "AF": "93", "AI": "+1-264", "VI": "+1-340",
    "IS": "354", "IR": "98", "AM": "374", "AL": "355", "AO": "244", "AQ": "",
    "AS": "+1-684", "AR": "54", "AU": "61", "AT": "43", "AW": "297", "IN": "91",
    "AX": "+358-18", "AZ": "994", "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258"
}

function phonecode() {
    const country = document.getElementById("ddlcountry-career").value;
    document.getElementById("txtcareerphonecode").value = "+" + tel_codes[country]
}

function displayRadioValue(element,msg) {
    var ele = document.getElementsByName(element);
   
    let lst = []
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
        lst.push(ele[i].value)
        }
    }
    if(lst.length==0)
    {
        alert(msg)
        return false
    }
    return lst
}

function validator(msg,value,pattern)
{
    if (pattern.test(value))
    {
      return true
    }
      alert(msg)
      return false
}

function confirmation(msg,value,cvalue){
    if(value===cvalue)
    {
        return true
    }
    alert(msg)
    return false
}
function dobvalidator(element)
{   var date = document.getElementById(element).value.split("-")[0]
    var now = new Date()
    if(date !=null && (now.getFullYear() - date >=18 && now.getFullYear() - date <= 120 ) )
    {
        return true
    }
    alert("Invaild age You must be 18-120 !")
    return false
}

function signup_handler() {
    displayform = document.getElementById("displayform")

    var image = document.getElementById("formFile").value
    document.getElementById("file-col").src = image
      var f_name = document.getElementById("form-fname").value
  
    if(!validator("First Name Must contains characters only Alphabets not Numeric Values or Not Empty",f_name,name_pattern))
    {
        document.getElementById('form-fname').focus();
        return
    }
    document.getElementById("fn-col").innerHTML = f_name

    
    
    var l_name = document.getElementById("form-lname").value
    if(!validator("Last Name Must contains only Alphabets not Numeric Values ",l_name,name_pattern))
    {
        document.getElementById('form-lname').focus();
        return
    }
    document.getElementById("ln-col").innerHTML = l_name

    var email = document.getElementById("form-email").value
    if(!validator("Email is invaild",email,email_pattern))
    {
        document.getElementById('form-email').focus();
        return
    }
    document.getElementById("email-col").innerHTML = email
    if(!confirmation("Email doesn't match Please Check it",email,document.getElementById("form-cemail").value)){
        document.getElementById('form-cemail').focus();
        return
    }
    var password = document.getElementById("form-password").value
    if(!validator("Password Must contain 1 Upper and Lower case Letter and numeric and length must 8-32 character",password,password_pattern))
    {
        document.getElementById('form-password').focus();
        return
    }
    document.getElementById("pass-col").innerHTML = password
    if(!confirmation("Password doesn't match Please Check it",password,document.getElementById("form-cpassword").value)){
        document.getElementById('form-cpassword').focus();
        return
    }

    var country = document.getElementById("ddlcountry-career")
    country=country.options[country.selectedIndex].text
    document.getElementById("country-col").innerHTML = country

    var phonecode = document.getElementById("txtcareerphonecode").value

    var phone = document.getElementById("form-phoneno").value
    document.getElementById("phone-col").innerHTML = phonecode + phone

    if(displayRadioValue("Gender-career","Select Gender")==false)
    {

        return
    }
    document.getElementById("gender-col").innerHTML = displayRadioValue("Gender-career"," ")

    var dob = document.getElementById("form-dob").value
    if(!dobvalidator("form-dob"))
    {
        document.getElementById('form-dob').focus();
        return

    }
    document.getElementById("dob-col").innerHTML = dob

    
    if(displayRadioValue("subject","Select Atleast One Subject")==false)
    {

        return
    }
   
    document.getElementById("subjects-col").innerHTML = displayRadioValue("subject"," ")

    var message = document.getElementById("form-message").value
    document.getElementById("message-col").innerHTML = message
    $('#mymodal').modal('hide');
    displayform.style.visibility = 'visible'


}
