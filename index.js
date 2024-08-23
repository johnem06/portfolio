const content = document.querySelector('.body-text')
const originalContent = content.innerHTML;
document.querySelector('#button1').style.color = 'rgb(111, 111, 215)';

function colorChange(){
        document.querySelector('#button1').style.color = '';
        document.querySelector('#button2').style.color = '';
        document.querySelector('#button3').style.color = '';
}

document.querySelector('#button1').addEventListener('click', () => {
    colorChange();
    document.querySelector('#button1').style.color = 'rgb(111, 111, 215)';
    content.innerHTML = originalContent;
})

document.querySelector('#button2').addEventListener('click',()=>{
    content.innerHTML="";
    colorChange();
    document.querySelector('#button2').style.color = 'rgb(111, 111, 215)';
    const element = document.createElement('h1');
    element.textContent='About Me';
    content.appendChild(element)
    const element2= document.createElement('p');
    element2.setAttribute('class', 'about-class')
    element2.textContent = 'I am in my second year in Kwara State University, studying Aeronautical and Astronautical Engineering. My journey began with a curiosity about how websites work, which quickly evolved into a love for blending design and technology. I thrive on the challenge of turning complex ideas into seamless, interactive web solutions that not only look great but provide real value to users. I’m committed to continuous learning and constantly exploring new technologies, frameworks, and design trends to enhance my skills and contribute to meaningful projects. '
    content.appendChild(element2)
})

const button4 = document.querySelector('#button4')
button4.addEventListener('click', () => {
    // const element = document.createElement('a');
    // element.setAttribute('href', 'johnemunemu@gmail.com');
    // content.appendChild(element)
    const element = document.createElement('a');
    element.setAttribute('href', 'mailto:johnemunemu@gmail.com');
    content.appendChild(element);
    element.click();
})

// document.querySelector('#button3').addEventListener('click', ()=>{
//     const element = document.createElement('a');
//     element.setAttribute('href', 'about:blank');
//     element.setAttribute('target', '_blank');
//     document.body.appendChild(element);
//     element.click()
// })
// document.querySelector('#button3').addEventListener('click', () => {
//     const element = document.createElement('a');
//     element.setAttribute('href', 'about:blank');
//     element.setAttribute('target', '_blank');
//     document.body.appendChild(element);
//     element.click();
    

//     const newWindow = window.open('', element.getAttribute('target'));
    
//     newWindow.document.write(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>New Page</title>
//             <style>
//                 body {
//                     background-color: rgb(52, 52, 181);
//                 }
//                 h1 {
//                     color: rgb(154, 154, 231);
//                 }
//                 a{
//                     color: navy;
//                 }    
//             </style>
//         </head>
//         <body>
//             <h1>CONTACT ME ON</h1>
//             <a href=''>08068282403</a>
//         </body>
//         </html>
//     `);
// });

document.querySelector('#button3').addEventListener('click', () => {
    // Open a new window or tab
    const newWindow = window.open('', '_blank');
    
    // Write content and CSS to the new page
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Page</title>
            <style>
                body {
                    background-color: rgb(52, 52, 181);
                }
                h1 {
                    color: rgb(154, 154, 231);
                }
                a{
                color:navy;
                }
            </style>
        </head>
        <body>
            <h1>CONTACT ME ON</h1>
            <a href="https://wa.me/2348068282403">+2348068282403</a>
        </body>
        </html>
    `);
});


