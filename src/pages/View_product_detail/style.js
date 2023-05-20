export const QuantityButton = styled.span`
  display: flex;
  align-items: center;
  
  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-color: #f1f1f1;
    color: #333;
    font-size: 18px;
    
    cursor: pointer;
    outline: none;
  }
  
  span {
    margin: 0 10px;
    font-size: 13px;
    
  }
`;

// function decreaseQuantity() {
//   var quantityInput = document.getElementById("quantityInput");
//   var currentValue = parseInt(quantityInput.value);

//   if (currentValue > 1) {
//     quantityInput.value = currentValue - 1;
//   }
// }

// function increaseQuantity() {
//   var quantityInput = document.getElementById("quantityInput");
//   var currentValue = parseInt(quantityInput.value);

//   quantityInput.value = currentValue + 1;
// }
