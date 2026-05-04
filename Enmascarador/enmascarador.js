function maskEmail(email) {
  const atIndex = email.indexOf("@");
  
  const username = email.slice(0, atIndex);

  const domain = email.slice(atIndex); 
  
  const firstChar = username[0];

  const lastChar = username[username.length - 1];
  
  const asterisks = "*".repeat(username.length - 2);
  
  return firstChar + asterisks + lastChar + domain;
}

const email = "thomas.jerez@liverpoolfc.com";

console.log(maskEmail(email)); 
