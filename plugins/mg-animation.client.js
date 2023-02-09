// export default ({ app }, inject) => {
//   inject('mgAnimation', () => {
//     let counter = 0
//     const offset = window.scrollY + window.innerHeight * .60
//     const animBlocks = document.querySelectorAll('[data-anim]');
//     if(animBlocks.length > 0){
//       animBlocks.forEach(item => {
//         ++counter
//         if(item.dataset.parent === "1"){
//           if(offset > item.parentNode.offsetTop + item.offsetTop){
//             item.classList.add(`animate__${item.dataset.anim}`)
//             if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
//             if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
//           }
//         } else if(item.dataset.parent === "3"){
//           if(offset > item.parentNode.parentNode.parentNode.offsetTop + item.offsetTop){
//             item.classList.add(`animate__${item.dataset.anim}`)
//             if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
//             if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
//           }
//         } else {
//           if(offset > item.offsetTop){
//             item.classList.add(`animate__${item.dataset.anim}`)
//             if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
//             if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
//           } else if(item.nodeName === "rect" && offset > item.parentNode.parentNode.offsetTop){
//             item.classList.add(`animate__${item.dataset.anim}`)
//             if(item.dataset.delay) item.style.animationDelay = `${item.dataset.delay}ms`
//             if(item.dataset.duration) item.style.animationDuration = `${item.dataset.duration}ms`
//           }
//         }
//       })
//       console.log(counter)
//     }
//   })
// }


export default ({ app }, inject) => {
  inject('mgAnimation', () => {
    setTimeout(()=>{
      const offset = ( window.scrollY + window.innerHeight * .6 ).toFixed()
      const animBlocks = document.querySelectorAll('[data-anim]')
      const animation = el => {
        el.classList.add(`animate__${el.dataset.anim}`)
        if(el.dataset.delay) el.style.animationDelay = `${el.dataset.delay}ms`
        if(el.dataset.duration) el.style.animationDuration = `${el.dataset.duration}ms`
        el.removeAttribute('data-anim')
      }
      if(animBlocks.length > 0){
        animBlocks.forEach(item => {
          let itemOffset = item
          for (let i = 0; i < Number(item.dataset.parent); i++) {
            itemOffset = itemOffset.parentNode
          }
          if(offset > itemOffset.offsetTop) animation(item)
        })
      }
    }, 50)
  })
}