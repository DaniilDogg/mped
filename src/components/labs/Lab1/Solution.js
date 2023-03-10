import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const code = `// Функція обчислення інтеграла методом Сімпсона на відрізку [a, b]
function simpson(f, a, b) {
  const h = (b - a) / 2;
  return (f(a) + 4 * f(a + h) + f(b)) * h / 3;
}

// Функція обчислення інтеграла функції f на відрізку [a, b] з точністю eps
function integrate(f, a, b, eps) {
  let n = 2; // початкове число інтервалів
  let prevIntegral = 0; // попереднє значення інтеграла
  let integral = simpson(f, a, b); // поточне значення інтеграла
  // Повторюємо інтегрування з подвоєнням числа інтервалів до досягнення заданої точності
  while (Math.abs(integral - prevIntegral) > eps) {
    prevIntegral = integral;
    integral = 0;
    const h = (b - a) / n; // довжина інтервалу
    // Обчислюємо інтеграл на кожному інтервалі та підсумовуємо
    for (let i = 0; i < n; i++) {
      const x1 = a + i * h; // початок інтервалу
      const x2 = a + (i + 1) * h; // кінець інтервалу
      integral += simpson(f, x1, x2);
    }
    n *= 2; // подвоюємо число інтервалів для наступної ітерації
  }
  return integral;
}

// Функція обчислення функції помилок у точці t з точністю eps
function erf(t, eps = 1e-3) {
  const f = x => Math.exp(-(x ** 2) / 2); // функція щільності нормального розподілу
  const integral = integrate(f, 0, t, eps); // обчислюємо інтеграл функції щільності на відрізку [0, t]
  return (1 / Math.sqrt(2 * Math.PI)) * integral; // обчислюємо значення функції помилок
}

// Приклад використання
const t = 1;
console.log(erf(t)); // виводить значення функції помилок у точці t з точністю eps`;

export default function Solution() {
  return (
      <SyntaxHighlighter children={code} language="javascript" style={dracula} />
  );
}