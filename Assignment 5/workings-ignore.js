// const p = Promise.resolve('resolved');

// p.then(value => console.log(value));

// const p = Promise.reject(new Error('Oops!'));

// p.catch(value => console.log(value));

// const p = Promise.resolve({ id: 1, name: 'Alice' });

// p.then (value => console.log(value))

// const p = Promise.resolve({ id: 1, name: 'Alice' });

// p.then (value => console.log(value.name))

// const p = Promise.reject(new Error('Invalid id'));

// p.catch (value => console.log(value))

// const p = Promise.resolve(42);
// p.finally (value => console.log('Promise Settled'))

// const p = Promise.resolve(21);

// p.then (value => console.log (value * 2))

// const p = Promise.reject(new Error('Invalid value'));

// p.catch (value => console.log (0))

// const promises = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
//   ];


// Promise.all (promises)
//     .then (values => console.log(values))
//     .catch (error => console.log ('error'))

// const promises = [
//     new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
//     new Promise(resolve => setTimeout(() => resolve('b'), 50)),
//     new Promise(resolve => setTimeout(() => resolve('c'), 150))
//   ];

// Promise.race (promises)
// .then(value => console.log (value))

// const p = Promise.resolve('World');

// p.then(value => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('Hello ' + value);
//       }, 1000); 
//     });
//   })

//   .then(final => {
//     console.log(final);})