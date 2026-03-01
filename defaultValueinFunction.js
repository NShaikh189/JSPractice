

function login(username, password, role = 'admin', status='active')
{
    console.log(username,password,role,status);
}


login('abc@gmail.com','abc123');//abc@gmail.com abc123 admin active
login('abc@gmail.com','abc123','Seller');//abc@gmail.com abc123 Seller active
login('abc@gmail.com','abc123', null,'Seller');//abc@gmail.com abc123 null Seller
login('abc@gmail.com','abc123',undefined,'Seller');//abc@gmail.com abc123 admin Seller