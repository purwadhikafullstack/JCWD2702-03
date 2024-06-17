// Function to set the expiration time for payment proof upload
export const setPaymentProofUploadDeadline = () => {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  
  return date;
};

// Function to check if the current time has passed the deadline
export const isPaymentProofUploadExpired = (deadline:any) => {
  const now = new Date();
  return now > deadline;
};

// Example usage
const deadline = setPaymentProofUploadDeadline();
console.log("Payment proof upload deadline:", deadline);

// Later, to check if the deadline has passed
if (isPaymentProofUploadExpired(deadline)) {
  console.log("The deadline for uploading the payment proof has passed. Order will be canceled.");
} else {
  console.log("There is still time to upload the payment proof.");
}
