addColors();

function addColors() {
    for (const item of items) {

        let bl = document.getElementById(`${item.id}bl`);
        let gr = document.getElementById(`${item.id}gr`);
        let br = document.getElementById(`${item.id}br`);
        let blu = document.getElementById(`${item.id}blu`);
        let mid = document.querySelector(`#${item.id}mid`);

        bl.addEventListener('click', () => {
            bl.style.border = "3px solid #fff";
            blu.style.border = "3px solid #008aff";
            br.style.border = "3px solid brown";
            gr.style.border = "3px solid green";
            mid.style.borderTop = "5px solid #000";
            mid.style.borderBottom = "5px solid #000";

        });

        blu.addEventListener('click', () => {
            blu.style.border = "3px solid #fff";
            bl.style.border = "3px solid #000";
            br.style.border = "3px solid brown";
            gr.style.border = "3px solid green";
            mid.style.borderTop = "5px solid #008aff";
            mid.style.borderBottom = "5px solid #008aff";

        });

        br.addEventListener('click', () => {
            br.style.border = "3px solid #fff";
            gr.style.border = "3px solid green";
            blu.style.border = "3px solid #008aff";
            gr.style.border = "3px solid green";
            mid.style.borderTop = "5px solid brown";
            mid.style.borderBottom = "5px solid brown";
        });

        gr.addEventListener('click', () => {
            gr.style.border = "3px solid #fff";
            blu.style.border = "3px solid #008aff";
            bl.style.border = "3px solid #000";
            br.style.border = "3px solid brown";
            mid.style.borderTop = "5px solid green";
            mid.style.borderBottom = "5px solid green";
        });
    }
}
//Victor.Aremu