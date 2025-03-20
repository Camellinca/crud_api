export const useStringCount = (id: string) => {
    let div = document.getElementById(id);
    let span = document.createElement('span');
    if (div) {
        let text = div.textContent;
        span.textContent = text;
        div.innerHTML = '';
        div.appendChild(span);
    }
    function calcRowCount() {
        return span.getClientRects().length;
    }
    return calcRowCount;
};
