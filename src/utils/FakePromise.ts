export default function FakePromise(delay = 400, force_error = false, error_options = {}) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (force_error) return reject(error_options);

      resolve();
    }, delay);
  });
}
