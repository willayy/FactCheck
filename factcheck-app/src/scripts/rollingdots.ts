export async function rollingDots(text: string, setter: (value: string) => void) {
    const dots = ['.', '..', '...'];
    let i = 0;
    return setInterval(() => {
        setter(text + dots[i]);
        i = (i + 1) % dots.length;
    }, 500);
}