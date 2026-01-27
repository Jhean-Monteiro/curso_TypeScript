// tipo não recomendado, pois desativa a verificação de tipos do TypeScript

function showMessage(message: any): any {
  return message;
}

console.log(showMessage([1, 2, 3]));
