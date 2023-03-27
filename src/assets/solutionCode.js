export const data = {
  1: `// Функція обчислення інтеграла методом Сімпсона на відрізку [a, b]
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
console.log(erf(t)); // виводить значення функції помилок для заданного t з точністю eps
//0.34135548785664915
`,
  2: `// Функція обчислення інтеграла методом Сімпсона на відрізку [a, b]
  function simpson(f, a, b) {
    const h = (b - a) / 2;
    return ((f(a) + 4 * f(a + h) + f(b)) * h) / 3;
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
  // функція щільності нормального розподілу
  function erf(x, eps = 1e-3) {
    const f = (x) => Math.exp(-(x ** 2)); // / 2
    return (2 / Math.sqrt(Math.PI)) * integrate(f, 0, x, 0.001);
  }
  
  export function findCriticalValue(a) {
    if (a <= 0 || a >= 1) {
      throw new Error("Рівень значущості має бути більше 0 та менше 1");
    }
    // обчислюємо надійність
    const P = 1 - a;
    // обчислюємо критичне значення
    let t_cr = null;
    // метод половинного поділу
    let lower = -10;
    let upper = 10;
    while (Math.abs(upper - lower) > 0.000001) {
      const mid = (lower + upper) / 2;
      const F = 0.5 * (1 + erf(mid / Math.sqrt(2)));
      if (F < P) {
        lower = mid;
      } else {
        upper = mid;
        t_cr = mid;
      }
    }
    // повертаємо критичне значення
    return t_cr;
  }
`,
};
