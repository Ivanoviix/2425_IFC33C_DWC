/* 
Ejercicio 7: Simulación de pagos con una promesa
Enunciado:
Crea una aplicación web que simule el procesamiento de pagos con tarjeta.
1. El usuario debe ingresar un número de tarjeta, el CVV y la cantidad a pagar, y hacer
clic en "Pagar".
2. Valida los datos ingresados (por ejemplo, que no estén vacíos y tengan el formato
correcto).
3. Usa una promesa para simular el tiempo de procesamiento (2 segundos).
4. Si la promesa se resuelve, muestra "Pago realizado con éxito". Si se rechaza,
muestra "Error al procesar el pago".
Requisitos:
● Los errores deben mostrarse en rojo.
● Valida los campos antes de enviar los datos.
 */


document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    promesa();
}

function base() {
    const form = document.createElement('form');
    const cardNumberLabel = document.createElement('label');
    cardNumberLabel.textContent = 'Número de Tarjeta: ';
    const cardNumberInput = document.createElement('input');
    cardNumberInput.type = 'text';
    cardNumberInput.id = 'cardNumber';
    form.appendChild(cardNumberLabel);
    form.appendChild(cardNumberInput);
    form.appendChild(document.createElement('br'));

    const cvvLabel = document.createElement('label');
    cvvLabel.textContent = 'CVV: ';
    const cvvInput = document.createElement('input');
    cvvInput.type = 'text';
    cvvInput.id = 'cvv';
    form.appendChild(cvvLabel);
    form.appendChild(cvvInput);
    form.appendChild(document.createElement('br'));

    const amountLabel = document.createElement('label');
    amountLabel.textContent = 'Cantidad a Pagar: ';
    const amountInput = document.createElement('input');
    amountInput.type = 'text';
    amountInput.id = 'amount';
    form.appendChild(amountLabel);
    form.appendChild(amountInput);
    form.appendChild(document.createElement('br'));

    const payButton = document.createElement('button');
    payButton.textContent = 'Pagar';
    payButton.type = 'button';
    payButton.id = 'payButton';
    form.appendChild(payButton);

    const p = document.createElement('p');
    form.appendChild(p);

    document.body.appendChild(form);
}

function promesa() {

    base()
    let cardNumberInput = document.getElementById('cardNumber');
    let cvvInput = document.getElementById('cvv');
    let input = document.getElementById('amount');
    let boton = document.getElementById('payButton');
    let p = document.getElementsByTagName('p')[0];
    console.log(cardNumberInput, cvvInput, input)
    boton.addEventListener("click", () => {
        p.innerText = "";
        let promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (cardNumberInput.value === "" || cvvInput.value === "" || input.value === "") {
                    reject("Campo vacío.")
                } else {// for (cuenta of cuentas) PODRIA UTILIZARLO TAMBIEN
                    const cuentaValida = cuentas.find(cuenta => // Buscamos en el json si los datos introducidos son los correctos.
                        cardNumberInput.value === cuenta.numeroTarjeta && // Si no lo hago asi, no encuentra el usuario
                        cvvInput.value === cuenta.cvv 
                    );
                    if (!cuentaValida) {
                        reject("Datos incorrectos, error al procesar el pago.")
                    } else if (parseInt(input.value) <= 0 ){
                        reject("No puedes ingresar numeros negativos")
                    }
                    resolve(`Pago realizado con exito. Ha ingresado ${input.value}€.`)

                }
            }, 2000);
        });
        promesa.then((resultado) => {
            p.innerText = resultado;
            p.style.color = "green";
        }).catch((error) => {
            p.innerText = error;
            p.style.color = "red";
        });
    });
}


const cuentas = [
    {
        numeroTarjeta: "1234567812345678",
        cvv: "123",
    },
    {
        numeroTarjeta: "8765432187654321",
        cvv: "456",
    },
    {
        numeroTarjeta: "1122334455667788",
        cvv: "789",
    },
    {
        numeroTarjeta: "9988776655443322",
        cvv: "012",
    }
];






/* 
    const cuentaValida = cuentas.find(cuenta => 
        cuenta.numeroTarjeta === cardNumberInput && 
        cuenta.cvv === cvvInput && 
        cuenta.cantidadPagar == amountInput
    );

    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!cuentaValida) {
                reject("Error al procesar el pago.");
            } else {
                resolve("Pago realizado con éxito.");
            }
        }, 2000);
    });
 */