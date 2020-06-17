
//encriptar contraseña
/* el esquema user, posee las funciones de save y se le pasa una funcion que tiene por parametro la siguiente,
 al llamar bcrypt, se generan unos salts me genera un numero de cifrados, entre mayor el numero mas tiempo tardara 
 el proceso por defecto son 10 y esto nos devuelve una promesa donde dependiendo de si se genera la variable
 salts nos llamara un hash el cual es el cifrado completo de la contraseña y por ultimo se le pasa la password
 y el numeor de salts lo cual nos devolvera otra promesa y si se cumple se reasigna el valor del password en 
 el objeto y sigue con la siguiente funcion, de no ser exitosa la encriptacion, nos genera un error */

  user.pre("save", function (next) {
    bcrypt
      .genSalt(10)
      .then((salts) => {
        bcrypt
          .hash(this.password, salts)
          .then((hash) => {
            this.password = hash;
            next();
          })
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

