//variable arguments : restparameters

function selectCountryFromDropDown(...countryName)
{
    console.log("Select Country: ",countryName);
    console.log(countryName.length);

    for(let country of countryName)
    {
        console.log(country);
    }
}


selectCountryFromDropDown('India','UK','USA');


function fillDetails(name, ...details)
{
    console.log('checking the details for: ',name);

    for(let e of details)
    {
        console.log(e);
    }
}

fillDetails('pavan',101,'new jersey','Sec 10','USA');