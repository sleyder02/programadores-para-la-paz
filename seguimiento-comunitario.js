let semana = 1
const SemanaDeSeguimiento = 4
let propuestasAtendidas = 0

console.log("Seguimiento comunitario")

while (semana <= SemanaDeSeguimiento) {
  console.log("semana de seguimiento número:", semana)
  propuestasAtendidas = propuestasAtendidas + 2
  console.log("Propuestas atendidas hasta ahora:", propuestasAtendidas) 
  semana = semana + 1 
}

console.log("seguimiento comunitario finalizado.")
console.log("Total de propuestas atendidas:", propuestasAtendidas)