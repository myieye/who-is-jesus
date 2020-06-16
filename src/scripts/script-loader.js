loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.onload = resolve;
        script.onerror = reject;
        script.addEventListener('load', resolve);
        script.addEventListener('error', reject);
        document.head.appendChild(script);
    });
};
