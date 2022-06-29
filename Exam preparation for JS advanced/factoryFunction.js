function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach((el) => {
      if (typeof el == "string") {
        const node = document.createTextNode(el);
        result.appendChild(node);
      } else {
        result.appendChild(el);
      }
    });

    return result;
  }

//   function el(type, content, attributes) {
//     const result = document.createElement(type);
 
//     if (attributes !== undefined) {
//       Object.assign(result, attributes);
//     }
 
//     if (Array.isArray(content)) {
//       content.forEach(append);
//     } else {
//       append(content);
//     }
 
//     function append(node) {
//       if (node === null) { node = ' '; }
//       if (typeof node === 'string' || typeof node === 'number') {
//         node = document.createTextNode(node);
//       }
//       result.appendChild(node);
//     }
//     return result;
//   }
// }