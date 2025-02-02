# Ruuf Challenge

Hola, Pedro! Estuvo re bueno el desafío. Puse lo mejor de mi.

Si tienes NPM instalado, puedes correr los tests con `npm run test`. Algunos detalles:

- `/src/solutions.ts` encontrarás la implementación de las funciones.
- `/src/solutions.test.ts` encontrarás los tests.

Cualquier pregunta me puedes [escribir un correo](mailto:os.carvajalmora@gmail.com) :)

## Algunas notas de mi proceso de trabajo

### Entendiendo el problema

1. Entender como calcular cuantos rectángulos pequeños (AKA paneles) caben en el rectángulo mayor (AKA techo). Lo más sencillo, dividir base de techo por base de panel. Lo mismo para la altura.
2. El punto anterior me da solo los paneles máximos con "orientación normal". Con un poco de investigación, me di cuenta que la representación matemática correcta para la orientación "normal" sería "AxB" y, para los paneles rotados sería "BxA".

### Decantando el problema

1. Con eso en mente, puedo calcular cuántos paneles con orientación "AxB" y "BxA" rellenan el techo pero aparece un problema: me quedan espacios sin cubrir y que pudiesen ser cubiertos.
   2... Momento eureka. Comitearé mi trabajo y revisaré otro approach.
