/**
 * Debounces a function call, see http://demo.nimius.net/debounce_throttle/ for explanation of debounce vs throttle.
 * @param debounceTime How many milliseconds to debounce for.
 * @param leading Fire function on before the dealy instead of after the delay.
 */
export function Debounce(debounceTime: number = 500){
    return function(_target: any, _key: string, descriptor: PropertyDescriptor){

        let originalMethod = descriptor.value;
        let timer = null;

        descriptor.value = function(...args: any[]){
            clearTimeout(timer);
            return new Promise(resolve => {
                timer = setTimeout(() => {
                    resolve(originalMethod.apply(this, args));
                }, debounceTime);
            })

        }
        
    }
}