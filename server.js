const express = require("express");

const app = express();

const port = 5000;

// app.get('/api/cards', (req, res) => {
//     const cards = [
//         {
//             id: 1,
//             topic: "IEEE",
//             description: "IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
//             buttontxt : "Learn more",
//             link: "https://www.ieee.org/about/index.html"
//         },
//         {
//             id: 2,
//             topic: "Student Branch",
//             description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio cumque eum provident quam quibusdam officiis eligendi, numquam commodi beatae distinctio, reprehenderit consequatur autem dolorem libero sit, qui impedit dignissimos.",
//             buttontxt: "View Details",
//             link : "https://students.ieee.org/student-branches-introduction/"
//         }
//     ];
//
//     res.json(cards);
// })

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
});
